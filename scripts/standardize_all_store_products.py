import os
import json
import urllib.request
from PIL import Image, ImageFilter, ImageDraw, ImageOps
import math

PRODUCTS_JSON = os.path.join("src", "data", "products.json")
PRODUCTS_TS = os.path.join("src", "data", "products.ts")
PUBLIC_DIR = os.path.join("public")
PRODUCTS_DIR = os.path.join(PUBLIC_DIR, "products")
STATUES_DIR = os.path.join(PUBLIC_DIR, "statues")

os.makedirs(PRODUCTS_DIR, exist_ok=True)
os.makedirs(STATUES_DIR, exist_ok=True)

def standardize_image_file(input_path, output_path, target_size=1000):
    try:
        img = Image.open(input_path).convert("RGBA")
        w, h = img.size

        # Sample border pixels to detect background color
        samples = []
        for x in [0, w - 1, w // 2]:
            samples.append(img.getpixel((x, 0)))
            samples.append(img.getpixel((x, h - 1)))
        for y in [0, h - 1, h // 2]:
            samples.append(img.getpixel((0, y)))
            samples.append(img.getpixel((w - 1, y)))

        bg_r = sum(s[0] for s in samples) / len(samples)
        bg_g = sum(s[1] for s in samples) / len(samples)
        bg_b = sum(s[2] for s in samples) / len(samples)

        # Build alpha mask based on color distance from background
        data = list(img.getdata())
        new_data = []
        threshold = 42

        for item in data:
            r, g, b, a = item
            dist = math.sqrt((r - bg_r) ** 2 + (g - bg_g) ** 2 + (b - bg_b) ** 2)
            if dist < threshold:
                alpha = int((dist / threshold) * 255) if dist > threshold * 0.75 else 0
                new_data.append((r, g, b, alpha))
            else:
                new_data.append((r, g, b, 255))

        img.putdata(new_data)

        bbox = img.getbbox()
        if bbox:
            cropped = img.crop(bbox)
        else:
            cropped = img

        cw, ch = cropped.size
        scale = min((target_size * 0.82) / cw, (target_size * 0.82) / ch)
        new_w = max(10, int(cw * scale))
        new_h = max(10, int(ch * scale))

        resized = cropped.resize((new_w, new_h), Image.Resampling.LANCZOS)

        # Composite onto 1000x1000 pure white background with contact shadow
        final_canvas = Image.new("RGBA", (target_size, target_size), (255, 255, 255, 255))
        offset_x = (target_size - new_w) // 2
        offset_y = (target_size - new_h) // 2 + 10

        # Subtle realistic studio floor contact shadow
        shadow_w = int(new_w * 0.75)
        shadow_h = max(24, int(new_h * 0.08))
        shadow_img = Image.new("RGBA", (shadow_w, shadow_h), (0, 0, 0, 0))
        draw = ImageDraw.Draw(shadow_img)
        draw.ellipse([0, 0, shadow_w, shadow_h], fill=(35, 35, 35, 60))
        shadow_blurred = shadow_img.filter(ImageFilter.GaussianBlur(radius=max(6, shadow_h // 3)))

        shadow_x = (target_size - shadow_w) // 2
        shadow_y = offset_y + new_h - (shadow_h // 2)
        final_canvas.paste(shadow_blurred, (shadow_x, shadow_y), shadow_blurred)

        final_canvas.paste(resized, (offset_x, offset_y), resized)

        final_rgb = final_canvas.convert("RGB")
        final_rgb.save(output_path, "JPEG", quality=95, optimize=True)
        print(f"Processed -> {output_path}")
        return True
    except Exception as e:
        print(f"Error standardizing {input_path}: {e}")
        return False

def main():
    with open(PRODUCTS_JSON, "r", encoding="utf-8") as f:
        products = json.load(f)

    temp_dl_dir = os.path.join(PUBLIC_DIR, "temp_downloads")
    os.makedirs(temp_dl_dir, exist_ok=True)

    # Specific clean replacements we created directly
    generated_statues = {
        "ganesha-statue": "/statues/ganesha_statue.jpg",
        "consecrated-brass-ganapathi-idol": "/statues/ganesha_statue.jpg",
        "murugan-silai": "/statues/murugan_statue.jpg",
        "antique-lord-murugan-vel": "/statues/murugan_statue.jpg",
        "temple-brass-lord-murugan-vel-statue": "/statues/murugan_statue.jpg",
        "padmasana-gajalakshmi-brass-idol": "/statues/lakshmi_statue.jpg",
        "brass-lakshmi-ganesha-saraswati-trio": "/statues/lakshmi_ganesh_saraswati.jpg",
        "swami-ayyappan-thiruvachi-brass-idol": "/statues/ayyappan_statue.jpg",
        "meenakshi-amman-brass-idol": "/products/meenakshi-amman.jpg",
        "classic-annam-kuthu-vilakku": "/products/kuthu-vilakku.jpg",
        "brass-lamps": "/products/kuthu-vilakku.jpg",
        "pooja-villaku": "/products/kuthu-vilakku.jpg",
        "peacock-rim-brass-uruli": "/products/peacock-uruli.jpg",
        "traditional-vengala-paanai": "/products/vengala-paanai.jpg",
        "traditional-eeya-chombu": "/products/eeya-chombu.jpg"
    }

    for p in products:
        slug = p["slug"]
        curr_img = p.get("image", "")

        if slug in generated_statues:
            target_url = generated_statues[slug]
            p["image"] = target_url
            p["gallery"] = [target_url]
            print(f"Updated product {slug} -> {target_url}")
            continue

        # For furniture or other local files:
        if curr_img.startswith("/products/") or curr_img.startswith("products/"):
            local_rel = curr_img.lstrip("/")
            local_path = os.path.join(PUBLIC_DIR, local_rel.replace("public/", ""))
            if os.path.exists(local_path):
                out_path = os.path.join(PRODUCTS_DIR, f"{slug}-white.jpg")
                if standardize_image_file(local_path, out_path):
                    target_url = f"/products/{slug}-white.jpg"
                    p["image"] = target_url
                    p["gallery"] = [target_url]
                    print(f"Standardized furniture {slug} -> {target_url}")
                    continue

        # For external LH3 URLs:
        if curr_img.startswith("http://") or curr_img.startswith("https://"):
            dl_path = os.path.join(temp_dl_dir, f"{slug}_raw.jpg")
            try:
                print(f"Downloading external image for {slug}...")
                req = urllib.request.Request(curr_img, headers={'User-Agent': 'Mozilla/5.0'})
                with urllib.request.urlopen(req) as resp, open(dl_path, 'wb') as out_f:
                    out_f.write(resp.read())

                out_path = os.path.join(PRODUCTS_DIR, f"{slug}-white.jpg")
                if standardize_image_file(dl_path, out_path):
                    target_url = f"/products/{slug}-white.jpg"
                    p["image"] = target_url
                    p["gallery"] = [target_url]
                    print(f"Standardized downloaded {slug} -> {target_url}")
            except Exception as ex:
                print(f"Failed to download/process {slug}: {ex}")

    # Save products.json
    with open(PRODUCTS_JSON, "w", encoding="utf-8") as f:
        json.dump(products, f, indent=2, ensure_ascii=False)

    # Sync products.ts
    try:
        with open(PRODUCTS_TS, "r", encoding="utf-8") as f:
            raw_ts = f.read()

        marker = "export const PRODUCTS: Product[] = "
        idx = raw_ts.find(marker)
        if idx != -1:
            func_marker = "export function getProductBySlug"
            func_idx = raw_ts.find(func_marker)
            if func_idx != -1:
                new_ts = raw_ts[:idx + len(marker)] + json.dumps(products, indent=2, ensure_ascii=False) + ";\n\n" + raw_ts[func_idx:]
                with open(PRODUCTS_TS, "w", encoding="utf-8") as f:
                    f.write(new_ts)
                print("Synced src/data/products.ts successfully!")
    except Exception as ex:
        print(f"Failed to sync products.ts: {ex}")

    # Clean up temp
    if os.path.exists(temp_dl_dir):
        for f in os.listdir(temp_dl_dir):
            try:
                os.remove(os.path.join(temp_dl_dir, f))
            except:
                pass
        try:
            os.rmdir(temp_dl_dir)
        except:
            pass

    print("All products standardized to clean white background!")

if __name__ == "__main__":
    main()

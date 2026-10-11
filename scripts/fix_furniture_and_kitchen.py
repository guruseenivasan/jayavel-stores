import os
from PIL import Image, ImageFilter, ImageDraw, ImageOps

PUBLIC_DIR = os.path.join("public")
PRODUCTS_DIR = os.path.join(PUBLIC_DIR, "products")
RAW_KITCHEN_DIR = os.path.join(PUBLIC_DIR, "raw_kitchen")

def process_product_to_white_studio(input_path, output_path, target_size=1000, shadow_intensity=0.20):
    img = Image.open(input_path).convert("RGB")
    w, h = img.size

    # 1. High-Key Luminance boost for background
    # Background tones (values > 130) smoothly lift to 255 pure white
    lut = []
    for i in range(256):
        if i < 110:
            lut.append(i)
        elif i < 185:
            val = int(110 + (i - 110) * (255 - 110) / (185 - 110))
            lut.append(min(255, val))
        else:
            lut.append(255)
            
    boosted = img.point(lut * 3)

    # 2. Smooth border fade to pure white
    mask = Image.new("L", (w, h), 0)
    draw = ImageDraw.Draw(mask)
    draw.rectangle([int(w * 0.05), int(h * 0.05), int(w * 0.95), int(h * 0.95)], fill=255)
    mask = mask.filter(ImageFilter.GaussianBlur(radius=max(10, int(w * 0.06))))

    white_layer = Image.new("RGB", (w, h), (255, 255, 255))
    clean_subj = Image.composite(boosted, white_layer, mask)

    # 3. Fit and center onto 1000x1000 square pure white studio canvas
    max_dim = int(target_size * 0.82)
    scale = min(max_dim / w, max_dim / h)
    new_w = max(20, int(w * scale))
    new_h = max(20, int(h * scale))

    resized = clean_subj.resize((new_w, new_h), Image.Resampling.LANCZOS)

    final_canvas = Image.new("RGB", (target_size, target_size), (255, 255, 255))
    offset_x = (target_size - new_w) // 2
    offset_y = (target_size - new_h) // 2 + 8

    # 4. Soft realistic contact drop shadow underneath
    shadow_w = int(new_w * 0.76)
    shadow_h = max(18, int(new_h * 0.07))
    shadow_img = Image.new("RGBA", (shadow_w, shadow_h), (0, 0, 0, 0))
    sdraw = ImageDraw.Draw(shadow_img)
    sdraw.ellipse([0, 0, shadow_w, shadow_h], fill=(30, 30, 30, int(shadow_intensity * 255)))
    shadow_blurred = shadow_img.filter(ImageFilter.GaussianBlur(radius=max(5, shadow_h // 3)))

    shadow_x = (target_size - shadow_w) // 2
    shadow_y = offset_y + new_h - (shadow_h // 2)

    # Paste shadow onto final canvas
    final_canvas.paste(
        ImageOps.colorize(shadow_blurred.split()[3], (255, 255, 255), (30, 30, 30)),
        (shadow_x, shadow_y),
        shadow_blurred.split()[3]
    )

    # Paste subject
    final_canvas.paste(resized, (offset_x, offset_y))

    final_canvas.save(output_path, "JPEG", quality=95, optimize=True)
    print(f"Successfully processed: {output_path}")

def main():
    # 1. Furniture Items
    furniture_files = [
        "chettinad-teakwood-oonjal-swing",
        "teakwood-pooja-mandapam-shrine",
        "brass-studded-teakwood-diwan",
        "carved-teakwood-peedam-uruli-stand",
        "teakwood-king-cot-bed",
        "chettinad-carved-teakwood-sofa-set",
        "solid-teakwood-3-door-bero",
        "teakwood-steel-gas-stove-table-stand",
        "salem-heavy-steel-wedding-bero"
    ]

    for item in furniture_files:
        src = os.path.join(PRODUCTS_DIR, f"{item}.jpg")
        dst = os.path.join(PRODUCTS_DIR, f"{item}-white.jpg")
        if os.path.exists(src):
            process_product_to_white_studio(src, dst)
        else:
            print(f"Warning: source file not found: {src}")

    # 2. Kitchen Items
    kitchen_files = [
        "pure-copper-water-pot",
        "triply-stainless-steel-biryani-handi",
        "classic-brass-filter-coffee",
        "traditional-brass-masala-dabba",
        "silver-plated-thali-set",
        "pure-silver-pooja-diya-pair",
        "brass-davarah-tumbler-set"
    ]

    for item in kitchen_files:
        src = os.path.join(RAW_KITCHEN_DIR, f"{item}.jpg")
        dst = os.path.join(PRODUCTS_DIR, f"{item}-white.jpg")
        if os.path.exists(src):
            process_product_to_white_studio(src, dst)
        else:
            print(f"Warning: source file not found: {src}")

    print("All furniture and kitchen items converted to clean white studio backgrounds!")

if __name__ == "__main__":
    main()

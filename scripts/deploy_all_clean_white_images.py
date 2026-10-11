import os
import shutil
from PIL import Image, ImageDraw, ImageFilter

PRODUCTS_DIR = os.path.join("public", "products")
TEST_WIKI_DIR = os.path.join("public", "test_wiki")

def frame_furniture(name):
    src = os.path.join(PRODUCTS_DIR, f"{name}.jpg")
    dst = os.path.join(PRODUCTS_DIR, f"{name}-white.jpg")
    img = Image.open(src).convert("RGB")
    w, h = img.size
    scale = 920.0 / max(w, h)
    nw, nh = int(w * scale), int(h * scale)
    resized = img.resize((nw, nh), Image.Resampling.LANCZOS)
    
    mask = Image.new("L", (nw, nh), 0)
    draw = ImageDraw.Draw(mask)
    margin_x = int(nw * 0.04)
    margin_y = int(nh * 0.04)
    draw.rectangle([margin_x, margin_y, nw - margin_x, nh - margin_y], fill=255)
    mask = mask.filter(ImageFilter.GaussianBlur(radius=int(nw * 0.03)))
    
    white_bg = Image.new("RGB", (nw, nh), (255, 255, 255))
    soft_img = Image.composite(resized, white_bg, mask)
    
    canvas = Image.new("RGB", (1000, 1000), (255, 255, 255))
    canvas.paste(soft_img, ((1000 - nw)//2, (1000 - nh)//2))
    canvas.save(dst, "JPEG", quality=95, optimize=True)
    print(f"[FURNITURE] Deployed: {dst}")

def deploy_all():
    furniture_list = [
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
    
    print("--- 1. Processing Furniture Images ---")
    for f in furniture_list:
        frame_furniture(f)
        
    print("\n--- 2. Deploying Kitchen & Silver Images ---")
    kitchen_map = {
        "pure-silver-pooja-diya-pair-white.jpg": os.path.join(TEST_WIKI_DIR, "silver_diya_test.jpg"),
        "pure-copper-water-pot-white.jpg": os.path.join(TEST_WIKI_DIR, "copper_pot_white_test.jpg"),
        "triply-stainless-steel-biryani-handi-white.jpg": os.path.join(TEST_WIKI_DIR, "handi_white_test.jpg"),
        "classic-brass-filter-coffee-white.jpg": os.path.join(TEST_WIKI_DIR, "filter_white_test.jpg"),
        "brass-davarah-tumbler-set-white.jpg": os.path.join(TEST_WIKI_DIR, "davarah_white_test.jpg"),
        "silver-plated-thali-set-white.jpg": os.path.join(TEST_WIKI_DIR, "silver_thali_clean.jpg"),
    }
    
    for dst_name, src_path in kitchen_map.items():
        dst_path = os.path.join(PRODUCTS_DIR, dst_name)
        shutil.copyfile(src_path, dst_path)
        print(f"[KITCHEN/SILVER] Copied {src_path} -> {dst_path}")
        
    print("\n--- 3. Verifying traditional-brass-masala-dabba-white.jpg ---")
    dabba_path = os.path.join(PRODUCTS_DIR, "traditional-brass-masala-dabba-white.jpg")
    if os.path.exists(dabba_path):
        print(f"[VERIFIED] {dabba_path} exists ({os.path.getsize(dabba_path)} bytes)")

if __name__ == "__main__":
    deploy_all()

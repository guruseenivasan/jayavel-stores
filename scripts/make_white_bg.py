import sys
import os
from PIL import Image, ImageFilter, ImageDraw
import math
from collections import deque

def process_to_white_studio(image_path, output_path, target_size=1000, shadow_intensity=0.22, threshold=45):
    """
    Standardizes any product image onto a pure white studio background (1:1 square)
    with a soft contact shadow beneath the base.
    Uses exterior flood-fill from edges to cleanly isolate subject without touching interior parts.
    """
    img = Image.open(image_path).convert("RGBA")
    w, h = img.size

    # Downsample huge images for fast processing if needed
    max_dim = 1400
    if max(w, h) > max_dim:
        scale = max_dim / max(w, h)
        img = img.resize((int(w * scale), int(h * scale)), Image.Resampling.LANCZOS)
        w, h = img.size

    pixels = img.load()

    # Sample perimeter to find representative background colors
    samples = []
    for x in range(0, w, max(1, w // 20)):
        samples.append(pixels[x, 0][:3])
        samples.append(pixels[x, h - 1][:3])
    for y in range(0, h, max(1, h // 20)):
        samples.append(pixels[0, y][:3])
        samples.append(pixels[w - 1, y][:3])

    bg_r = sum(s[0] for s in samples) / len(samples)
    bg_g = sum(s[1] for s in samples) / len(samples)
    bg_b = sum(s[2] for s in samples) / len(samples)

    def color_dist(c1, c2):
        return math.sqrt((c1[0] - c2[0])**2 + (c1[1] - c2[1])**2 + (c1[2] - c2[2])**2)

    # Visited / Background mask
    # 0 = unvisited, 1 = background, 2 = foreground
    mask = bytearray(w * h)
    queue = deque()

    # Seed from all perimeter pixels
    for x in range(w):
        for y in [0, h - 1]:
            idx = y * w + x
            p = pixels[x, y][:3]
            if color_dist(p, (bg_r, bg_g, bg_b)) < threshold * 1.5:
                mask[idx] = 1
                queue.append((x, y))

    for y in range(h):
        for x in [0, w - 1]:
            idx = y * w + x
            if mask[idx] == 0:
                p = pixels[x, y][:3]
                if color_dist(p, (bg_r, bg_g, bg_b)) < threshold * 1.5:
                    mask[idx] = 1
                    queue.append((x, y))

    # BFS exterior flood fill
    while queue:
        cx, cy = queue.popleft()
        for nx, ny in ((cx + 1, cy), (cx - 1, cy), (cx, cy + 1), (cx, cy - 1)):
            if 0 <= nx < w and 0 <= ny < h:
                nidx = ny * w + nx
                if mask[nidx] == 0:
                    np_rgb = pixels[nx, ny][:3]
                    if color_dist(np_rgb, (bg_r, bg_g, bg_b)) < threshold:
                        mask[nidx] = 1
                        queue.append((nx, ny))

    # Create alpha channel from mask
    alpha_img = Image.new("L", (w, h), 255)
    alpha_pixels = alpha_img.load()
    for y in range(h):
        for x in range(w):
            if mask[y * w + x] == 1:
                alpha_pixels[x, y] = 0

    # Smooth / anti-alias edges slightly
    alpha_smoothed = alpha_img.filter(ImageFilter.GaussianBlur(radius=1.2))
    img.putalpha(alpha_smoothed)

    # Crop to foreground bounding box
    bbox = img.getbbox()
    if bbox:
        # Give 2% margin around bbox
        pad = int(min(w, h) * 0.02)
        x0 = max(0, bbox[0] - pad)
        y0 = max(0, bbox[1] - pad)
        x1 = min(w, bbox[2] + pad)
        y1 = min(h, bbox[3] + pad)
        cropped = img.crop((x0, y0, x1, y1))
    else:
        cropped = img

    cw, ch = cropped.size

    # Scale to fit standard catalog box (approx 82% of square)
    scale = min((target_size * 0.82) / cw, (target_size * 0.82) / ch)
    new_w = max(20, int(cw * scale))
    new_h = max(20, int(ch * scale))
    resized = cropped.resize((new_w, new_h), Image.Resampling.LANCZOS)

    # Composite on pure white canvas
    final_canvas = Image.new("RGBA", (target_size, target_size), (255, 255, 255, 255))
    offset_x = (target_size - new_w) // 2
    offset_y = (target_size - new_h) // 2 + 10

    # Option 1: Clean Studio White – Crisp Soft Contact Shadows
    # Full canvas shadow layer so Gaussian blur never clips at bounding box edges
    shadow_canvas = Image.new("RGBA", (target_size, target_size), (0, 0, 0, 0))
    sdraw = ImageDraw.Draw(shadow_canvas)

    # Layer 1: Soft diffused ambient shadow
    sw1 = int(new_w * 0.78)
    sh1 = max(24, int(new_h * 0.08))
    sx1 = (target_size - sw1) // 2
    sy1 = offset_y + new_h - (sh1 // 2)
    sdraw.ellipse([sx1, sy1, sx1 + sw1, sy1 + sh1], fill=(50, 50, 50, int(shadow_intensity * 170)))

    # Layer 2: Tight crisp contact occlusion core directly at the base
    sw2 = int(new_w * 0.56)
    sh2 = max(10, int(new_h * 0.035))
    sx2 = (target_size - sw2) // 2
    sy2 = offset_y + new_h - (sh2 // 2) - 2
    sdraw.ellipse([sx2, sy2, sx2 + sw2, sy2 + sh2], fill=(25, 25, 25, int(shadow_intensity * 240)))

    # Smooth blur with completely natural falloff
    shadow_blurred = shadow_canvas.filter(ImageFilter.GaussianBlur(radius=8))
    final_canvas.paste(shadow_blurred, (0, 0), shadow_blurred)

    # Paste subject
    final_canvas.paste(resized, (offset_x, offset_y), resized)

    # Convert to RGB and save optimized JPEG
    final_rgb = final_canvas.convert("RGB")
    final_rgb.save(output_path, "JPEG", quality=95, optimize=True)
    print(f"Standardized {image_path} -> {output_path} (1000x1000 white background)")

if __name__ == "__main__":
    if len(sys.argv) < 3:
        print("Usage: python make_white_bg.py <input_image> <output_image>")
        sys.exit(1)
    process_to_white_studio(sys.argv[1], sys.argv[2])

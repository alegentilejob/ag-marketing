import os
from PIL import Image

media_dir = r"c:\Users\Scuola\Desktop\my-job-website\public\media"
logos = [
    "NaxaClienti_gelsia.png",
    "NaxaClienti_eugin.png",
    "NaxaClienti_rivamobili.png",
    "NaxaClienti_resstende.png",
    "NaxaClienti_omcazzaniga.webp",
    "NaxaClienti__EZ.png",
    "NaxaClienti_costacurta.png",
    "NaxaClienti_reflexx.png"
]

print(f"{'Logo Name':<30} | {'Orig Size':<10} | {'True BBox (L, U, R, L)':<22} | {'True Size':<10} | {'Top/Bottom Padding':<18}")
print("-" * 105)

for logo in logos:
    path = os.path.join(media_dir, logo)
    if not os.path.exists(path):
        print(f"File not found: {logo}")
        continue
    
    img = Image.open(path)
    # Ensure it has an alpha channel
    if img.mode != 'RGBA':
        img = img.convert('RGBA')
        
    # Get bounding box of non-zero alpha pixels
    bbox = img.getbbox() # (left, upper, right, lower)
    
    if bbox:
        left, upper, right, lower = bbox
        true_w = right - left
        true_h = lower - upper
        orig_w, orig_h = img.size
        top_padding = upper
        bottom_padding = orig_h - lower
        print(f"{logo:<30} | {orig_w}x{orig_h:<5} | {bbox} | {true_w}x{true_h:<5} | T:{top_padding:<3} B:{bottom_padding:<3}")
    else:
        print(f"{logo:<30} | {img.size[0]}x{img.size[1]:<5} | Empty image (fully transparent)")

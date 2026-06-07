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

print("Starting automatic transparent cropping...")
print("-" * 50)

for logo in logos:
    path = os.path.join(media_dir, logo)
    if not os.path.exists(path):
        print(f"Skipping (not found): {logo}")
        continue
    
    img = Image.open(path)
    # Ensure it has an alpha channel for transparency check
    if img.mode != 'RGBA':
        img = img.convert('RGBA')
        
    bbox = img.getbbox()
    
    if bbox:
        left, upper, right, lower = bbox
        orig_w, orig_h = img.size
        true_w = right - left
        true_h = lower - upper
        
        # Only crop if there's actual empty border space to remove
        if true_w < orig_w or true_h < orig_h:
            cropped_img = img.crop(bbox)
            # Save using the original format
            cropped_img.save(path)
            print(f"Cropped {logo}: {orig_w}x{orig_h} -> {true_w}x{true_h}")
        else:
            print(f"No cropping needed for {logo} (already tight: {orig_w}x{orig_h})")
    else:
        print(f"Warning: {logo} is fully transparent, skipping.")

print("-" * 50)
print("Cropping complete!")

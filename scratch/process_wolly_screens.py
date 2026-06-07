import os
import glob
from PIL import Image

def process_screenshots():
    # Source directory
    src_dir = r"c:\Users\Scuola\Desktop\my-job-website\public\media\projects\wolly\wolly prototype"
    # Find all PNG files in the prototype folder
    files = glob.glob(os.path.join(src_dir, "*.png"))
    
    # Light blue background color (RGB)
    # HSL(210, 60%, 94%) -> RGB(229, 240, 252) -> hex #E5F0FC
    bg_color = (229, 240, 252)
    
    # Canvas dimensions (portrait ratio, e.g. 1440 x 2960)
    canvas_w = 1440
    canvas_h = 2960
    
    print(f"Found {len(files)} screenshots to process.")
    
    for f in files:
        filename = os.path.basename(f)
        if filename.startswith("processed_"):
            continue
            
        print(f"Processing {filename}...")
        
        # Open screenshot
        img = Image.open(f)
        img_w, img_h = img.size
        
        # We want to scale the screenshot slightly down to leave a beautiful margin.
        # Let's scale it so that it takes up about 80% of the canvas width.
        target_w = int(canvas_w * 0.8)  # 1152 pixels
        target_h = int(img_h * (target_w / img_w))  # 2492 pixels
        
        # Resize using high-quality resampling
        img_resized = img.resize((target_w, target_h), Image.Resampling.LANCZOS)
        
        # Create a new background image with light blue color
        canvas = Image.new("RGB", (canvas_w, canvas_h), bg_color)
        
        # Calculate offset to center the resized image
        offset_x = (canvas_w - target_w) // 2
        offset_y = (canvas_h - target_h) // 2
        
        # Paste the screenshot onto the canvas. If the image has alpha/transparency, we use it as mask.
        if img_resized.mode in ('RGBA', 'LA') or (img_resized.mode == 'P' and 'transparency' in img_resized.info):
            canvas.paste(img_resized, (offset_x, offset_y), img_resized)
        else:
            canvas.paste(img_resized, (offset_x, offset_y))
            
        # Save the processed image
        output_name = "processed_" + filename
        output_path = os.path.join(src_dir, output_name)
        canvas.save(output_path, "PNG", optimize=True)
        print(f"Saved processed image to {output_path} (size: {canvas.size})")

if __name__ == "__main__":
    process_screenshots()

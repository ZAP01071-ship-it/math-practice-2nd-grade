import re
import os

assets_dir = 'assets'
script_file = 'script.js'

with open(script_file, 'r', encoding='utf-8') as f:
    content = f.read()

# Find all image paths in script.js
# Example: img: "assets/Khnum.png"
matches = re.findall(r'img:\s*"assets/([^"]+)"', content)

# Normalize filenames in assets for easier matching (case-insensitive and URL-space handling)
assets_files = os.listdir(assets_dir)
assets_map = {f.lower().replace(' ', '%20'): f for f in assets_files}

missing = []
for img in matches:
    normalized_img = img.lower()
    if normalized_img not in assets_map:
        missing.append(img)

if missing:
    print("Found missing images in script.js:")
    for m in missing:
        print(f"  - {m}")
else:
    print("All image paths in script.js exist in assets folder.")

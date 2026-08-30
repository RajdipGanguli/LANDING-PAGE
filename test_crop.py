import json
from PIL import Image
import os

with open('figma_node.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

img = Image.open('figma_design_preview.png')
img_w, img_h = img.size
print("Preview image size:", img.size)

# Let's inspect the bounding box of the whole rendered canvas:
# In Figma API, the render for 3311:2 starts at the min(x), min(y) of all children in canvas
doc = data['nodes']['3311:2']['document']

min_x = 0.0
min_y = 0.0
max_x = 1440.0
max_y = 432.0 + 9184.0

for c in doc.get('children', []):
    b = c.get('absoluteBoundingBox', {})
    if b:
        min_x = min(min_x, b.get('x', 0))
        min_y = min(min_y, b.get('y', 0))
        max_x = max(max_x, b.get('x', 0) + b.get('width', 0))
        max_y = max(max_y, b.get('y', 0) + b.get('height', 0))

canvas_w = max_x - min_x
canvas_h = max_y - min_y
print(f"Canvas bounds: X:({min_x} to {max_x}) = {canvas_w}, Y:({min_y} to {max_y}) = {canvas_h}")

scale_x = img_w / canvas_w
scale_y = img_h / canvas_h
print(f"Computed scale: X={scale_x:.4f}, Y={scale_y:.4f}")

nodes = {}
def collect(n):
    nodes[n['id']] = n
    for c in n.get('children', []):
        collect(c)

collect(doc)

target_crops = {
    # 1. Brands logo strip
    'brands_marquee.png': '3311:702',
    # 2. Hero avatars group
    'hero_avatars.png': '3311:635',
    # 3. 3 Service top graphics
    'service_meta.png': '3311:723',
    'service_google.png': '3311:752',
    'service_tiktok.png': '3311:759',
    # 4. 3 Campaigns showcase images
    'campaign_1_abstract.png': '3311:808',
    'campaign_2_skincare.png': '3311:809',
    'campaign_3_shoes.png': '3311:810',
    # 5. Testimonial author James Miller
    'testimonial_james_miller.png': '3311:1050',
    # 6. Navbar logo & button
    'navbar.png': '3311:1094',
}

os.makedirs('public/assets', exist_ok=True)

for fname, nid in target_crops.items():
    node = nodes.get(nid)
    if not node:
        print(f"Missing node: {nid}")
        continue
    box = node['absoluteBoundingBox']
    x1 = int((box['x'] - min_x) * scale_x)
    y1 = int((box['y'] - min_y) * scale_y)
    x2 = int(x1 + (box['width'] * scale_x))
    y2 = int(y1 + (box['height'] * scale_y))
    
    # Ensure within bounds
    x1 = max(0, min(img_w, x1))
    y1 = max(0, min(img_h, y1))
    x2 = max(0, min(img_w, x2))
    y2 = max(0, min(img_h, y2))
    
    cropped = img.crop((x1, y1, x2, y2))
    out_path = os.path.join('public', 'assets', fname)
    cropped.save(out_path)
    print(f"Saved {fname}: size {cropped.size} ({box['width']}x{box['height']})")

print("All targeted assets successfully cropped!")

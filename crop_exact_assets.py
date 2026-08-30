import json
from PIL import Image
import os

with open('figma_node.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

# The full canvas image
img = Image.open('figma_design_preview.png')
img_w, img_h = img.size
print(f"Full preview image size: {img_w} x {img_h}")

root = data['nodes']['3311:2']['document']['children'][0]
root_box = root['absoluteBoundingBox']
root_x = root_box['x']
root_y = root_box['y']
root_w = root_box['width']
root_h = root_box['height']

scale_x = img_w / root_w
scale_y = img_h / root_h
print(f"Scale factors: X={scale_x:.4f}, Y={scale_y:.4f}")

nodes = {}
def collect(n):
    nodes[n['id']] = n
    for c in n.get('children', []):
        collect(c)

collect(data['nodes']['3311:2']['document'])

os.makedirs('public/assets', exist_ok=True)

# List of all components and assets to crop perfectly
crops = {
    # Brand marquee / Logos row
    'brands_marquee.png': '3311:702',
    # Hero avatars group
    'hero_avatars.png': '3311:635',
    # Individual hero avatars
    'avatar_1.png': '3311:636',
    'avatar_2.png': '3311:637',
    'avatar_3.png': '3311:638',
    'avatar_4.png': '3311:639',
    'avatar_5.png': '3311:640',
    # Meta, Google, TikTok cards graphic boxes
    'card_meta_box.png': '3311:713',
    'card_google_box.png': '3311:737',
    'card_tiktok_box.png': '3311:761',
    # Campaigns showcase 3 image cards
    'campaign_1_abstract.png': '3311:789',
    'campaign_2_skincare.png': '3311:794',
    'campaign_3_shoes.png': '3311:799',
    # Testimonials featured image (James Miller)
    'testimonial_james_miller.png': '3311:1003',
}

for filename, node_id in crops.items():
    node = nodes.get(node_id)
    if not node:
        print(f"Node not found: {node_id}")
        continue
    box = node.get('absoluteBoundingBox')
    if not box:
        print(f"No bounding box for {node_id}")
        continue
    
    # Calculate crop coordinates relative to root
    x1 = (box['x'] - root_x) * scale_x
    y1 = (box['y'] - root_y) * scale_y
    x2 = x1 + (box['width'] * scale_x)
    y2 = y1 + (box['height'] * scale_y)
    
    # Crop
    cropped = img.crop((int(x1), int(y1), int(x2), int(y2)))
    out_path = os.path.join('public', 'assets', filename)
    cropped.save(out_path, quality=95)
    print(f"Cropped {filename}: {cropped.size} saved to {out_path}")

print("All exact slices generated successfully!")

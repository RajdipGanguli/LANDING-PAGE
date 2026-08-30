import json
from PIL import Image

with open('figma_node.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

img = Image.open('figma_design_preview.png')
print("Image size:", img.size)

doc = data['nodes']['3311:2']['document']
print("Doc name:", doc.get('name'), "bbox:", doc.get('absoluteBoundingBox'))

for i, child in enumerate(doc.get('children', [])):
    print(f"Child {i}: name='{child.get('name')}', type='{child.get('type')}', bbox={child.get('absoluteBoundingBox')}")

# When we exported node '3311:2' (which is the CANVAS or FRAME?), let's check what 3311:2 represents!
print("Node 3311:2 name:", data['nodes']['3311:2']['document']['name'])

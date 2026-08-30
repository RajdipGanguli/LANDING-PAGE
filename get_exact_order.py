import json

with open('figma_node.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

root = data['nodes']['3311:2']['document']['children'][0]
print('Main frame name:', root['name'])

children = root.get('children', [])
# Sort children by their Y position
sorted_children = sorted(children, key=lambda c: c.get('absoluteBoundingBox', {}).get('y', 0))

print('\n=== EXACT FIGMA SECTION ORDER BY Y POSITION ===')
for i, c in enumerate(sorted_children):
    box = c.get('absoluteBoundingBox', {})
    y = box.get('y', 0)
    h = box.get('height', 0)
    w = box.get('width', 0)
    name = c.get('name', '')
    cid = c.get('id', '')
    print(f"{i}: id={cid} | y={y:.1f} | w={w:.1f} x h={h:.1f} | name={name}")

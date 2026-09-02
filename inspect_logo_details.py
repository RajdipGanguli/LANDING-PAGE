import json

with open('figma_node.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

nodes = {}
def collect(n):
    nodes[n['id']] = n
    for c in n.get('children', []):
        collect(c)

collect(data['nodes']['3311:2']['document'])

logo_frame = nodes.get('3311:1097')
logo_text = nodes.get('3311:1098')
logo_brand = nodes.get('3311:1100')

print("Logo Frame 3311:1097:", json.dumps(logo_frame, indent=2))
print("Logo Text 'L' 3311:1098:", json.dumps(logo_text, indent=2))
print("Brand Text 3311:1100:", json.dumps(logo_brand, indent=2))

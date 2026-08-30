import json

with open('figma_node.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

nodes = {}
def collect(n):
    nodes[n['id']] = n
    for c in n.get('children', []):
        collect(c)

collect(data['nodes']['3311:2']['document'])

print("=== ALL BUTTONS IN FIGMA ===")
for nid, n in nodes.items():
    name = n.get('name', '')
    if any(k in name.lower() for k in ['book a call', 'contact us', 'button', 'get started', 'scale with us']) or n.get('type') == 'INSTANCE':
        box = n.get('absoluteBoundingBox', {})
        w, h = box.get('width', 0), box.get('height', 0)
        pad_t = n.get('paddingTop', 0)
        pad_b = n.get('paddingBottom', 0)
        pad_l = n.get('paddingLeft', 0)
        pad_r = n.get('paddingRight', 0)
        lm = n.get('layoutMode', 'None')
        radius = n.get('cornerRadius', 0)
        gap = n.get('itemSpacing', 0)
        fills = [f.get('type') for f in n.get('fills', [])]
        strokes = [s.get('type') for s in n.get('strokes', [])]
        print(f"- id={nid} | name='{name}' | size={w:.1f}x{h:.1f} | radius={radius} | pad=({pad_t},{pad_r},{pad_b},{pad_l}) | gap={gap} | fills={fills} | strokes={strokes}")

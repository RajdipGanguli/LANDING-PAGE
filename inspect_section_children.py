import json

with open('figma_node.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

nodes = {}
def collect(n):
    nodes[n['id']] = n
    for c in n.get('children', []):
        collect(c)

collect(data['nodes']['3311:2']['document'])

def print_children(nid, depth=0):
    n = nodes.get(nid)
    if not n:
        return
    indent = "  " * depth
    box = n.get('absoluteBoundingBox', {})
    print(f"{indent}- [{n.get('type')}] id={nid} name='{n.get('name')}' box=({box.get('x'):.1f}, {box.get('y'):.1f}, {box.get('width'):.1f}x{box.get('height'):.1f})")
    for c in n.get('children', []):
        print_children(c.get('id'), depth + 1)

print("=== SERVICES (3311:709) ===")
print_children('3311:709')

print("\n=== CAMPAIGNS (3311:786) ===")
print_children('3311:786')

print("\n=== TESTIMONIALS (3311:1040) ===")
print_children('3311:1040')

print("\n=== FAQ (3311:999) ===")
print_children('3311:999')

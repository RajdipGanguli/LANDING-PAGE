import json

with open('figma_node.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

nodes = {}
def collect(n):
    nodes[n['id']] = n
    for c in n.get('children', []):
        collect(c)

collect(data['nodes']['3311:2']['document'])

def print_children(nid, out, depth=0):
    n = nodes.get(nid)
    if not n:
        return
    indent = "  " * depth
    box = n.get('absoluteBoundingBox', {})
    out.write(f"{indent}- [{n.get('type')}] id={nid} name='{n.get('name')}' box=({box.get('x'):.1f}, {box.get('y'):.1f}, {box.get('width'):.1f}x{box.get('height'):.1f})\n")
    for c in n.get('children', []):
        print_children(c.get('id'), out, depth + 1)

with open('sections_tree.txt', 'w', encoding='utf-8') as out:
    for sec_id, sec_name in [('3311:709', 'SERVICES'), ('3311:786', 'CAMPAIGNS'), ('3311:1040', 'TESTIMONIALS'), ('3311:999', 'FAQ')]:
        out.write(f"\n=== {sec_name} ({sec_id}) ===\n")
        print_children(sec_id, out)

print("Saved sections_tree.txt")

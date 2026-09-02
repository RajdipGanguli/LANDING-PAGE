import json

with open('figma_node.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

nodes = {}
def collect(n):
    nodes[n['id']] = n
    for c in n.get('children', []):
        collect(c)

collect(data['nodes']['3311:2']['document'])

# Search for navbar logo
print("=== NAVBAR LOGO NODES ===")
navbar = nodes.get('3311:1094')
def dump_node(n, depth=0):
    indent = "  " * depth
    box = n.get('absoluteBoundingBox', {})
    text = n.get('characters', '')
    fills = [f.get('type') for f in n.get('fills', [])]
    print(f"{indent}- [{n.get('type')}] id={n.get('id')} name='{n.get('name')}' text='{text}' fills={fills} box={box}")
    for c in n.get('children', []):
        dump_node(c, depth + 1)

if navbar:
    dump_node(navbar)

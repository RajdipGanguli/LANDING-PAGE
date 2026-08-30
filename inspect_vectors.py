import json

with open('figma_node.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

nodes = {}
def collect(n):
    nodes[n['id']] = n
    for c in n.get('children', []):
        collect(c)

collect(data.get('nodes', {}).get('3311:2', {}).get('document', {}))

vectors = []
for nid, n in nodes.items():
    if n.get('type') == 'VECTOR' or 'vector' in n.get('name', '').lower() or 'line' in n.get('name', '').lower():
        vectors.append((nid, n.get('name'), n.get('vectorPaths', []), n.get('strokeWeight', 0), n.get('strokes', []), n.get('fills', [])))

print(f"Total vector elements: {len(vectors)}")
for nid, name, paths, stroke_w, strokes, fills in vectors[:25]:
    print(f"Vector {nid}: {name} | stroke:{stroke_w} | paths:{len(paths)}")

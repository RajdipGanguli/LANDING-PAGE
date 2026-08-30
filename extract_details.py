import json

with open('figma_node.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

nodes = {}
def collect(n):
    nodes[n['id']] = n
    for c in n.get('children', []):
        collect(c)

collect(data.get('nodes', {}).get('3311:2', {}).get('document', {}))

def inspect_node(node_id, depth=0):
    n = nodes.get(node_id)
    if not n:
        return
    indent = "  " * depth
    name = n.get('name')
    ntype = n.get('type')
    box = n.get('absoluteBoundingBox', {})
    w, h = box.get('width', 0), box.get('height', 0)
    
    style_info = []
    if ntype == 'TEXT':
        st = n.get('style', {})
        chars = n.get('characters', '').replace('\n', ' \\n ')
        font = st.get('fontFamily')
        size = st.get('fontSize')
        weight = st.get('fontWeight')
        style_info.append(f'"{chars}" | font: {font} {weight} {size}px')
    
    if n.get('fills'):
        fills = [f.get('type') for f in n.get('fills')]
        style_info.append(f"fills:{fills}")
    
    if n.get('strokes'):
        strokes = [s.get('type') for s in n.get('strokes')]
        style_info.append(f"strokes:{strokes}")

    if n.get('cornerRadius'):
        style_info.append(f"radius:{n.get('cornerRadius')}")

    if n.get('effects'):
        effects = [e.get('type') for e in n.get('effects')]
        style_info.append(f"effects:{effects}")

    print(f"{indent}[{ntype}] {name} ({w:.0f}x{h:.0f}) id={node_id} {' '.join(style_info)}")
    for c in n.get('children', []):
        inspect_node(c.get('id'), depth + 1)

# Write output to a text file with utf-8 encoding
import sys
with open('figma_detailed_dump.txt', 'w', encoding='utf-8') as f:
    sys.stdout = f
    inspect_node('3311:2')
    sys.stdout = sys.__stdout__

print("figma_detailed_dump.txt created successfully.")

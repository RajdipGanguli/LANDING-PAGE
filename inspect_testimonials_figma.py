import json

with open('figma_node.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

nodes = {}
def collect(n):
    nodes[n['id']] = n
    for c in n.get('children', []):
        collect(c)

collect(data['nodes']['3311:2']['document'])

test_sec = nodes.get('3311:1040')

with open('testimonials_structure.txt', 'w', encoding='utf-8') as out:
    def dump(n, depth=0):
        indent = '  ' * depth
        box = n.get('absoluteBoundingBox', {})
        name = n.get('name')
        ntype = n.get('type')
        radius = n.get('cornerRadius')
        gap = n.get('itemSpacing')
        pad = (n.get('paddingTop'), n.get('paddingRight'), n.get('paddingBottom'), n.get('paddingLeft'))
        lm = n.get('layoutMode')
        text = n.get('characters', '')
        strokes = [s.get('type') for s in n.get('strokes', [])]
        fills = [f.get('type') for f in n.get('fills', [])]
        effects = [e.get('type') for e in n.get('effects', [])]
        out.write(f"{indent}[{ntype}] id={n.get('id')} name='{name}' w={box.get('width')} h={box.get('height')} rad={radius} gap={gap} pad={pad} flex={lm} fills={fills} strokes={strokes} effects={effects} text='{text[:40]}'\n")
        for c in n.get('children', []):
            dump(c, depth + 1)

    dump(test_sec)

print("Saved testimonials_structure.txt")

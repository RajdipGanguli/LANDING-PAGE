import json

with open('figma_node.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

nodes = {}
def collect(n):
    nodes[n['id']] = n
    for c in n.get('children', []):
        collect(c)

collect(data.get('nodes', {}).get('3311:2', {}).get('document', {}))

# Extract all font families and weights used
fonts = {}
for n in nodes.values():
    if n.get('type') == 'TEXT':
        st = n.get('style', {})
        f_fam = st.get('fontFamily', 'Unknown')
        f_weight = st.get('fontWeight', 400)
        f_size = st.get('fontSize', 16)
        if f_fam not in fonts:
            fonts[f_fam] = set()
        fonts[f_fam].add((f_weight, f_size))

print("FONTS USED:")
for f_fam, styles in fonts.items():
    print(f"  {f_fam}: {sorted(list(styles))}")

# Extract gradients and colors
gradients = []
solid_colors = set()
for n in nodes.values():
    for f in n.get('fills', []):
        if f.get('type') == 'GRADIENT_LINEAR':
            gradients.append({
                'node_name': n.get('name'),
                'stops': f.get('gradientStops', []),
                'handlePositions': f.get('gradientHandlePositions', [])
            })
        elif f.get('type') == 'SOLID':
            c = f.get('color', {})
            op = f.get('opacity', 1.0)
            hex_c = f"#{int(c.get('r',0)*255):02x}{int(c.get('g',0)*255):02x}{int(c.get('b',0)*255):02x}"
            solid_colors.add((hex_c, op))

print("\nSOLID COLORS:")
for c, op in sorted(list(solid_colors)):
    print(f"  {c} (opacity: {op})")

print(f"\nGRADIENTS ({len(gradients)} found):")
for g in gradients[:10]:
    print(f"  Node: {g['node_name']}")
    for s in g['stops']:
        c = s.get('color', {})
        print(f"    stop {s.get('position')}: rgba({c.get('r',0)*255:.0f}, {c.get('g',0)*255:.0f}, {c.get('b',0)*255:.0f}, {c.get('a',1):.2f})")

import json

with open('figma_node.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

nodes = {}
def collect(n):
    nodes[n['id']] = n
    for c in n.get('children', []):
        collect(c)

collect(data.get('nodes', {}).get('3311:2', {}).get('document', {}))

def get_text_tree(node_id):
    n = nodes.get(node_id)
    if not n:
        return []
    res = []
    if n.get('type') == 'TEXT':
        res.append((n.get('name'), n.get('characters'), n.get('style', {})))
    for c in n.get('children', []):
        res.extend(get_text_tree(c.get('id')))
    return res

root_children = data.get('nodes', {}).get('3311:2', {}).get('document', {}).get('children', [])[0].get('children', [])

with open('figma_all_texts.txt', 'w', encoding='utf-8') as out:
    for idx, sec in enumerate(root_children):
        out.write(f"=== SECTION {idx}: {sec.get('name')} (id: {sec.get('id')}) ===\n")
        texts = get_text_tree(sec.get('id'))
        for t_name, t_val, st in texts:
            out.write(f"  [{t_name}] ({st.get('fontFamily')} {st.get('fontWeight')} {st.get('fontSize')}px): {t_val.strip()}\n")

print("Exported figma_all_texts.txt successfully.")

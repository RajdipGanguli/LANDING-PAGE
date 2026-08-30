import json

with open('figma_node.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

nodes = {}
def collect(n):
    nodes[n['id']] = n
    for c in n.get('children', []):
        collect(c)

collect(data['nodes']['3311:2']['document'])

def search_nodes(query):
    print(f"=== SEARCH: '{query}' ===")
    for nid, n in nodes.items():
        if query.lower() in n.get('name', '').lower():
            box = n.get('absoluteBoundingBox', {})
            print(f"  id={nid} | type={n.get('type')} | name={n.get('name')} | box={box.get('x')},{box.get('y')},{box.get('width')}x{box.get('height')}")

search_nodes('Frame 2147238278') # Campaigns section
search_nodes('Frame 2147238272') # Services section
search_nodes('Frame 2147238317') # Testimonials section
search_nodes('Frame 2147238304') # FAQ section
search_nodes('Group 80') # Brands

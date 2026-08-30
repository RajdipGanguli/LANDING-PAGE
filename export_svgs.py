import json
import urllib.request
import os

token = 'figd_3tYONP-uSLd-1K4BpWwFEUiLwqghYOj-u6D3uwhq'
file_key = 'erW05XQHpQkXVdkwTkRTAD'
headers = {'X-Figma-Token': token}

with open('figma_node.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

nodes = {}
def collect(n):
    nodes[n['id']] = n
    for c in n.get('children', []):
        collect(c)

collect(data.get('nodes', {}).get('3311:2', {}).get('document', {}))

os.makedirs('public/svgs', exist_ok=True)

# Find all vector underlines, arrows, etc.
svg_targets = {}
for nid, n in nodes.items():
    name = n.get('name', '').lower()
    ntype = n.get('type', '')
    if 'vector' in name or 'arrow' in name or 'line' in name or 'icon' in name or 'star' in name or 'check' in name:
        svg_targets[nid] = f"vector_{name.replace(' ', '_').replace('/', '_')}_{nid.replace(':', '_')}"

# Also export specific node IDs for the wavy underlines
for nid, n in nodes.items():
    if n.get('name') in ['Vector', 'Vector 1', 'Vector 2', 'Vector 3', 'Vector 4', 'Vector 5']:
        svg_targets[nid] = f"vector_{nid.replace(':', '_')}"

print(f"Total SVGs to export: {len(svg_targets)}")

# Batch fetch in chunks
svg_list = list(svg_targets.items())
chunk_size = 30
for i in range(0, len(svg_list), chunk_size):
    chunk = svg_list[i:i+chunk_size]
    ids_str = ','.join([nid for nid, _ in chunk])
    url = f"https://api.figma.com/v1/images/{file_key}?ids={ids_str}&format=svg"
    req = urllib.request.Request(url, headers=headers)
    try:
        with urllib.request.urlopen(req) as resp:
            res_data = json.loads(resp.read().decode())
            images = res_data.get('images', {})
            for nid, filename in chunk:
                img_url = images.get(nid)
                if img_url:
                    filepath = os.path.join('public', 'svgs', f"{filename}.svg")
                    urllib.request.urlretrieve(img_url, filepath)
                    print(f"Saved {filepath}")
    except Exception as e:
        print(f"Error fetching chunk: {e}")

print("SVG exports done.")

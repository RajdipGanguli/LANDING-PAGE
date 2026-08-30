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

os.makedirs('public/assets', exist_ok=True)

# Find all nodes that are images or interesting components
export_items = {}

for nid, n in nodes.items():
    name = n.get('name', '')
    ntype = n.get('type', '')
    fills = n.get('fills', [])
    
    for fill in fills:
        if fill.get('type') == 'IMAGE':
            export_items[nid] = f"img_{name.replace(' ', '_').replace('/', '_')}_{nid.replace(':', '_')}"
            
    # Also find key frames like the 3 campaign images, brand logos, avatar groups, meta/google/tiktok logos
    if name in ['Meta Ads', 'Google Ads', 'Tiktok Ads', 'Group 80', 'Group 82', 'Frame 1618873970', 'Frame 1618873971']:
        export_items[nid] = f"comp_{name.replace(' ', '_')}_{nid.replace(':', '_')}"

print(f"Items to export: {len(export_items)}")

# Batch export in chunks of 50
item_ids = list(export_items.keys())
chunk_size = 40
for i in range(0, len(item_ids), chunk_size):
    chunk = item_ids[i:i+chunk_size]
    ids_str = ','.join(chunk)
    url = f"https://api.figma.com/v1/images/{file_key}?ids={ids_str}&scale=2&format=png"
    req = urllib.request.Request(url, headers=headers)
    try:
        with urllib.request.urlopen(req) as resp:
            res_data = json.loads(resp.read().decode())
            images = res_data.get('images', {})
            for nid, img_url in images.items():
                if img_url:
                    filename = f"public/assets/{export_items[nid]}.png"
                    urllib.request.urlretrieve(img_url, filename)
                    print(f"Downloaded {filename}")
    except Exception as e:
        print(f"Error fetching chunk {i}: {e}")

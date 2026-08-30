import json
import urllib.request
import os
import time

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

collect(data['nodes']['3311:2']['document'])

# Define all target assets to export with clean filenames
extra_frames = {
    '3311:702': 'brands_marquee.png',
    '3311:789': 'campaign_1_abstract.png',
    '3311:794': 'campaign_2_skincare.png',
    '3311:799': 'campaign_3_shoes.png',
    '3311:718': 'icon_meta_figma.png',
    '3311:742': 'icon_google_figma.png',
    '3311:766': 'icon_tiktok_figma.png',
    '3311:1003': 'testimonial_james_miller.png',
    '3311:635': 'hero_avatars_group.png',
    '3311:636': 'avatar_1.png',
    '3311:637': 'avatar_2.png',
    '3311:638': 'avatar_3.png',
    '3311:639': 'avatar_4.png',
    '3311:640': 'avatar_5.png',
    '3311:790': 'campaign_img_1.png',
    '3311:795': 'campaign_img_2.png',
    '3311:800': 'campaign_img_3.png',
    '3311:713': 'card_meta_box.png',
    '3311:737': 'card_google_box.png',
    '3311:761': 'card_tiktok_box.png',
    '3311:670': 'hero_arrow.png',
    '3311:815': 'arrow_results.png',
}

# Also find image fills
for nid, n in nodes.items():
    for f in n.get('fills', []):
        if f.get('type') == 'IMAGE':
            if nid not in extra_frames:
                extra_frames[nid] = f"asset_{nid.replace(':', '_')}.png"

os.makedirs('public/assets', exist_ok=True)
all_export_ids = list(extra_frames.keys())
print(f"Total assets to download: {len(all_export_ids)}")

chunk_size = 10
for i in range(0, len(all_export_ids), chunk_size):
    chunk = all_export_ids[i:i+chunk_size]
    ids_str = ','.join(chunk)
    url = f"https://api.figma.com/v1/images/{file_key}?ids={ids_str}&scale=2&format=png"
    req = urllib.request.Request(url, headers=headers)
    try:
        with urllib.request.urlopen(req) as resp:
            res_data = json.loads(resp.read().decode())
            images = res_data.get('images', {})
            for cid in chunk:
                img_url = images.get(cid)
                if img_url:
                    name_alias = extra_frames[cid]
                    fpath = os.path.join('public', 'assets', name_alias)
                    urllib.request.urlretrieve(img_url, fpath)
                    print(f"Downloaded: {name_alias}")
        time.sleep(0.5)
    except Exception as e:
        print(f"Error fetching chunk: {e}")
        time.sleep(2)

print("All downloads finished!")

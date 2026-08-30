import json
import urllib.request
import re
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

# Define explicit components to export cleanly
targets = {
    # Brand logos banner
    '3311:702': 'brands_marquee.png',
    # Hero avatars group
    '3311:635': 'hero_avatars.png',
    # Campaign cards / images
    '3311:789': 'campaign_card_1_abstract.png',
    '3311:794': 'campaign_card_2_skincare.png',
    '3311:799': 'campaign_card_3_shoes.png',
    # Testimonial main photo
    '3311:1003': 'testimonial_author_james.png',
    # How can we help you cards / icons
    '3311:713': 'card_meta_ads.png',
    '3311:737': 'card_google_ads.png',
    '3311:761': 'card_tiktok_ads.png',
    # Individual Meta, Google, TikTok logos
    '3311:718': 'icon_meta.png',
    '3311:742': 'icon_google.png',
    '3311:766': 'icon_tiktok.png',
    # Hand-drawn underlines / decorations
    '3311:670': 'hero_arrow.png',
    '3311:657': 'hero_bg_ellipse.png',
}

# Also find all image nodes
for nid, n in nodes.items():
    for fill in n.get('fills', []):
        if fill.get('type') == 'IMAGE':
            safe_name = f"image_{nid.replace(':', '_')}.png"
            if nid not in targets:
                targets[nid] = safe_name

print(f"Total targets: {len(targets)}")

# Fetch in batches
target_list = list(targets.items())
chunk_size = 20
for i in range(0, len(target_list), chunk_size):
    chunk = target_list[i:i+chunk_size]
    ids_str = ','.join([nid for nid, _ in chunk])
    url = f"https://api.figma.com/v1/images/{file_key}?ids={ids_str}&scale=2&format=png"
    req = urllib.request.Request(url, headers=headers)
    try:
        with urllib.request.urlopen(req) as resp:
            res_data = json.loads(resp.read().decode())
            images = res_data.get('images', {})
            for nid, filename in chunk:
                img_url = images.get(nid)
                if img_url:
                    filepath = os.path.join('public', 'assets', filename)
                    urllib.request.urlretrieve(img_url, filepath)
                    print(f"Saved {filepath}")
    except Exception as e:
        print(f"Error fetching chunk: {e}")

print("All asset exports completed.")

import json
import urllib.request
import os

token = 'figd_3tYONP-uSLd-1K4BpWwFEUiLwqghYOj-u6D3uwhq'
file_key = 'erW05XQHpQkXVdkwTkRTAD'
headers = {'X-Figma-Token': token}

with open('figma_node.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

root = data.get('nodes', {}).get('3311:2', {}).get('document', {})

# Let's inspect major child sections of the Launchadsfast frame
main_frame = None
for child in root.get('children', []):
    if child.get('name') == 'Launchadsfast':
        main_frame = child
        break

if not main_frame:
    main_frame = root

print("Main frame children:")
sections = []
for i, child in enumerate(main_frame.get('children', [])):
    name = child.get('name')
    box = child.get('absoluteBoundingBox', {})
    print(f"{i}: {name} ({box.get('width')}x{box.get('height')}) id={child.get('id')}")
    sections.append((i, name, child.get('id')))

with open('sections.json', 'w', encoding='utf-8') as f:
    json.dump(sections, f, indent=2)

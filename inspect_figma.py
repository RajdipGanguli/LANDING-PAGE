import json
import os
import shutil

# Copy preview image to brain directory for viewing
brain_dir = r"C:\Users\Rajdip\.gemini\antigravity-ide\brain\da37f5db-f84a-47f0-a599-604ef3ddac39"
if os.path.exists("figma_design_preview.png"):
    shutil.copy("figma_design_preview.png", os.path.join(brain_dir, "figma_design_preview.png"))
    print("Copied preview to brain directory.")

with open("figma_node.json", "r", encoding="utf-8") as f:
    data = json.load(f)

node = data.get("nodes", {}).get("3311:2", {}).get("document", {})

print(f"Root: {node.get('name')} | Type: {node.get('type')}")
bbox = node.get("absoluteBoundingBox", {})
print(f"Size: {bbox.get('width')} x {bbox.get('height')}")
print(f"Background: {node.get('backgroundColor')}")

def dump_tree(n, depth=0):
    indent = "  " * depth
    name = n.get("name", "unnamed")
    ntype = n.get("type", "")
    box = n.get("absoluteBoundingBox", {})
    w = box.get("width", 0)
    h = box.get("height", 0)
    
    text_info = ""
    if ntype == "TEXT":
        chars = n.get("characters", "").replace("\n", " \\n ")
        style = n.get("style", {})
        font = style.get("fontFamily", "")
        size = style.get("fontSize", "")
        weight = style.get("fontWeight", "")
        color = ""
        fills = n.get("fills", [])
        if fills and fills[0].get("type") == "SOLID":
            c = fills[0].get("color", {})
            color = f" rgba({c.get('r',0)*255:.0f},{c.get('g',0)*255:.0f},{c.get('b',0)*255:.0f},{fills[0].get('opacity',1)})"
        text_info = f" -> \"{chars}\" [{font} {weight} {size}px{color}]"
    
    fill_info = ""
    fills = n.get("fills", [])
    if fills and ntype != "TEXT":
        fill_types = [f.get("type") for f in fills]
        fill_info = f" fills={fill_types}"

    layout_info = ""
    if n.get("layoutMode"):
        lm = n.get("layoutMode")
        item_spacing = n.get("itemSpacing", 0)
        pad_t = n.get("paddingTop", 0)
        pad_r = n.get("paddingRight", 0)
        pad_b = n.get("paddingBottom", 0)
        pad_l = n.get("paddingLeft", 0)
        layout_info = f" [Flex: {lm}, gap:{item_spacing}, pad:({pad_t},{pad_r},{pad_b},{pad_l})]"

    print(f"{indent}- [{ntype}] {name} ({w:.0f}x{h:.0f}){layout_info}{fill_info}{text_info}")
    
    for child in n.get("children", []):
        dump_tree(child, depth + 1)

dump_tree(node)

import os

files = os.listdir('public/assets')
print(f"Files in public/assets ({len(files)}):")
for f in sorted(files):
    size = os.path.getsize(os.path.join('public/assets', f))
    print(f"  {f} ({size} bytes)")

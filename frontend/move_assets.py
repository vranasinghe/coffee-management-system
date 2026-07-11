import os
import shutil

src_base = r"Stradale\Stardale HTML"
dest_base = "public"

folders = ["css", "fonts", "images", "js", "vendor", "video"]

os.makedirs(dest_base, exist_ok=True)

for folder in folders:
    src_dir = os.path.join(src_base, folder)
    dest_dir = os.path.join(dest_base, folder)
    if os.path.exists(src_dir):
        print(f"Moving {src_dir} to {dest_dir}...")
        if os.path.exists(dest_dir):
            shutil.rmtree(dest_dir)
        shutil.move(src_dir, dest_dir)
    else:
        print(f"Folder not found: {src_dir}")

print("\nAssets successfully moved to public/!")

import os
import zipfile

def restore():
    # Paths
    zip_path = r"C:\Users\LENOVO\Downloads\cafe-restaurant-bootstrap-web-template-stradale-2025-09-15-23-21-21-utc.zip"
    dest_dir = r"Stradale\Stardale HTML\video"
    
    if not os.path.exists(zip_path):
        print(f"Zip file not found at: {zip_path}")
        return
        
    os.makedirs(dest_dir, exist_ok=True)
    
    print(f"Opening zip file: {zip_path}")
    with zipfile.ZipFile(zip_path, 'r') as zip_ref:
        for file_info in zip_ref.infolist():
            # Search for the video files inside the zip
            filename = file_info.filename
            if "local-video" in filename.lower() and (filename.endswith(".mp4") or filename.endswith(".webm") or filename.endswith(".ogv")):
                # Get the base name (e.g. local-video.mp4)
                base_name = os.path.basename(filename)
                target_path = os.path.join(dest_dir, base_name)
                
                print(f"Extracting {base_name} to {target_path}...")
                with zip_ref.open(file_info) as source, open(target_path, "wb") as target:
                    target.write(source.read())
                    
    print("\nVideo files restored successfully!")

if __name__ == "__main__":
    restore()

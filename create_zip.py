import zipfile
import os

with zipfile.ZipFile('../math_jojo_fixed.zip', 'w', zipfile.ZIP_DEFLATED) as z:
    for root, dirs, files in os.walk('.'):
        for file in files:
            # Skip the 'math' directory completely to avoid zip-bombing/recursive if it was created
            if 'math' in root:
                continue
            
            file_path = os.path.join(root, file)
            # Create a path with forward slashes for Linux compatibility inside the zip
            archive_name = os.path.relpath(file_path, '.').replace('\\', '/')
            
            # Write to zip
            z.write(file_path, archive_name)
print("Zip created successfully with forward slashes.")

import re

with open('script.js', 'r', encoding='utf-8') as f:
    c = f.read()

# img: "assets/xxx" のパターンをすべて抽出
referenced = re.findall(r'img:\s*"assets/([^"]+)"', c)

import os
existing = set(os.listdir('assets'))

print("=== 存在しないファイル（画像が壊れる原因）===")
for ref in referenced:
    # URL decode %20 -> space
    decoded = ref.replace('%20', ' ')
    if decoded not in existing and ref not in existing:
        print(f"  MISSING: assets/{ref}  (decoded: {decoded})")

print("\n=== 参照数:", len(referenced), "===")

import os
import re
import zipfile

SCRIPT_FILE = 'script.js'
ASSETS_DIR = 'assets'
ZIP_FILE = '../math_jojo_fixed.zip'

def main():
    print("「スタンド」発動！アセットの自動追加を開始します...")

    # 1. script.js を読み込む
    with open(SCRIPT_FILE, 'r', encoding='utf-8') as f:
        script_content = f.read()

    # assets フォルダ内のファイルを取得
    all_files = os.listdir(ASSETS_DIR) if os.path.exists(ASSETS_DIR) else []
    
    # 画像（キャラクター候補）と音楽（BGM候補）を分ける
    img_files = sorted([f for f in all_files if f.lower().endswith(('.png', '.jpg', '.jpeg', '.webp'))])
    mp3_files = sorted([f for f in all_files if f.lower().endswith('.mp3')])

    # ==========================
    # キャラクターの自動追加
    # ==========================
    added_chars = 0
    for img in img_files:
        # すでに script.js に記載されているかチェック
        # (assets/○○.png などの形式を探す)
        if f'assets/{img}' not in script_content:
            # 拡張子を除いたファイル名をキャラクター名にする
            char_name = os.path.splitext(img)[0]
            new_char_block = f""",
    {{ 
        name: "{char_name}", 
        img: "assets/{img}", 
        quotes: ["「オラオラ！新キャラだッ！」", "「グレートですよこいつはァ！」"],
        successSFX: "correct.mp3",
        failSFX: "wrong.mp3"
    }}"""
            # マーカーと置換
            script_content = script_content.replace('    // AUTO_GEN_CHARACTERS_END', new_char_block + '\n    // AUTO_GEN_CHARACTERS_END')
            added_chars += 1
            print(f"[新キャラ追加] {char_name} (画像: {img})")

    # ==========================
    # BGMの自動追加
    # ==========================
    added_bgms = 0
    for mp3 in mp3_files:
        # BGMっぽい名前 ("bgm" や "theme") を含むファイルだけを対象とする（SFXと区別するため）
        if "bgm" in mp3.lower() or "theme" in mp3.lower():
            if f"'{mp3}'" not in script_content and f'"{mp3}"' not in script_content:
                new_bgm_line = f"    ,\n    '{mp3}'\n    // AUTO_GEN_BGM_END"
                # マーカーと置換
                script_content = script_content.replace('    // AUTO_GEN_BGM_END', new_bgm_line)
                added_bgms += 1
                print(f"[新BGM追加] {mp3}")

    # 2. script.js を上書き保存
    if added_chars > 0 or added_bgms > 0:
        with open(SCRIPT_FILE, 'w', encoding='utf-8') as f:
            f.write(script_content)
        print(f"[SUCCESS] script.js updated! (New Characters: {added_chars}, New BGM: {added_bgms})")
    else:
        print("[INFO] No new assets found.")

    # ==========================
    # ZIPに固め直す（Netlify対応 /区切り）
    # ==========================
    print(f"Creating {ZIP_FILE} (Linux format)...")
    with zipfile.ZipFile(ZIP_FILE, 'w', zipfile.ZIP_DEFLATED) as z:
        for root, dirs, files in os.walk('.'):
            for file in files:
                # このスクリプト自体や特定のもの以外を含める
                if 'math' in root:
                    continue
                file_path = os.path.join(root, file)
                archive_name = os.path.relpath(file_path, '.').replace('\\', '/')
                z.write(file_path, archive_name)
    
    print("Automation complete! Enjoy your updated app on Netlify!")

if __name__ == "__main__":
    main()

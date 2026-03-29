import re

with open('script.js', 'r', encoding='utf-8') as f:
    c = f.read()

# 存在しないファイルと代替ファイルのマッピング
patch = {
    'assets/polnareff_manga.png':   'assets/polnareff.png',
    'assets/okuyasu_manga.png':     'assets/okuyasu.png',
    'assets/JJBACreamCard.png':     'assets/Cream.png',
    'assets/JJBATenoreSaxCard.png': 'assets/OVATarot_TenoreSaxCard.png',
    'assets/iggy2.png':             'assets/iggy.png',
    'assets/stroheim.jpg':          'assets/stroheim_manga.png',
    # jojo_bg.png はキャラではないので、img を差し替えるより
    # そのキャラエントリ自体を除外する（後述）
}

for old, new in patch.items():
    c = c.replace(f'img: "{old}"', f'img: "{new}"')

# jojo_bg.png を使ったキャラクター（ジョースター一行）ブロックを削除する
# パターン: { ... img: "assets/jojo_bg.png" ... } の1ブロックを除去
c = re.sub(
    r',?\s*\{[^{}]*img:\s*"assets/jojo_bg\.png"[^{}]*\}',
    '',
    c,
    flags=re.DOTALL
)

with open('script.js', 'w', encoding='utf-8') as f:
    f.write(c)

print('Fixed! Missing images patched in script.js')

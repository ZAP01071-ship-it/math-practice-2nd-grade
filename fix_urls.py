import re

with open('script.js', 'r', encoding='utf-8') as f:
    c = f.read()

# スペース入りのファイル名をURLエンコードして修正する
space_files = [
    'Hanged Man', 'High Priestess', 'Tenore Sax',
    'Tower of Gray', 'Wheel of Fortune', 'Yellow Temperance'
]
for name in space_files:
    old = f'assets/{name}.png'
    new = f'assets/{name.replace(" ", "%20")}.png'
    c = c.replace(f'img: "{old}"', f'img: "{new}"')

with open('script.js', 'w', encoding='utf-8') as f:
    f.write(c)

print('Fixed space URLs in script.js!')

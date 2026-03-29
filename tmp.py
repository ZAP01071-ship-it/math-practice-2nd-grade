import json

with open('script.js', 'r', encoding='utf-8') as f:
    c = f.read()

reps = {
    '400px-Strength_Infobox_Manga': 'ストレングス', 'ANUBIS': 'アヌビス神', 'Atum': 'アトゥム神', 'Bastet': 'バステト女神',
    'Cream': 'クリーム', 'DARKBRUEMOON': 'ダークブルームーン', 'DEATH13': 'デス13', 'EBONYDEVIL': 'エボニーデビル',
    'Emperor': 'エンペラー', 'Empress': 'エンプレス', 'Hanged Man': 'ハングドマン', 'High Priestess': 'ハイプリエステス',
    'Horus': 'ホルス神', 'JJBACreamCard': 'クリーム(カード)', 'JJBATenoreSaxCard': 'ティナーサックス(カード)',
    'Judgement': 'ジャッジメント', 'Justice': 'ジャスティス', 'Khnum': 'クヌム神', 'LOVERS': 'ラバーズ',
    'OVATarot_CreamCard': 'クリーム(OVA)', 'OVATarot_TenoreSaxCard': 'ティナーサックス(OVA)',
    'OraDora_NPC_3_DIO_1': 'DIO(NPC)', 'OraDora_NPC_3_Joseph_4': 'ジョセフ(NPC)', 'Osiris': 'オシリス神',
    'Sethan': 'セト神', 'Silver_Chariot_SC_Infobox_Manga': 'シルバーチャリオッツ', 'THESTRENGTH': 'ストレングス',
    'THESUN': 'サン', 'THEWORLD': 'ザ・ワールド', 'Tenore Sax': 'ティナー・サックス', 'Tohth': 'トト神',
    'Tower of Gray': 'タワー・オブ・グレー', 'Wheel of Fortune': 'ホィール・オブ・フォーチュン',
    'Yellow Temperance': 'イエローテンパランス', 'avdol': 'アヴドゥル', 'dio': 'DIO', 'geb': 'ゲブ神',
    'harmitparple': 'ハーミットパープル', 'iggy': 'イギー', 'iggy2': 'イギー(覚悟)', 'jojo_bg': 'ジョースター一行',
    'joseph': 'ジョセフ', 'jotaro': '承太郎', 'magiciansred': 'マジシャンズレッド', 'okuyasu': '億泰',
    'polnareff': 'ポルナレフ', 'polnareff2': 'ポルナレフ(闘気)', 'sterplatinam': 'スタープラチナ',
    'strength': 'ストレングス', 'stroheim': 'シュトロハイム', 'the_world': 'ザ・ワールド'
}

for k, v in reps.items():
    c = c.replace(f'name: "{k}"', f'name: "{v}"')

with open('script.js', 'w', encoding='utf-8') as f:
    f.write(c)

print('Names updated!')

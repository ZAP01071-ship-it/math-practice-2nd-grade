import re

with open('script.js', 'r', encoding='utf-8') as f:
    text = f.read()

mapping = {
    'Aerosmith': {'name': 'エアロスミス', 'quotes': ['「二酸化炭素で敵を探知するッ！」', '「ボラーレ・ヴィーアッ！」'], 'desc': 'ナランチャのスタンド。戦闘機のような姿をしている。'},
    'Black_Sabbath': {'name': 'ブラック・サバス', 'quotes': ['「再点火したなッ！お前の魂は私のものだッ！」', '「影を通り道にするスタンドだ...」'], 'desc': 'ポルポのスタンド。矢で素質を試す自動操縦型。'},
    'Bruno_Bucciarati': {'name': 'ブローノ・ブチャラティ', 'quotes': ['「アリーヴェデルチ！（さよならだ）」', '「覚悟はいいか？俺はできてる」'], 'desc': 'スティッキィ・フィンガーズの本体。頼れるリーダー。'},
    'Diavolo': {'name': 'ディアボロ', 'quotes': ['「帝王はこのディアボロだッ！！」', '「結果だけが残るッ！この世には結果だけだッ！」'], 'desc': 'キング・クリムゾンの本体。パッショーネのボス。'},
    'GER': {'name': 'ゴールド・エクスペリエンス・レクイエム', 'quotes': ['「真実に到達することは決してないッ！」', '「始まりさえも存在しない無へ戻るッ！」'], 'desc': '矢の力で進化した究極のスタンド。終わりがないのが終わり。'},
    'Giorno_Giovanna': {'name': 'ジョルノ・ジョバァーナ', 'quotes': ['「このジョルノ・ジョバァーナには夢がある！」', '「覚悟とは暗闇の荒野に！！進むべき道を切り開くことだッ！」'], 'desc': 'ゴールド・エクスペリエンスの本体。ギャングスターに憧れる少年。'},
    'Gold_Experience': {'name': 'ゴールド・エクスペリエンス', 'quotes': ['「生命を与える力...無駄ではないッ！」', '「WRYYYYYYYYYーーッ！！」'], 'desc': 'ジョルノのスタンド。触れたものに生命を与える。'},
    'Guido_Mista': {'name': 'グイード・ミスタ', 'quotes': ['「4という数字は縁起が悪いんだ！」', '「弾丸（たま）はもう込めてあるぜッ！」'], 'desc': 'セックス・ピストルズの本体。4を嫌う凄腕の射撃手。'},
    'King_Crimson': {'name': 'キング・クリムゾン', 'quotes': ['「時を消し飛ばしたッ！」', '「過程は消え、結果だけが残る世界だッ！」'], 'desc': 'ディアボロのスタンド。時間を消し去り、未来を予知する。'},
    'Leone_Abbacchio': {'name': 'レオーネ・アバッキオ', 'quotes': ['「おまえの正体はッ！俺が暴いてやるぜ！」', '「ムーディー・ブルース！再生（リプレイ）開始だッ！」'], 'desc': 'ムーディー・ブルースの本体。元警官で疑い深い性格。'},
    'Mario_Zucchero': {'name': 'マリオ・ズッケェロ', 'quotes': ['「お前らの心臓を止めてやるぜッ！」', '「隠れるのは得意なんだよッ！」'], 'desc': 'ソフト・マシーンの本体。ブチャラティ達を狙う。'},
    'Moody_Blues': {'name': 'ムーディー・ブルース', 'quotes': ['「過去の行動を再生するッ！」', '「もう逃げ場はない、記録は残っているッ！」'], 'desc': 'アバッキオのスタンド。過去の出来事をリプレイする。'},
    'Narancia_Ghirga': {'name': 'ナランチャ・ギルガ', 'quotes': ['「ボラーレ・ヴィーア！（飛んでいきな！）」', '「計算なんてできなくたって勝てるんだッ！」'], 'desc': 'エアロスミスの本体。熱くなりやすいが仲間想いな少年。'},
    'Pannacotta_Fugo': {'name': 'パンナコッタ・フーゴ', 'quotes': ['「この...クサレ脳ミソがァーーッ！」', '「パープル・ヘイズのウイルスは無差別だッ！」'], 'desc': 'パープル・ヘイズの本体。IQ152の天才だが、キレやすい。'},
    'Polpo': {'name': 'ポルポ', 'quotes': ['「信頼という言葉が重要だと思わないか？」', '「このライターの火を24時間守り通せ」'], 'desc': 'パッショーネの幹部。監獄の中から組織を操る。'},
    'Purple_Haze': {'name': 'パープル・ヘイズ', 'quotes': ['「殺人ウイルスを撒き散らすッ！」', '「拳に宿る猛毒は敵味方関係ないッ！」'], 'desc': 'フーゴのスタンド。最凶のウイルスを持つ暴れん坊。'},
    'Sex_Pistols': {'name': 'セックス・ピストルズ', 'quotes': ['「パスだッ！No.5！！」', '「おいミスタ！腹減ったぜッ！」'], 'desc': 'ミスタのスタンド。6人の小さな妖精のような姿。'},
    'Soft_Machine': {'name': 'ソフト・マシーン', 'quotes': ['「風船のようにしぼませてやるッ！」', '「薄く引き伸ばして捕まえるッ！」'], 'desc': 'ズッケェロのスタンド。敵を針で刺して薄くする。'},
    'Spice_Girl': {'name': 'スパイス・ガール', 'quotes': ['「WANNABEEEEーーッ！！」', '「あらゆるものを柔らかくするッ！」'], 'desc': 'トリッシュのスタンド。打撃したものをゴムのように柔らかくする。'},
    'Sticky_Fingers': {'name': 'スティッキィ・フィンガーズ', 'quotes': ['「ジッパーでどこでも切り開くッ！」', '「アリアリアリアリアリッ！」'], 'desc': 'ブチャラティのスタンド。なんにでもジッパーを付ける。'},
    'Trish_Una': {'name': 'トリッシュ・ウナ', 'quotes': ['「柔らかいからこそ、壊れないッ！」', '「私のスパイス・ガールで跳ね返してやるわッ！」'], 'desc': 'スパイス・ガールの本体。ディアボロの娘で、強い意志を持つ。'},
    'Vinegar_Doppio': {'name': 'ヴィネガー・ドッピオ', 'quotes': ['「トゥルルルルル...はい、ドッピオです！」', '「ボス...ご命令をッ！」'], 'desc': 'ボスの別人格。気弱な少年だが、ボスに忠実。'},
    'Hanged Man': {'name': 'ハングドマン', 'quotes': ['「鏡の中は俺の世界だッ！」', '「光の速さで移動するッ！」'], 'desc': 'J・ガイルのスタンド。鏡や光の反射で移動し攻撃する。'},
    'High Priestess': {'name': 'ハイプリエステス', 'quotes': ['「何にでも変身できるッ！」', '「岩石さえも喰らう力ッ！」'], 'desc': 'ミドラーのスタンド。鉱物に化けて襲ってくる。'},
    'Tenore Sax': {'name': 'ティナー・サックス', 'quotes': ['「音の迷宮から逃げられるかッ！」', '「奇妙な音色が頭を支配するッ！」'], 'desc': 'ケニー・Gのスタンド。幻覚で巨大な迷宮を作り出す。'},
    'Tower of Gray': {'name': 'タワー・オブ・グレー', 'quotes': ['「舌が全てを引き裂くッ！」', '「その速さ、目で追えるかッ！」'], 'desc': 'クワガタ虫のスタンド。凄まじいスピードと破壊力を持つ舌。'},
    'Wheel of Fortune': {'name': 'ホィール・オブ・フォーチュン', 'quotes': ['「この車が俺のスタンドだッ！」', '「車体から炎の弾丸ッ！」'], 'desc': 'ズィー・ズィーのスタンド。車と一体化し弾丸を撃ち出す。'},
    'Yellow Temperance': {'name': 'イエローテンパランス', 'quotes': ['「消化できないものはないッ！」', '「俺のスタンドは無敵だッ！」'], 'desc': 'ラバーソウルのスタンド。肉を喰らいなんでも消化する。'}
}

def patch_block(match):
    block = match.group(0)
    name_match = re.search(r'name:\s*"([^"]+)"', block)
    if not name_match:
        return block
    raw_name = name_match.group(1)
    
    found_key = None
    for k in mapping.keys():
        if k in raw_name:
            found_key = k
            break
            
    if not found_key:
        return block
        
    data = mapping[found_key]
    
    block = re.sub(r'name:\s*"[^"]+"', f'name: "{data["name"]}"', block)
    quotes_str = ', '.join([f'"{q}"' for q in data['quotes']])
    
    block = re.sub(r'quotes:\s*\[.*?\]', f'quotes: [{quotes_str}]', block, flags=re.DOTALL)
    
    if 'description:' in block:
        block = re.sub(r'description:\s*"[^"]*"', f'description: "{data["desc"]}"', block)
    else:
        block = re.sub(r'(successSFX:)', f'description: "{data["desc"]}",\n        \\1', block)
        
    return block

new_text = re.sub(r'\{[^{}]*?name:\s*"([^"]+)"[^{}]*?\}', patch_block, text)

with open('script.js', 'w', encoding='utf-8') as f:
    f.write(new_text)

print("Characters updated successfully!")

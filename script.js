const CHARACTERS = [
    { 
        name: "承太郎", 
        img: "assets/jotaro_manga.png", 
        quotes: ["「やれやれだぜ...」", "「てめーはおれを怒らせたッ！」"], 
        description: "スタープラチナの本体。冷静沈着で無敵のスタンドを操る。", 
        successSFX: "ora_ora.mp3", 
        failSFX: "wrong.mp3", 
        successMessages: [{"text": "オラァ！", "sub": "正確な計算だぜ"}, {"text": "やれやれだぜ", "sub": "正解だッ！"}], 
        failMessages: [{"text": "あまいのう…", "sub": "やれやれ、計算ミスだぜ"}, {"text": "てめーは…", "sub": "計算を怒らせたッ！"}]
    },
    { 
        name: "ジョセフ", 
        img: "assets/joseph_manga.png", 
        quotes: ["「おまえの次のセリフは...！」", "「OH! MY GOD!」"], 
        description: "隠者の紫（ハーミットパープル）の本体。念写能力と経験で戦う。", 
        successSFX: "yes_yes.mp3", 
        failSFX: "oh_no.mp3", 
        successMessages: [{"text": "YES!", "sub": "おまえの次のセリフは『正解！』という！"}, {"text": "グッド！", "sub": "ベリーメロン！正解だッ！"}], 
        failMessages: [{"text": "OH MY GOD!", "sub": "計算を間違えるとはッ！！"}, {"text": "あ…ありのまま", "sub": "今起こったミスを話すぜ…"}]
    },
    { 
        name: "花京院", 
        img: "assets/kakyoin.png", 
        quotes: ["「さあ、おしおきの時間だ」", "「レロレロレロレロ...」"], 
        description: "ハイエロファントグリーンの本体。エメラルドスプラッシュを放つ！", 
        successSFX: "rero_rero.mp3", 
        failSFX: "wrong.mp3", 
        successMessages: [{"text": "さあ…", "sub": "おしおきの時間（正解）だ"}, {"text": "レロレロ…", "sub": "正解の味を噛み締めているッ！"}], 
        failMessages: [{"text": "鏡に…", "sub": "ミスを映し出してしまったか"}, {"text": "まさかッ！", "sub": "半径20mエメラルドスプラッシュを外したか！"}]
    },
    { 
        name: "アヴドゥル", 
        img: "assets/avdol_manga.png", 
        quotes: ["「YES I AM!」", "「ファイヤーッ！マジシャンズレッドッ！」"], 
        description: "マジシャンズレッドの本体。炎を自由自在に操る占い師。", 
        successSFX: "correct.mp3", 
        failSFX: "wrong.mp3", 
        successMessages: [{"text": "YES I AM!", "sub": "正解に決まっているッ！"}, {"text": "灼熱の正解！", "sub": "ファイヤーッ！いい計算だ！"}], 
        failMessages: [{"text": "チッチッ！", "sub": "お前の計算は甘いぞ"}, {"text": "占い（計算）が…", "sub": "外れただと…ッ！"}]
    },
    { 
        name: "ポルナレフ", 
        img: "assets/polnareff.png", 
        quotes: ["「ブラボー！おお...ブラボー！！」", "「あ...ありのまま今起こったことを話すぜ！」"], 
        description: "シルバーチャリオッツの本体。騎士道精神に溢れる剣士。", 
        successSFX: "correct.mp3", 
        failSFX: "wrong.mp3", 
        successMessages: [{"text": "ブラボー！", "sub": "おお…ブラボー！！正解だ！"}, {"text": "騎士道精神！", "sub": "正解の剣筋が見えたぜッ！"}], 
        failMessages: [{"text": "あ…ありのまま", "sub": "今起こった計算ミスを話すぜ…"}, {"text": "トイレに…", "sub": "ブタがいた時のような衝撃だぜ"}]
    },
    { 
        name: "イギー", 
        img: "assets/iggy_manga.png", 
        quotes: ["「（コーヒーガムをクチャクチャ...）」", "「ふんッ、犬の手も買りたいのか！」"], 
        description: "ザ・フールの本体。砂を操る誇り高き犬。コーヒーガムが好き。", 
        successSFX: "correct.mp3", 
        failSFX: "wrong.mp3", 
        successMessages: [{"text": "やるじゃねーか", "sub": "コーヒーガムでもやるよ"}, {"text": "フンッ！", "sub": "正解だ、手伝ってやったぜ"}], 
        failMessages: [{"text": "おめーに貸す...", "sub": "手（前足）はねーぜ！"}, {"text": "クチャクチャ", "sub": "砂のようにもろい計算能力だな"}]
    },
    { 
        name: "DIO", 
        img: "assets/dio_manga.png", 
        quotes: ["「無駄無駄無駄無駄ァ！！」", "「時よ止まれッ！ザ・ワールド！」"], 
        description: "ザ・ワールドの本体。時を止める能力を持つ究極の吸血鬼。", 
        successSFX: "za_warudo.mp3", 
        failSFX: "muda_muda.mp3", 
        successMessages: [{"text": "最高にハイ！", "sub": "正解だッ！Wryyyyyyーッ！！"}, {"text": "ロードローラーだ！", "sub": "正解という名の圧力を感じるぞ！"}], 
        failMessages: [{"text": "無駄無駄ァ！", "sub": "きさまの計算は無駄だッ！"}, {"text": "おまえは今まで", "sub": "食ったパンの枚数をおぼえているのか？"}]
    },
    { 
        name: "億泰", 
        img: "assets/okuyasu.png", 
        quotes: ["「ゥンまああ〜〜いっ！」", "「ガオン！ザ・ハンドで削り取るッ！」"], 
        description: "ザ・ハンドの本体。あらゆるものを削り取る空間のスタンド使い。", 
        successSFX: "thehand.mp3", 
        failSFX: "wrong.mp3", 
        successMessages: [{"text": "ゥンまああ〜い！", "sub": "幸せな正解だっ！"}, {"text": "凄すぎて", "sub": "頭からよだれが出てくるぜぇ〜〜！"}], 
        failMessages: [{"text": "ガオン！", "sub": "答えを削り取っちまったァ〜！"}, {"text": "おいおいおい", "sub": "俺よりバカじゃあねーだろーな？"}]
    },
    { 
        name: "シュトロハイム", 
        img: "assets/stroheim_manga.png", 
        quotes: ["「ドイツの科学力は世界一ィィィィ！」", "「我々ドイツ人は完璧なサイボーグだッ！」"], 
        description: "ドイツの軍人。誇り高きサイボーグ。", 
        successSFX: "correct.mp3", 
        failSFX: "wrong.mp3", 
        successMessages: [{"text": "世界一ィィ！", "sub": "我がドイツの計算力は世界一ィィッ！"}, {"text": "完璧だ！", "sub": "最高級の計算能力だな！"}], 
        failMessages: [{"text": "バカモンがァ！", "sub": "我が計算にミスなどないッ！"}, {"text": "再起動だッ！", "sub": "計算機能の再構築が必要だな！"}]
    },
    { 
        name: "スタープラチナ", 
        img: "assets/sterplatinam.png", 
        quotes: ["「オラオラオラオラオラァ！！」", "「スタープラチナ...ザ・ワールドッ！」"], 
        description: "凄まじいパワーとスピード、そして精密な動きを持つ無敵のスタンド。", 
        successSFX: "correct.mp3", 
        failSFX: "wrong.mp3", 
        successMessages: [{"text": "オラオラオラ！", "sub": "流れるような正解だッ！"}, {"text": "裁くのは…", "sub": "俺のスタンド（正解）だッ！"}], 
        failMessages: [{"text": "ぬかせッ！", "sub": "計算ミスだと？やれやれだぜ"}, {"text": "裁くのは…", "sub": "お前のミスだッ！やり直せ！"}]
    },
    { 
        name: "ザ・ワールド", 
        img: "assets/the_world.png", 
        quotes: ["「時は止まる...ザ・ワールドッ！」", "「無駄無駄無駄無駄無駄ァ！！」"], 
        description: "時を止める強力無比なDIOのスタンド。", 
        successSFX: "correct.mp3", 
        failSFX: "wrong.mp3", 
        successMessages: [{"text": "時よ止まれッ！", "sub": "正解の時間だけが動き出すッ！"}, {"text": "このDIOが！", "sub": "正解に導いてやったぞッ！"}], 
        failMessages: [{"text": "無駄無駄ァ！", "sub": "お前の計算は…無駄だッ！"}, {"text": "納得いかん", "sub": "DIOである私がミスを許すとでも？"}]
    },
    { 
        name: "ジョルノ・ジョバァーナ", 
        img: "assets/Giorno_Giovanna_Infobox_Manga.png", 
        quotes: ["「このジョルノ・ジョバァーナには夢がある！」", "「覚悟とは暗闇の荒野に！！進むべき道を切り開くことだッ！」"], 
        description: "ゴールド・エクスペリエンスの本体。ギャングスターに憧れる少年。", 
        successSFX: "correct.mp3", 
        failSFX: "wrong.mp3", 
        successMessages: [{"text": "覚悟とは！！", "sub": "暗闇の荒野に！進むべき正解を切り開くことだッ！"}, {"text": "無駄ではないッ", "sub": "この解答は真実だ！"}], 
        failMessages: [{"text": "無駄無駄ァ！", "sub": "真実（正解）に到達することはないッ！"}, {"text": "無駄な計算だ", "sub": "君の計算には「覚悟」が足りないようだ"}]
    },
    { 
        name: "ブローノ・ブチャラティ", 
        img: "assets/Bruno_Bucciarati_Infobox_Manga.png", 
        quotes: ["「アリーヴェデルチ！（さよならだ）」", "「覚悟はいいか？俺はできてる」"], 
        description: "スティッキィ・フィンガーズの本体。頼れるリーダー。", 
        successSFX: "correct.mp3", 
        failSFX: "wrong.mp3", 
        successMessages: [{"text": "アリーヴェデルチ", "sub": "さよならだ、今の問題（ミス）よ！"}, {"text": "覚悟はいいか？", "sub": "正解への道は俺が切り開いた！"}], 
        failMessages: [{"text": "覚悟が足りん", "sub": "任務（計算）を遂行する覚悟はあるのか！"}, {"text": "嘘をついてる味", "sub": "この計算ミス…嘘をついている味だぜッ！"}]
    },
    { 
        name: "レオーネ・アバッキオ", 
        img: "assets/Leone_Abbacchio_Infobox_Manga.png", 
        quotes: ["「おまえの正体はッ！俺が暴いてやるぜ！」", "「ムーディー・ブルース！再生（リプレイ）開始だッ！」"], 
        description: "ムーディー・ブルースの本体。元警官で疑い深い性格。", 
        successSFX: "correct.mp3", 
        failSFX: "wrong.mp3", 
        successMessages: [{"text": "リプレイ開始！", "sub": "正解を再生（リプレイ）してやるぜッ！"}, {"text": "暴いてやるぜ", "sub": "答えの正体を暴き出したぞッ！"}], 
        failMessages: [{"text": "新入りがァ！", "sub": "俺をイラつかせるなッ！落ち着いて解け！"}, {"text": "アバ茶…", "sub": "アバ茶でも飲んで頭を冷やしてこいッ！"}]
    },
    { 
        name: "グイード・ミスタ", 
        img: "assets/Guido_Mista_Infobox_Manga.png", 
        quotes: ["「4という数字は縁起が悪いんだ！」", "「弾丸（たま）はもう込めてあるぜッ！」"], 
        description: "セックス・ピストルズの本体。4を嫌う凄腕の射撃手。", 
        successSFX: "correct.mp3", 
        failSFX: "wrong.mp3", 
        successMessages: [{"text": "パスだッ！", "sub": "No.5！正解を運んできたぜッ！"}, {"text": "縁起がいいぜ！", "sub": "4以外の解答なら無敵だッ！"}], 
        failMessages: [{"text": "4だとォー！？", "sub": "よりによって4問目か！縁起が悪すぎるぜッ！"}, {"text": "弾が外れた！", "sub": "ミスタ！腹減ってんのか！しっかりしろ！"}]
    },
    { 
        name: "ナランチャ・ギルガ", 
        img: "assets/Narancia_Ghirga_Infobox_Manga.png", 
        quotes: ["「ボラーレ・ヴィーア！（飛んでいきな！）」", "「計算なんてできなくたって勝てるんだッ！」"], 
        description: "エアロスミスの本体。熱くなりやすいが仲間想いな少年。", 
        successSFX: "correct.mp3", 
        failSFX: "wrong.mp3", 
        successMessages: [{"text": "ボラーレ・ヴィーア", "sub": "正解して飛んでいきなッ！"}, {"text": "やったぜ！", "sub": "フーゴも驚くくらいの正解だッ！"}], 
        failMessages: [{"text": "わかんねーよ！", "sub": "16×55が何で28なんだよォーッ！"}, {"text": "クサレ脳ミソ！", "sub": "自分にムカつくぜッ！やり直しだッ！"}]
    },
    { 
        name: "パンナコッタ・フーゴ", 
        img: "assets/Pannacotta_Fugo_Infobox_Manga.png", 
        quotes: ["「この...クサレ脳ミソがァーーッ！」", "「パープル・ヘイズのウイルスは無差別だッ！」"], 
        description: "パープル・ヘイズの本体。IQ152の天才だが、キレやすい。", 
        successSFX: "correct.mp3", 
        failSFX: "wrong.mp3", 
        successMessages: [{"text": "低能ではないな", "sub": "当然の正解です。褒めてあげましょう"}, {"text": "正解です", "sub": "IQ152の期待に応えてくれましたね"}], 
        failMessages: [{"text": "ボケがァーーッ", "sub": "この…クサレ脳ミソがァーーッ！"}, {"text": "泥水で…", "sub": "計算ミスだと？泥水ですすいでもらうぞッ！"}]
    },
    { 
        name: "トリッシュ・ウナ", 
        img: "assets/Trish_Una_Infobox_Manga.png", 
        quotes: ["「柔らかいからこそ、壊れないッ！」", "「私のスパイス・ガールで跳ね返してやるわッ！」"], 
        description: "スパイス・ガールの本体。ディアボロの娘で、強い意志を持つ。", 
        successSFX: "correct.mp3", 
        failSFX: "wrong.mp3", 
        successMessages: [{"text": "柔らかいわ！", "sub": "どんな難問も柔らかく（正解に）してあげる！"}, {"text": "WANNABEE!", "sub": "一味違う正解を見せてあげるわッ！"}], 
        failMessages: [{"text": "不潔よッ！", "sub": "ミスなんて…触りたくもないわッ！"}, {"text": "壊れないわ", "sub": "ミスしたくらいで私は折れないわッ！"}]
    },
    { 
        name: "ディアボロ", 
        img: "assets/Diavolo_Revealed_Infobox_Manga.png", 
        quotes: ["「帝王はこのディアボロだッ！！」", "「結果だけが残るッ！この世には結果だけだッ！」"], 
        description: "キング・クリムゾンの本体。パッショーネのボス。", 
        successSFX: "correct.mp3", 
        failSFX: "wrong.mp3", 
        successMessages: [{"text": "絶頂だッ！", "sub": "過程を飛ばして、正解という結果だけが残る！"}, {"text": "帝王はこの私だ", "sub": "計算さえも支配下にあるッ！"}], 
        failMessages: [{"text": "時を飛ばしたか", "sub": "正解への過程を消し飛ばしてしまったか…"}, {"text": "ドッピオ…", "sub": "私の指示が聞こえなかったのか…！？"}]
    },
    { 
        name: "ヴィネガー・ドッピオ", 
        img: "assets/Vinegar_Doppio_Infobox_Manga.png", 
        quotes: ["「トゥルルルルル...はい、ドッピオです！」", "「ボス...ご命令をッ！」"], 
        description: "ボスの別人格。気弱な少年だが、ボスに忠実。", 
        successSFX: "correct.mp3", 
        failSFX: "wrong.mp3", 
        successMessages: [{"text": "トゥルルルルル", "sub": "ボス！正解しましたよッ！"}, {"text": "エピタフ！", "sub": "正解の未来が見えましたッ！"}], 
        failMessages: [{"text": "電話が…！", "sub": "電話（カエル）の音で計算を間違えちゃいました…"}, {"text": "うあああああ", "sub": "やっちゃった…ボスに怒鳴られちゃう！"}]
    },
    { 
        name: "アヌビス神", 
        img: "assets/ANUBIS.png", 
        quotes: ["「我が剣の前に逃げ場はないッ！」", "「一度見た攻撃は二度と効かんッ！」"], 
        description: "刀に宿るスタンド。持ち主を操り、一度受けた攻撃を記憶する。", 
        successSFX: "correct.mp3", 
        failSFX: "wrong.mp3"
    },
    { 
        name: "アトゥム神", 
        img: "assets/Atum.png", 
        quotes: ["「お前の本音は知っている...」", "「魂をもらうぞッ！」"], 
        description: "ダービー弟のスタンド。魂をコレクションし、心を読む。", 
        successSFX: "correct.mp3", 
        failSFX: "wrong.mp3", 
        successMessages: [{"text": "YES! YES!", "sub": "君が正解することはわかっていたッ！"}, {"text": "お前の心…", "sub": "正解を確信しているようだな！"}], 
        failMessages: [{"text": "NO! NO!", "sub": "計算ミスをするとは…意外だなッ！"}, {"text": "魂をもらうぞ", "sub": "負け（ミス）を認めるんだなッ！"}]
    },
    { 
        name: "オシリス神", 
        img: "assets/Osiris.png", 
        quotes: ["「魂はコインに変わるッ！」", "「賭けに負けたら魂をもらうッ！」"], 
        description: "ダービー兄のスタンド。賭けに負けた者の魂をコインに変える。", 
        successSFX: "correct.mp3", 
        failSFX: "wrong.mp3", 
        successMessages: [{"text": "GOOD!", "sub": "君の魂を賭けるに値する正解だ！"}, {"text": "コールだ！", "sub": "完璧な勝利（正解）だッ！"}], 
        failMessages: [{"text": "魂をもらう！", "sub": "計算ミスだ！君の魂をコインに変えるぞ！"}, {"text": "イカサマか？", "sub": "このミス…わざとではないだろうな？"}]
    },
    { 
        name: "ゲブ神", 
        img: "assets/geb.png", 
        quotes: ["「水は全てを貫くッ！」", "「ンドゥールの歌声が聞こえるかッ！」"], 
        description: "ンドゥールのスタンド。水を自在に操り遠隔から攻撃する。", 
        successSFX: "correct.mp3", 
        failSFX: "wrong.mp3", 
        successMessages: [{"text": "聞こえるぞ", "sub": "正解の音が…確実になッ！"}, {"text": "正確だ…", "sub": "水のように純粋で正確な計算だ"}], 
        failMessages: [{"text": "外したか…", "sub": "風の音が計算を狂わせたか…"}, {"text": "ンドゥール…", "sub": "ミスに臆する私ではないッ！"}]
    },
    { 
        name: "トト神", 
        img: "assets/Tohth.png", 
        quotes: ["「漫画に描かれた未来は必ず来るッ！」", "「未来を知る者に勝てるわけがないッ！」"], 
        description: "ボインゴのスタンド。近い未来を予知する漫画の本。", 
        successSFX: "correct.mp3", 
        failSFX: "wrong.mp3", 
        successMessages: [{"text": "予言通りだ！", "sub": "漫画に描かれた正解は外れないッ！"}, {"text": "やったー！", "sub": "お兄ちゃんの言う通りに正解したぞ！"}], 
        failMessages: [{"text": "予言が…！", "sub": "漫画の内容が変わっちゃったッ！"}, {"text": "えーん…", "sub": "ボクの計算、間違ってたのー！？"}]
    },
    { 
        name: "シルバーチャリオッツ", 
        img: "assets/Silver_Chariot_SC_Infobox_Manga.png", 
        quotes: ["「銀の剣が貫くッ！」", "「鎧を脱げばさらに速くなるッ！」"], 
        description: "ポルナレフのスタンド。目にも止まらぬ剣さばき！", 
        successSFX: "correct.mp3", 
        failSFX: "wrong.mp3", 
        successMessages: [{"text": "貫いたッ！", "sub": "正確な剣筋（計算）だッ！"}, {"text": "ブラボー！", "sub": "騎士道精神に溢れる正解だ！"}], 
        failMessages: [{"text": "外しただと…", "sub": "鎧を脱いで出直してこいッ！"}, {"text": "速さが足りん！", "sub": "計算のスピードが落ちているぞ！"}]
    },
    { 
        name: "ゴールド・エクスペリエンス・レクイエム", 
        img: "assets/GER_Infobox_Manga.png", 
        quotes: ["「真実に到達することは決してないッ！」", "「始まりさえも存在しない無へ戻るッ！」"], 
        description: "矢の力で進化した究極のスタンド。終わりがないのが終わり。", 
        successSFX: "correct.mp3", 
        failSFX: "wrong.mp3", 
        successMessages: [{"text": "無駄無駄無駄！", "sub": "「正解」という真実に到達したようだな"}, {"text": "無へ戻れ", "sub": "間違いはすべて無へと帰したッ！"}], 
        failMessages: [{"text": "到達することはない", "sub": "お前が「正解」という真実に到達することはない…"}, {"text": "終わりがない", "sub": "終わりのないのが終わり。それが計算ミスだ"}]
    },
    { 
        name: "エアロスミス", 
        img: "assets/Aerosmith_Infobox_Manga.jpg", 
        quotes: ["「二酸化炭素で敵を探知するッ！」", "「ボラーレ・ヴィーアッ！」"], 
        description: "ナランチャのスタンド。戦闘機のような姿をしている。", 
        successSFX: "correct.mp3", 
        failSFX: "wrong.mp3", 
        successMessages: [{"text": "ボラーレ・ヴィーア！", "sub": "正解して飛んでいきなッ！"}, {"text": "やったぜ！", "sub": "正確な機銃掃射（計算）だッ！"}], 
        failMessages: [{"text": "わかんねーよ！", "sub": "計算が合わねええーーッ！"}, {"text": "クサレ脳ミソが！", "sub": "フーゴに怒られる前にやり直しだッ！"}]
    }
    // AUTO_GEN_CHARACTERS_END
];

const CORRECT_MESSAGES = [
    { text: "オラオラ！", sub: "正解だッ！最高にハイってやつだ！" },
    { text: "グレート！", sub: "ディ・モールト（非常に）良いぞッ！" },
    { text: "YES I AM!", sub: "正解に決まっているッ！" },
    { text: "ブラボー！", sub: "正解だ！おお…ブラボー！！" },
    { text: "ゥンまああ〜いっ！", sub: "素晴らしい正解の味だッ！" },
    { text: "「納得」だッ！", sub: "おまえの計算には「納得」があるッ！" }
];

const WRONG_MESSAGES = [
    { text: "無駄無駄！", sub: "計算が甘いぞッ！やり直せッ！" },
    { text: "やれやれだぜ", sub: "計算ミスだと…？やれやれだぜ" },
    { text: "再起不能", sub: "リカバーしろッ！まだ終わっちゃいない！" },
    { text: "ド低能がァー", sub: "落ち着いて解けッ！覚悟はあるのか！" },
    { text: "ガオン！", sub: "答えを削り取られたぞッ！" },
    { text: "何だとォー！", sub: "ありのまま、今起こったミスを話すぜ…" }
];

let currentQuestion = 0;
let score = 0;
let questions = [];
let currentChar = null;

// DOM Elements
const startScreen = document.getElementById('start-screen');
const gameScreen = document.getElementById('game-screen');
const resultScreen = document.getElementById('result-screen');
const startBtn = document.getElementById('start-btn');
const retryBtn = document.getElementById('restart-btn');
const resultZukanBtn = document.getElementById('result-zukan-btn');
const backToTitleBtn = document.getElementById('back-to-title-btn');
const questionText = document.getElementById('question-text');
const questionNumber = document.getElementById('question-number');
const progressBar = document.getElementById('progress-bar');
const feedbackOverlay = document.getElementById('feedback');
const feedbackText = document.getElementById('feedback-text');
const feedbackSubtext = document.getElementById('feedback-subtext');
const finalScore = document.getElementById('final-score');
const charImg = document.getElementById('char-img');
const startQuote = document.querySelector('.quote');
const optionsContainer = document.getElementById('options-container');

// 図鑑用 Elements & State
const zukanBtn = document.getElementById('zukan-btn');
const zukanScreen = document.getElementById('zukan-screen');
const closeZukanBtn = document.getElementById('close-zukan-btn');
const zukanContainer = document.getElementById('zukan-container');

// 拡大表示モーダル用
const zukanModal = document.getElementById('zukan-modal');
const zukanModalImg = document.getElementById('zukan-modal-img');
const zukanModalName = document.getElementById('zukan-modal-name');
const zukanModalDesc = document.getElementById('zukan-modal-desc');
const zukanModalClose = document.getElementById('zukan-modal-close');

let unlockedCharacters = JSON.parse(localStorage.getItem('jojoZukan')) || [];

// BGMの設定
const BGM_LIST = [
    'jojo_bgm.mp3',
    'jojo_bgm_2.mp3',
    'jojo_bgm_3.mp3',
    'jojo_bgm_4.mp3',
    'jojo_bgm_5.mp3',
    'stardust_mashup.mp3',
    'jotaro-theme-but-only-the-good-parts-are-in-audiotrimmer.mp3'
    // AUTO_GEN_BGM_END
];
let bgm = null;
let bgmPlaying = false;
const bgmToggle = document.getElementById('bgm-toggle');

// =========================================
// 今日の全問正解ストリークカウンター
// =========================================
function getTodayKey() {
    const d = new Date();
    return `jojoStreak_${d.getFullYear()}_${d.getMonth()+1}_${d.getDate()}`;
}

function getTodayStreak() {
    return parseInt(localStorage.getItem(getTodayKey()) || '0', 10);
}

function incrementTodayStreak() {
    const count = getTodayStreak() + 1;
    localStorage.setItem(getTodayKey(), count);
    return count;
}

function updateStreakDisplay() {
    const count = getTodayStreak();
    const todayCountEl = document.getElementById('today-count');
    if (todayCountEl) todayCountEl.innerText = count;
    return count;
}

function initBGM() {
    if (bgm) {
        bgm.pause();
        bgm = null;
    }
    // 短すぎるものやエラーが起きやすいファイルがあれば除外リストに追加可能
    const filteredBGM = BGM_LIST.filter(file => file !== 'jojo_bgm_2.mp3');
    const randomBGM = filteredBGM[Math.floor(Math.random() * filteredBGM.length)];
    bgm = new Audio(`assets/${randomBGM}`);
    bgm.loop = true;
    bgm.volume = 0.4;
    
    // ループ再生をより確実にする
    bgm.addEventListener('ended', function() {
        this.currentTime = 0;
        this.play().catch(e => console.log("BGM loop fail:", e));
    }, false);
}

function toggleBGM() {
    if (!bgm) initBGM();
    if (bgmPlaying) {
        bgm.pause();
        bgmToggle.innerText = "🔇 BGM OFF";
        bgmPlaying = false;
    } else {
        const playPromise = bgm.play();
        if (playPromise !== undefined) {
            playPromise.then(_ => {
                // Playback started successfully
                bgmToggle.innerText = "🎵 BGM ON";
                bgmPlaying = true;
            }).catch(e => {
                console.log("BGM play failed:", e);
                // Safari or autoplay policy might block this
            });
        }
    }
}

// 音声再生関数
let currentSFX = null;

function playSFX(filename) {
    if (!filename) return;
    
    // もしすでに再生中の効果音があれば、止めてから次を再生する
    if (currentSFX) {
        currentSFX.pause();
        currentSFX.currentTime = 0;
    }
    
    const audio = new Audio(`assets/${filename}`);
    currentSFX = audio;
    audio.play().catch(e => console.log("Audio play blocked or file missing:", e));
}

// 問題生成
function generateQuestions() {
    const qs = [];
    for (let i = 0; i < 10; i++) {
        const type = Math.floor(Math.random() * 3);
        let a, b, q, ans;

        if (type === 0) {
            a = Math.floor(Math.random() * 80) + 10;
            b = Math.floor(Math.random() * (100 - a)) + 1;
            q = `${a} + ${b} = ?`;
            ans = a + b;
        } else if (type === 1) {
            a = Math.floor(Math.random() * 90) + 10;
            b = Math.floor(Math.random() * (a - 5)) + 1;
            q = `${a} - ${b} = ?`;
            ans = a - b;
        } else {
            a = Math.floor(Math.random() * 9) + 1;
            b = Math.floor(Math.random() * 9) + 1;
            q = `${a} × ${b} = ?`;
            ans = a * b;
        }
        qs.push({ q, ans });
    }
    return qs;
}

function startGame() {
    questions = generateQuestions();
    currentQuestion = 0;
    score = 0;
    showQuestion();
    startScreen.classList.add('hidden');
    resultScreen.classList.add('hidden');
    gameScreen.classList.remove('hidden');
}

function generateOptions(correctAns) {
    const options = new Set([correctAns]);
    while (options.size < 4) {
        let offset = Math.floor(Math.random() * 20) - 10;
        let fake = correctAns + offset;
        if (fake !== correctAns && fake > 0) {
            options.add(fake);
        }
    }
    return Array.from(options).sort(() => Math.random() - 0.5);
}

function showQuestion() {
    currentChar = CHARACTERS[Math.floor(Math.random() * CHARACTERS.length)];
    const qBox = document.querySelector('.question-box');
    let qBoxChar = document.getElementById('game-char-img');
    if (!qBoxChar) {
        qBoxChar = document.createElement('img');
        qBoxChar.id = 'game-char-img';
        qBoxChar.className = 'game-character';
        qBox.prepend(qBoxChar);
    }
    qBoxChar.src = currentChar.img;

    const q = questions[currentQuestion];
    questionText.innerText = q.q;
    questionNumber.innerText = `${currentQuestion + 1} / 10`;
    progressBar.style.width = `${(currentQuestion / 10) * 100}%`;

    optionsContainer.innerHTML = '';
    const options = generateOptions(q.ans);
    options.forEach(opt => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.innerText = opt;
        btn.onclick = () => checkAnswer(opt);
        optionsContainer.appendChild(btn);
    });
}

function checkAnswer(userAns) {
    const correctAns = questions[currentQuestion].ans;
    const isCorrect = userAns === correctAns;
    let msgList;
    if (isCorrect) {
        score++;
        msgList = (currentChar && currentChar.successMessages) ? currentChar.successMessages : CORRECT_MESSAGES;
        playSFX(currentChar.successSFX || 'correct.mp3');
    } else {
        msgList = (currentChar && currentChar.failMessages) ? currentChar.failMessages : WRONG_MESSAGES;
        playSFX(currentChar.failSFX || 'wrong.mp3');
    }
    const msg = msgList[Math.floor(Math.random() * msgList.length)];
    showFeedback(msg, isCorrect);
}

function showFeedback(msg, isCorrect) {
    feedbackText.innerText = msg.text;
    feedbackSubtext.innerText = msg.sub;
    
    const feedbackCharImg = document.getElementById('feedback-char-img');
    if (currentChar && feedbackCharImg) {
        feedbackCharImg.src = currentChar.img;
    }

    if (isCorrect) {
        feedbackOverlay.classList.add('correct');
    } else {
        feedbackOverlay.classList.remove('correct');
    }

    feedbackOverlay.classList.remove('hidden');

    setTimeout(() => {
        feedbackOverlay.classList.add('hidden');
        currentQuestion++;
        if (currentQuestion < 10) {
            showQuestion();
        } else {
            showResults();
        }
    }, 1500);
}

function showResults() {
    gameScreen.classList.add('hidden');
    resultScreen.classList.remove('hidden');
    finalScore.innerText = score;
    playSFX('result.mp3');

    const resultMsg = document.getElementById('result-message');
    const resultStreak = document.getElementById('result-streak');

    if (score === 10) {
        // 今日の全問正解カウンターをインクリメント
        const todayCount = incrementTodayStreak();
        updateStreakDisplay();

        // 結果画面にも表示
        if (resultStreak) {
            resultStreak.innerHTML = `🔥 今日の全問正解: <strong style="font-size:1.5rem;color:var(--jojo-yellow)">${todayCount}</strong> 回`;
        }

        let text = "「最高にハイ！」ってやつだアアア！完璧だッ！";
        // 図鑑アンロック処理
        const lockedChars = CHARACTERS.filter(c => !unlockedCharacters.includes(c.name));
        if (lockedChars.length > 0) {
            const unlockChar = lockedChars[Math.floor(Math.random() * lockedChars.length)];
            unlockedCharacters.push(unlockChar.name);
            localStorage.setItem('jojoZukan', JSON.stringify(unlockedCharacters));
            text += `<br><br><span style="color:var(--jojo-pink)">★新しいキャラクター『${unlockChar.name}』を図鑑に登録したぞ！</span>`;
        } else {
            text += `<br><br><span style="color:var(--jojo-gold)">★すでに全キャラクターを図鑑にコンプリートしている！グレート！</span>`;
        }
        resultMsg.innerHTML = text;
    } else {
        // 全問正解でない場合はストリーク数だけ表示
        if (resultStreak) {
            const todayCount = getTodayStreak();
            resultStreak.innerHTML = `🔥 今日の全問正解: <strong style="font-size:1.5rem;color:var(--jojo-yellow)">${todayCount}</strong> 回`;
        }
        if (score >= 7) {
            resultMsg.innerText = "「グレートですよこいつはァ！」黄金の精神を感じるぞッ！\n（全問プレイでスタンド使いが...？）";
        } else {
            resultMsg.innerText = "「やれやれだぜ...」次はもっと覚悟を決めてこいッ！";
        }
    }
}

// Event Listeners
startBtn.onclick = () => {
    if (!bgmPlaying) toggleBGM();
    playSFX('ora_ora.mp3');
    startGame();
};
retryBtn.onclick = () => {
    if (bgmPlaying) {
        bgm.pause();
        initBGM();
        bgm.play().catch(e => console.log("BGM retry play failed:", e));
    }
    playSFX('ora_ora.mp3');
    startGame();
};

if (resultZukanBtn) {
    resultZukanBtn.onclick = () => {
        resultScreen.classList.add('hidden');
        zukanScreen.classList.remove('hidden');
        renderZukan();
    };
}

if (backToTitleBtn) {
    backToTitleBtn.onclick = () => {
        resultScreen.classList.add('hidden');
        startScreen.classList.remove('hidden');
        init(); // 乱数でタイトルキャラ等を再設定
    };
}

bgmToggle.onclick = toggleBGM;

function init() {
    const char = CHARACTERS[Math.floor(Math.random() * CHARACTERS.length)];
    if (charImg) charImg.src = char.img;
    let quote = "「おまえは今まで食ったパンの枚数をおぼえているのか？」";
    if (char.quotes && char.quotes.length > 0) {
        quote = char.quotes[Math.floor(Math.random() * char.quotes.length)];
    }
    if (startQuote) {
        // もしセリフに「プレッシャー」や「無言」が含まれていたらジョジョらしいものに変える（念のため）
        if (quote.includes("無言") || quote.includes("プレッシャー")) {
            quote = "「やれやれだぜ…」";
        }
        startQuote.innerText = quote;
    }
    // 今日のカウンターを初期表示
    updateStreakDisplay();
}

init();

// 図鑑処理
if (zukanBtn) {
    zukanBtn.onclick = () => {
        startScreen.classList.add('hidden');
        zukanScreen.classList.remove('hidden');
        renderZukan();
    };
}

if (closeZukanBtn) {
    closeZukanBtn.onclick = () => {
        zukanScreen.classList.add('hidden');
        startScreen.classList.remove('hidden');
    };
}

function renderZukan() {
    zukanContainer.innerHTML = '';
    CHARACTERS.forEach((char, idx) => {
        const isUnlocked = unlockedCharacters.includes(char.name);
        const item = document.createElement('div');
        item.className = 'zukan-item' + (isUnlocked ? '' : ' zukan-locked');
        
        // 通し番号バッジ（No.001 形式）
        const numBadge = document.createElement('div');
        numBadge.className = 'zukan-num';
        numBadge.innerText = `No.${String(idx + 1).padStart(3, '0')}`;
        
        const img = document.createElement('img');
        img.src = char.img;
        // 画像が壊れていた場合のフォールバック
        img.onerror = () => {
            img.style.display = 'none';
            const fallback = document.createElement('div');
            fallback.className = 'zukan-fallback';
            fallback.innerText = char.name ? char.name[0] : '?';
            item.insertBefore(fallback, name);
        };
        
        const name = document.createElement('div');
        name.className = 'zukan-name';
        name.innerText = isUnlocked ? char.name : '???';
        
        // クリック可能にする処理（解放済みのみ）
        if (isUnlocked) {
            item.style.cursor = 'pointer';
            item.onclick = () => {
                playSFX(char.successSFX);
                zukanModalImg.src = char.img;
                zukanModalName.innerText = char.name;
                zukanModalDesc.innerText = char.description || 'タロットカードやエジプト９栄神に由来する恐るべきスタンド使い。';
                zukanModal.classList.remove('hidden');
            };
        }

        item.appendChild(numBadge);
        item.appendChild(img);
        item.appendChild(name);
        zukanContainer.appendChild(item);
    });

    // モーダルを閉じる処理
    if (zukanModalClose) {
        zukanModalClose.onclick = () => {
            zukanModal.classList.add('hidden');
        };
    }
}

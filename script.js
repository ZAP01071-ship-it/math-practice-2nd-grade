const CHARACTERS = [
    { 
        name: "承太郎（原作）", 
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
        description: "隠者の紫（ハーミットパープル）の本体。高い知略と様々な経験、念写能力で戦う老ジョセフ（第3部）。", 
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
                failSFX: "wrong.mp3",
        successMessages: [{"text": "斬ったッ！", "sub": "正解の急所を捉えたぞッ！"}, {"text": "憶えたぞッ", "sub": "もうその問題は完全に理解した！"}], 
        failMessages: [{"text": "外れた…", "sub": "くっ！計算ミスだと！？"}, {"text": "もう一度だ", "sub": "次は絶対に間違えんッ！"}]
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
,
    { 
        name: "ストレングス", 
        img: "assets/400px-Strength_Infobox_Manga.png", 
        quotes: ["「ウキキキキ！！！」", "「（巨大な拳で迫りくる...）」"],
        description: "巨大な船そのものに同化する強力なスタンド。",
        successSFX: "correct.mp3",
                failSFX: "wrong.mp3",
        successMessages: [{"text": "ウキキキ！", "sub": "お猿さんでもわかる完璧な正解だ！"}, {"text": "巨大な計算", "sub": "船のようにデカい正解だぜ！"}], 
        failMessages: [{"text": "グウウ…", "sub": "計算ミスして怒っているぞ！"}, {"text": "沈没だ…", "sub": "間違えてすべてが水の泡だ！"}]
    }
,
    { 
        name: "音石明", 
        img: "assets/Akira_Otoishi_Infobox_Manga.png", 
        quotes: ["「レッド・ホット・チリ・ペッパー！」", "「ギターのサウンドを聴かせろッ！」"],
        description: "レッド・ホット・チリ・ペッパーの本体。ギタリストを夢見る男。",
        successSFX: "correct.mp3",
                failSFX: "wrong.mp3",
        successMessages: [{"text": "キュイイイン！", "sub": "完璧なセッションだぜッ！"}, {"text": "シビれるねぇ", "sub": "正解の音が響いたぜ！"}], 
        failMessages: [{"text": "チューニングが…", "sub": "狂ってんじゃあねーか！"}, {"text": "アンプが…", "sub": "ショートしちまった！"}]
    }
,
    { 
        name: "吉良吉廣", 
        img: "assets/Atom_Heart_Father_Infobox_Manga.png", 
        quotes: ["「吉影を邪魔する奴は許さんッ！」", "「写真の中から攻撃するッ！」"],
        description: "アトム・ハート・ファーザーの本体。息子のために写真の中で生きる幽霊。",
        successSFX: "correct.mp3",
                failSFX: "wrong.mp3",
        successMessages: [{"text": "よしよし…", "sub": "吉影のように完璧な計算だ"}, {"text": "見事だッ！", "sub": "写真の中から褒めてやろう！"}], 
        failMessages: [{"text": "吉影の邪魔を…", "sub": "するような計算ミスだなッ！"}, {"text": "写真の中で…", "sub": "ミスをもみ消してやらんッ！"}]
    }
,
    { 
        name: "バッド・カンパニー", 
        img: "assets/Bad_Company_Infobox_Manga.png", 
        quotes: ["「ミニチュアの軍隊だッ！」", "「全軍、一斉射撃ッ！」"],
        description: "虹村形兆のスタンド。おもちゃのような兵士達が統率の取れた攻撃を行う。",
        successSFX: "correct.mp3",
                failSFX: "wrong.mp3",
        successMessages: [{"text": "全軍前進！", "sub": "隙のない見事な計算だッ！"}, {"text": "一斉射撃ッ！", "sub": "正確に正解を撃ち抜いたぞ！"}], 
        failMessages: [{"text": "陣形が…", "sub": "崩れているぞッ！やり直せ！"}, {"text": "司令官殿！", "sub": "計算ミスが発生しましたッ！"}]
    }
,
    { 
        name: "バステト女神", 
        img: "assets/Bastet.png", 
        quotes: ["「くっついてしまえェ！」", "「磁力は逃がさないわッ！」"],
        description: "マライアのスタンド。コンセントに触れた者に磁力を帯びさせる。",
        successSFX: "correct.mp3",
                failSFX: "wrong.mp3",
        successMessages: [{"text": "くっついた！", "sub": "正解の法則から逃れられないわよ！"}, {"text": "ウフフ…", "sub": "見事な計算ね、褒めてあげるわ"}], 
        failMessages: [{"text": "あら？", "sub": "計算を間違えるなんて…可愛くないわね"}, {"text": "磁力が…", "sub": "足りずにミスしてしまったようね"}]
    }
,
    { 
        name: "バイツァ・ダスト", 
        img: "assets/Bites_the_Dust_Infobox_Manga.png", 
        quotes: ["「負けて死ねッ！」", "「時間を吹き飛ばして戻るッ！」"],
        description: "キラークイーンの第3の爆弾。絶望の中から時を戻す力を持つ。",
        successSFX: "correct.mp3",
                failSFX: "wrong.mp3",
        successMessages: [{"text": "運命だッ！", "sub": "お前が正解する運命にあるッ！"}, {"text": "スイッチオン！", "sub": "正解という爆発を見届けたぞ！"}], 
        failMessages: [{"text": "時間が…", "sub": "吹き飛ばされるだと…計算ミスか！"}, {"text": "絶望だ…", "sub": "正解に行き着くのは無理だったか…"}]
    }
,
    { 
        name: "ブラック・サバス", 
        img: "assets/Black_Sabbath_Infobox_Manga.png", 
        quotes: ["「再点火したなッ！お前の魂は私のものだッ！」", "「影を通り道にするスタンドだ...」"],
        description: "ポルポのスタンド。矢で素質を試す自動操縦型。",
        successSFX: "correct.mp3",
                failSFX: "wrong.mp3",
        successMessages: [{"text": "魂をよこせ", "sub": "正解したお前の魂は美しい…"}, {"text": "影の道", "sub": "正解に通じる真っ直ぐな道だ"}], 
        failMessages: [{"text": "再点火だ", "sub": "また計算をやり直すんだなッ！"}, {"text": "影が…", "sub": "計算ミスで道が見えなくなった"}]
    }
,
    { 
        name: "チャカ", 
        img: "assets/Chaka_Infobox_Manga.png", 
        quotes: ["「俺は無敵の剣豪だ...」", "「アヌビス神の刃は止まらないッ！」"],
        description: "アヌビス神に操られた農青年。恐るべき剣の達人と化す。",
        successSFX: "correct.mp3",
                failSFX: "wrong.mp3",
        successMessages: [{"text": "斬ったッ！", "sub": "正解の太刀筋が見えたッ！"}, {"text": "見切った！", "sub": "もうこの計算は攻略したぞ！"}], 
        failMessages: [{"text": "刃が…", "sub": "欠けてしまうようなミスだな…"}, {"text": "まだだ…", "sub": "このミスは記憶した…次は負けん！"}]
    }
,
    { 
        name: "クリーム", 
        img: "assets/Cream.png", 
        quotes: ["「闇に帰せよ...」", "「虚無空間（ボイド）は全てを喰らうッ！」"],
        description: "ヴァニラ・アイスのスタンド。暗黒空間で全てを飲み込む。",
        successSFX: "correct.mp3",
                failSFX: "wrong.mp3",
        successMessages: [{"text": "飲み込むぞ", "sub": "正解をガオンと飲み込んだッ！"}, {"text": "暗黒空間", "sub": "ミスのない完璧な空間だッ！"}], 
        failMessages: [{"text": "ボイドッ！", "sub": "答えを削り取ってしまったッ！"}, {"text": "見えない…", "sub": "暗黒空間の中では計算もできないか…$"}]
    }
,
    { 
        name: "ダークブルームーン", 
        img: "assets/DARKBRUEMOON.png", 
        quotes: ["「水の中なら俺が王者だッ！」", "「海の中では俺に敵わん！」"],
        description: "キャプテン・テニルのスタンド。水中戦で無類の強さを誇る。",
        successSFX: "correct.mp3",
                failSFX: "wrong.mp3",
        successMessages: [{"text": "大正解だ！", "sub": "海の中のようにスイスイ解けるぜ！"}, {"text": "王者だッ", "sub": "水中の王者にふさわしい計算だ！"}], 
        failMessages: [{"text": "息が苦しい", "sub": "海の中では計算もままならないか！"}, {"text": "フジツボが", "sub": "計算式について見えなくなっちまった！"}]
    }
,
    { 
        name: "デス13", 
        img: "assets/DEATH13.png", 
        quotes: ["「ラリホー！ラリホー！」", "「夢の中でお前は死ぬッ！」"],
        description: "夢の中を支配するスタンド。「ラリホー」が合言葉。",
        successSFX: "correct.mp3",
                failSFX: "wrong.mp3",
        successMessages: [{"text": "ラリホー！", "sub": "夢の中ならどんな問題も簡単だね！"}, {"text": "天才だー！", "sub": "11ヶ月の赤ん坊より頭いいかも！"}], 
        failMessages: [{"text": "あくびが…", "sub": "計算ミスして眠くなってきたーッ！"}, {"text": "悪夢だー！", "sub": "こんな簡単な計算を間違えるなんて！"}]
    }
,
    { 
        name: "DIO（覚醒前）", 
        img: "assets/DIO_Normal_SC_Infobox_Manga.png", 
        quotes: ["「このDIOには野望があるッ！」", "「人間はやめるぞ！ジョジョーッ！」"],
        description: "石仮面の力で吸血鬼となった邪悪の化身。",
        successSFX: "correct.mp3",
                failSFX: "wrong.mp3",
        successMessages: [{"text": "WRYYYY！", "sub": "素晴らしい正解だ、貧弱な人間よ！"}, {"text": "最高にハイ！", "sub": "その計算力、気に入ってやるぞッ！"}], 
        failMessages: [{"text": "貧弱！貧弱！", "sub": "計算も貧弱すぎるぞッ！"}, {"text": "猿（モンキー）が…", "sub": "猿が人間に計算で勝てるかァーッ！"}]
    }
,
    { 
        name: "エボニーデビル", 
        img: "assets/EBONYDEVIL.png", 
        quotes: ["「呪いの力を舐めるなッ！」", "「恨みが俺を動かすッ！」"],
        description: "呪いのデーボのスタンド。恨みの力で遠隔操作する。",
        successSFX: "correct.mp3",
                failSFX: "wrong.mp3",
        successMessages: [{"text": "呪いの力！", "sub": "恨みのパワーで見事に正解したぜ！"}, {"text": "ヒヒヒ…", "sub": "計算通りの完璧な展開だ！"}], 
        failMessages: [{"text": "恨むぜ…", "sub": "こんな計算ミスをするなんてな…"}, {"text": "チクショウ！", "sub": "なんで間違えるんだァーッ！"}]
    }
,
    { 
        name: "エコーズACT1", 
        img: "assets/Echoes_ACT1_DU_Infobox_Manga.png", 
        quotes: ["「音を貼り付けるッ！」", "「文字が実体化するんだ！」"],
        description: "広瀬康一のスタンド。音を文字にして貼り付け、響かせる。",
        successSFX: "correct.mp3",
                failSFX: "wrong.mp3",
        successMessages: [{"text": "ドジュウウッ", "sub": "正解の音が鳴り響いているよ！"}, {"text": "やったね！", "sub": "ボクの計算よりずっと正確だ！"}], 
        failMessages: [{"text": "文字が…", "sub": "剥がれ落ちちゃった…ミスだね"}, {"text": "ビシィッ！", "sub": "ひ、ひどいミスだァーーッ！"}]
    }
,
    { 
        name: "エンペラー", 
        img: "assets/Emperor.png", 
        quotes: ["「この弾丸は絶対に外さんッ！」", "「銃こそが最強の武器だ！」"],
        description: "ホル・ホースのスタンド。弾丸の軌道を自在に操る拳銃。",
        successSFX: "correct.mp3",
                failSFX: "wrong.mp3",
        successMessages: [{"text": "命中ッ！", "sub": "正解のど真ん中を撃ち抜いたぜ！"}, {"text": "最強の剣！", "sub": "いや、銃は剣よりも強し！大正解だ！"}], 
        failMessages: [{"text": "外したぁ！？", "sub": "弾丸が…計算をそれちまった！"}, {"text": "逃げるぜ！", "sub": "計算ミスしたから一目散に逃げるぜ！"}]
    }
,
    { 
        name: "エンプレス", 
        img: "assets/Empress.png", 
        quotes: ["「もう逃げられないわよッ！」", "「どんどん大きくなるわ...」"],
        description: "ネーナのスタンド。相手の体に寄生して成長する。",
        successSFX: "correct.mp3",
                failSFX: "wrong.mp3",
        successMessages: [{"text": "チュミミーン", "sub": "正解して気分がいいわーッ！"}, {"text": "成長したわ", "sub": "計算力がどんどん大きくなるわね！"}], 
        failMessages: [{"text": "痛いわーッ", "sub": "計算ミスして叩かれたわーッ！"}, {"text": "切り離される", "sub": "計算ミスで切り離されちゃうわ！"}]
    }
,
    { 
        name: "ゴールド・エクスペリエンス", 
        img: "assets/Gold_Experience_Infobox_Manga.png", 
        quotes: ["「生命を与える力...無駄ではないッ！」", "「WRYYYYYYYYYーーッ！！」"],
        description: "ジョルノのスタンド。触れたものに生命を与える。",
        successSFX: "correct.mp3",
                failSFX: "wrong.mp3",
        successMessages: [{"text": "無駄ではない", "sub": "この見事な正解は真実だッ！"}, {"text": "生命が！", "sub": "正解から新たな生命が生まれるッ！"}], 
        failMessages: [{"text": "無駄無駄ァ！", "sub": "真実に到達することはないッ！"}, {"text": "感覚が…", "sub": "計算ミスで暴走しているッ！"}]
    }
,
    { 
        name: "ハングドマン", 
        img: "assets/Hanged Man.png", 
        quotes: ["「鏡の中は俺の世界だッ！」", "「光の速さで移動するッ！」"],
        description: "J・ガイルのスタンド。鏡や光の反射で移動し攻撃する。",
        successSFX: "correct.mp3",
                failSFX: "wrong.mp3",
        successMessages: [{"text": "鏡の世界！", "sub": "光の速さで見事な計算だ！"}, {"text": "見えたぜ", "sub": "背後の鏡に正解が映っているぜ！"}], 
        failMessages: [{"text": "見失った！", "sub": "鏡から出た瞬間に計算ミスだ！"}, {"text": "光が…", "sub": "まぶしくて計算を間違えたッ！"}]
    }
,
    { 
        name: "ハーヴェスト", 
        img: "assets/Harvest_Infobox_Manga.png", 
        quotes: ["「小銭を拾い集めるんだどー！」", "「軍隊みたいにたくさんいるんだど！」"],
        description: "重ちーのスタンド。500体以上いる小人で、探索や収集が得意。",
        successSFX: "correct.mp3",
                failSFX: "wrong.mp3",
        successMessages: [{"text": "見つけたど！", "sub": "正解のお金（点数）を拾ってきたど！"}, {"text": "やったどー！", "sub": "全部正解してお小遣い稼ぎだど！"}], 
        failMessages: [{"text": "落としたど…", "sub": "計算の答えを落としちゃったど…"}, {"text": "イタイどー！", "sub": "ミスして頭が痛いどーッ！！"}]
    }
,
    { 
        name: "ヘブンズ・ドアー", 
        img: "assets/Heaven's_Door_Infobox_Manga.png", 
        quotes: ["「ヘブンズ・ドアー！お前の記憶を読むッ！」", "「『計算ができる』と書き込んでやるッ！」"],
        description: "岸辺露伴のスタンド。相手を本にして記憶を読み、書き込む。",
        successSFX: "correct.mp3",
                failSFX: "wrong.mp3",
        successMessages: [{"text": "読めるぞ！", "sub": "君の頭脳のページは『正解』だ！"}, {"text": "ネタになる", "sub": "素晴らしい！漫画のネタになる計算力だ！"}], 
        failMessages: [{"text": "だが断る", "sub": "そんなお粗末なミスは許されない！"}, {"text": "破り捨てる", "sub": "間違えたページは破り捨ててしまいたい！"}]
    }
,
    { 
        name: "ハイプリエステス", 
        img: "assets/High Priestess.png", 
        quotes: ["「何にでも変身できるッ！」", "「岩石さえも喰らう力ッ！」"],
        description: "ミドラーのスタンド。鉱物に化けて襲っくる。",
        successSFX: "correct.mp3",
                failSFX: "wrong.mp3",
        successMessages: [{"text": "変身ッ！", "sub": "見事な正解に化けたわね！"}, {"text": "噛み砕く！", "sub": "難問も見事に噛み砕いたわ！"}], 
        failMessages: [{"text": "歯が…", "sub": "計算ミスして歯が折れちゃった！"}, {"text": "見破られた", "sub": "偽物の答えだと見破られたわね！"}]
    }
,
    { 
        name: "ハイウェイ・スター", 
        img: "assets/Highway_Star_Infobox_Manga.png", 
        quotes: ["「養分を吸い取るぜッ！」", "「匂いでどこまでも追跡するッ！」"],
        description: "噴上裕也のスタンド。時速60キロでターゲットの匂いを追う。",
        successSFX: "correct.mp3",
                failSFX: "wrong.mp3",
        successMessages: [{"text": "追いついたぜ！", "sub": "正解の匂いは逃がさねーぜッ！"}, {"text": "グレートだぜ", "sub": "おめーの計算、養分にさせてもらうぜ！"}], 
        failMessages: [{"text": "見失ったか…", "sub": "正解の匂いが消えちまった…"}, {"text": "スピードが…", "sub": "計算のスピードが遅すぎるぜッ！"}]
    }
,
    { 
        name: "ホルス神", 
        img: "assets/Horus.png", 
        quotes: ["「凍りつけッ！絶対零度！」", "「氷の翼で空を制するッ！」"],
        description: "鳥のペット・ショップのスタンド。絶対零度の氷を操る。",
        successSFX: "correct.mp3",
                failSFX: "wrong.mp3",
        successMessages: [{"text": "絶対零度！", "sub": "冷静沈着な完璧な正解だ！"}, {"text": "凍りつけ！", "sub": "ミスのない完璧な氷の城だッ！"}], 
        failMessages: [{"text": "砕け散った", "sub": "計算ミスで氷が割れてしまった！"}, {"text": "溶けている", "sub": "焦って計算を間違えたな！"}]
    }
,
    { 
        name: "ジョナサン・ジョースター", 
        img: "assets/Jonathan_Infobox_Manga.png", 
        quotes: ["「震えるぞハート！燃え尽きるほどヒート！！」", "「ふるえるぞハート！刻むぞ血液のビート！」"],
        description: "ジョースター家初代。波紋の呼吸で吸血鬼と戦う誇り高き紳士。",
        successSFX: "correct.mp3",
                failSFX: "wrong.mp3",
        successMessages: [{"text": "ふるえるぞ！", "sub": "君の素晴らしい正解にハートが震えるッ！"}, {"text": "サンライト…", "sub": "イエロー・オーバードライブ（正解）だッ！"}], 
        failMessages: [{"text": "波紋が…", "sub": "乱れたようだね。落ち着いて計算しよう！"}, {"text": "紳士として", "sub": "このようなミスは恥ずかしいぞ！"}]
    }
,
    { 
        name: "東方仗助", 
        img: "assets/Josuke_DU_Infobox_Manga.png", 
        quotes: ["「グレートですよこいつはァ！」", "「俺の髪型がサザエさんみてェーだとォ？」"],
        description: "クレイジー・ダイヤモンドの本体。優しく正義感の強い杜王町の高校生。",
        successSFX: "correct.mp3",
                failSFX: "wrong.mp3",
        successMessages: [{"text": "グレートだぜ！", "sub": "完璧に直（正解）してくれたじゃあねーか！"}, {"text": "スゲーッ！", "sub": "プッツンするくらいスゲー正解だぜ！"}], 
        failMessages: [{"text": "直せねーぜ…", "sub": "この計算ミスは俺の能力でも直せねーな"}, {"text": "おいおいおい", "sub": "俺の髪型より計算に気を使えよッ！"}]
    }
,
    { 
        name: "ジャッジメント", 
        img: "assets/Judgement.png", 
        quotes: ["「願いを叶えてやろうッ！偽物だがなッ！」", "「土の中から生まれ出るッ！」"],
        description: "カメオのスタンド。土で偽物の願いを叶える。",
        successSFX: "correct.mp3",
                failSFX: "wrong.mp3",
        successMessages: [{"text": "願いを叶える", "sub": "君の『正解したい』という願いを叶えよう！"}, {"text": "HAIL 2 U", "sub": "君に幸あれ！完璧な大正解だ！"}], 
        failMessages: [{"text": "土人形だ", "sub": "君の出した答えは偽物の土人形だ！"}, {"text": "願いは…", "sub": "計算ミスの願いなど叶えられん！"}]
    }
,
    { 
        name: "単行本49巻", 
        img: "assets/JumpComics49clean.png", 
        quotes: ["「（黄金の風が吹き抜ける...）」", "「ジョジョの奇妙な冒険 第5部！」"],
        description: "ジョジョの奇妙な冒険の単行本。アバッキオが表紙だ。",
        successSFX: "correct.mp3",
                failSFX: "wrong.mp3",
        successMessages: [{"text": "ページが進む！", "sub": "黄金の風のような見事な正解だ！"}, {"text": "名作だッ！", "sub": "後世に語り継がれる正解だッ！"}], 
        failMessages: [{"text": "インクが…", "sub": "滲んで計算が読めないぞ…"}, {"text": "落丁か？", "sub": "計算のページが抜けているようだな…"}]
    }
,
    { 
        name: "ジャスティス", 
        img: "assets/Justice.png", 
        quotes: ["「霧の中へようこそ...エンヤ婆の支配する世界へ」", "「死体が言うことをきくッ！」"],
        description: "エンヤ婆のスタンド。霧で相手の死体を操る。",
        successSFX: "correct.mp3",
                failSFX: "wrong.mp3",
        successMessages: [{"text": "霧の都…", "sub": "見事な正解だ…歓迎しよう…"}, {"text": "操っている", "sub": "まるで問題を支配しているような計算だ！"}], 
        failMessages: [{"text": "息が…", "sub": "間違えて息ができないのかい？"}, {"text": "死体のように", "sub": "ミスして落ち込んでいるね…フフフ"}]
    }
,
    { 
        name: "虹村形兆", 
        img: "assets/Keicho_Nijimura_Infobox_Manga.png", 
        quotes: ["「弓と矢でスタンド使いを生み出すッ！」", "「俺のバッド・カンパニーに死角はない！」"],
        description: "バッド・カンパニーの本体。弟の億泰に厳しく、冷静な軍師肌。",
        successSFX: "correct.mp3",
                failSFX: "wrong.mp3",
        successMessages: [{"text": "見事な采配だ", "sub": "計算の陣形に全く無駄がないぞ！"}, {"text": "素質があるな", "sub": "弓と矢で射抜きたくなるほどの正解だ！"}], 
        failMessages: [{"text": "臆病者め！", "sub": "こんな計算で俺の軍隊に勝つつもりか！"}, {"text": "死角がある！", "sub": "お前の計算には大きな穴が空いているぞ！"}]
    }
,
    { 
        name: "クヌム神", 
        img: "assets/Khnum.png", 
        quotes: ["「完璧な変装だ...誰にも見破れんッ！」", "「顔さえ変えれば誰にでもなれるッ！」"],
        description: "オインゴのスタンド。顔や姿を完全に他人へ変装できる。",
        successSFX: "correct.mp3",
                failSFX: "wrong.mp3",
        successMessages: [{"text": "完璧な変装", "sub": "正解の顔に完璧に変装できたなッ！"}, {"text": "誰にも…", "sub": "見破られない完璧な計算だ！"}], 
        failMessages: [{"text": "見破られた！", "sub": "計算間違いで変装がバレたぞ！"}, {"text": "身長が…", "sub": "計算ミスで背が縮んでしまった！"}]
    }
,
    { 
        name: "キラークイーン", 
        img: "assets/Killer_Queen_Infobox_Manga.png", 
        quotes: ["「触れたものを爆弾に変えるッ！」", "「シアーハートアタックに弱点はない！」"],
        description: "吉良吉影のスタンド。爆弾で証拠を残さず対象を消し去る。",
        successSFX: "correct.mp3",
                failSFX: "wrong.mp3",
        successMessages: [{"text": "第一の爆弾！", "sub": "スイッチオン！見事に正解を爆破したぞ！"}, {"text": "完璧な爆破", "sub": "ミスという痕跡を一切残さない正解だ…"}], 
        failMessages: [{"text": "爆発しない…", "sub": "計算ミスだ。不発弾といったところか…"}, {"text": "証拠が…", "sub": "計算ミスの証拠が残ってしまったな…"}]
    }
,
    { 
        name: "キング・クリムゾン", 
        img: "assets/King_Crimson_Infobox_Manga.png", 
        quotes: ["「時を消し飛ばしたッ！」", "「過程は消え、結果だけが残る世界だッ！」"],
        description: "ディアボロのスタンド。時間を消し去り、未来を予知する。",
        successSFX: "correct.mp3",
                failSFX: "wrong.mp3",
        successMessages: [{"text": "結果だけだ！", "sub": "この世には正解という結果だけが残る！"}, {"text": "絶頂だッ！", "sub": "帝王の私にふさわしい見事な計算！"}], 
        failMessages: [{"text": "時間を…", "sub": "消し飛ばして計算ミスをなかったことにしたい…"}, {"text": "エピタフ！", "sub": "計算ミスの未来が見えていたというのか！"}]
    }
,
    { 
        name: "ラバーズ", 
        img: "assets/LOVERS.png", 
        quotes: ["「苦しいか...脳の中は居心地がいいぞッ！」", "「極小で最凶のスタンドだッ！」"],
        description: "スティーリー・ダンのスタンド。極小サイズで相手の脳に侵入する。",
        successSFX: "correct.mp3",
                failSFX: "wrong.mp3",
        successMessages: [{"text": "居心地がいい", "sub": "正解した賢い脳の中は居心地がいいぞ！"}, {"text": "フフフ…", "sub": "細かい計算もバッチリだなッ！"}], 
        failMessages: [{"text": "痛みを返そう", "sub": "計算ミスの痛みを何倍にもしてやる！"}, {"text": "極小のミス", "sub": "小さなミスが命取りになるんだぞ！"}]
    }
,
    { 
        name: "マリオ・ズッケェロ", 
        img: "assets/Mario_Zucchero_Infobox_Manga.png", 
        quotes: ["「お前らの心臓を止めてやるぜッ！」", "「隠れるのは得意なんだよッ！」"],
        description: "ソフト・マシーンの本体。ブチャラティ達を狙う。",
        successSFX: "correct.mp3",
                failSFX: "wrong.mp3",
        successMessages: [{"text": "ペラペラだ", "sub": "難問も君にかかればペラペラに薄いな！"}, {"text": "隠れるぜ", "sub": "見事な正解を見て隠れたくなったぜ！"}], 
        failMessages: [{"text": "空気が…", "sub": "抜けるような情けない計算ミスだ！！"}, {"text": "見つかった！", "sub": "ミスを見つけられてしまったぜ！"}]
    }
,
    { 
        name: "メタリカ", 
        img: "assets/Metallica_Infobox_Manga.png", 
        quotes: ["「鉄分を操作して刃物を生み出すッ！」", "「暗殺チームのリーダーだ...」"],
        description: "リゾット・ネエロのスタンド。血中の鉄分を操作し体内から攻撃する。",
        successSFX: "correct.mp3",
                failSFX: "wrong.mp3",
        successMessages: [{"text": "鉄の意志だ", "sub": "お前の計算には一寸の狂いもない"}, {"text": "カミソリの刃", "sub": "鋭い刃物のようにキレのある正解だ"}], 
        failMessages: [{"text": "鉄分不足か", "sub": "頭に鉄分（酸素）が回っていないようだな"}, {"text": "暗殺失敗", "sub": "このようなミスでは暗殺は成功しないぞ"}]
    }
,
    { 
        name: "ムーディー・ブルース", 
        img: "assets/Moody_Blues_Infobox_Manga.png", 
        quotes: ["「過去の行動を再生するッ！」", "「もう逃げ場はない、記録は残っているッ！」"],
        description: "アバッキオのスタンド。過去の出来事をリプレイする。",
        successSFX: "correct.mp3",
                failSFX: "wrong.mp3",
        successMessages: [{"text": "再生開始！", "sub": "見事な正解の過程をリプレイしてやる！"}, {"text": "正体を暴く", "sub": "答えの正体を見事に暴き出したな！"}], 
        failMessages: [{"text": "ノイズが…", "sub": "計算ミスでリプレイが途切れたぞ！"}, {"text": "お茶でも飲め", "sub": "アバ茶でも飲んで落ち着きな！"}]
    }
,
    { 
        name: "DIO(NPC)", 
        img: "assets/OraDora_NPC_3_DIO_1.png", 
        quotes: ["「無駄無駄無駄無駄ァ！！」", "「時よ止まれッ！ザ・ワールド！」"],
        description: "ザ・ワールドの本体。時を止める能力を持つ究極の吸血鬼。",
        successSFX: "correct.mp3",
        failSFX: "wrong.mp3"
    }
,
    { 
        name: "ジョセフ(NPC)", 
        img: "assets/OraDora_NPC_3_Joseph_4.png", 
        quotes: ["「おまえの次のセリフは...！」", "「逃げるんだよォ！スモーキーッ！」"],
        description: "隠者の紫（ハーミットパープル）の本体。念写能力と経験で戦う。",
        successSFX: "correct.mp3",
                failSFX: "wrong.mp3",
        successMessages: [{"text": "次のセリフは", "sub": "『やったぜ！』という！大正解！"}, {"text": "計算通り！", "sub": "これも計算のうちかJOJOーッ！？"}], 
        failMessages: [{"text": "逃げるんだよォ！", "sub": "計算ミスしたらとりあえず逃げるんだよォ！"}, {"text": "ハッピーうれぴー", "sub": "って、間違えてるじゃあねーか！"}]
    }
,
    { 
        name: "エコーズACT3", 
        img: "assets/PAD_Echoes_ACT3_Assist.png", 
        quotes: ["「S・H・I・T（シット）！」", "「3 FREEZE（スリーフリーズ）！重くするッ！」"],
        description: "広瀬康一の進化したスタンド。対象を重力で押さえつける命令を聞く。",
        successSFX: "correct.mp3",
                failSFX: "wrong.mp3",
        successMessages: [{"text": "グッドネス！", "sub": "マスター！パーフェクトな計算です！"}, {"text": "S・H・I・T！", "sub": "シット！と言いたくなるほどの見事な正解！"}], 
        failMessages: [{"text": "3 FREEZE！", "sub": "対象の脳の働きを重くしましたッ！"}, {"text": "S・H・I・T！", "sub": "マスターのお粗末な計算ミスですッ！"}]
    }
,
    { 
        name: "パール・ジャム", 
        img: "assets/Pearl_Jam_Infobox_Manga.png", 
        quotes: ["「料理でお客様の不調を治すンです！」", "「ゥンまああ〜〜いっ！」"],
        description: "トニオ・トラサルディーのスタンド。料理に混入し健康を増進する小人。",
        successSFX: "correct.mp3",
                failSFX: "wrong.mp3",
        successMessages: [{"text": "ボーノ！", "sub": "最高の味（正解）を引き出しましたよ！"}, {"text": "治りました！", "sub": "計算力アップの特製料理が効きましたね！"}], 
        failMessages: [{"text": "味が…", "sub": "ちょっと焦げてしまったようなミスですね…"}, {"text": "スパイスが…", "sub": "足りないか、多すぎる計算ですよ！"}]
    }
,
    { 
        name: "ポルポ", 
        img: "assets/Polpo_Infobox_Manga.png", 
        quotes: ["「信頼という言葉が重要だと思わないか？」", "「このライターの火を24時間守り通せ」"],
        description: "パッショーネの幹部。監獄の中から組織を操る。",
        successSFX: "correct.mp3",
                failSFX: "wrong.mp3",
        successMessages: [{"text": "信頼ですよ", "sub": "あなたの計算力は信頼に足りますね"}, {"text": "テスト合格だ", "sub": "見事な正解…入団を許可しよう"}], 
        failMessages: [{"text": "侮辱したな…", "sub": "私を侮辱するようなミスですね…"}, {"text": "テスト失敗だ", "sub": "火が消えてしまったようですね…"}]
    }
,
    { 
        name: "パープル・ヘイズ", 
        img: "assets/Purple_Haze_Infobox_Manga.png", 
        quotes: ["「殺人ウイルスを撒き散らすッ！」", "「拳に宿る猛毒は敵味方関係ないッ！」"],
        description: "フーゴのスタンド。最凶のウイルスを持つ暴れん坊。",
        successSFX: "correct.mp3",
                failSFX: "wrong.mp3",
        successMessages: [{"text": "うばしゃああ", "sub": "天才的な計算だ！褒めてやるッ！"}, {"text": "きれいにしろ！", "sub": "ミスのない綺麗な計算式だ！"}], 
        failMessages: [{"text": "クサレ脳ミソ", "sub": "ボケがぁぁっ！何で間違えるんだぁ！"}, {"text": "よだれが…", "sub": "計算ミスにイラついてきたぞ！"}]
    }
,
    { 
        name: "レッド・ホット・チリ・ペッパー", 
        img: "assets/RHCP_Infobox_Manga.png", 
        quotes: ["「電力を吸ってパワーアップだぜ！」", "「オレのギターを聴きな！」"],
        description: "音石明の電気のスタンド。コンセントやケーブルを自由自在に移動する。",
        successSFX: "correct.mp3",
                failSFX: "wrong.mp3",
        successMessages: [{"text": "充電完了！", "sub": "超絶スピードの正解でパワーアップだぜ！"}, {"text": "ロックだぜ！", "sub": "シビれるような見事なアンサーだッ！"}], 
        failMessages: [{"text": "バッテリー切れ", "sub": "計算しすぎて電力が切れちまったかァ〜？"}, {"text": "ショートした", "sub": "計算の回路がショートしてやがるぜ！"}]
    }
,
    { 
        name: "杉本鈴美", 
        img: "assets/Reimi_Sugimoto_Infobox_Manga.png", 
        quotes: ["「振り向いちゃダメよ...」", "「杜王町を守って…」"],
        description: "吉良吉影に殺された少女の幽霊。振り向いてはいけない小道に住む。",
        successSFX: "correct.mp3",
                failSFX: "wrong.mp3",
        successMessages: [{"text": "すごいわ！", "sub": "アーノルドもあなたの正解を喜んでるわ！"}, {"text": "前を見てね", "sub": "そのまま前（正解）だけを見て進んでね！"}], 
        failMessages: [{"text": "振り向いたの？", "sub": "計算ミス…あっちの世界に引きずり込まれるわよ…"}, {"text": "きゃあああ", "sub": "計算が間違ってる！アーノルド、噛み付いて！"}]
    }
,
    { 
        name: "リゾット・ネエロ", 
        img: "assets/Risotto_Nero_Infobox_Manga.png", 
        quotes: ["「オレに近づくか...」", "「暗殺チームの意地を見せてやるッ！」"],
        description: "メタリカの本体。パッショーネ暗殺チームのリーダー。保護色能力も持つ。",
        successSFX: "correct.mp3",
                failSFX: "wrong.mp3",
        successMessages: [{"text": "標的確認", "sub": "正確な計算で標的（正解）を仕留めたな"}, {"text": "見えざる一撃", "sub": "まるで保護色のように隙のない正解だ"}], 
        failMessages: [{"text": "血が…", "sub": "鉄分が足りず計算にブレが出ているぞ"}, {"text": "距離を見誤った", "sub": "オレに近づく前にミスで自滅したな…"}]
    }
,
    { 
        name: "岸辺露伴", 
        img: "assets/Rohan_Kishibe_Infobox_Manga.png", 
        quotes: ["「だが断る」", "「ヘブンズ・ドアー！お前の記憶を読むッ！」"],
        description: "ヘブンズ・ドアーの本体。杜王町に住む大人気漫画家。",
        successSFX: "correct.mp3",
                failSFX: "wrong.mp3",
        successMessages: [{"text": "ネタになるぞ！", "sub": "君のその計算力、私の漫画のネタをもらった！"}, {"text": "読ませてもらった", "sub": "君の頭脳のページに「正解」と書いてある！"}], 
        failMessages: [{"text": "だが断る", "sub": "そんなお粗末な計算は、私が断固拒否する！"}, {"text": "リアリティが…", "sub": "ないんだよ！そんなあり得ないミスは！"}]
    }
,
    { 
        name: "セト神", 
        img: "assets/Sethan.png", 
        quotes: ["「影に入ったら子供に戻るッ！」", "「退化させてやろうッ！」"],
        description: "アレッシーのスタンド。影に触れた者を子供に戻す。",
        successSFX: "correct.mp3",
                failSFX: "wrong.mp3",
        successMessages: [{"text": "エラいぞぉ〜", "sub": "子供でもわかる簡単な問題だったろ？"}, {"text": "影に入った", "sub": "見事な正解だ！影から見てたぞ！"}], 
        failMessages: [{"text": "子供に戻れ！", "sub": "そんな計算ミスするなら幼児からやり直せッ！"}, {"text": "グエエッ", "sub": "間違えてボコボコにされたァーッ！"}]
    }
,
    { 
        name: "セックス・ピストルズ", 
        img: "assets/Sex_Pistols_Infobox_Manga.png", 
        quotes: ["「パスだッ！No.5！！」", "「おいミスタ！腹減ったぜッ！」"],
        description: "ミスタのスタンド。6人の小さな妖精のような姿。",
        successSFX: "correct.mp3",
                failSFX: "wrong.mp3",
        successMessages: [{"text": "パスだッ！", "sub": "見事なパス回しで正解だぜ！"}, {"text": "飯の時間だ", "sub": "正解したからサラミでも食うか！"}], 
        failMessages: [{"text": "4だ！", "sub": "縁起が悪いから間違えちまった！"}, {"text": "泣くなNo.5！", "sub": "計算ミスくらいで泣くんじゃねー！"}]
    }
,
    { 
        name: "シアーハートアタック", 
        img: "assets/Sheer_Heart_Attack_Infobox_Manga.png", 
        quotes: ["「コッチヲ見ロッ！」", "「体温の最も高いものを追尾するッ！」"],
        description: "キラークイーンの左手から放たれる自動追尾爆弾。",
        successSFX: "correct.mp3",
                failSFX: "wrong.mp3",
        successMessages: [{"text": "ドカーン！", "sub": "一番熱い（高い）正答熱源を爆破したぞ！"}, {"text": "コッチヲ見ロッ", "sub": "正解の方だけを見ていればいいのだッ！"}], 
        failMessages: [{"text": "熱源ヲ見失ッタ", "sub": "頭を冷やしすぎて計算能力が低下しているぞ！"}, {"text": "爆発サセロ", "sub": "自分のミスを爆破して消し去りたいか？"}]
    }
,
    { 
        name: "矢安宮重清（重ちー）", 
        img: "assets/Shigechi_Infobox_Manga.png", 
        quotes: ["「半分よこすんだどー！」", "「ボクのハーヴェストは無敵なんだどッ！」"],
        description: "ハーヴェストの本体。ちょっと欲張りで忘れっぽい中学生。",
        successSFX: "correct.mp3",
                failSFX: "wrong.mp3",
        successMessages: [{"text": "やったどー！", "sub": "正解の点数はボクと半分こなんだどー！"}, {"text": "拾ってきたど", "sub": "ハーヴェストが見事な正解を持ってきたど！"}], 
        failMessages: [{"text": "欲張りすぎだど", "sub": "点数を独り占めしようとするから間違えるんだど！"}, {"text": "あれ？", "sub": "計算の仕方、忘れちゃったんだど…"}]
    }
,
    { 
        name: "ソフト・マシーン", 
        img: "assets/Soft_Machine_Infobox_Manga.png", 
        quotes: ["「風船のようにしぼませてやるッ！」", "「薄く引き伸ばして捕まえるッ！」"],
        description: "ズッケェロのスタンド。敵を針で刺して薄くする。",
        successSFX: "correct.mp3",
                failSFX: "wrong.mp3",
        successMessages: [{"text": "ペラペラだ", "sub": "難解な問題も薄っぺらくしちまったな！"}, {"text": "針の一刺し", "sub": "見事なピンポイントの正解だ！"}], 
        failMessages: [{"text": "薄すぎる…", "sub": "計算の根拠が薄っぺらすぎるぞ！"}, {"text": "空気が抜ける", "sub": "間違えてため息が出るぜ…！"}]
    }
,
    { 
        name: "スパイス・ガール", 
        img: "assets/Spice_Girl_Infobox_Manga.png", 
        quotes: ["「WANNABEEEEーーッ！！」", "「あらゆるものを柔らかくするッ！」"],
        description: "トリッシュのスタンド。打撃したものをゴムのように柔らかくする。",
        successSFX: "correct.mp3",
                failSFX: "wrong.mp3",
        successMessages: [{"text": "柔らかいわ！", "sub": "どんな問題も柔らかくしてしまう完璧な計算！"}, {"text": "WANNABEE！", "sub": "一味違う大正解ねッ！"}], 
        failMessages: [{"text": "硬直してる！", "sub": "ミスして思考が硬くなっているわよ！"}, {"text": "不潔ね…", "sub": "計算ミスなんて触りたくもないわ！"}]
    }
,
    { 
        name: "スティッキィ・フィンガーズ", 
        img: "assets/Sticky_Fingers_Infobox_Manga.png", 
        quotes: ["「ジッパーでどこでも切り開くッ！」", "「アリアリアリアリアリッ！」"],
        description: "ブチャラティのスタンド。なんにでもジッパーを付ける。",
        successSFX: "correct.mp3",
                failSFX: "wrong.mp3",
        successMessages: [{"text": "アリアリアリ", "sub": "アリーヴェデルチ！完璧に解き明かしたな！"}, {"text": "ジッパー！", "sub": "正解の道を切り開いたぞッ！"}], 
        failMessages: [{"text": "覚悟はあるか", "sub": "計算ミスをする覚悟はできているんだろうな"}, {"text": "嘘の味がする", "sub": "この答え…嘘の味がするぜッ！"}]
    }
,
    { 
        name: "ストレングス", 
        img: "assets/THESTRENGTH.png", 
        quotes: ["「ウキキキキ！！！」", "「（巨大な拳で迫りくる...）」"],
        description: "巨大な船そのものに同化する強力なスタンド。",
        successSFX: "correct.mp3",
                failSFX: "wrong.mp3",
        successMessages: [{"text": "ウキキキ！", "sub": "お猿さんでもわかる完璧な正解だ！"}, {"text": "巨大な計算", "sub": "船のようにデカい正解だぜ！"}], 
        failMessages: [{"text": "グウウ…", "sub": "計算ミスして怒っているぞ！"}, {"text": "沈没だ…", "sub": "間違えてすべてが水の泡だ！"}]
    }
,
    { 
        name: "サン", 
        img: "assets/THESUN.png", 
        quotes: ["「この太陽の熱に耐えられるかッ！」", "「灼熱の光線を浴びろッ！」"],
        description: "アラビア・ファッツのスタンド。太陽のように熱を放つ。",
        successSFX: "correct.mp3",
                failSFX: "wrong.mp3",
        successMessages: [{"text": "灼熱だッ！", "sub": "太陽よりも熱い完璧な正解だ！"}, {"text": "見破ったか！", "sub": "マジックミラーのトリックを見破る知性だ！"}], 
        failMessages: [{"text": "暑すぎる…", "sub": "熱さで思考能力が低下しているぞ！"}, {"text": "石を投げろ", "sub": "くそッ！間違えた腹いせに石を投げてやる！"}]
    }
,
    { 
        name: "ザ・ワールド", 
        img: "assets/THEWORLD.png", 
        quotes: ["「時は止まる...ザ・ワールドッ！」", "「無駄無駄無駄無駄無駄ァ！！」"],
        description: "時を止める強力無比なDIOのスタンド。",
        successSFX: "correct.mp3",
        failSFX: "wrong.mp3"
    }
,
    { 
        name: "ティナー・サックス", 
        img: "assets/TenoreSax.png", 
        quotes: ["「音の迷宮から逃げられるかッ！」", "「奇妙な音色が頭を支配するッ！」"],
        description: "ケニー・Gのスタンド。幻覚で巨大な迷宮を作り出す。",
        successSFX: "correct.mp3",
                failSFX: "wrong.mp3",
        successMessages: [{"text": "迷宮突破！", "sub": "見事に幻覚の迷宮（問題）から抜け出したなッ！"}, {"text": "良い音色だ", "sub": "正解の美しい音が響いているぜッ！"}], 
        failMessages: [{"text": "迷い込んだな", "sub": "幻覚（計算ミス）の迷宮からは抜け出せんぞ…"}, {"text": "頭痛が…", "sub": "不協和音のようなミスだなッ！"}]
    }
,
    { 
        name: "トニオ・トラサルディー", 
        img: "assets/Tonio_Trussardi_Infobox_Manga.png", 
        quotes: ["「お客様にぴったりの料理をご提供します！」", "「ゥンまああ〜〜いっ！と言わせますよォ」"],
        description: "パール・ジャムの本体。杜王町のイタリアンレストラン「トラサルディー」のシェフ。",
        successSFX: "correct.mp3",
                failSFX: "wrong.mp3",
        successMessages: [{"text": "ボーノ！", "sub": "最高の味（正解）を引き出しましたよ！"}, {"text": "健康回復！", "sub": "計算力アップの特製料理が効きましたね！"}], 
        failMessages: [{"text": "味が…", "sub": "ちょっと焦げてしまったようなミスですね…"}, {"text": "スパイスが…", "sub": "足りないか、多すぎる計算ですよ！"}]
    }
,
    { 
        name: "タワー・オブ・グレー", 
        img: "assets/Tower of Gray.png", 
        quotes: ["「舌が全てを引き裂くッ！」", "「その速さ、目で追えるかッ！」"],
        description: "クワガタ虫のスタンド。凄まじいスピードと破壊力を持つ舌。",
        successSFX: "correct.mp3",
                failSFX: "wrong.mp3",
        successMessages: [{"text": "見切ったッ！", "sub": "素早い動きも見切る完璧な計算だ！"}, {"text": "引き裂くぞ！", "sub": "難問を引き裂くような大正解！"}], 
        failMessages: [{"text": "速すぎる！", "sub": "スピードについていけずミスったな！"}, {"text": "墜落する…", "sub": "計算ミスで飛行機ごと墜ちるぞッ！"}]
    }
,
    { 
        name: "週刊少年ジャンプ1994年1号", 
        img: "assets/WSJ1994No1T.png", 
        quotes: ["「（黄金の精神がここから始まる...）」", "「ジョジョ第4部、連載開始ッ！」"],
        description: "ジョジョの奇妙な冒険 第4部が連載を開始した伝説のジャンプ。",
        successSFX: "correct.mp3",
                failSFX: "wrong.mp3",
        successMessages: [{"text": "歴史の始まり", "sub": "君の正解もまた、新たな伝説の1ページだ！"}, {"text": "黄金の精神", "sub": "正解から黄金の精神の息吹を感じるぞ！"}], 
        failMessages: [{"text": "休載か？", "sub": "計算が途中で止まってしまったようだな…"}, {"text": "インクが…", "sub": "滲んで読み取れないぞ！やり直しだ！"}]
    }
,
    { 
        name: "ホィール・オブ・フォーチュン", 
        img: "assets/Wheel of Fortune.png", 
        quotes: ["「この車が俺のスタンドだッ！」", "「車体から炎の弾丸ッ！」"],
        description: "ズィー・ズィーのスタンド。車と一体化し弾丸を撃ち出す。",
        successSFX: "correct.mp3",
                failSFX: "wrong.mp3",
        successMessages: [{"text": "追いついた！", "sub": "猛スピードで正解に追いついたぜ！"}, {"text": "勝ったッ！", "sub": "見事なドライビング（計算）テクニックだ！"}], 
        failMessages: [{"text": "道がない！", "sub": "計算の道筋を間違えて崖っぷちだ！"}, {"text": "エンストか！", "sub": "ここで計算が止まるなんて最悪だぜ！"}]
    }
,
    { 
        name: "イエローテンパランス", 
        img: "assets/Yellow Temperance.png", 
        quotes: ["「消化できないものはないッ！」", "「俺のスタンドは無敵だッ！」"],
        description: "ラバーソウルのスタンド。肉を喰らいなんでも消化する。",
        successSFX: "correct.mp3",
                failSFX: "wrong.mp3",
        successMessages: [{"text": "消化完了！", "sub": "どんな難問もペロリと消化したぜ！"}, {"text": "無敵だッ！", "sub": "ドゥー・ユー・アンダスタン？大正解だ！"}], 
        failMessages: [{"text": "消化不良", "sub": "計算ミスでお腹の調子が悪いぜ…"}, {"text": "化けの皮が", "sub": "ミスして化けの皮が剥がれたな！"}]
    }
,
    { 
        name: "吉良吉影（川尻浩作）", 
        img: "assets/Yoshikage_Kira_Kosaku_Infobox_Manga.png", 
        quotes: ["「植物のように平穏に生きたい...」", "「新しい顔で、新しい人生をッ！」"],
        description: "川尻浩作の顔を奪い、別人として生きる連続殺人鬼。",
        successSFX: "correct.mp3",
                failSFX: "wrong.mp3",
        successMessages: [{"text": "平穏だ…", "sub": "これで私の平穏な生活（全問正解）は守られた…"}, {"text": "運がいい", "sub": "私に味方しているとしか思えない正解だ"}], 
        failMessages: [{"text": "指の爪が…", "sub": "また伸びてきている…イライラするミスだ…"}, {"text": "正体が…", "sub": "こんなミスでは周りに正体がバレてしまうぞッ！"}]
    }
,
    { 
        name: "吉良吉影", 
        img: "assets/Yoshikage_Kira_Original_Infobox_Manga.png", 
        quotes: ["「私の名は吉良吉影...年齢33歳。」", "「『平穏な生活』を望んでいるだけさ...」"],
        description: "キラークイーンの本体。手の綺麗な女性を狙う杜王町の殺人鬼。",
        successSFX: "correct.mp3",
                failSFX: "wrong.mp3",
        successMessages: [{"text": "美しい手だ", "sub": "その見事な計算をする手…切り取ってしまいたいよ"}, {"text": "いい気分だ", "sub": "正答率100%…平穏な気分で眠りにつけそうだ"}], 
        failMessages: [{"text": "平穏が…", "sub": "乱される！計算ミスで私の神経が逆立つッ！"}, {"text": "消し飛ばす", "sub": "この見苦しいミスは爆破して消し去ろう…"}]
    }
,
    { 
        name: "山岸由花子", 
        img: "assets/Yukako_Yamagishi_Infobox_Manga.png", 
        quotes: ["「康一くんは私だけのものよッ！」", "「私のラブ・デラックスの髪で縛ってあげるッ！」"],
        description: "ラブ・デラックスの本体。広瀬康一を異常に愛する女子高生。",
        successSFX: "correct.mp3",
                failSFX: "wrong.mp3",
        successMessages: [{"text": "康一くん！", "sub": "康一くんのように素晴らしい正解だわッ！"}, {"text": "愛の力よ！", "sub": "愛情こもった計算は間違えないのよ！"}], 
        failMessages: [{"text": "許さないわ！", "sub": "こんな点数を取るなんて、愛のムチが必要ね！"}, {"text": "髪が…", "sub": "怒りで髪が伸びてきたわッ！やり直しよ！"}]
    }
,
    { 
        name: "噴上裕也", 
        img: "assets/Yuya_Fungami_Infobox_Manga.png", 
        quotes: ["「取り巻きが３人もいる美男子だぜぇ」", "「ハイウェイ・スターのおでましだッ！」"],
        description: "ハイウェイ・スターの本体。暴走族のリーダーでナルシスト。",
        successSFX: "correct.mp3",
                failSFX: "wrong.mp3",
        successMessages: [{"text": "カッコいいぜ！", "sub": "俺に匹敵するくらいカッコいい正解だぜ！"}, {"text": "匂いがするぜ", "sub": "間違いなく100点満点の匂いがするなッ！"}], 
        failMessages: [{"text": "みっともねーぜ", "sub": "女の子（取り巻き）の前で恥ずかしいミスだなぁ？"}, {"text": "ケガするぜ", "sub": "そんなテキトーな計算してるとケガするぜ！"}]
    }
,
    { 
        name: "アヴドゥル", 
        img: "assets/avdol.png", 
        quotes: ["「YES I AM!」", "「ファイヤーッ！マジシャンズレッドッ！」"],
        description: "マジシャンズレッドの本体。炎を自由自在に操る占い師。",
        successSFX: "correct.mp3",
                failSFX: "wrong.mp3",
        successMessages: [{"text": "YES I AM!", "sub": "灼熱の炎で正解をあぶり出したぞ！"}, {"text": "ファイヤー！", "sub": "素晴らしい！燃えるような計算力だ！"}], 
        failMessages: [{"text": "火が消えた…", "sub": "計算の炎が消えかかっているぞ！"}, {"text": "チッチッチ", "sub": "君の計算、まだ生焼けだな。"}]
    }
,
    { 
        name: "DIO", 
        img: "assets/dio.png", 
        quotes: ["「無駄無駄無駄無駄ァ！！」", "「時よ止まれッ！ザ・ワールド！」"],
        description: "ザ・ワールドの本体。時を止める能力を持つ究極の吸血鬼。",
        successSFX: "correct.mp3",
        failSFX: "wrong.mp3"
    }
,
    { 
        name: "ハーミットパープル", 
        img: "assets/harmitparple.png", 
        quotes: ["「おまえの次のセリフは...正解！という！」", "「念写で全てを見通すッ！」"],
        description: "念写や情報収集に長けたイバラ状のスタンド。",
        successSFX: "correct.mp3",
                failSFX: "wrong.mp3",
        successMessages: [{"text": "次のセリフは", "sub": "『やったぜ！』という！大正解！"}, {"text": "念写完了！", "sub": "見事に正解を写し出したぞ！"}], 
        failMessages: [{"text": "OH MY GOD", "sub": "念写のピントがズレていたようだ！"}, {"text": "切れちゃった", "sub": "イバラが切れてミスしてしまった！"}]
    }
,
    { 
        name: "イギー", 
        img: "assets/iggy.png", 
        quotes: ["「（コーヒーガムをクチャクチャ...）」", "「ふんッ、犬の手も借りたいのか！」"],
        description: "ザ・フールの本体。砂を操る誇り高き犬。コーヒーガムが好き。",
        successSFX: "correct.mp3",
                failSFX: "wrong.mp3",
        successMessages: [{"text": "くっついた！", "sub": "正解の法則から逃れられないわよ！"}, {"text": "ウフフ…", "sub": "見事な計算ね、褒めてあげるわ"}], 
        failMessages: [{"text": "あら？", "sub": "計算を間違えるなんて…可愛くないわね"}, {"text": "磁力が…", "sub": "足りずにミスしてしまったようね"}]
    }
,
    { 
        name: "ジョセフ（第2部）", 
        img: "assets/joseph.png", 
        quotes: ["「おまえの次のセリフは...！」", "「逃げるんだよォ！スモーキーッ！」"],
        description: "ジョースター家第2代。生まれつき波紋の才能を持ち、機転と知略を駆使して戦う。",
        successSFX: "correct.mp3",
                failSFX: "wrong.mp3",
        successMessages: [{"text": "次のセリフは", "sub": "『やったぜ！』という！大正解！"}, {"text": "計算通り！", "sub": "これも計算のうちかJOJOーッ！？"}], 
        failMessages: [{"text": "逃げるんだよォ！", "sub": "計算ミスしたらとりあえず逃げるんだよォ！"}, {"text": "ハッピーうれぴー", "sub": "って、間違えてるじゃあねーか！"}]
    }
,
    { 
        name: "承太郎", 
        img: "assets/jotaro.png", 
        quotes: ["「やれやれだぜ...」", "「てめーはおれを怒らせたッ！」"],
        description: "スタープラチナの本体。冷静沈着で無敵のスタンドを操る。",
        successSFX: "correct.mp3",
                failSFX: "wrong.mp3",
                successMessages: [{"text": "オラオラ！", "sub": "スタープラチナの精密な動きで大正解だ！"}, {"text": "裁くのは俺のスタンドだ", "sub": "見事な計算だ、やれやれだぜ。"}], 
        failMessages: [{"text": "やれやれだぜ", "sub": "こんな単純な計算ミスをするとはな…"}, {"text": "てめーは俺を怒らせた", "sub": "怒りのオラオララッシュが必要だな！"}]
    }
,
    { 
        name: "マジシャンズレッド", 
        img: "assets/magiciansred.png", 
        quotes: ["「紅炎（レッドバインド）！」", "「炎を操るのは俺だッ！」"],
        description: "灼熱の炎を操り、敵を焼き尽くすスタンド。",
        successSFX: "correct.mp3",
                failSFX: "wrong.mp3",
        successMessages: [{"text": "YES I AM!", "sub": "灼熱の炎で正解をあぶり出したぞ！"}, {"text": "ファイヤー！", "sub": "素晴らしい！燃えるような計算力だ！"}], 
        failMessages: [{"text": "火が消えた…", "sub": "計算の炎が消えかかっているぞ！"}, {"text": "チッチッチ", "sub": "君の計算、まだ生焼けだな。"}]
    }
,
    { 
        name: "ポルナレフ(闘気)", 
        img: "assets/polnareff2.png", 
        quotes: ["「俺の妹の仇を討つッ！」", "「シルバーチャリオッツよ！！」"],
        description: "タロットカードやエジプト9栄神に由来する恐るべきスタンド使い。",
        successSFX: "correct.mp3",
        failSFX: "wrong.mp3"
    }
,
    { 
        name: "ストレングス", 
        img: "assets/strength.png", 
        quotes: ["「ウキキキキ！！！」", "「（巨大な拳で迫りくる...）」"],
        description: "巨大な船そのものに同化する強力なスタンド。",
        successSFX: "correct.mp3",
                failSFX: "wrong.mp3",
        successMessages: [{"text": "ウキキキ！", "sub": "お猿さんでもわかる完璧な正解だ！"}, {"text": "巨大な計算", "sub": "船のようにデカい正解だぜ！"}], 
        failMessages: [{"text": "グウウ…", "sub": "計算ミスして怒っているぞ！"}, {"text": "沈没だ…", "sub": "間違えてすべてが水の泡だ！"}]
    }
,
    { 
        name: "アレッシー", 
        img: "assets/Alessi_Infobox_Manga.png", 
        quotes: ["「えらいねぇ〜」", "「だらしねぇ顔しやがってよォ！」"],
                description: "セト神の本体。影に触れた相手を若返らせる卑劣な男。",
        successSFX: "correct.mp3",
        failSFX: "wrong.mp3",
        successMessages: [{"text": "YES!", "sub": "正解だッ！"}, {"text": "グレート", "sub": "黄金の精神を感じるぞ"}], 
        failMessages: [{"text": "無駄無駄ァ！", "sub": "計算が甘いぞ！"}, {"text": "やれやれ", "sub": "やり直せッ！"}]
    }
,
    { 
        name: "アヌビス神(刀)", 
        img: "assets/Anubis_Appearance.png", 
        quotes: ["「私は刀のスタンド、アヌビス神だ」", "「一度戦った相手には絶対勝つッ！」"],
                description: "持ち主を操る意思を持つ刀のスタンド。戦うほどに成長し、相手の技を記憶する。",
        successSFX: "correct.mp3",
        failSFX: "wrong.mp3",
        successMessages: [{"text": "YES!", "sub": "正解だッ！"}, {"text": "グレート", "sub": "黄金の精神を感じるぞ"}], 
        failMessages: [{"text": "無駄無駄ァ！", "sub": "計算が甘いぞ！"}, {"text": "やれやれ", "sub": "やり直せッ！"}]
    }
,
    { 
        name: "アヌビス神", 
        img: "assets/Anubis_Infobox_Manga.png", 
        quotes: ["「抜かれるのを待っていたのだ」", "「さあ、私を抜くのだッ！」"],
                description: "500年以上前の刀匠キャラバン・サライが打ったと言われる、意思を持つスタンド。",
        successSFX: "correct.mp3",
        failSFX: "wrong.mp3",
        successMessages: [{"text": "YES!", "sub": "正解だッ！"}, {"text": "グレート", "sub": "黄金の精神を感じるぞ"}], 
        failMessages: [{"text": "無駄無駄ァ！", "sub": "計算が甘いぞ！"}, {"text": "やれやれ", "sub": "やり直せッ！"}]
    }
,
    { 
        name: "ポルナレフ(アヌビス神)", 
        img: "assets/Anubis_Silver_Charriot.png", 
        quotes: ["「二刀流のチャリオッツだッ！」", "「もうおまえの動きは覚えたぞッ！」"],
                description: "アヌビス神に操られたポルナレフ。二刀流による凄まじい攻撃を繰り出す。",
        successSFX: "correct.mp3",
        failSFX: "wrong.mp3",
        successMessages: [{"text": "YES!", "sub": "正解だッ！"}, {"text": "グレート", "sub": "黄金の精神を感じるぞ"}], 
        failMessages: [{"text": "無駄無駄ァ！", "sub": "計算が甘いぞ！"}, {"text": "やれやれ", "sub": "やり直せッ！"}]
    }
,
    { 
        name: "アラビア・ファッツ", 
        img: "assets/Arabia_Fats_Infobox_Manga.png", 
        quotes: ["「（鏡の中に隠れている...）」", "「太陽からは逃げられんッ！」"],
                description: "サンの本体。砂漠で鏡張りの建物に隠れ、熱で一行を苦しめた。",
        successSFX: "correct.mp3",
        failSFX: "wrong.mp3",
        successMessages: [{"text": "YES!", "sub": "正解だッ！"}, {"text": "グレート", "sub": "黄金の精神を感じるぞ"}], 
        failMessages: [{"text": "無駄無駄ァ！", "sub": "計算が甘いぞ！"}, {"text": "やれやれ", "sub": "やり直せッ！"}]
    }
,
    { 
        name: "カメオ", 
        img: "assets/Cameo_Infobox_Manga.png", 
        quotes: ["「願い事を３つ叶えてやろう...」", "「Hail 2 U（君に幸あれ）！」"],
                description: "ジャッジメントの本体。地面に穴を掘り、そこから願いを叶えるフリをして攻撃する。",
        successSFX: "correct.mp3",
        failSFX: "wrong.mp3",
        successMessages: [{"text": "YES!", "sub": "正解だッ！"}, {"text": "グレート", "sub": "黄金の精神を感じるぞ"}], 
        failMessages: [{"text": "無駄無駄ァ！", "sub": "計算が甘いぞ！"}, {"text": "やれやれ", "sub": "やり直せッ！"}]
    }
,
    { 
        name: "偽テニール船長", 
        img: "assets/Cpt_Tennille_Infobox_Manga.png", 
        quotes: ["「海の中なら俺は無敵だッ！」", "「ダークブルー・ムーン！水中戦だ！」"],
                description: "ダークブルー・ムーンの本体。本物の船長を殺してすり替わった偽物。",
        successSFX: "correct.mp3",
        failSFX: "wrong.mp3",
        successMessages: [{"text": "YES!", "sub": "正解だッ！"}, {"text": "グレート", "sub": "黄金の精神を感じるぞ"}], 
        failMessages: [{"text": "無駄無駄ァ！", "sub": "計算が甘いぞ！"}, {"text": "やれやれ", "sub": "やり直せッ！"}]
    }
,
    { 
        name: "ダニエル・J・ダービー", 
        img: "assets/Daniel_J._D'Arby_Infobox_Manga.png", 
        quotes: ["「魂を賭ける（コール）ぜッ！」", "「GOOD!」"],
                description: "オシリス神の本体。ギャンブルの天才で、負けた者の魂をコインに変える。",
        successSFX: "correct.mp3",
        failSFX: "wrong.mp3",
        successMessages: [{"text": "YES!", "sub": "正解だッ！"}, {"text": "グレート", "sub": "黄金の精神を感じるぞ"}], 
        failMessages: [{"text": "無駄無駄ァ！", "sub": "計算が甘いぞ！"}, {"text": "やれやれ", "sub": "やり直せッ！"}]
    }
,
    { 
        name: "呪いのデーボ", 
        img: "assets/Devo_Infobox_Manga.png", 
        quotes: ["「恨みはパワーだッ！」", "「エボニー・デビルで切り刻んでやる！」"],
                description: "エボニー・デビルの本体。受けた傷を恨みに変え、人形で遠隔攻撃する。",
        successSFX: "correct.mp3",
        failSFX: "wrong.mp3",
        successMessages: [{"text": "YES!", "sub": "正解だッ！"}, {"text": "グレート", "sub": "黄金の精神を感じるぞ"}], 
        failMessages: [{"text": "無駄無駄ァ！", "sub": "計算が甘いぞ！"}, {"text": "やれやれ", "sub": "やり直せッ！"}]
    }
,
    { 
        name: "ディオ・ブランドー", 
        img: "assets/Dio_PB_Infobox_Manga.png", 
        quotes: ["「おまえは今まで食ったパンの枚数をおぼえているのか？」", "「無駄無駄無駄無駄ァ！」"],
                description: "ジョースター家の養子となり、石仮面で吸血鬼となった男。全ての因縁の始まり。",
        successSFX: "correct.mp3",
        failSFX: "wrong.mp3",
        successMessages: [{"text": "YES!", "sub": "正解だッ！"}, {"text": "グレート", "sub": "黄金の精神を感じるぞ"}], 
        failMessages: [{"text": "無駄無駄ァ！", "sub": "計算が甘いぞ！"}, {"text": "やれやれ", "sub": "やり直せッ！"}]
    }
,
    { 
        name: "未起隆（サイレン）", 
        img: "assets/EWF_Infobox_Manga.png", 
        quotes: ["「私は宇宙人です」", "「アース・ウインド・アンド・ファイヤー！」"],
                description: "自称宇宙人の不思議な少年。あらゆる物体に変身する能力を持つ。サイレンの音が苦手。",
        successSFX: "correct.mp3",
        failSFX: "wrong.mp3",
        successMessages: [{"text": "YES!", "sub": "正解だッ！"}, {"text": "グレート", "sub": "黄金の精神を感じるぞ"}], 
        failMessages: [{"text": "無駄無駄ァ！", "sub": "計算が甘いぞ！"}, {"text": "やれやれ", "sub": "やり直せッ！"}]
    }
,
    { 
        name: "エンヤ婆", 
        img: "assets/Enya_Infobox_Manga.png", 
        quotes: ["「ジャスティス（正義）が裁くッ！」", "「DIO様を裏切る者は許さん！」"],
                description: "ジャスティスの本体。霧を操り死体を自在に動かす。スタンドの矢の秘密を知る老婆。",
        successSFX: "correct.mp3",
        failSFX: "wrong.mp3",
        successMessages: [{"text": "YES!", "sub": "正解だッ！"}, {"text": "グレート", "sub": "黄金の精神を感じるぞ"}], 
        failMessages: [{"text": "無駄無駄ァ！", "sub": "計算が甘いぞ！"}, {"text": "やれやれ", "sub": "やり直せッ！"}]
    }
,
    { 
        name: "エシディシ", 
        img: "assets/Esidisi_Infobox_Manga.png", 
        quotes: ["「あァァァんまりだァァアア！！」", "「怪焔王の流法（モード）！」"],
                description: "柱の男の一人。炎を操る。感情が高ぶると激しく泣いて冷静さを取り戻す。",
        successSFX: "correct.mp3",
        failSFX: "wrong.mp3",
        successMessages: [{"text": "YES!", "sub": "正解だッ！"}, {"text": "グレート", "sub": "黄金の精神を感じるぞ"}], 
        failMessages: [{"text": "無駄無駄ァ！", "sub": "計算が甘いぞ！"}, {"text": "やれやれ", "sub": "やり直せッ！"}]
    }
,
    { 
        name: "グレー・フライ", 
        img: "assets/Gray_Fly_Infobox_Manga.png", 
        quotes: ["「飛行機の中で死ねッ！」", "「タワー・オブ・グレーは光よりも速い！」"],
                description: "タワー・オブ・グレーの本体。老人の姿をしているが、極めて高い殺傷能力を持つ。",
        successSFX: "correct.mp3",
        failSFX: "wrong.mp3",
        successMessages: [{"text": "YES!", "sub": "正解だッ！"}, {"text": "グレート", "sub": "黄金の精神を感じるぞ"}], 
        failMessages: [{"text": "無駄無駄ァ！", "sub": "計算が甘いぞ！"}, {"text": "やれやれ", "sub": "やり直せッ！"}]
    }
,
    { 
        name: "J・ガイル", 
        img: "assets/JGeil_Infobox_Manga.png", 
        quotes: ["「鏡の中に世界はない...」", "「ハングドマンが喉元を裂くッ！」"],
                description: "ハングドマンの本体。エンヤ婆の息子。両手が右手で、鏡の中を移動して攻撃する。",
        successSFX: "correct.mp3",
        failSFX: "wrong.mp3",
        successMessages: [{"text": "YES!", "sub": "正解だッ！"}, {"text": "グレート", "sub": "黄金の精神を感じるぞ"}], 
        failMessages: [{"text": "無駄無駄ァ！", "sub": "計算が甘いぞ！"}, {"text": "やれやれ", "sub": "やり直せッ！"}]
    }
,
    { 
        name: "老ジョセフ", 
        img: "assets/Joseph_SC_Infobox_Manga.png", 
        quotes: ["「隠者の紫（ハーミットパープル）！」", "「OH NO!」"],
                description: "隠者の紫の本体。承太郎の祖父で、歴戦の勇士。念写能力でDIOを追う。",
        successSFX: "correct.mp3",
        failSFX: "wrong.mp3",
        successMessages: [{"text": "YES!", "sub": "正解だッ！"}, {"text": "グレート", "sub": "黄金の精神を感じるぞ"}], 
        failMessages: [{"text": "無駄無駄ァ！", "sub": "計算が甘いぞ！"}, {"text": "やれやれ", "sub": "やり直せッ！"}]
    }
,
    { 
        name: "ジャッジメント", 
        img: "assets/Judgement_Infobox_Manga.png", 
        quotes: ["「HAIL 2 U!」", "「願いを叶えてやろう...」"],
                description: "カメオのスタンド。土で土人形を作り出し、相手の願いを歪んだ形で実現する。",
        successSFX: "correct.mp3",
        failSFX: "wrong.mp3",
        successMessages: [{"text": "YES!", "sub": "正解だッ！"}, {"text": "グレート", "sub": "黄金の精神を感じるぞ"}], 
        failMessages: [{"text": "無駄無駄ァ！", "sub": "計算が甘いぞ！"}, {"text": "やれやれ", "sub": "やり直せッ！"}]
    }
,
    { 
        name: "花京院(原作)", 
        img: "assets/Kakyoin_Infobox_Manga.png", 
        quotes: ["「エメラルドスプラッシュ！」", "「時計の針を止めてやったぞ...」"],
                description: "ハイエロファントグリーンの本体。冷静で礼儀正しいが、内に熱い闘志を秘めた少年。",
        successSFX: "correct.mp3",
        failSFX: "wrong.mp3",
        successMessages: [{"text": "YES!", "sub": "正解だッ！"}, {"text": "グレート", "sub": "黄金の精神を感じるぞ"}], 
        failMessages: [{"text": "無駄無駄ァ！", "sub": "計算が甘いぞ！"}, {"text": "やれやれ", "sub": "やり直せッ！"}]
    }
,
    { 
        name: "カーズ", 
        img: "assets/Kars_Infobox_Manga.png", 
        quotes: ["「輝彩滑刀（きさいかっとう）の流法！」", "「究極の生命体（アルティミット・シィング）だッ！」"],
                description: "柱の男のリーダー。石仮面の製作者。光り輝く刃で攻撃する。",
        successSFX: "correct.mp3",
        failSFX: "wrong.mp3",
        successMessages: [{"text": "YES!", "sub": "正解だッ！"}, {"text": "グレート", "sub": "黄金の精神を感じるぞ"}], 
        failMessages: [{"text": "無駄無駄ァ！", "sub": "計算が甘いぞ！"}, {"text": "やれやれ", "sub": "やり直せッ！"}]
    }
,
    { 
        name: "カーン", 
        img: "assets/Khan_Infobox_Manga.png", 
        quotes: ["「私は刀の達人だッ！」", "「アヌビス神の刃を受けてみろ！」"],
                description: "アヌビス神に操られた理髪師。凄まじいスピードの剣技を繰り出した。",
        successSFX: "correct.mp3",
        failSFX: "wrong.mp3",
        successMessages: [{"text": "YES!", "sub": "正解だッ！"}, {"text": "グレート", "sub": "黄金の精神を感じるぞ"}], 
        failMessages: [{"text": "無駄無駄ァ！", "sub": "計算が甘いぞ！"}, {"text": "やれやれ", "sub": "やり直せッ！"}]
    }
,
    { 
        name: "マニッシュ・ボーイ", 
        img: "assets/Mannish_Boy_Infobox_Manga.png", 
        quotes: ["「（不敵に笑う天才児...）」", "「デス13の世界へようこそ！」"],
                description: "デス13の本体。生後11ヶ月の天才児。夢の中のスタンドでジョースター一行を窮地に陥れた。",
        successSFX: "correct.mp3",
        failSFX: "wrong.mp3",
        successMessages: [{"text": "YES!", "sub": "正解だッ！"}, {"text": "グレート", "sub": "黄金の精神を感じるぞ"}], 
        failMessages: [{"text": "無駄無駄ァ！", "sub": "計算が甘いぞ！"}, {"text": "やれやれ", "sub": "やり直せッ！"}]
    }
,
    { 
        name: "マライア", 
        img: "assets/Mariah_Infobox_Manga.png", 
        quotes: ["「バステト神に触れたわね...」", "「鉄が集まって押しつぶされるがいいわ！」"],
                description: "バステト神の本体。コンセントのようなスタンドで触れた者を磁石に変える。",
        successSFX: "correct.mp3",
        failSFX: "wrong.mp3",
        successMessages: [{"text": "YES!", "sub": "正解だッ！"}, {"text": "グレート", "sub": "黄金の精神を感じるぞ"}], 
        failMessages: [{"text": "無駄無駄ァ！", "sub": "計算が甘いぞ！"}, {"text": "やれやれ", "sub": "やり直せッ！"}]
    }
,
    { 
        name: "Midler_Revealed_Infobox", 
        img: "assets/Midler_Revealed_Infobox.png", 
        quotes: ["「オラオラ！新キャラだッ！」", "「グレートですよこいつはァ！」"],
        successSFX: "correct.mp3",
        failSFX: "wrong.mp3"
    }
,
    { 
        name: "支倉未起隆", 
        img: "assets/Mikitaka_Hazekura_Infobox_Manga.png", 
        quotes: ["「宇宙人ですから」", "「コンパスに変身しましょうか？」"],
                description: "自称宇宙人。あらゆる物体に変身するが、自分の意図しないものになると苦しむ。",
        successSFX: "correct.mp3",
        failSFX: "wrong.mp3",
        successMessages: [{"text": "YES!", "sub": "正解だッ！"}, {"text": "グレート", "sub": "黄金の精神を感じるぞ"}], 
        failMessages: [{"text": "無駄無駄ァ！", "sub": "計算が甘いぞ！"}, {"text": "やれやれ", "sub": "やり直せッ！"}]
    }
,
    { 
        name: "ンドゥール", 
        img: "assets/N'Doul_Infobox_Manga.jpg", 
        quotes: ["「悪には悪の救世主が必要なんだ」", "「ゲブ神、音を捕らえろッ！」"],
                description: "ゲブ神の本体。盲目だが、音だけで相手の動きを察知するエジプト9栄神の男。",
        successSFX: "correct.mp3",
        failSFX: "wrong.mp3",
        successMessages: [{"text": "YES!", "sub": "正解だッ！"}, {"text": "グレート", "sub": "黄金の精神を感じるぞ"}], 
        failMessages: [{"text": "無駄無駄ァ！", "sub": "計算が甘いぞ！"}, {"text": "やれやれ", "sub": "やり直せッ！"}]
    }
,
    { 
        name: "オシリス神", 
        img: "assets/Osiris_Infobox_Manga.png", 
        quotes: ["「負けを認めたな（CHECK MATE）！」", "「魂をコインにしてくれる...」"],
                description: "ダニエル・J・ダービーのスタンド。ギャンブルで負けを認めた相手の魂を奪う。",
        successSFX: "correct.mp3",
        failSFX: "wrong.mp3",
        successMessages: [{"text": "YES!", "sub": "正解だッ！"}, {"text": "グレート", "sub": "黄金の精神を感じるぞ"}], 
        failMessages: [{"text": "無駄無駄ァ！", "sub": "計算が甘いぞ！"}, {"text": "やれやれ", "sub": "やり直せッ！"}]
    }
,
    { 
        name: "ペット・ショップ", 
        img: "assets/Pet_Shop_Infobox_Manga.png", 
        quotes: ["「ホホッ！（鋭い鳴き声...）」", "「ホルス神、全てを凍りつかせろ！」"],
                description: "ホルス神の本体。DIOの館を守るハヤブサ。冷気を自在に操る。",
        successSFX: "correct.mp3",
        failSFX: "wrong.mp3",
        successMessages: [{"text": "YES!", "sub": "正解だッ！"}, {"text": "グレート", "sub": "黄金の精神を感じるぞ"}], 
        failMessages: [{"text": "無駄無駄ァ！", "sub": "計算が甘いぞ！"}, {"text": "やれやれ", "sub": "やり直せッ！"}]
    }
,
    { 
        name: "ポルナレフ(原作)", 
        img: "assets/Polnareff_SC_Infobox_Manga.png", 
        quotes: ["「あ...ありのまま今起こった事を話すぜ！」", "「シルバーチャリオッツ！」"],
                description: "シルバーチャリオッツの本体。妹の仇を討つためにDIOを追い、ジョースター一行に加わった。",
        successSFX: "correct.mp3",
        failSFX: "wrong.mp3",
        successMessages: [{"text": "YES!", "sub": "正解だッ！"}, {"text": "グレート", "sub": "黄金の精神を感じるぞ"}], 
        failMessages: [{"text": "無駄無駄ァ！", "sub": "計算が甘いぞ！"}, {"text": "やれやれ", "sub": "やり直せッ！"}]
    }
,
    { 
        name: "スピードワゴン", 
        img: "assets/SPW_PB_Infobox_Manga.png", 
        quotes: ["「食らえ！刃付き帽子ッ！」", "「スピードワゴンはクールに去るぜ」"],
                description: "食屍鬼街のボスだったが、ジョナサンの高潔な精神に心打たれ、親友となった。",
        successSFX: "correct.mp3",
        failSFX: "wrong.mp3",
        successMessages: [{"text": "YES!", "sub": "正解だッ！"}, {"text": "グレート", "sub": "黄金の精神を感じるぞ"}], 
        failMessages: [{"text": "無駄無駄ァ！", "sub": "計算が甘いぞ！"}, {"text": "やれやれ", "sub": "やり直せッ！"}]
    }
,
    { 
        name: "セト神", 
        img: "assets/Sethan_Infobox_Manga.png", 
        quotes: ["「影に触れたな...！」", "「チャッ、チャッ、チャッ、チャッ！」"],
                description: "アレッシーのスタンド。影に触れた相手の時間を遡らせ、赤ん坊や子供に戻す。",
        successSFX: "correct.mp3",
        failSFX: "wrong.mp3",
        successMessages: [{"text": "YES!", "sub": "正解だッ！"}, {"text": "グレート", "sub": "黄金の精神を感じるぞ"}], 
        failMessages: [{"text": "無駄無駄ァ！", "sub": "計算が甘いぞ！"}, {"text": "やれやれ", "sub": "やり直せッ！"}]
    }
,
    { 
        name: "静", 
        img: "assets/Shizuka_Infobox_Manga.png", 
        quotes: ["「（おしゃぶりをしゃぶる音...）」", "「アクトン・ベイビー！」"],
                description: "透明になる赤ちゃん。ジョセフに拾われたスタンド使いの乳児。",
        successSFX: "correct.mp3",
        failSFX: "wrong.mp3",
        successMessages: [{"text": "YES!", "sub": "正解だッ！"}, {"text": "グレート", "sub": "黄金の精神を感じるぞ"}], 
        failMessages: [{"text": "無駄無駄ァ！", "sub": "計算が甘いぞ！"}, {"text": "やれやれ", "sub": "やり直せッ！"}]
    }
,
    { 
        name: "鋼入りのダン", 
        img: "assets/Steely_Dan_Infobox_Manga.png", 
        quotes: ["「お仕置きの時間だッ！」", "「ラバーズ、脳内に侵入しろ！」"],
                description: "ラバーズの本体。自分の苦痛を相手に倍返しする能力を持つ。DIOの刺客の中でも特に卑劣。",
        successSFX: "correct.mp3",
        failSFX: "wrong.mp3",
        successMessages: [{"text": "YES!", "sub": "正解だッ！"}, {"text": "グレート", "sub": "黄金の精神を感じるぞ"}], 
        failMessages: [{"text": "無駄無駄ァ！", "sub": "計算が甘いぞ！"}, {"text": "やれやれ", "sub": "やり直せッ！"}]
    }
,
    { 
        name: "スーパー・フライ", 
        img: "assets/Super_Fly_Infobox_Manga.png", 
        quotes: ["「この鉄塔から出る事はできん！」", "「反射のダメージがあるぞッ！」"],
                description: "鋼田一豊大のスタンド。送電鉄塔の姿をしており、一人の人間を中に閉じ込め続ける。",
        successSFX: "correct.mp3",
        failSFX: "wrong.mp3",
        successMessages: [{"text": "YES!", "sub": "正解だッ！"}, {"text": "グレート", "sub": "黄金の精神を感じるぞ"}], 
        failMessages: [{"text": "無駄無駄ァ！", "sub": "計算が甘いぞ！"}, {"text": "やれやれ", "sub": "やり直せッ！"}]
    }
,
    { 
        name: "サーフィス", 
        img: "assets/Surface_Infobox_Manga.png", 
        quotes: ["「おまえの動きをコピーしたぜ！」", "「人形の俺に勝てるかな？」"],
                description: "間田敏和のスタンド。木製のデッサン人形で、触れた相手の姿と性格を完全にコピーする。",
        successSFX: "correct.mp3",
        failSFX: "wrong.mp3",
        successMessages: [{"text": "YES!", "sub": "正解だッ！"}, {"text": "グレート", "sub": "黄金の精神を感じるぞ"}], 
        failMessages: [{"text": "無駄無駄ァ！", "sub": "計算が甘いぞ！"}, {"text": "やれやれ", "sub": "やり直せッ！"}]
    }
,
    { 
        name: "小林玉美", 
        img: "assets/Tamami_Kobayashi_Normal_Infobox_Manga.png", 
        quotes: ["「罪悪感を感じているようだな...」", "「ザ・ロック！錠前をかけるッ！」"],
                description: "ザ・ロックの本体。相手の罪悪感に反応して心に錠前をかけ、重圧を与える。",
        successSFX: "correct.mp3",
        failSFX: "wrong.mp3",
        successMessages: [{"text": "YES!", "sub": "正解だッ！"}, {"text": "グレート", "sub": "黄金の精神を感じるぞ"}], 
        failMessages: [{"text": "無駄無駄ァ！", "sub": "計算が甘いぞ！"}, {"text": "やれやれ", "sub": "やり直せッ！"}]
    }
,
    { 
        name: "ザ・ロック", 
        img: "assets/The_Lock_Infobox_Manga.png", 
        quotes: ["「この重さに耐えきれるかな？」", "「カシャッ（錠前が閉じる音）」"],
                description: "小林玉美のスタンド。罪悪感を持つ者の心身を物理的に重くしていく錠前。",
        successSFX: "correct.mp3",
        failSFX: "wrong.mp3",
        successMessages: [{"text": "YES!", "sub": "正解だッ！"}, {"text": "グレート", "sub": "黄金の精神を感じるぞ"}], 
        failMessages: [{"text": "無駄無駄ァ！", "sub": "計算が甘いぞ！"}, {"text": "やれやれ", "sub": "やり直せッ！"}]
    }
,
    { 
        name: "間田敏和", 
        img: "assets/Toshikazu_Hazamada_Infobox_Manga.png", 
        quotes: ["「木の人形が最強なんだ！」", "「サーフィス、そいつを殴れ！」"],
                description: "サーフィスの本体。小心者で陰湿な性格だが、スタンド使いとして仗助達の前に立ちはだかった。",
        successSFX: "correct.mp3",
        failSFX: "wrong.mp3",
        successMessages: [{"text": "YES!", "sub": "正解だッ！"}, {"text": "グレート", "sub": "黄金の精神を感じるぞ"}], 
        failMessages: [{"text": "無駄無駄ァ！", "sub": "計算が甘いぞ！"}, {"text": "やれやれ", "sub": "やり直せッ！"}]
    }
,
    { 
        name: "タワー・オブ・グレー", 
        img: "assets/Tower_of_Gray_Infobox_Manga.png", 
        quotes: ["「光よりも速く飛ぶッ！」", "「針で舌を抜き取ってやる！」"],
                description: "グレー・フライのスタンド。カブトムシのような姿で、銃弾をかわすほどの超スピード。",
        successSFX: "correct.mp3",
        failSFX: "wrong.mp3",
        successMessages: [{"text": "YES!", "sub": "正解だッ！"}, {"text": "グレート", "sub": "黄金の精神を感じるぞ"}], 
        failMessages: [{"text": "無駄無駄ァ！", "sub": "計算が甘いぞ！"}, {"text": "やれやれ", "sub": "やり直せッ！"}]
    }
,
    { 
        name: "鋼田一豊大", 
        img: "assets/Toyohiro_Kanedaichi_Infobox_Manga.png", 
        quotes: ["「俺はこの鉄塔で生きていくッ！」", "「スーパー・フライを楽しんでくれ...」"],
                description: "スーパー・フライの本体。一生鉄塔の中で自給自足の生活を夢見ていた。",
        successSFX: "correct.mp3",
        failSFX: "wrong.mp3",
        successMessages: [{"text": "YES!", "sub": "正解だッ！"}, {"text": "グレート", "sub": "黄金の精神を感じるぞ"}], 
        failMessages: [{"text": "無駄無駄ァ！", "sub": "計算が甘いぞ！"}, {"text": "やれやれ", "sub": "やり直せッ！"}]
    }
,
    { 
        name: "ヴァニラ・アイス", 
        img: "assets/Vanilla_Ice_Infobox_Manga.png", 
        quotes: ["「暗黒空間にバラ撒いてやるッ！」", "「DIO様のために死ねェーーッ！！」"],
                description: "クリームの本体。暗黒空間を操るDIOの最側近。DIOへの忠誠心は狂気的。",
        successSFX: "correct.mp3",
        failSFX: "wrong.mp3",
        successMessages: [{"text": "YES!", "sub": "正解だッ！"}, {"text": "グレート", "sub": "黄金の精神を感じるぞ"}], 
        failMessages: [{"text": "無駄無駄ァ！", "sub": "計算が甘いぞ！"}, {"text": "やれやれ", "sub": "やり直せッ！"}]
    }
,
    { 
        name: "ワムウ", 
        img: "assets/Wamuu_Infobox_Manga.png", 
        quotes: ["「風の流法！神砂嵐！」", "「私は戦士だッ！」"],
                description: "柱の男の一人。誇り高き戦士。風を操り、必殺技は「神砂嵐」。",
        successSFX: "correct.mp3",
        failSFX: "wrong.mp3",
        successMessages: [{"text": "YES!", "sub": "正解だッ！"}, {"text": "グレート", "sub": "黄金の精神を感じるぞ"}], 
        failMessages: [{"text": "無駄無駄ァ！", "sub": "計算が甘いぞ！"}, {"text": "やれやれ", "sub": "やり直せッ！"}]
    }
,
    { 
        name: "ズィー・ズィー", 
        img: "assets/ZZ_Infobox_Manga.png", 
        quotes: ["「車がスタンドなんだッ！」", "「ホイール・オブ・フォーチュン！」"],
                description: "ホイール・オブ・フォーチュンの本体。愛車を強化し、ジョースター一行を追いつめた。",
        successSFX: "correct.mp3",
        failSFX: "wrong.mp3",
        successMessages: [{"text": "YES!", "sub": "正解だッ！"}, {"text": "グレート", "sub": "黄金の精神を感じるぞ"}], 
        failMessages: [{"text": "無駄無駄ァ！", "sub": "計算が甘いぞ！"}, {"text": "やれやれ", "sub": "やり直せッ！"}]
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

// 既存のセーブデータ互換性維持（名前変更対応）
let needsMigration = false;
if (unlockedCharacters.includes("ジョセフ") && !unlockedCharacters.includes("ジョセフ（第2部）")) {
    unlockedCharacters.push("ジョセフ（第2部）");
    needsMigration = true;
}
if (unlockedCharacters.includes("承太郎") && !unlockedCharacters.includes("承太郎（原作）")) {
    unlockedCharacters.push("承太郎（原作）");
    needsMigration = true;
}
if (needsMigration) {
    localStorage.setItem('jojoZukan', JSON.stringify(unlockedCharacters));
}

// BGMの設定
const BGM_LIST = [
    'jojo_bgm.mp3',
    'jojo_bgm_2.mp3',
    'jojo_bgm_3.mp3',
    'jojo_bgm_4.mp3',
    'jojo_bgm_5.mp3',
    'stardust_mashup.mp3',
    'jotaro-theme-but-only-the-good-parts-are-in-audiotrimmer.mp3'
    ,
    'CRAZY NOISY BIZARRE TOWN-bgm.mp3'
    ,
    'Fighting Gold-bgm.mp3'
    ,
    'I Want You-bgm.mp3'
    ,
    'The Bangles_ Walk like an Egyptian]-bgm.mp3'
    ,
    'ジョジョ その血の記憶～END OF THE WORLD～bgm.mp3'
    // AUTO_GEN_BGM_END
];
let bgm = null;
let bgmPlaying = false;
let currentBgmFile = null;
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
    const filteredBGM = BGM_LIST.filter(file => file !== 'jojo_bgm_2.mp3');
    let randomBGM;
    do {
        randomBGM = filteredBGM[Math.floor(Math.random() * filteredBGM.length)];
    } while (filteredBGM.length > 1 && randomBGM === currentBgmFile);
    
    currentBgmFile = randomBGM;
    bgm = new Audio(`assets/${randomBGM}`);
    bgm.volume = 0.4;
    
    // 曲が最後まで鳴り終わった（リプレイ時）ら、違う曲を流す
    bgm.addEventListener('ended', function() {
        initBGM();
        if (bgmPlaying) {
            bgm.play().catch(e => console.log("BGM replay fail:", e));
        }
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

    // タップ or クリックで次へ進むように変更
    const nextStep = () => {
        feedbackOverlay.removeEventListener('click', nextStep);
        feedbackOverlay.classList.add('hidden');
        currentQuestion++;
        if (currentQuestion < 10) {
            showQuestion();
        } else {
            showResults();
        }
    };
    feedbackOverlay.addEventListener('click', nextStep);
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
            text += `<div class="unlock-banner">
                <div class="unlock-title">NEW CHARACTER UNLOCKED!!</div>
                <img src="${unlockChar.img}" class="unlock-img" />
                <div class="unlock-name">『${unlockChar.name}』</div>
                <div class="unlock-desc">図鑑に登録されたぞッ！</div>
            </div>`;
        } else {
            text += `<br><br><span style="color:var(--jojo-gold);font-size:1.5rem;text-shadow: 2px 2px 0 #000;">★すでに全キャラクターを図鑑にコンプリートしている！グレート！</span>`;
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
    if (!bgmPlaying) {
        toggleBGM();
    } else {
        // すでにBGMが流れている状態（タイトルに戻ってからのリプレイ時）は違う曲に変える
        initBGM();
        bgm.play().catch(e => console.log("BGM start play failed:", e));
    }
    playSFX('ora_ora.mp3');
    startGame();
};
retryBtn.onclick = () => {
    // リプレイ時（再挑戦時）は違う曲に切り替える
    if (bgmPlaying) {
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

// =====================================================
// DeX Gaku — simulasi-data.js
// Data Soal Simulasi JLPT N5
// PAKET 1 — 80 Soal / 120 Poin / 90 Menit
// =====================================================

var SIMULASI_PACKETS = {
  paket1: {
    title: "Paket 1",
    totalSoal: 80,
    totalPoin: 120,
    waktuMenit: 90,
    kkm: 80,
    rincian: {
      moji: 34,
      bunpo: 26,
      dokkai: 20
    },

    soal: [

      // =================================================
      // A. MOJI / GOI — 34 SOAL
      // 1 - 34
      // =================================================

      {
        id: 1,
        section: "moji",
        type: "KJ",
        question: "毎日＿＿＿＿を飲みます。",
        options: ["みず", "ごはん", "ほん", "くるま"],
        correct: 0,
        points: 2,
        reading: "みず",
        meaning: "Air"
      },

      {
        id: 2,
        section: "moji",
        type: "KB",
        question: "きのう、デパートで＿＿＿＿を買いました。",
        options: ["くだもの", "くるま", "テレビ", "つくえ"],
        correct: 0,
        points: 2,
        reading: "くだもの",
        meaning: "Buah-buahan"
      },

      {
        id: 3,
        section: "moji",
        type: "KJ",
        question: "あそこに大きな＿＿＿＿があります。",
        options: ["やま", "たてもの", "かわ", "みち"],
        correct: 0,
        points: 2,
        reading: "やま",
        meaning: "Gunung"
      },

      {
        id: 4,
        section: "moji",
        type: "KB",
        question: "朝ごはんを食べるとき、いつも＿＿＿＿を飲みます。",
        options: ["おちゃ", "ごはん", "パン", "にく"],
        correct: 0,
        points: 2,
        reading: "おちゃ",
        meaning: "Teh hijau"
      },

      {
        id: 5,
        section: "moji",
        type: "KJ",
        question: "この＿＿＿＿はとてもおもしろいです。",
        options: ["ほん", "えんぴつ", "かばん", "とけい"],
        correct: 0,
        points: 2,
        reading: "ほん",
        meaning: "Buku"
      },

      {
        id: 6,
        section: "moji",
        type: "BP",
        question: "あした、学校へ＿＿＿＿＿。",
        options: ["いきます", "いきますせん", "いきました", "いかない"],
        correct: 0,
        points: 2,
        reading: "いきます",
        meaning: "Pergi"
      },

      {
        id: 7,
        section: "moji",
        type: "KJ",
        question: "庭にきれいな＿＿＿＿が咲いています。",
        options: ["花 (はな)", "木 (き)", "草 (くさ)", "鳥 (とり)"],
        correct: 0,
        points: 2,
        reading: "はな",
        meaning: "Bunga"
      },

      {
        id: 8,
        section: "moji",
        type: "KB",
        question: "かばんに＿＿＿＿を入れます。",
        options: ["ノート", "いす", "つくえ", "まど"],
        correct: 0,
        points: 2,
        reading: "ノート",
        meaning: "Buku catatan"
      },

      {
        id: 9,
        section: "moji",
        type: "KJ",
        question: "父は毎朝、新聞を＿＿＿＿。",
        options: ["よみます", "のみます", "ききます", "かきます"],
        correct: 0,
        points: 1,
        reading: "よみます",
        meaning: "Membaca"
      },

      {
        id: 10,
        section: "moji",
        type: "KB",
        question: "駅まで＿＿＿＿で行きます。",
        options: ["でんしゃ", "ぎゅうにく", "りんご", "つくえ"],
        correct: 0,
        points: 1,
        reading: "でんしゃ",
        meaning: "Kereta"
      },

      {
        id: 11,
        section: "moji",
        type: "KJ",
        question: "毎晩、＿＿＿＿にねます。",
        options: ["十一時", "水曜日", "三月", "月曜日"],
        correct: 0,
        points: 1,
        reading: "じゅういちじ",
        meaning: "Jam sebelas"
      },

      {
        id: 12,
        section: "moji",
        type: "KB",
        question: "暑いですから、＿＿＿＿をつけます。",
        options: ["エアコン", "えんぴつ", "くつ", "かさ"],
        correct: 0,
        points: 1,
        reading: "エアコン",
        meaning: "AC"
      },

      {
        id: 13,
        section: "moji",
        type: "KJ",
        question: "＿＿＿＿へ行って、本を買いました。",
        options: ["本屋", "病院", "銀行", "学校"],
        correct: 0,
        points: 1,
        reading: "ほんや",
        meaning: "Toko buku"
      },

      {
        id: 14,
        section: "moji",
        type: "KB",
        question: "りんごを＿＿＿＿ください。",
        options: ["三つ", "三人", "三台", "三冊"],
        correct: 0,
        points: 1,
        reading: "みっつ",
        meaning: "Tiga buah"
      },

      {
        id: 15,
        section: "moji",
        type: "KJ",
        question: "私は＿＿＿＿で日本語を勉強します。",
        options: ["図書館", "食堂", "駅", "病気"],
        correct: 0,
        points: 1,
        reading: "としょかん",
        meaning: "Perpustakaan"
      },

      {
        id: 16,
        section: "moji",
        type: "KB",
        question: "弟は毎日サッカーを＿＿＿＿。",
        options: ["します", "たべます", "のみます", "あります"],
        correct: 0,
        points: 1,
        reading: "します",
        meaning: "Melakukan"
      },

      {
        id: 17,
        section: "moji",
        type: "KJ",
        question: "この道はとても＿＿＿＿です。",
        options: ["長い", "甘い", "安い", "白い"],
        correct: 0,
        points: 1,
        reading: "ながい",
        meaning: "Panjang"
      },

      {
        id: 18,
        section: "moji",
        type: "KB",
        question: "スーパーで＿＿＿＿を買いました。",
        options: ["たまご", "くつ", "かばん", "じてんしゃ"],
        correct: 0,
        points: 1,
        reading: "たまご",
        meaning: "Telur"
      },

      {
        id: 19,
        section: "moji",
        type: "KJ",
        question: "毎朝、＿＿＿＿を食べます。",
        options: ["朝ごはん", "電車", "学校", "天気"],
        correct: 0,
        points: 1,
        reading: "あさごはん",
        meaning: "Sarapan"
      },

      {
        id: 20,
        section: "moji",
        type: "KB",
        question: "これは母の＿＿＿＿です。",
        options: ["かさ", "やま", "かわ", "でんしゃ"],
        correct: 0,
        points: 1,
        reading: "かさ",
        meaning: "Payung"
      },

      {
        id: 21,
        section: "moji",
        type: "KJ",
        question: "日本の＿＿＿＿は四月です。",
        options: ["春", "冬", "夏", "秋"],
        correct: 0,
        points: 1,
        reading: "はる",
        meaning: "Musim semi"
      },

      {
        id: 22,
        section: "moji",
        type: "KB",
        question: "教室に学生が＿＿＿＿います。",
        options: ["十人", "十冊", "十台", "十枚"],
        correct: 0,
        points: 1,
        reading: "じゅうにん",
        meaning: "Sepuluh orang"
      },

      {
        id: 23,
        section: "moji",
        type: "KJ",
        question: "駅の前に大きな＿＿＿＿があります。",
        options: ["店", "耳", "口", "足"],
        correct: 0,
        points: 1,
        reading: "みせ",
        meaning: "Toko"
      },

      {
        id: 24,
        section: "moji",
        type: "KB",
        question: "私は＿＿＿＿が好きです。",
        options: ["音楽", "学校", "電車", "病院"],
        correct: 0,
        points: 1,
        reading: "おんがく",
        meaning: "Musik"
      },

      {
        id: 25,
        section: "moji",
        type: "KJ",
        question: "今日は＿＿＿＿がいいです。",
        options: ["天気", "時計", "新聞", "先生"],
        correct: 0,
        points: 1,
        reading: "てんき",
        meaning: "Cuaca"
      },

      {
        id: 26,
        section: "moji",
        type: "KB",
        question: "学校へ行く前に、＿＿＿＿をします。",
        options: ["べんきょう", "さんぽ", "そうじ", "あさごはん"],
        correct: 3,
        points: 2,
        reading: "あさごはん",
        meaning: "Sarapan"
      },

      {
        id: 27,
        section: "moji",
        type: "KJ",
        question: "兄は大学の＿＿＿＿です。",
        options: ["学生", "会社", "先生", "病院"],
        correct: 0,
        points: 2,
        reading: "がくせい",
        meaning: "Mahasiswa"
      },

      {
        id: 28,
        section: "moji",
        type: "KB",
        question: "雨ですから＿＿＿＿を持って行きます。",
        options: ["かさ", "くつ", "ぼうし", "めがね"],
        correct: 0,
        points: 2,
        reading: "かさ",
        meaning: "Payung"
      },

      {
        id: 29,
        section: "moji",
        type: "KJ",
        question: "私は毎日＿＿＿＿に学校へ行きます。",
        options: ["歩いて", "飲んで", "食べて", "寝て"],
        correct: 0,
        points: 2,
        reading: "あるいて",
        meaning: "Dengan berjalan kaki"
      },

      {
        id: 30,
        section: "moji",
        type: "KB",
        question: "父は会社で＿＿＿＿を使います。",
        options: ["パソコン", "ふとん", "れいぞうこ", "テレビ"],
        correct: 0,
        points: 2,
        reading: "パソコン",
        meaning: "Komputer"
      },

      {
        id: 31,
        section: "moji",
        type: "KJ",
        question: "公園に＿＿＿＿がたくさんあります。",
        options: ["木", "駅", "病院", "学校"],
        correct: 0,
        points: 2,
        reading: "き",
        meaning: "Pohon"
      },

      {
        id: 32,
        section: "moji",
        type: "KB",
        question: "昼ごはんに＿＿＿＿を食べました。",
        options: ["ラーメン", "えんぴつ", "かさ", "くつ"],
        correct: 0,
        points: 2,
        reading: "ラーメン",
        meaning: "Ramen"
      },

      {
        id: 33,
        section: "moji",
        type: "KJ",
        question: "日本語の＿＿＿＿を読みます。",
        options: ["本", "車", "魚", "店"],
        correct: 0,
        points: 2,
        reading: "ほん",
        meaning: "Buku"
      },

      {
        id: 34,
        section: "moji",
        type: "KB",
        question: "毎週日曜日に＿＿＿＿へ行きます。",
        options: ["スーパー", "りんご", "新聞", "いす"],
        correct: 0,
        points: 2,
        reading: "スーパー",
        meaning: "Supermarket"
      },


      // =================================================
      // B. BUNPOU — 26 SOAL
      // 35 - 60
      // =================================================

      {
        id: 35,
        section: "bunpo",
        type: "BP",
        question: "わたし＿＿学生です。",
        options: ["は", "を", "に", "で"],
        correct: 0,
        points: 1,
        reading: "",
        meaning: ""
      },

      {
        id: 36,
        section: "bunpo",
        type: "BP",
        question: "これは＿＿本です。",
        options: ["わたし", "わたしの", "わたしは", "わたしを"],
        correct: 1,
        points: 1,
        reading: "",
        meaning: ""
      },

      {
        id: 37,
        section: "bunpo",
        type: "BP",
        question: "毎朝、七時＿＿起きます。",
        options: ["に", "を", "が", "で"],
        correct: 0,
        points: 1,
        reading: "",
        meaning: ""
      },

      {
        id: 38,
        section: "bunpo",
        type: "BP",
        question: "学校＿＿日本語を勉強します。",
        options: ["で", "に", "を", "へ"],
        correct: 0,
        points: 1,
        reading: "",
        meaning: ""
      },

      {
        id: 39,
        section: "bunpo",
        type: "BP",
        question: "りんご＿＿食べます。",
        options: ["を", "は", "で", "に"],
        correct: 0,
        points: 1,
        reading: "",
        meaning: ""
      },

      {
        id: 40,
        section: "bunpo",
        type: "BP",
        question: "田中さん＿＿学校へ行きました。",
        options: ["は", "を", "が", "で"],
        correct: 0,
        points: 1,
        reading: "",
        meaning: ""
      },

      {
        id: 41,
        section: "bunpo",
        type: "BP",
        question: "これは日本語＿＿本です。",
        options: ["の", "を", "に", "が"],
        correct: 0,
        points: 1,
        reading: "",
        meaning: ""
      },

      {
        id: 42,
        section: "bunpo",
        type: "BP",
        question: "日曜日＿＿友だちと映画を見ました。",
        options: ["に", "で", "を", "が"],
        correct: 0,
        points: 1,
        reading: "",
        meaning: ""
      },

      {
        id: 43,
        section: "bunpo",
        type: "BP",
        question: "コーヒー＿＿飲みません。",
        options: ["は", "を", "に", "へ"],
        correct: 0,
        points: 1,
        reading: "",
        meaning: ""
      },

      {
        id: 44,
        section: "bunpo",
        type: "BP",
        question: "駅＿＿歩いて行きます。",
        options: ["まで", "から", "で", "を"],
        correct: 0,
        points: 1,
        reading: "",
        meaning: ""
      },

      {
        id: 45,
        section: "bunpo",
        type: "BP",
        question: "りんごとバナナ＿＿買いました。",
        options: ["を", "が", "に", "で"],
        correct: 0,
        points: 1,
        reading: "",
        meaning: ""
      },

      {
        id: 46,
        section: "bunpo",
        type: "BP",
        question: "いっしょに昼ごはんを＿＿。",
        options: ["食べましょう", "食べましたか", "食べません", "食べないです"],
        correct: 0,
        points: 1,
        reading: "",
        meaning: ""
      },

      {
        id: 47,
        section: "bunpo",
        type: "BP",
        question: "昨日は学校へ＿＿。",
        options: ["行きませんでした", "行きません", "行きます", "行くです"],
        correct: 0,
        points: 1,
        reading: "",
        meaning: ""
      },

      {
        id: 48,
        section: "bunpo",
        type: "BP",
        question: "これは＿＿ですか。",
        options: ["だれ", "だれの", "だれを", "だれが"],
        correct: 0,
        points: 2,
        reading: "",
        meaning: ""
      },

      {
        id: 49,
        section: "bunpo",
        type: "BP",
        question: "＿＿ペンはあなたのですか。",
        options: ["この", "これ", "ここ", "こちら"],
        correct: 0,
        points: 2,
        reading: "",
        meaning: ""
      },

      {
        id: 50,
        section: "bunpo",
        type: "BP",
        question: "部屋に机が＿＿。",
        options: ["あります", "います", "です", "します"],
        correct: 0,
        points: 2,
        reading: "",
        meaning: ""
      },

      {
        id: 51,
        section: "bunpo",
        type: "BP",
        question: "公園に子どもが＿＿。",
        options: ["います", "あります", "です", "します"],
        correct: 0,
        points: 2,
        reading: "",
        meaning: ""
      },

      {
        id: 52,
        section: "bunpo",
        type: "BP",
        question: "日本語を＿＿ことができます。",
        options: ["話す", "話します", "話した", "話して"],
        correct: 0,
        points: 2,
        reading: "",
        meaning: ""
      },

      {
        id: 53,
        section: "bunpo",
        type: "BP",
        question: "毎日、日本語を＿＿います。",
        options: ["勉強して", "勉強します", "勉強した", "勉強する"],
        correct: 0,
        points: 2,
        reading: "",
        meaning: ""
      },

      {
        id: 54,
        section: "bunpo",
        type: "BP",
        question: "ここで写真を＿＿もいいですか。",
        options: ["撮って", "撮る", "撮ります", "撮った"],
        correct: 0,
        points: 2,
        reading: "",
        meaning: ""
      },

      {
        id: 55,
        section: "bunpo",
        type: "BP",
        question: "ここでたばこを＿＿はいけません。",
        options: ["すって", "すう", "すいます", "すった"],
        correct: 0,
        points: 2,
        reading: "",
        meaning: ""
      },

      {
        id: 56,
        section: "bunpo",
        type: "BP",
        question: "明日、雨が＿＿と思います。",
        options: ["降る", "降ります", "降って", "降った"],
        correct: 0,
        points: 2,
        reading: "",
        meaning: ""
      },

      {
        id: 57,
        section: "bunpo",
        type: "BP",
        question: "私は日本へ＿＿たいです。",
        options: ["行き", "行く", "行って", "行った"],
        correct: 0,
        points: 2,
        reading: "",
        meaning: ""
      },

      {
        id: 58,
        section: "bunpo",
        type: "BP",
        question: "昨日、友だちと映画を＿＿。",
        options: ["見ました", "見ません", "見ます", "見るです"],
        correct: 0,
        points: 2,
        reading: "",
        meaning: ""
      },

      {
        id: 59,
        section: "bunpo",
        type: "BP",
        question: "このかばんは＿＿です。",
        options: ["大きい", "大きく", "大きくて", "大きかったですか"],
        correct: 0,
        points: 2,
        reading: "",
        meaning: ""
      },

      {
        id: 60,
        section: "bunpo",
        type: "BP",
        question: "昨日は＿＿天気でした。",
        options: ["いい", "よく", "よいの", "よくて"],
        correct: 0,
        points: 2,
        reading: "",
        meaning: ""
      },


      // =================================================
      // C. DOKKAI — 20 SOAL
      // 61 - 80
      // =================================================

      {
        id: 61,
        section: "dokkai",
        type: "DK",
        question:
          "【図書館のお知らせ】\n\n" +
          "図書館は月曜日から土曜日まで開いています。\n" +
          "時間は午前9時から午後5時までです。\n" +
          "日曜日は休みです。\n\n" +
          "火曜日の午後2時に行くと、図書館は開いていますか。",
        options: ["はい、開いています", "いいえ、休みです", "午後6時から開きます", "午前8時に開きます"],
        correct: 0,
        points: 1,
        reading: "",
        meaning: ""
      },

      {
        id: 62,
        section: "dokkai",
        type: "DK",
        question:
          "【店のお知らせ】\n\n" +
          "パン屋は毎朝7時に開きます。\n" +
          "月曜日は休みです。\n" +
          "土曜日と日曜日は午後6時まで営業します。\n\n" +
          "この店は月曜日にどうなりますか。",
        options: ["休みです", "7時に開きます", "午後6時に開きます", "夜まで営業します"],
        correct: 0,
        points: 1,
        reading: "",
        meaning: ""
      },

      {
        id: 63,
        section: "dokkai",
        type: "DK",
        question:
          "【田中さんの一日】\n\n" +
          "田中さんは毎朝6時に起きます。\n" +
          "7時に朝ごはんを食べて、8時に会社へ行きます。\n" +
          "仕事は5時に終わります。\n\n" +
          "田中さんは何時に会社へ行きますか。",
        options: ["6時", "7時", "8時", "5時"],
        correct: 2,
        points: 1,
        reading: "",
        meaning: ""
      },

      {
        id: 64,
        section: "dokkai",
        type: "DK",
        question:
          "【メモ】\n\n" +
          "明日は母の誕生日です。\n" +
          "学校の帰りにケーキを買います。\n" +
          "ケーキ屋は駅の前にあります。\n\n" +
          "学校の帰りに何を買いますか。",
        options: ["本", "ケーキ", "花", "かばん"],
        correct: 1,
        points: 1,
        reading: "",
        meaning: ""
      },

      {
        id: 65,
        section: "dokkai",
        type: "DK",
        question:
          "【天気予報】\n\n" +
          "今日は朝から晴れます。\n" +
          "午後から少し雨が降ります。\n" +
          "夜は寒くなります。\n\n" +
          "午後の天気はどうですか。",
        options: ["雪です", "晴れだけです", "少し雨が降ります", "とても暑いです"],
        correct: 2,
        points: 1,
        reading: "",
        meaning: ""
      },

      {
        id: 66,
        section: "dokkai",
        type: "DK",
        question:
          "【山田さんへのメッセージ】\n\n" +
          "山田さん、こんにちは。\n" +
          "今日の午後3時に駅で会いましょう。\n" +
          "私は青いかばんを持っています。\n\n" +
          "二人はどこで会いますか。",
        options: ["学校", "駅", "公園", "会社"],
        correct: 1,
        points: 1,
        reading: "",
        meaning: ""
      },

      {
        id: 67,
        section: "dokkai",
        type: "DK",
        question:
          "【日曜日】\n\n" +
          "日曜日、私は朝8時に起きました。\n" +
          "午前中は部屋を掃除しました。\n" +
          "午後は友だちと公園へ行きました。\n\n" +
          "午前中、何をしましたか。",
        options: ["映画を見ました", "公園へ行きました", "部屋を掃除しました", "勉強しました"],
        correct: 2,
        points: 1,
        reading: "",
        meaning: ""
      },

      {
        id: 68,
        section: "dokkai",
        type: "DK",
        question:
          "【学校のお知らせ】\n\n" +
          "明日はテストがあります。\n" +
          "テストは午前10時から始まります。\n" +
          "学生は9時30分までに教室に来てください。\n\n" +
          "学生は何時までに教室に来ますか。",
        options: ["9時", "9時30分", "10時", "10時30分"],
        correct: 1,
        points: 1,
        reading: "",
        meaning: ""
      },

      {
        id: 69,
        section: "dokkai",
        type: "DK",
        question:
          "【スーパー】\n\n" +
          "りんごは1個100円です。\n" +
          "バナナは1房150円です。\n" +
          "今日はりんごが50円安くなっています。\n\n" +
          "今日のりんごはいくらですか。",
        options: ["50円", "100円", "150円", "200円"],
        correct: 0,
        points: 1,
        reading: "",
        meaning: ""
      },

      {
        id: 70,
        section: "dokkai",
        type: "DK",
        question:
          "【私の部屋】\n\n" +
          "私の部屋にはベッドがあります。\n" +
          "ベッドのとなりに机があります。\n" +
          "机の上にパソコンと本があります。\n\n" +
          "机の上に何がありますか。",
        options: ["テレビと時計", "パソコンと本", "ベッドといす", "かばんとくつ"],
        correct: 1,
        points: 1,
        reading: "",
        meaning: ""
      },

      {
        id: 71,
        section: "dokkai",
        type: "DK",
        question:
          "【旅行の予定】\n\n" +
          "来週、家族と京都へ行きます。\n" +
          "土曜日の朝7時に新幹線に乗ります。\n" +
          "京都には10時ごろ着きます。\n" +
          "ホテルに荷物を置いてから、お寺を見に行きます。\n\n" +
          "京都に着いてから、最初に何をしますか。",
        options: ["新幹線に乗ります", "お寺を見ます", "ホテルに荷物を置きます", "家に帰ります"],
        correct: 2,
        points: 2,
        reading: "",
        meaning: ""
      },

      {
        id: 72,
        section: "dokkai",
        type: "DK",
        question:
          "【レストランのメニュー】\n\n" +
          "カレー　500円\n" +
          "ラーメン　600円\n" +
          "うどん　400円\n" +
          "定食　700円\n\n" +
          "田中さんは500円しか持っていません。\n" +
          "何を食べることができますか。",
        options: ["ラーメンだけ", "カレーとうどん", "定食だけ", "ラーメンとうどん"],
        correct: 1,
        points: 2,
        reading: "",
        meaning: ""
      },

      {
        id: 73,
        section: "dokkai",
        type: "DK",
        question:
          "【駅で】\n\n" +
          "Aさん：すみません。東京へ行きたいです。\n" +
          "Bさん：この電車に乗ってください。\n" +
          "Aさん：何番ホームですか。\n" +
          "Bさん：3番ホームです。\n\n" +
          "東京行きの電車は何番ホームですか。",
        options: ["1番", "2番", "3番", "4番"],
        correct: 2,
        points: 2,
        reading: "",
        meaning: ""
      },

      {
        id: 74,
        section: "dokkai",
        type: "DK",
        question:
          "【約束】\n\n" +
          "A：明日、一緒に映画を見ませんか。\n" +
          "B：いいですね。何時に会いますか。\n" +
          "A：午後1時はどうですか。\n" +
          "B：すみません。午後1時は仕事があります。\n" +
          "A：では、午後4時はどうですか。\n" +
          "B：はい、4時なら大丈夫です。\n\n" +
          "二人は何時に会いますか。",
        options: ["午前1時", "午後1時", "午後4時", "午後5時"],
        correct: 2,
        points: 2,
        reading: "",
        meaning: ""
      },

      {
        id: 75,
        section: "dokkai",
        type: "DK",
        question:
          "【学校祭】\n\n" +
          "土曜日に学校祭があります。\n" +
          "午前10時から始まります。\n" +
          "学生たちは教室で料理を作ります。\n" +
          "体育館では午後1時から音楽の発表があります。\n\n" +
          "音楽の発表はどこでありますか。",
        options: ["教室", "図書館", "体育館", "食堂"],
        correct: 2,
        points: 2,
        reading: "",
        meaning: ""
      },

      {
        id: 76,
        section: "dokkai",
        type: "DK",
        question:
          "【病院からのお知らせ】\n\n" +
          "病院は月曜日から金曜日まで開いています。\n" +
          "午前の診察は9時から12時までです。\n" +
          "午後は2時から5時までです。\n" +
          "土曜日と日曜日は休みです。\n\n" +
          "水曜日の午後3時に病院へ行くことができますか。",
        options: ["はい、できます", "いいえ、土曜日だからです", "いいえ、午前だけだからです", "いいえ、日曜日だからです"],
        correct: 0,
        points: 2,
        reading: "",
        meaning: ""
      },

      {
        id: 77,
        section: "dokkai",
        type: "DK",
        question:
          "【買い物】\n\n" +
          "私は新しい靴を買いたいです。\n" +
          "デパートには赤い靴と黒い靴があります。\n" +
          "赤い靴は3000円で、黒い靴は2500円です。\n" +
          "私は黒い靴を買いました。\n\n" +
          "黒い靴はいくらですか。",
        options: ["2000円", "2500円", "3000円", "3500円"],
        correct: 1,
        points: 2,
        reading: "",
        meaning: ""
      },

      {
        id: 78,
        section: "dokkai",
        type: "DK",
        question:
          "【週末の予定】\n\n" +
          "土曜日は朝から雨が降るそうです。\n" +
          "ですから、私は家で本を読みたいです。\n" +
          "日曜日は天気がいいそうなので、友だちと公園へ行く予定です。\n\n" +
          "私は土曜日に何をする予定ですか。",
        options: ["友だちと公園へ行きます", "家で本を読みます", "買い物へ行きます", "映画を見ます"],
        correct: 1,
        points: 2,
        reading: "",
        meaning: ""
      },

      {
        id: 79,
        section: "dokkai",
        type: "DK",
        question:
          "【家族】\n\n" +
          "私の家族は4人です。\n" +
          "父と母と弟と私です。\n" +
          "父は会社員で、母は先生です。\n" +
          "弟は高校生です。\n\n" +
          "この家族は何人ですか。",
        options: ["2人", "3人", "4人", "5人"],
        correct: 2,
        points: 2,
        reading: "",
        meaning: ""
      },

      {
        id: 80,
        section: "dokkai",
        type: "DK",
        question:
          "【メール】\n\n" +
          "こんにちは、リーさん。\n" +
          "明日の午後2時に駅の前で会いませんか。\n" +
          "一緒に本を買いに行きましょう。\n" +
          "雨が降ったら、駅の中で待っています。\n\n" +
          "明日、二人は何をしに行きますか。",
        options: ["映画を見に行きます", "本を買いに行きます", "学校へ行きます", "レストランへ行きます"],
        correct: 1,
        points: 2,
        reading: "",
        meaning: ""
      }

    ]
  }

  ,
  paket2: {
    title: "Paket 2",
    totalSoal: 80,
    totalPoin: 120,
    waktuMenit: 90,
    kkm: 80,
    rincian: { moji: 34, bunpo: 26, dokkai: 20 },
    soal: [
      // A. MOJI/GOI — 34 soal (1-34)
      { id: 1, section: "moji", type: "KJ", question: "毎朝＿＿＿＿を食べます。", options: ["パン", "くるま", "ほん", "かさ"], correct: 0, points: 2, reading: "パン", meaning: "Roti" },
      { id: 2, section: "moji", type: "KB", question: "デパートで＿＿＿＿を買いました。", options: ["ふく", "つくえ", "テレビ", "いす"], correct: 0, points: 2, reading: "ふく", meaning: "Baju" },
      { id: 3, section: "moji", type: "KJ", question: "私の＿＿＿＿はサラリーマンです。", options: ["父", "山", "川", "道"], correct: 0, points: 2, reading: "ちち", meaning: "Ayah" },
      { id: 4, section: "moji", type: "KB", question: "喉が乾いたので＿＿＿＿を飲みます。", options: ["みず", "ごはん", "パン", "にく"], correct: 0, points: 2, reading: "みず", meaning: "Air" },
      { id: 5, section: "moji", type: "KJ", question: "この＿＿＿＿はとても新しいです。", options: ["家", "耳", "口", "足"], correct: 0, points: 2, reading: "いえ", meaning: "Rumah" },
      { id: 6, section: "moji", type: "BP", question: "今晩、テレビを＿＿＿＿＿。", options: ["みます", "みますせん", "みました", "みない"], correct: 0, points: 2, reading: "みます", meaning: "Menonton" },
      { id: 7, section: "moji", type: "KJ", question: "空に＿＿＿＿がたくさん出ています。", options: ["星 (ほし)", "雲 (くも)", "雨 (あめ)", "風 (かぜ)"], correct: 0, points: 2, reading: "ほし", meaning: "Bintang" },
      { id: 8, section: "moji", type: "KB", question: "教室に＿＿＿＿を持って行きます。", options: ["じしょ", "いす", "まど", "とけい"], correct: 0, points: 2, reading: "じしょ", meaning: "Kamus" },
      { id: 9, section: "moji", type: "KJ", question: "姉は毎晩、日記を＿＿＿＿。", options: ["かきます", "のみます", "ききます", "よみます"], correct: 0, points: 1, reading: "かきます", meaning: "Menulis" },
      { id: 10, section: "moji", type: "KB", question: "バスより＿＿＿＿のほうが早いです。", options: ["タクシー", "ぎゅうにく", "りんご", "つくえ"], correct: 0, points: 1, reading: "タクシー", meaning: "Taksi" },
      { id: 11, section: "moji", type: "KJ", question: "毎朝、＿＿＿＿におきます。", options: ["六時", "水曜日", "三月", "月曜日"], correct: 0, points: 1, reading: "ろくじ", meaning: "Jam enam" },
      { id: 12, section: "moji", type: "KB", question: "寒いですから、＿＿＿＿を着ます。", options: ["コート", "えんぴつ", "くつ", "かさ"], correct: 0, points: 1, reading: "コート", meaning: "Jaket/Coat" },
      { id: 13, section: "moji", type: "KJ", question: "＿＿＿＿へ行って、切手を買いました。", options: ["郵便局", "病院", "銀行", "学校"], correct: 0, points: 1, reading: "ゆうびんきょく", meaning: "Kantor pos" },
      { id: 14, section: "moji", type: "KB", question: "ノートを＿＿＿＿ください。", options: ["二冊", "二人", "二台", "二枚"], correct: 0, points: 1, reading: "にさつ", meaning: "Dua buku" },
      { id: 15, section: "moji", type: "KJ", question: "私は＿＿＿＿で薬をもらいます。", options: ["病院", "食堂", "駅", "本屋"], correct: 0, points: 1, reading: "びょういん", meaning: "Rumah sakit" },
      { id: 16, section: "moji", type: "KB", question: "妹は毎日ピアノを＿＿＿＿。", options: ["ならいます", "たべます", "のみます", "あります"], correct: 0, points: 1, reading: "ならいます", meaning: "Belajar/berlatih" },
      { id: 17, section: "moji", type: "KJ", question: "この川はとても＿＿＿＿です。", options: ["広い", "甘い", "安い", "白い"], correct: 0, points: 1, reading: "ひろい", meaning: "Luas" },
      { id: 18, section: "moji", type: "KB", question: "市場で＿＿＿＿を買いました。", options: ["さかな", "くつ", "かばん", "じてんしゃ"], correct: 0, points: 1, reading: "さかな", meaning: "Ikan" },
      { id: 19, section: "moji", type: "KJ", question: "毎晩、＿＿＿＿を食べます。", options: ["晩ごはん", "電車", "学校", "天気"], correct: 0, points: 1, reading: "ばんごはん", meaning: "Makan malam" },
      { id: 20, section: "moji", type: "KB", question: "これは兄の＿＿＿＿です。", options: ["ぼうし", "やま", "かわ", "でんしゃ"], correct: 0, points: 1, reading: "ぼうし", meaning: "Topi" },
      { id: 21, section: "moji", type: "KJ", question: "日本の＿＿＿＿は寒いです。", options: ["冬", "夏", "春", "秋"], correct: 0, points: 1, reading: "ふゆ", meaning: "Musim dingin" },
      { id: 22, section: "moji", type: "KB", question: "駐車場に車が＿＿＿＿あります。", options: ["五台", "五冊", "五人", "五枚"], correct: 0, points: 1, reading: "ごだい", meaning: "Lima unit (mobil)" },
      { id: 23, section: "moji", type: "KJ", question: "橋の下に＿＿＿＿があります。", options: ["川", "耳", "口", "足"], correct: 0, points: 1, reading: "かわ", meaning: "Sungai" },
      { id: 24, section: "moji", type: "KB", question: "私は＿＿＿＿が得意です。", options: ["料理", "学校", "電車", "病院"], correct: 0, points: 1, reading: "りょうり", meaning: "Masakan" },
      { id: 25, section: "moji", type: "KJ", question: "今日は＿＿＿＿が悪いです。", options: ["天気", "時計", "新聞", "先生"], correct: 0, points: 1, reading: "てんき", meaning: "Cuaca" },
      { id: 26, section: "moji", type: "KB", question: "寝る前に、＿＿＿＿をします。", options: ["はみがき", "さんぽ", "そうじ", "あさごはん"], correct: 0, points: 2, reading: "はみがき", meaning: "Sikat gigi" },
      { id: 27, section: "moji", type: "KJ", question: "叔母は病院の＿＿＿＿です。", options: ["医者", "会社", "先生", "学生"], correct: 0, points: 2, reading: "いしゃ", meaning: "Dokter" },
      { id: 28, section: "moji", type: "KB", question: "外は寒いですから＿＿＿＿をします。", options: ["てぶくろ", "くつ", "ぼうし", "めがね"], correct: 0, points: 2, reading: "てぶくろ", meaning: "Sarung tangan" },
      { id: 29, section: "moji", type: "KJ", question: "私は毎日＿＿＿＿で会社へ行きます。", options: ["電車で", "飲んで", "食べて", "寝て"], correct: 0, points: 2, reading: "でんしゃで", meaning: "Dengan kereta" },
      { id: 30, section: "moji", type: "KB", question: "台所で＿＿＿＿を使います。", options: ["フライパン", "ふとん", "れいぞうこ", "テレビ"], correct: 0, points: 2, reading: "フライパン", meaning: "Wajan" },
      { id: 31, section: "moji", type: "KJ", question: "冬になると＿＿＿＿が降ります。", options: ["雪", "駅", "病院", "学校"], correct: 0, points: 2, reading: "ゆき", meaning: "Salju" },
      { id: 32, section: "moji", type: "KB", question: "朝ごはんに＿＿＿＿を食べました。", options: ["たまごやき", "えんぴつ", "かさ", "くつ"], correct: 0, points: 2, reading: "たまごやき", meaning: "Telur dadar" },
      { id: 33, section: "moji", type: "KJ", question: "この＿＿＿＿は難しいです。", options: ["問題", "車", "魚", "店"], correct: 0, points: 2, reading: "もんだい", meaning: "Soal/masalah" },
      { id: 34, section: "moji", type: "KB", question: "毎週土曜日に＿＿＿＿へ行きます。", options: ["としょかん", "りんご", "新聞", "いす"], correct: 0, points: 2, reading: "としょかん", meaning: "Perpustakaan" },

      // B. BUNPOU — 26 soal (35-60)
      { id: 35, section: "bunpo", type: "BP", question: "これ＿＿私のかばんです。", options: ["は", "を", "に", "で"], correct: 0, points: 1, reading: "", meaning: "" },
      { id: 36, section: "bunpo", type: "BP", question: "それは＿＿ノートです。", options: ["せんせい", "せんせいの", "せんせいは", "せんせいを"], correct: 1, points: 1, reading: "", meaning: "" },
      { id: 37, section: "bunpo", type: "BP", question: "毎晩、十時＿＿ねます。", options: ["に", "を", "が", "で"], correct: 0, points: 1, reading: "", meaning: "" },
      { id: 38, section: "bunpo", type: "BP", question: "図書館＿＿本を読みます。", options: ["で", "に", "を", "へ"], correct: 0, points: 1, reading: "", meaning: "" },
      { id: 39, section: "bunpo", type: "BP", question: "パン＿＿食べます。", options: ["を", "は", "で", "に"], correct: 0, points: 1, reading: "", meaning: "" },
      { id: 40, section: "bunpo", type: "BP", question: "山田さん＿＿会社へ行きました。", options: ["は", "を", "が", "で"], correct: 0, points: 1, reading: "", meaning: "" },
      { id: 41, section: "bunpo", type: "BP", question: "これは英語＿＿新聞です。", options: ["の", "を", "に", "が"], correct: 0, points: 1, reading: "", meaning: "" },
      { id: 42, section: "bunpo", type: "BP", question: "土曜日＿＿家族と旅行しました。", options: ["に", "で", "を", "が"], correct: 0, points: 1, reading: "", meaning: "" },
      { id: 43, section: "bunpo", type: "BP", question: "お酒＿＿飲みません。", options: ["は", "を", "に", "へ"], correct: 0, points: 1, reading: "", meaning: "" },
      { id: 44, section: "bunpo", type: "BP", question: "会社＿＿バスで行きます。", options: ["まで", "から", "で", "を"], correct: 0, points: 1, reading: "", meaning: "" },
      { id: 45, section: "bunpo", type: "BP", question: "ノートとペン＿＿買いました。", options: ["を", "が", "に", "で"], correct: 0, points: 1, reading: "", meaning: "" },
      { id: 46, section: "bunpo", type: "BP", question: "いっしょにお茶を＿＿。", options: ["飲みましょう", "飲みましたか", "飲みません", "飲まないです"], correct: 0, points: 1, reading: "", meaning: "" },
      { id: 47, section: "bunpo", type: "BP", question: "先週は会社へ＿＿。", options: ["行きませんでした", "行きません", "行きます", "行くです"], correct: 0, points: 1, reading: "", meaning: "" },
      { id: 48, section: "bunpo", type: "BP", question: "あれは＿＿かばんですか。", options: ["だれ", "だれの", "だれを", "だれが"], correct: 1, points: 2, reading: "", meaning: "" },
      { id: 49, section: "bunpo", type: "BP", question: "＿＿本はあなたのですか。", options: ["その", "それ", "そこ", "そちら"], correct: 0, points: 2, reading: "", meaning: "" },
      { id: 50, section: "bunpo", type: "BP", question: "教室に椅子が＿＿。", options: ["あります", "います", "です", "します"], correct: 0, points: 2, reading: "", meaning: "" },
      { id: 51, section: "bunpo", type: "BP", question: "庭に猫が＿＿。", options: ["います", "あります", "です", "します"], correct: 0, points: 2, reading: "", meaning: "" },
      { id: 52, section: "bunpo", type: "BP", question: "ピアノを＿＿ことができます。", options: ["弾く", "弾きます", "弾いた", "弾いて"], correct: 0, points: 2, reading: "", meaning: "" },
      { id: 53, section: "bunpo", type: "BP", question: "毎日、英語を＿＿います。", options: ["練習して", "練習します", "練習した", "練習する"], correct: 0, points: 2, reading: "", meaning: "" },
      { id: 54, section: "bunpo", type: "BP", question: "ここでご飯を＿＿もいいですか。", options: ["食べて", "食べる", "食べます", "食べた"], correct: 0, points: 2, reading: "", meaning: "" },
      { id: 55, section: "bunpo", type: "BP", question: "ここで大きな声で＿＿はいけません。", options: ["話して", "話す", "話します", "話した"], correct: 0, points: 2, reading: "", meaning: "" },
      { id: 56, section: "bunpo", type: "BP", question: "明日、晴れる＿＿思います。", options: ["と", "を", "が", "に"], correct: 0, points: 2, reading: "", meaning: "" },
      { id: 57, section: "bunpo", type: "BP", question: "私は大学へ＿＿たいです。", options: ["入り", "入る", "入って", "入った"], correct: 0, points: 2, reading: "", meaning: "" },
      { id: 58, section: "bunpo", type: "BP", question: "先週、友だちと海を＿＿。", options: ["見ました", "見ません", "見ます", "見るです"], correct: 0, points: 2, reading: "", meaning: "" },
      { id: 59, section: "bunpo", type: "BP", question: "この問題は＿＿です。", options: ["難しい", "難しく", "難しくて", "難しかったですか"], correct: 0, points: 2, reading: "", meaning: "" },
      { id: 60, section: "bunpo", type: "BP", question: "去年の夏は＿＿暑かったです。", options: ["とても", "よく", "よいの", "よくて"], correct: 0, points: 2, reading: "", meaning: "" },

      // C. DOKKAI — 20 soal (61-80)
      { id: 61, section: "dokkai", type: "DK", question: "【プールのお知らせ】\n\nプールは火曜日から日曜日まで開いています。\n時間は午前10時から午後6時までです。\n月曜日は休みです。\n\n木曜日の午後3時に行くと、プールは開いていますか。", options: ["はい、開いています", "いいえ、休みです", "午後7時から開きます", "午前9時に開きます"], correct: 0, points: 1, reading: "", meaning: "" },
      { id: 62, section: "dokkai", type: "DK", question: "【店のお知らせ】\n\n花屋は毎朝8時に開きます。\n水曜日は休みです。\n土曜日と日曜日は午後7時まで営業します。\n\nこの店は水曜日にどうなりますか。", options: ["休みです", "8時に開きます", "午後7時に開きます", "夜まで営業します"], correct: 0, points: 1, reading: "", meaning: "" },
      { id: 63, section: "dokkai", type: "DK", question: "【鈴木さんの一日】\n\n鈴木さんは毎朝6時半に起きます。\n7時半に朝ごはんを食べて、8時半に会社へ行きます。\n仕事は6時に終わります。\n\n鈴木さんは何時に会社へ行きますか。", options: ["6時半", "7時半", "8時半", "6時"], correct: 2, points: 1, reading: "", meaning: "" },
      { id: 64, section: "dokkai", type: "DK", question: "【メモ】\n\n明日は父の誕生日です。\n仕事の帰りにネクタイを買います。\nネクタイの店はデパートの中にあります。\n\n仕事の帰りに何を買いますか。", options: ["本", "ネクタイ", "花", "かばん"], correct: 1, points: 1, reading: "", meaning: "" },
      { id: 65, section: "dokkai", type: "DK", question: "【天気予報】\n\n今日は朝から曇りです。\n午後から風が強くなります。\n夜は雨が降ります。\n\n午後の天気はどうですか。", options: ["雪です", "晴れだけです", "風が強くなります", "とても暑いです"], correct: 2, points: 1, reading: "", meaning: "" },
      { id: 66, section: "dokkai", type: "DK", question: "【佐藤さんへのメッセージ】\n\n佐藤さん、こんにちは。\n今日の午後4時に公園で会いましょう。\n私は白い帽子をかぶっています。\n\n二人はどこで会いますか。", options: ["学校", "駅", "公園", "会社"], correct: 2, points: 1, reading: "", meaning: "" },
      { id: 67, section: "dokkai", type: "DK", question: "【土曜日】\n\n土曜日、私は朝9時に起きました。\n午前中は洗濯をしました。\n午後は友だちと買い物に行きました。\n\n午前中、何をしましたか。", options: ["映画を見ました", "買い物に行きました", "洗濯をしました", "勉強しました"], correct: 2, points: 1, reading: "", meaning: "" },
      { id: 68, section: "dokkai", type: "DK", question: "【学校のお知らせ】\n\n来週は遠足があります。\nバスは午前8時に出発します。\n学生は7時45分までに学校に来てください。\n\n学生は何時までに学校に来ますか。", options: ["7時", "7時45分", "8時", "8時45分"], correct: 1, points: 1, reading: "", meaning: "" },
      { id: 69, section: "dokkai", type: "DK", question: "【スーパー】\n\nみかんは1個80円です。\nぶどうは1房300円です。\n今日はみかんが30円安くなっています。\n\n今日のみかんはいくらですか。", options: ["30円", "50円", "80円", "110円"], correct: 1, points: 1, reading: "", meaning: "" },
      { id: 70, section: "dokkai", type: "DK", question: "【私の部屋】\n\n私の部屋にはソファがあります。\nソファの前にテーブルがあります。\nテーブルの上に雑誌とお茶があります。\n\nテーブルの上に何がありますか。", options: ["テレビと時計", "雑誌とお茶", "ベッドといす", "かばんとくつ"], correct: 1, points: 1, reading: "", meaning: "" },
      { id: 71, section: "dokkai", type: "DK", question: "【旅行の予定】\n\n来月、友だちと大阪へ行きます。\n金曜日の夜8時に夜行バスに乗ります。\n大阪には朝6時ごろ着きます。\n駅で朝ごはんを食べてから、お城を見に行きます。\n\n大阪に着いてから、最初に何をしますか。", options: ["バスに乗ります", "お城を見ます", "朝ごはんを食べます", "家に帰ります"], correct: 2, points: 2, reading: "", meaning: "" },
      { id: 72, section: "dokkai", type: "DK", question: "【レストランのメニュー】\n\nそば　450円\nうどん　400円\n寿司　650円\n弁当　550円\n\n山本さんは450円しか持っていません。\n何を食べることができますか。", options: ["寿司だけ", "そばとうどん", "弁当だけ", "寿司と弁当"], correct: 1, points: 2, reading: "", meaning: "" },
      { id: 73, section: "dokkai", type: "DK", question: "【駅で】\n\nAさん：すみません。京都へ行きたいです。\nBさん：この電車に乗ってください。\nAさん：何番ホームですか。\nBさん：5番ホームです。\n\n京都行きの電車は何番ホームですか。", options: ["3番", "4番", "5番", "6番"], correct: 2, points: 2, reading: "", meaning: "" },
      { id: 74, section: "dokkai", type: "DK", question: "【約束】\n\nA：明日、一緒に美術館へ行きませんか。\nB：いいですね。何時に会いますか。\nA：午前10時はどうですか。\nB：すみません。午前10時は用事があります。\nA：では、午後2時はどうですか。\nB：はい、2時なら大丈夫です。\n\n二人は何時に会いますか。", options: ["午前10時", "午後1時", "午後2時", "午後3時"], correct: 2, points: 2, reading: "", meaning: "" },
      { id: 75, section: "dokkai", type: "DK", question: "【文化祭】\n\n日曜日に文化祭があります。\n午前9時から始まります。\n学生たちは教室で絵を展示します。\n体育館では午後2時からダンスの発表があります。\n\nダンスの発表はどこでありますか。", options: ["教室", "図書館", "体育館", "食堂"], correct: 2, points: 2, reading: "", meaning: "" },
      { id: 76, section: "dokkai", type: "DK", question: "【銀行からのお知らせ】\n\n銀行は月曜日から金曜日まで開いています。\n午前の受付は9時から12時までです。\n午後は1時から4時までです。\n土曜日と日曜日は休みです。\n\n木曜日の午後2時に銀行へ行くことができますか。", options: ["はい、できます", "いいえ、土曜日だからです", "いいえ、午前だけだからです", "いいえ、日曜日だからです"], correct: 0, points: 2, reading: "", meaning: "" },
      { id: 77, section: "dokkai", type: "DK", question: "【買い物】\n\n私は新しい時計を買いたいです。\nデパートには銀色の時計と金色の時計があります。\n銀色の時計は4000円で、金色の時計は5500円です。\n私は銀色の時計を買いました。\n\n銀色の時計はいくらですか。", options: ["3500円", "4000円", "5000円", "5500円"], correct: 1, points: 2, reading: "", meaning: "" },
      { id: 78, section: "dokkai", type: "DK", question: "【週末の予定】\n\n土曜日は朝から雪が降るそうです。\nですから、私は家で映画を見たいです。\n日曜日は天気がいいそうなので、家族と山へ行く予定です。\n\n私は土曜日に何をする予定ですか。", options: ["家族と山へ行きます", "家で映画を見ます", "買い物へ行きます", "本を読みます"], correct: 1, points: 2, reading: "", meaning: "" },
      { id: 79, section: "dokkai", type: "DK", question: "【家族】\n\n私の家族は5人です。\n父と母と兄と妹と私です。\n父は先生で、母は会社員です。\n兄は大学生です。\n\nこの家族は何人ですか。", options: ["3人", "4人", "5人", "6人"], correct: 2, points: 2, reading: "", meaning: "" },
      { id: 80, section: "dokkai", type: "DK", question: "【メール】\n\nこんにちは、キムさん。\n明日の午前11時に図書館の前で会いませんか。\n一緒にレポートを書きましょう。\n雨が降ったら、図書館の中で待っています。\n\n明日、二人は何をしに行きますか。", options: ["映画を見に行きます", "レポートを書きに行きます", "学校へ行きます", "レストランへ行きます"], correct: 1, points: 2, reading: "", meaning: "" }
    ]
  },

  paket3: {
    title: "Paket 3",
    totalSoal: 80,
    totalPoin: 120,
    waktuMenit: 90,
    kkm: 80,
    rincian: { moji: 34, bunpo: 26, dokkai: 20 },
    soal: [
      // A. MOJI/GOI — 34 soal (1-34)
      { id: 1, section: "moji", type: "KJ", question: "毎晩＿＿＿＿を読みます。", options: ["ざっし", "くるま", "みず", "かさ"], correct: 0, points: 2, reading: "ざっし", meaning: "Majalah" },
      { id: 2, section: "moji", type: "KB", question: "コンビニで＿＿＿＿を買いました。", options: ["おにぎり", "つくえ", "テレビ", "いす"], correct: 0, points: 2, reading: "おにぎり", meaning: "Onigiri" },
      { id: 3, section: "moji", type: "KJ", question: "私の＿＿＿＿は看護師です。", options: ["母", "山", "川", "道"], correct: 0, points: 2, reading: "はは", meaning: "Ibu" },
      { id: 4, section: "moji", type: "KB", question: "お腹が空いたので＿＿＿＿を食べます。", options: ["ごはん", "みず", "パン", "おちゃ"], correct: 0, points: 2, reading: "ごはん", meaning: "Nasi" },
      { id: 5, section: "moji", type: "KJ", question: "この＿＿＿＿はとても静かです。", options: ["町", "耳", "口", "足"], correct: 0, points: 2, reading: "まち", meaning: "Kota" },
      { id: 6, section: "moji", type: "BP", question: "来週、友だちに＿＿＿＿＿。", options: ["あいます", "あいますせん", "あいました", "あわない"], correct: 0, points: 2, reading: "あいます", meaning: "Bertemu" },
      { id: 7, section: "moji", type: "KJ", question: "海に＿＿＿＿がたくさんいます。", options: ["魚 (さかな)", "鳥 (とり)", "犬 (いぬ)", "猫 (ねこ)"], correct: 0, points: 2, reading: "さかな", meaning: "Ikan" },
      { id: 8, section: "moji", type: "KB", question: "かばんに＿＿＿＿を入れます。", options: ["さいふ", "いす", "つくえ", "まど"], correct: 0, points: 2, reading: "さいふ", meaning: "Dompet" },
      { id: 9, section: "moji", type: "KJ", question: "弟は毎朝、顔を＿＿＿＿。", options: ["あらいます", "のみます", "ききます", "よみます"], correct: 0, points: 1, reading: "あらいます", meaning: "Mencuci" },
      { id: 10, section: "moji", type: "KB", question: "空港まで＿＿＿＿で行きます。", options: ["ひこうき", "ぎゅうにく", "りんご", "つくえ"], correct: 0, points: 1, reading: "ひこうき", meaning: "Pesawat" },
      { id: 11, section: "moji", type: "KJ", question: "毎晩、＿＿＿＿にねます。", options: ["十時", "水曜日", "三月", "月曜日"], correct: 0, points: 1, reading: "じゅうじ", meaning: "Jam sepuluh" },
      { id: 12, section: "moji", type: "KB", question: "暗いですから、＿＿＿＿をつけます。", options: ["でんき", "えんぴつ", "くつ", "かさ"], correct: 0, points: 1, reading: "でんき", meaning: "Lampu listrik" },
      { id: 13, section: "moji", type: "KJ", question: "＿＿＿＿へ行って、切符を買いました。", options: ["駅", "病院", "銀行", "学校"], correct: 0, points: 1, reading: "えき", meaning: "Stasiun" },
      { id: 14, section: "moji", type: "KB", question: "はがきを＿＿＿＿ください。", options: ["二枚", "二人", "二台", "二冊"], correct: 0, points: 1, reading: "にまい", meaning: "Dua lembar" },
      { id: 15, section: "moji", type: "KJ", question: "私は＿＿＿＿でお金をおろします。", options: ["銀行", "食堂", "駅", "病気"], correct: 0, points: 1, reading: "ぎんこう", meaning: "Bank" },
      { id: 16, section: "moji", type: "KB", question: "兄は毎週テニスを＿＿＿＿。", options: ["します", "たべます", "のみます", "あります"], correct: 0, points: 1, reading: "します", meaning: "Melakukan" },
      { id: 17, section: "moji", type: "KJ", question: "この魚はとても＿＿＿＿です。", options: ["新しい", "甘い", "安い", "白い"], correct: 0, points: 1, reading: "あたらしい", meaning: "Baru/segar" },
      { id: 18, section: "moji", type: "KB", question: "八百屋で＿＿＿＿を買いました。", options: ["やさい", "くつ", "かばん", "じてんしゃ"], correct: 0, points: 1, reading: "やさい", meaning: "Sayuran" },
      { id: 19, section: "moji", type: "KJ", question: "毎朝、＿＿＿＿を飲みます。", options: ["牛乳", "電車", "学校", "天気"], correct: 0, points: 1, reading: "ぎゅうにゅう", meaning: "Susu" },
      { id: 20, section: "moji", type: "KB", question: "これは弟の＿＿＿＿です。", options: ["じてんしゃ", "やま", "かわ", "でんしゃ"], correct: 0, points: 1, reading: "じてんしゃ", meaning: "Sepeda" },
      { id: 21, section: "moji", type: "KJ", question: "日本の＿＿＿＿は九月です。", options: ["秋", "冬", "夏", "春"], correct: 0, points: 1, reading: "あき", meaning: "Musim gugur" },
      { id: 22, section: "moji", type: "KB", question: "箱にりんごが＿＿＿＿入っています。", options: ["八個", "八冊", "八台", "八枚"], correct: 0, points: 1, reading: "はちこ", meaning: "Delapan buah" },
      { id: 23, section: "moji", type: "KJ", question: "家の前に小さな＿＿＿＿があります。", options: ["庭", "耳", "口", "足"], correct: 0, points: 1, reading: "にわ", meaning: "Taman/halaman" },
      { id: 24, section: "moji", type: "KB", question: "私は＿＿＿＿が苦手です。", options: ["すいえい", "学校", "電車", "病院"], correct: 0, points: 1, reading: "すいえい", meaning: "Berenang" },
      { id: 25, section: "moji", type: "KJ", question: "今日は＿＿＿＿が高いです。", options: ["熱", "時計", "新聞", "先生"], correct: 0, points: 1, reading: "ねつ", meaning: "Demam/suhu" },
      { id: 26, section: "moji", type: "KB", question: "食事の後に、＿＿＿＿をします。", options: ["おさら洗い", "さんぽ", "そうじ", "あさごはん"], correct: 0, points: 2, reading: "おさらあらい", meaning: "Mencuci piring" },
      { id: 27, section: "moji", type: "KJ", question: "叔父は空港の＿＿＿＿です。", options: ["職員", "会社", "先生", "病院"], correct: 0, points: 2, reading: "しょくいん", meaning: "Petugas/staf" },
      { id: 28, section: "moji", type: "KB", question: "夏ですから＿＿＿＿をかけます。", options: ["サングラス", "くつ", "ぼうし", "てぶくろ"], correct: 0, points: 2, reading: "サングラス", meaning: "Kacamata hitam" },
      { id: 29, section: "moji", type: "KJ", question: "妹は毎日＿＿＿＿で駅まで行きます。", options: ["自転車で", "飲んで", "食べて", "寝て"], correct: 0, points: 2, reading: "じてんしゃで", meaning: "Dengan sepeda" },
      { id: 30, section: "moji", type: "KB", question: "洗面所で＿＿＿＿を使います。", options: ["タオル", "ふとん", "れいぞうこ", "テレビ"], correct: 0, points: 2, reading: "タオル", meaning: "Handuk" },
      { id: 31, section: "moji", type: "KJ", question: "秋になると＿＿＿＿が赤くなります。", options: ["葉", "駅", "病院", "学校"], correct: 0, points: 2, reading: "は", meaning: "Daun" },
      { id: 32, section: "moji", type: "KB", question: "夜ごはんに＿＿＿＿を食べました。", options: ["カレー", "えんぴつ", "かさ", "くつ"], correct: 0, points: 2, reading: "カレー", meaning: "Kari" },
      { id: 33, section: "moji", type: "KJ", question: "この＿＿＿＿はとても面白いです。", options: ["映画", "車", "魚", "店"], correct: 0, points: 2, reading: "えいが", meaning: "Film" },
      { id: 34, section: "moji", type: "KB", question: "毎月一回、＿＿＿＿へ行きます。", options: ["びよういん", "りんご", "新聞", "いす"], correct: 0, points: 2, reading: "びよういん", meaning: "Salon" },

      // B. BUNPOU — 26 soal (35-60)
      { id: 35, section: "bunpo", type: "BP", question: "あれ＿＿山田さんの車です。", options: ["は", "を", "に", "で"], correct: 0, points: 1, reading: "", meaning: "" },
      { id: 36, section: "bunpo", type: "BP", question: "あのかばんは＿＿かばんです。", options: ["たなか", "たなかの", "たなかは", "たなかを"], correct: 1, points: 1, reading: "", meaning: "" },
      { id: 37, section: "bunpo", type: "BP", question: "毎朝、八時＿＿家を出ます。", options: ["に", "を", "が", "で"], correct: 0, points: 1, reading: "", meaning: "" },
      { id: 38, section: "bunpo", type: "BP", question: "公園＿＿サッカーをします。", options: ["で", "に", "を", "へ"], correct: 0, points: 1, reading: "", meaning: "" },
      { id: 39, section: "bunpo", type: "BP", question: "コーヒー＿＿飲みます。", options: ["を", "は", "で", "に"], correct: 0, points: 1, reading: "", meaning: "" },
      { id: 40, section: "bunpo", type: "BP", question: "木村さん＿＿病院へ行きました。", options: ["は", "を", "が", "で"], correct: 0, points: 1, reading: "", meaning: "" },
      { id: 41, section: "bunpo", type: "BP", question: "これは料理＿＿本です。", options: ["の", "を", "に", "が"], correct: 0, points: 1, reading: "", meaning: "" },
      { id: 42, section: "bunpo", type: "BP", question: "先週＿＿家族と旅行しました。", options: ["に", "で", "を", "が"], correct: 0, points: 1, reading: "", meaning: "" },
      { id: 43, section: "bunpo", type: "BP", question: "肉＿＿食べません。", options: ["は", "を", "に", "へ"], correct: 0, points: 1, reading: "", meaning: "" },
      { id: 44, section: "bunpo", type: "BP", question: "学校＿＿自転車で行きます。", options: ["まで", "から", "で", "を"], correct: 0, points: 1, reading: "", meaning: "" },
      { id: 45, section: "bunpo", type: "BP", question: "パンとジュース＿＿買いました。", options: ["を", "が", "に", "で"], correct: 0, points: 1, reading: "", meaning: "" },
      { id: 46, section: "bunpo", type: "BP", question: "いっしょに公園を＿＿。", options: ["歩きましょう", "歩きましたか", "歩きません", "歩かないです"], correct: 0, points: 1, reading: "", meaning: "" },
      { id: 47, section: "bunpo", type: "BP", question: "先月は仕事へ＿＿。", options: ["行きませんでした", "行きません", "行きます", "行くです"], correct: 0, points: 1, reading: "", meaning: "" },
      { id: 48, section: "bunpo", type: "BP", question: "これは＿＿ペンですか。", options: ["だれ", "だれの", "だれを", "だれが"], correct: 1, points: 2, reading: "", meaning: "" },
      { id: 49, section: "bunpo", type: "BP", question: "＿＿かばんはあなたのですか。", options: ["あの", "あれ", "あそこ", "あちら"], correct: 0, points: 2, reading: "", meaning: "" },
      { id: 50, section: "bunpo", type: "BP", question: "机の上に本が＿＿。", options: ["あります", "います", "です", "します"], correct: 0, points: 2, reading: "", meaning: "" },
      { id: 51, section: "bunpo", type: "BP", question: "庭に鳥が＿＿。", options: ["います", "あります", "です", "します"], correct: 0, points: 2, reading: "", meaning: "" },
      { id: 52, section: "bunpo", type: "BP", question: "漢字を＿＿ことができます。", options: ["書く", "書きます", "書いた", "書いて"], correct: 0, points: 2, reading: "", meaning: "" },
      { id: 53, section: "bunpo", type: "BP", question: "毎日、漢字を＿＿います。", options: ["練習して", "練習します", "練習した", "練習する"], correct: 0, points: 2, reading: "", meaning: "" },
      { id: 54, section: "bunpo", type: "BP", question: "ここで絵を＿＿もいいですか。", options: ["描いて", "描く", "描きます", "描いた"], correct: 0, points: 2, reading: "", meaning: "" },
      { id: 55, section: "bunpo", type: "BP", question: "ここでゴミを＿＿はいけません。", options: ["捨てて", "捨てる", "捨てます", "捨てた"], correct: 0, points: 2, reading: "", meaning: "" },
      { id: 56, section: "bunpo", type: "BP", question: "来週、台風が来る＿＿思います。", options: ["と", "を", "が", "に"], correct: 0, points: 2, reading: "", meaning: "" },
      { id: 57, section: "bunpo", type: "BP", question: "私は医者に＿＿たいです。", options: ["なり", "なる", "なって", "なった"], correct: 0, points: 2, reading: "", meaning: "" },
      { id: 58, section: "bunpo", type: "BP", question: "先月、家族と旅行を＿＿。", options: ["しました", "しません", "します", "するです"], correct: 0, points: 2, reading: "", meaning: "" },
      { id: 59, section: "bunpo", type: "BP", question: "この映画は＿＿です。", options: ["面白い", "面白く", "面白くて", "面白かったですか"], correct: 0, points: 2, reading: "", meaning: "" },
      { id: 60, section: "bunpo", type: "BP", question: "今朝は＿＿寒かったです。", options: ["とても", "よく", "よいの", "よくて"], correct: 0, points: 2, reading: "", meaning: "" },

      // C. DOKKAI — 20 soal (61-80)
      { id: 61, section: "dokkai", type: "DK", question: "【体育館のお知らせ】\n\n体育館は月曜日から金曜日まで開いています。\n時間は午前8時から午後9時までです。\n土日は休みです。\n\n水曜日の午後7時に行くと、体育館は開いていますか。", options: ["はい、開いています", "いいえ、休みです", "午後10時から開きます", "午前7時に開きます"], correct: 0, points: 1, reading: "", meaning: "" },
      { id: 62, section: "dokkai", type: "DK", question: "【店のお知らせ】\n\n魚屋は毎朝6時に開きます。\n木曜日は休みです。\n土曜日と日曜日は午後5時まで営業します。\n\nこの店は木曜日にどうなりますか。", options: ["休みです", "6時に開きます", "午後5時に開きます", "夜まで営業します"], correct: 0, points: 1, reading: "", meaning: "" },
      { id: 63, section: "dokkai", type: "DK", question: "【中村さんの一日】\n\n中村さんは毎朝7時に起きます。\n8時に朝ごはんを食べて、9時に会社へ行きます。\n仕事は6時に終わります。\n\n中村さんは何時に会社へ行きますか。", options: ["7時", "8時", "9時", "6時"], correct: 2, points: 1, reading: "", meaning: "" },
      { id: 64, section: "dokkai", type: "DK", question: "【メモ】\n\n今日は妹の誕生日です。\n仕事の帰りにアイスクリームを買います。\nアイスクリーム屋はコンビニの隣にあります。\n\n仕事の帰りに何を買いますか。", options: ["本", "アイスクリーム", "花", "かばん"], correct: 1, points: 1, reading: "", meaning: "" },
      { id: 65, section: "dokkai", type: "DK", question: "【天気予報】\n\n今日は朝から雨です。\n午後から晴れます。\n夜は涼しくなります。\n\n午後の天気はどうですか。", options: ["雪です", "晴れます", "雨だけです", "とても暑いです"], correct: 1, points: 1, reading: "", meaning: "" },
      { id: 66, section: "dokkai", type: "DK", question: "【伊藤さんへのメッセージ】\n\n伊藤さん、こんにちは。\n今日の午後5時に図書館で会いましょう。\n私は黒いかばんを持っています。\n\n二人はどこで会いますか。", options: ["学校", "駅", "図書館", "会社"], correct: 2, points: 1, reading: "", meaning: "" },
      { id: 67, section: "dokkai", type: "DK", question: "【日曜日】\n\n日曜日、私は朝7時に起きました。\n午前中は買い物をしました。\n午後は家で本を読みました。\n\n午前中、何をしましたか。", options: ["映画を見ました", "本を読みました", "買い物をしました", "勉強しました"], correct: 2, points: 1, reading: "", meaning: "" },
      { id: 68, section: "dokkai", type: "DK", question: "【学校のお知らせ】\n\n明日はスピーチコンテストがあります。\nコンテストは午後1時から始まります。\n学生は12時30分までに講堂に来てください。\n\n学生は何時までに講堂に来ますか。", options: ["12時", "12時30分", "1時", "1時30分"], correct: 1, points: 1, reading: "", meaning: "" },
      { id: 69, section: "dokkai", type: "DK", question: "【スーパー】\n\nトマトは1個60円です。\nきゅうりは1本40円です。\n今日はトマトが20円安くなっています。\n\n今日のトマトはいくらですか。", options: ["20円", "40円", "60円", "80円"], correct: 1, points: 1, reading: "", meaning: "" },
      { id: 70, section: "dokkai", type: "DK", question: "【私の部屋】\n\n私の部屋には本棚があります。\n本棚の横に窓があります。\n窓の下に小さな椅子があります。\n\n窓の下に何がありますか。", options: ["テレビと時計", "パソコンと本", "小さな椅子", "かばんとくつ"], correct: 2, points: 1, reading: "", meaning: "" },
      { id: 71, section: "dokkai", type: "DK", question: "【旅行の予定】\n\n来月、友だちと北海道へ行きます。\n日曜日の朝9時に飛行機に乗ります。\n北海道には11時ごろ着きます。\nホテルに荷物を置いてから、市場を見に行きます。\n\n北海道に着いてから、最初に何をしますか。", options: ["飛行機に乗ります", "市場を見ます", "ホテルに荷物を置きます", "家に帰ります"], correct: 2, points: 2, reading: "", meaning: "" },
      { id: 72, section: "dokkai", type: "DK", question: "【レストランのメニュー】\n\n焼き魚定食　600円\nハンバーグ　650円\n天ぷら　550円\n寿司セット　800円\n\n木村さんは600円しか持っていません。\n何を食べることができますか。", options: ["ハンバーグだけ", "焼き魚定食と天ぷら", "寿司セットだけ", "ハンバーグと寿司セット"], correct: 1, points: 2, reading: "", meaning: "" },
      { id: 73, section: "dokkai", type: "DK", question: "【駅で】\n\nAさん：すみません。横浜へ行きたいです。\nBさん：この電車に乗ってください。\nAさん：何番ホームですか。\nBさん：2番ホームです。\n\n横浜行きの電車は何番ホームですか。", options: ["1番", "2番", "3番", "4番"], correct: 1, points: 2, reading: "", meaning: "" },
      { id: 74, section: "dokkai", type: "DK", question: "【約束】\n\nA：明日、一緒に動物園へ行きませんか。\nB：いいですね。何時に会いますか。\nA：午前9時はどうですか。\nB：すみません。午前9時はアルバイトがあります。\nA：では、午後3時はどうですか。\nB：はい、3時なら大丈夫です。\n\n二人は何時に会いますか。", options: ["午前9時", "午後2時", "午後3時", "午後4時"], correct: 2, points: 2, reading: "", meaning: "" },
      { id: 75, section: "dokkai", type: "DK", question: "【運動会】\n\n金曜日に運動会があります。\n午前9時から始まります。\n学生たちは校庭でリレーをします。\n体育館では午後3時から表彰式があります。\n\n表彰式はどこでありますか。", options: ["教室", "校庭", "体育館", "食堂"], correct: 2, points: 2, reading: "", meaning: "" },
      { id: 76, section: "dokkai", type: "DK", question: "【郵便局からのお知らせ】\n\n郵便局は月曜日から土曜日まで開いています。\n午前の受付は9時から12時までです。\n午後は1時から5時までです。\n日曜日は休みです。\n\n土曜日の午後3時に郵便局へ行くことができますか。", options: ["はい、できます", "いいえ、日曜日だからです", "いいえ、午前だけだからです", "いいえ、休みだからです"], correct: 0, points: 2, reading: "", meaning: "" },
      { id: 77, section: "dokkai", type: "DK", question: "【買い物】\n\n私は新しいかばんを買いたいです。\nデパートには茶色のかばんと黒いかばんがあります。\n茶色のかばんは6000円で、黒いかばんは4500円です。\n私は黒いかばんを買いました。\n\n黒いかばんはいくらですか。", options: ["4000円", "4500円", "5000円", "6000円"], correct: 1, points: 2, reading: "", meaning: "" },
      { id: 78, section: "dokkai", type: "DK", question: "【週末の予定】\n\n土曜日は朝から風が強いそうです。\nですから、私は家で音楽を聞きたいです。\n日曜日は天気がいいそうなので、家族と海へ行く予定です。\n\n私は土曜日に何をする予定ですか。", options: ["家族と海へ行きます", "家で音楽を聞きます", "買い物へ行きます", "映画を見ます"], correct: 1, points: 2, reading: "", meaning: "" },
      { id: 79, section: "dokkai", type: "DK", question: "【家族】\n\n私の家族は6人です。\n父と母と兄と姉と弟と私です。\n父は運転手で、母は看護師です。\n兄は会社員です。\n\nこの家族は何人ですか。", options: ["4人", "5人", "6人", "7人"], correct: 2, points: 2, reading: "", meaning: "" },
      { id: 80, section: "dokkai", type: "DK", question: "【メール】\n\nこんにちは、パクさん。\n明日の午後3時に公園の前で会いませんか。\n一緒に自転車に乗りに行きましょう。\n雨が降ったら、家で待っています。\n\n明日、二人は何をしに行きますか。", options: ["映画を見に行きます", "自転車に乗りに行きます", "学校へ行きます", "レストランへ行きます"], correct: 1, points: 2, reading: "", meaning: "" }
    ]
  },
    paket4: {
    title: "Paket 4 (Full N5 + Listening)",
    totalSoal: 80,
    totalPoin: 180,
    waktuMenit: 105,
    kkm: 80,
    rincian: {
      moji: 25,
      bunpo: 16,
      dokkai: 11,
      choukai: 28
    },

    soal: [
      // =================================================
      // A. MOJI / GOI — 25 SOAL (1 - 25)
      // =================================================
      { id: 1, section: "moji", type: "KJ", question: "あたらしい＿＿＿＿を買いました。", options: ["くつ", "みち", "かわ", "やま"], correct: 0, points: 2, reading: "くつ", meaning: "Sepatu" },
      { id: 2, section: "moji", type: "KB", question: "あした、＿＿＿＿へ行きます。", options: ["ぎんこう", "かばん", "えんぴつ", "つくえ"], correct: 0, points: 2, reading: "ぎんこう", meaning: "Bank" },
      { id: 3, section: "moji", type: "KJ", question: "＿＿＿＿の花が咲きました。", options: ["青い", "高い", "安い", "広い"], correct: 0, points: 2, reading: "あおい", meaning: "Biru" },
      { id: 4, section: "moji", type: "KB", question: "きのう、手紙を＿＿＿＿。", options: ["かきました", "のみました", "たべました", "きました"], correct: 0, points: 2, reading: "かきました", meaning: "Telah menulis" },
      { id: 5, section: "moji", type: "KJ", question: "私の＿＿＿＿は五十歳です。", options: ["父", "木", "本", "車"], correct: 0, points: 2, reading: "ちち", meaning: "Ayah" },
      { id: 6, section: "moji", type: "BP", question: "テーブルの上に＿＿＿＿があります。", options: ["りんご", "いぬ", "ねこ", "ひと"], correct: 0, points: 2, reading: "りんご", meaning: "Apel" },
      { id: 7, section: "moji", type: "KJ", question: "＿＿＿＿が降っています。", options: ["雨", "山", "川", "口"], correct: 0, points: 1, reading: "あめ", meaning: "Hujan" },
      { id: 8, section: "moji", type: "KB", question: "＿＿＿＿で音楽を聞きます。", options: ["ラジオ", "カメラ", "テレビ", "ストーブ"], correct: 0, points: 1, reading: "ラジオ", meaning: "Radio" },
      { id: 9, section: "moji", type: "KJ", question: "あの＿＿＿＿は高いです。", options: ["建物", "買物", "飲物", "食物"], correct: 0, points: 1, reading: "たてもの", meaning: "Bangunan" },
      { id: 10, section: "moji", type: "KB", question: "部屋を＿＿＿＿してください。", options: ["そうじ", "べんきょう", "せんたく", "りょうり"], correct: 0, points: 1, reading: "そうじ", meaning: "Bersih-bersih" },
      { id: 11, section: "moji", type: "KJ", question: "＿＿＿＿に会いに行きます。", options: ["友だち", "子ども", "学生", "先生"], correct: 0, points: 1, reading: "ともだち", meaning: "Teman" },
      { id: 12, section: "moji", type: "KB", question: "これは＿＿＿＿のカメラです。", options: ["だれ", "どこ", "いつ", "なに"], correct: 0, points: 1, reading: "だれ", meaning: "Siapa" },
      { id: 13, section: "moji", type: "KJ", question: "毎日＿＿＿＿をします。", options: ["散歩", "天気", "元気", "電気"], correct: 0, points: 1, reading: "さんぽ", meaning: "Jalan-jalan" },
      { id: 14, section: "moji", type: "KB", question: "カレーはとても＿＿＿＿です。", options: ["からい", "あまい", "すっぱい", "にがい"], correct: 0, points: 1, reading: "からい", meaning: "Pedas" },
      { id: 15, section: "moji", type: "KJ", question: "日本は＿＿＿＿にあります。", options: ["東", "西", "南", "北"], correct: 0, points: 1, reading: "ひがし", meaning: "Timur" },
      { id: 16, section: "moji", type: "KB", question: "＿＿＿＿を閉めてください。", options: ["ドア", "ノート", "ベッド", "タクシー"], correct: 0, points: 1, reading: "ドア", meaning: "Pintu" },
      { id: 17, section: "moji", type: "KJ", question: "私の家は＿＿＿＿です。", options: ["古い", "少ない", "多い", "太い"], correct: 0, points: 1, reading: "ふるい", meaning: "Tua/Lama" },
      { id: 18, section: "moji", type: "KB", question: "駅の前に＿＿＿＿があります。", options: ["きっさてん", "じてんしゃ", "ひこうき", "でんしゃ"], correct: 0, points: 1, reading: "きっさてん", meaning: "Kedai kopi" },
      { id: 19, section: "moji", type: "KJ", question: "＿＿＿＿は休みです。", options: ["日曜日", "今日", "明日", "昨日"], correct: 0, points: 1, reading: "にちようび", meaning: "Hari Minggu" },
      { id: 20, section: "moji", type: "KB", question: "＿＿＿＿が痛いです。", options: ["あたま", "くつ", "かばん", "めがね"], correct: 0, points: 1, reading: "あたま", meaning: "Kepala" },
      { id: 21, section: "moji", type: "KJ", question: "この＿＿＿＿は美味しいです。", options: ["魚", "肉", "卵", "水"], correct: 0, points: 1, reading: "さかな", meaning: "Ikan" },
      { id: 22, section: "moji", type: "KB", question: "＿＿＿＿を脱いでください。", options: ["コート", "えんぴつ", "テレビ", "パソコン"], correct: 0, points: 1, reading: "コート", meaning: "Mantel" },
      { id: 23, section: "moji", type: "KJ", question: "＿＿＿＿を切ります。", options: ["紙", "木", "本", "花"], correct: 0, points: 1, reading: "かみ", meaning: "Kertas" },
      { id: 24, section: "moji", type: "KB", question: "公園に＿＿＿＿がいます。", options: ["いぬ", "つくえ", "くるま", "じてんしゃ"], correct: 0, points: 1, reading: "いぬ", meaning: "Anjing" },
      { id: 25, section: "moji", type: "KJ", question: "＿＿＿＿に帰ります。", options: ["家", "道", "川", "山"], correct: 0, points: 1, reading: "いえ", meaning: "Rumah" },

      // =================================================
      // B. BUNPOU — 16 SOAL (26 - 41)
      // =================================================
      { id: 26, section: "bunpo", type: "BP", question: "わたし＿＿インドネシアから来ました。", options: ["は", "を", "に", "で"], correct: 0, points: 2, reading: "", meaning: "" },
      { id: 27, section: "bunpo", type: "BP", question: "あそこに車＿＿あります。", options: ["が", "を", "は", "に"], correct: 0, points: 2, reading: "", meaning: "" },
      { id: 28, section: "bunpo", type: "BP", question: "毎日、自転車＿＿学校へ行きます。", options: ["で", "に", "を", "へ"], correct: 0, points: 2, reading: "", meaning: "" },
      { id: 29, section: "bunpo", type: "BP", question: "私は日本語＿＿わかります。", options: ["が", "を", "に", "で"], correct: 0, points: 2, reading: "", meaning: "" },
      { id: 30, section: "bunpo", type: "BP", question: "机の上にペン＿＿ノートがあります。", options: ["と", "や", "か", "の"], correct: 0, points: 2, reading: "", meaning: "" },
      { id: 31, section: "bunpo", type: "BP", question: "田中さんは今、手紙を書いて＿＿。", options: ["います", "あります", "します", "です"], correct: 0, points: 2, reading: "", meaning: "" },
      { id: 32, section: "bunpo", type: "BP", question: "このカメラは＿＿ありません。", options: ["よく", "いい", "よい", "よくて"], correct: 0, points: 2, reading: "", meaning: "" },
      { id: 33, section: "bunpo", type: "BP", question: "昨日、映画を＿＿。", options: ["見ました", "見ます", "見る", "見て"], correct: 0, points: 2, reading: "", meaning: "" },
      { id: 34, section: "bunpo", type: "BP", question: "ちょっと＿＿ください。", options: ["待って", "待ち", "待つ", "待った"], correct: 0, points: 2, reading: "", meaning: "" },
      { id: 35, section: "bunpo", type: "BP", question: "ここで写真を＿＿はいけません。", options: ["撮って", "撮る", "撮り", "撮った"], correct: 0, points: 2, reading: "", meaning: "" },
      { id: 36, section: "bunpo", type: "BP", question: "山田さんは＿＿人ですか。", options: ["どんな", "どれ", "どちら", "どの"], correct: 0, points: 2, reading: "", meaning: "" },
      { id: 37, section: "bunpo", type: "BP", question: "私の部屋は＿＿です。", options: ["静か", "静かに", "静かだ", "静かくて"], correct: 0, points: 2, reading: "", meaning: "" },
      { id: 38, section: "bunpo", type: "BP", question: "あの人は歌が＿＿。", options: ["上手です", "上手だ", "上手な", "上手く"], correct: 0, points: 2, reading: "", meaning: "" },
      { id: 39, section: "bunpo", type: "BP", question: "バス＿＿電車より安いです。", options: ["のほうが", "より", "から", "まで"], correct: 0, points: 2, reading: "", meaning: "" },
      { id: 40, section: "bunpo", type: "BP", question: "りんごを三つ＿＿。", options: ["ください", "あります", "います", "します"], correct: 0, points: 2, reading: "", meaning: "" },
      { id: 41, section: "bunpo", type: "BP", question: "窓を開けて＿＿いいですか。", options: ["も", "は", "が", "を"], correct: 0, points: 2, reading: "", meaning: "" },

      // =================================================
      // C. DOKKAI — 11 SOAL (42 - 52)
      // =================================================
      {
        id: 42,
        section: "dokkai",
        type: "DK",
        question: "【メール】\n佐藤さん、明日の会議は午後2時から会議室で行います。資料を持ってきてください。\n\n会議はどこでありますか。",
        options: ["会議室", "佐藤さんの部屋", "食堂", "午後2時"],
        correct: 0,
        points: 2,
        reading: "",
        meaning: ""
      },
      {
        id: 43,
        section: "dokkai",
        type: "DK",
        question: "【メモ】\n鈴木さん、電話がありました。田中さんからです。明日のパーティーに行けないそうです。\n\nパーティーに行かない人はだれですか。",
        options: ["田中さん", "鈴木さん", "佐藤さん", "山田さん"],
        correct: 0,
        points: 3,
        reading: "",
        meaning: ""
      },
      {
        id: 44,
        section: "dokkai",
        type: "DK",
        question: "【日記】\n今日は日曜日です。朝、洗濯をしてから、スーパーへ買い物に行きました。午後は家で映画を見ました。\n\n今日、洗濯のあとに何をしましたか。",
        options: ["買い物に行きました", "映画を見ました", "家にいました", "スーパーで洗濯しました"],
        correct: 0,
        points: 3,
        reading: "",
        meaning: ""
      },
      {
        id: 45,
        section: "dokkai",
        type: "DK",
        question: "【お知らせ】\nこのレストランは、午前11時から午後10時まで開いています。毎週水曜日は休みです。\n\n木曜日の午後11時にこのレストランへ行きます。どうなりますか。",
        options: ["休みです", "閉まっています", "開いています", "水曜日です"],
        correct: 1,
        points: 3,
        reading: "",
        meaning: ""
      },
      {
        id: 46,
        section: "dokkai",
        type: "DK",
        question: "【手紙】\nお母さん、元気ですか。私は毎日日本語を勉強しています。来月、国へ帰ります。\n\nこの人はいつ国へ帰りますか。",
        options: ["来月", "毎日", "今月", "来週"],
        correct: 0,
        points: 2,
        reading: "",
        meaning: ""
      },
      {
        id: 47,
        section: "dokkai",
        type: "DK",
        question: "【カレンダーの予定】\n5日：病院\n10日：買い物\n15日：テスト\n20日：旅行\n\nテストは何日ですか。",
        options: ["5日", "10日", "15日", "20日"],
        correct: 2,
        points: 2,
        reading: "",
        meaning: ""
      },
      {
        id: 48,
        section: "dokkai",
        type: "DK",
        question: "【張り紙】\n図書館の中では静かにしてください。タバコを吸わないでください。\n\n図書館の中でしてもいいことはどれですか。",
        options: ["本を読むこと", "タバコを吸うこと", "大きな声で話すこと", "走ること"],
        correct: 0,
        points: 3,
        reading: "",
        meaning: ""
      },
      {
        id: 49,
        section: "dokkai",
        type: "DK",
        question: "【日記】\nきのうは雨でしたから、家で本を読みました。今日は晴れました。散歩に行きたいです。\n\nこの人は今日何をしたいですか。",
        options: ["散歩に行きたいです", "本を読みたいです", "家にいたいです", "雨が見たいです"],
        correct: 0,
        points: 2,
        reading: "",
        meaning: ""
      },
      {
        id: 50,
        section: "dokkai",
        type: "DK",
        question: "【メニュー】\nコーヒー：300円\n紅茶：250円\nケーキ：400円\n\nコーヒーとケーキを頼みます。いくらですか。",
        options: ["700円", "550円", "650円", "300円"],
        correct: 0,
        points: 3,
        reading: "",
        meaning: ""
      },
      {
        id: 51,
        section: "dokkai",
        type: "DK",
        question: "【会話文】\nA：昨日、どこへ行きましたか。\nB：友達と海へ行きました。とても楽しかったです。\n\nBさんは誰と海へ行きましたか。",
        options: ["友達", "一人で", "家族", "先生"],
        correct: 0,
        points: 2,
        reading: "",
        meaning: ""
      },
      {
        id: 52,
        section: "dokkai",
        type: "DK",
        question: "【看板】\nここから先は入らないでください。\n\nどういう意味ですか。",
        options: ["入ってはいけません", "入ってもいいです", "入ってください", "入りましょう"],
        correct: 0,
        points: 2,
        reading: "",
        meaning: ""
      },

      // =================================================
      // D. CHOUKAI (LISTENING) — 28 SOAL (53 - 80)
      // =================================================
      {
        id: 53,
        section: "choukai",
        type: "CK",
        audioText: "男の人と女の人が話しています。男の人は何を買いますか。 男：これからスーパーへ行きます。何か買いますか？ 女：ええと、牛乳とパンをお願いします。男：牛乳とパンですね。分かりました。男の人は何を買いますか。",
        question: "男の人は何を買いますか。",
        options: ["牛乳とパン", "牛乳とりんご", "パンだけ", "何でも買わない"],
        correct: 0,
        points: 2,
        reading: "",
        meaning: ""
      },
      {
        id: 54,
        section: "choukai",
        type: "CK",
        audioText: "学生と先生が話しています。学生は明日、何時に学校へ来ますか。 先生：明日はテストがありますから、8時半までに来てください。 学生：8時半ですね。分かりました。学生は明日、何時に学校へ来ますか。",
        question: "学生は明日、何時に学校へ来ますか。",
        options: ["8時", "8時半", "9時", "9時半"],
        correct: 1,
        points: 2,
        reading: "",
        meaning: ""
      },
      {
        id: 55,
        section: "choukai",
        type: "CK",
        audioText: "男の人と女の人が話しています。女の人の傘はどれですか。 男：あ、雨が降っていますね。私の傘はあの黒いのです。 女：私のはあの赤いのです。女の人の傘はどれですか。",
        question: "女の人の傘はどれですか。",
        options: ["黒い傘", "赤い傘", "白い傘", "青い傘"],
        correct: 1,
        points: 2,
        reading: "",
        meaning: ""
      },
      {
        id: 56,
        section: "choukai",
        type: "CK",
        audioText: "女の人が話しています。女の人はきのう何をしましたか。 女：きのうは休みでした。朝、部屋を掃除して、それからデパートへ服を買いに行きました。女の人はきのう何をしましたか。",
        question: "女の人はきのう何をしましたか。",
        options: ["部屋を掃除して、服を買った", "部屋を掃除して、本を買った", "手紙を書いて、服を買った", "服を買って、掃除した"],
        correct: 0,
        points: 2,
        reading: "",
        meaning: ""
      },
      {
        id: 57,
        section: "choukai",
        type: "CK",
        audioText: "駅で男の人と女の人が話しています。電車は何時に来ますか。 男：すみません、次の電車は何時ですか。 女：次は3時15分です。男：ありがとうございます。電車は何時に来ますか。",
        question: "電車は何時に来ますか。",
        options: ["3時5分", "3時10分", "3時15分", "3時50分"],
        correct: 2,
        points: 2,
        reading: "",
        meaning: ""
      },
      {
        id: 58,
        section: "choukai",
        type: "CK",
        audioText: "男の人が電話で話しています。男の人は今、どこにいますか。 男：もしもし、今駅に着きました。これからバスに乗ります。男の人は今、どこにいますか。",
        question: "男の人は今、どこにいますか。",
        options: ["バスの中", "駅", "会社", "家"],
        correct: 1,
        points: 2,
        reading: "",
        meaning: ""
      },
      {
        id: 59,
        section: "choukai",
        type: "CK",
        audioText: "レストランで男の人と女の人が話しています。男の人は何を食べますか。 男：私はカレーにします。あなたは？ 女：私はラーメン。あ、男の人もラーメンにしませんか。美味しいですよ。男：うーん、やっぱりカレーがいいです。男の人は何を食べますか。",
        question: "男の人は何を食べますか。",
        options: ["ラーメン", "カレー", "うどん", "寿司"],
        correct: 1,
        points: 2,
        reading: "",
        meaning: ""
      },
      {
        id: 60,
        section: "choukai",
        type: "CK",
        audioText: "先生が教室で話しています。学生は明日、何を持ってきますか。 先生：明日は作文の授業です。辞書とノートを持ってきてください。教科書はいりません。学生は明日、何を持ってきますか。",
        question: "学生は明日、何を持ってきますか。",
        options: ["辞書とノート", "辞書と教科書", "ノートと教科書", "ノートだけ"],
        correct: 0,
        points: 2,
        reading: "",
        meaning: ""
      },
      {
        id: 61,
        section: "choukai",
        type: "CK",
        audioText: "男の人と女の人が話しています。男の人は日曜日、何をしましたか。 女：日曜日は天気がよかったですね。どこかへ行きましたか。 男：はい、海へ行きました。女：泳ぎましたか。男：いいえ、泳ぎませんでした。写真をたくさん撮りました。男の人は日曜日、何をしましたか。",
        question: "男の人は日曜日、何をしましたか。",
        options: ["海で泳いだ", "海で写真を撮った", "山で写真を撮った", "家にいた"],
        correct: 1,
        points: 2,
        reading: "",
        meaning: ""
      },
      {
        id: 62,
        section: "choukai",
        type: "CK",
        audioText: "女の人が電話で話しています。女の人の誕生日はいつですか。 男：田中さんの誕生日はいつですか。 女：八月七日です。女の人の誕生日はいつですか。",
        question: "女の人の誕生日はいつですか。",
        options: ["七月八日", "八月七日", "八月四日", "七月七日"],
        correct: 1,
        points: 2,
        reading: "",
        meaning: ""
      },
      {
        id: 63,
        section: "choukai",
        type: "CK",
        audioText: "男の人と女の人が話しています。二人は何時にお茶を飲みますか。 男：お茶を飲みませんか。 女：いいですね。今、3時半ですね。 男：じゃあ、4時に飲みましょう。二人は何時にお茶を飲みますか。",
        question: "二人は何時にお茶を飲みますか。",
        options: ["3時半", "4時", "4時半", "3時"],
        correct: 1,
        points: 2,
        reading: "",
        meaning: ""
      },
      {
        id: 64,
        section: "choukai",
        type: "CK",
        audioText: "男の人が話しています。男の人はどうやって会社へ行きますか。 男：私の家から駅まで歩いて5分です。駅から会社まで電車で20分です。いつも電車で行きます。男の人はどうやって会社へ行きますか。",
        question: "男の人はどうやって会社へ行きますか。",
        options: ["歩いて行く", "バスで行く", "自転車で行く", "電車で行く"],
        correct: 3,
        points: 2,
        reading: "",
        meaning: ""
      },
      {
        id: 65,
        section: "choukai",
        type: "CK",
        audioText: "デパートで女の人が店の人と話しています。女の人はどの靴を買いますか。 店の人：いらっしゃいませ。 女：この白い靴、いくらですか。 店の人：4000円です。黒い靴は5000円です。 女：じゃあ、安いほうをください。女の人はどの靴を買いますか。",
        question: "女の人はどの靴を買いますか。",
        options: ["白い靴", "黒い靴", "赤い靴", "青い靴"],
        correct: 0,
        points: 2,
        reading: "",
        meaning: ""
      },
      {
        id: 66,
        section: "choukai",
        type: "CK",
        audioText: "学生が話しています。男の学生の家族は何人ですか。 女：鈴木さんの家族は何人ですか。 男：両親と姉が二人います。女：じゃあ、五人ですね。男：はい。男の学生の家族は何人ですか。",
        question: "男の学生の家族は何人ですか。",
        options: ["三人", "四人", "五人", "六人"],
        correct: 2,
        points: 2,
        reading: "",
        meaning: ""
      },
      {
        id: 67,
        section: "choukai",
        type: "CK",
        audioText: "女の人と男の人が話しています。机の上に何がありますか。 女：机の上に私の眼鏡がありますか。 男：いいえ、本とペンしかありませんよ。机の上に何がありますか。",
        question: "机の上に何がありますか。",
        options: ["眼鏡と本", "本とペン", "眼鏡だけ", "ペンだけ"],
        correct: 1,
        points: 2,
        reading: "",
        meaning: ""
      },
      {
        id: 68,
        section: "choukai",
        type: "CK",
        audioText: "男の人と女の人が話しています。明日の天気はどうなりますか。 男：明日はテニスをしますね。天気はどうですか。 女：午前は曇りですが、午後は雨が降るそうです。男：そうですか。明日の天気はどうなりますか。",
        question: "明日の天気はどうなりますか。",
        options: ["曇りのち雨", "雨のち曇り", "晴れ", "ずっと雨"],
        correct: 0,
        points: 2,
        reading: "",
        meaning: ""
      },
      {
        id: 69,
        section: "choukai",
        type: "CK",
        audioText: "女の人が話しています。女の人は今、何をしていますか。 女：もしもし、お母さん？今、晩ご飯を作っています。あとで電話します。女の人は今、何をしていますか。",
        question: "女の人は今、何をしていますか。",
        options: ["晩ご飯を食べている", "晩ご飯を作っている", "電話を待っている", "掃除をしている"],
        correct: 1,
        points: 2,
        reading: "",
        meaning: ""
      },
      {
        id: 70,
        section: "choukai",
        type: "CK",
        audioText: "男の人と女の人が話しています。二人はどこで会いますか。 男：明日はどこで会いましょうか。駅の前はどうですか。 女：駅の前は人が多いですから、公園の入り口にしましょう。 男：分かりました。二人はどこで会いますか。",
        question: "二人はどこで会いますか。",
        options: ["駅の前", "公園の入り口", "公園の中", "学校の前"],
        correct: 1,
        points: 2,
        reading: "",
        meaning: ""
      },
      {
        id: 71,
        section: "choukai",
        type: "CK",
        audioText: "店で男の人と女の人が話しています。男の人はいくら払いますか。 男：りんごを3つください。 女：はい。1つ100円ですから、300円です。 男：はい、どうぞ。男の人はいくら払いますか。",
        question: "男の人はいくら払いますか。",
        options: ["100円", "200円", "300円", "400円"],
        correct: 2,
        points: 2,
        reading: "",
        meaning: ""
      },
      {
        id: 72,
        section: "choukai",
        type: "CK",
        audioText: "男の人と女の人が話しています。男の人はどのスポーツが好きですか。 女：スポーツが好きですか。 男：はい。サッカーやテニスが好きです。女：野球はどうですか。男：野球はあまり好きじゃありません。男の人はどのスポーツが好きですか。",
        question: "男の人はどのスポーツが好きですか。",
        options: ["サッカーと野球", "テニスと野球", "サッカーとテニス", "野球だけ"],
        correct: 2,
        points: 2,
        reading: "",
        meaning: ""
      },
      {
        id: 73,
        section: "choukai",
        type: "CK",
        audioText: "女の人が話しています。女の人の国は今、何時ですか。 女：日本は今、午後2時ですね。私の国は午後1時です。女の人の国は今、何時ですか。",
        question: "女の人の国は今、何時ですか。",
        options: ["午後1時", "午後2時", "午後3時", "午前1時"],
        correct: 0,
        points: 2,
        reading: "",
        meaning: ""
      },
      {
        id: 74,
        section: "choukai",
        type: "CK",
        audioText: "男の人と女の人が話しています。女の人はこれからどこへ行きますか。 男：これから帰りますか。 女：いいえ、ちょっと郵便局へ行きます。切手を買いたいです。 男：そうですか。女の人はこれからどこへ行きますか。",
        question: "女の人はこれからどこへ行きますか。",
        options: ["家", "郵便局", "銀行", "スーパー"],
        correct: 1,
        points: 2,
        reading: "",
        meaning: ""
      },
      {
        id: 75,
        section: "choukai",
        type: "CK",
        audioText: "男の人が電話で話しています。パーティーは何時からですか。 男：はい、田中です。明日のパーティーですね。ええと、6時半からです。はい、待っています。パーティーは何時からですか。",
        question: "パーティーは何時からですか。",
        options: ["5時半", "6時", "6時半", "7時"],
        correct: 2,
        points: 2,
        reading: "",
        meaning: ""
      },
      {
        id: 76,
        section: "choukai",
        type: "CK",
        audioText: "先生が話しています。学生は宿題をいつ出しますか。 先生：今日の授業はこれで終わります。この宿題は来週の月曜日に出してください。学生は宿題をいつ出しますか。",
        question: "学生は宿題をいつ出しますか。",
        options: ["今日", "明日", "来週の月曜日", "来週の火曜日"],
        correct: 2,
        points: 2,
        reading: "",
        meaning: ""
      },
      {
        id: 77,
        section: "choukai",
        type: "CK",
        audioText: "男の人と女の人が話しています。男の人の趣味は何ですか。 女：山田さんの趣味は何ですか。 男：音楽を聞くことと、本を読むことです。女：スポーツは？男：スポーツはしません。男の人の趣味は何ですか。",
        question: "男の人の趣味は何ですか。",
        options: ["音楽とスポーツ", "本を読むこととスポーツ", "音楽を聞くことと本を読むこと", "スポーツだけ"],
      },
        {
        id: 77,
        section: "choukai",
        type: "CK",
        audioText: "男の人と女の人が話しています。男の人の趣味は何ですか。 女：山田さんの趣味は何ですか。 男：音楽を聞くことと、本を読むことです。女：スポーツは？男：スポーツはしません。男の人の趣味は何ですか。",
        question: "男の人の趣味は何ですか。",
        options: ["音楽とスポーツ", "本を読むこととスポーツ", "音楽を聞くことと本を読むこと", "スポーツだけ"],
        correct: 2,
        points: 2,
        reading: "",
        meaning: ""
      },
      {
        id: 78,
        section: "choukai",
        type: "CK",
        audioText: "女の人が話しています。猫はどこにいますか。 女：あれ？私の猫がいない。あ、あそこにいました。車の下で寝ています。猫はどこにいますか。",
        question: "猫はどこにいますか。",
        options: ["車の中", "車の上", "車の下", "車の前"],
        correct: 2,
        points: 2,
        reading: "",
        meaning: ""
      },
      {
        id: 79,
        section: "choukai",
        type: "CK",
        audioText: "男の人と女の人が話しています。女の人はきのう何時間寝ましたか。 男：眠そうですね。きのうは何時間寝ましたか。 女：きのうは忙しかったですから、4時間しか寝ませんでした。 男：それは大変ですね。女の人はきのう何時間寝ましたか。",
        question: "女の人はきのう何時間寝ましたか。",
        options: ["3時間", "4時間", "5時間", "8時間"],
        correct: 1,
        points: 2,
        reading: "",
        meaning: ""
      },
      {
        id: 80,
        section: "choukai",
        type: "CK",
        audioText: "病院で医者と男の人が話しています。男の人は一日に何回薬を飲みますか。 医者：この薬は、朝と夜のご飯の後に飲んでください。 男：はい、わかりました。一日二回ですね。 医者：そうです。男の人は一日に何回薬を飲みますか。",
        question: "男の人は一日に何回薬を飲みますか。",
        options: ["一回", "二回", "三回", "四回"],
        correct: 1,
        points: 3,
        reading: "",
        meaning: ""
      }
    ]
  }

};

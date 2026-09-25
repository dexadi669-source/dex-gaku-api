// =====================================================
// kanji-data.js
// Data 103 Kanji N5 untuk aplikasi DeX Gaku.
// Setiap entri: { kanji, kunyomi, onyomi, arti, kategori, contoh }
//
// Field "contoh" (opsional) berisi 2 contoh kata:
//   contoh: [
//     { kata: "人", baca: "ひと", arti: "Orang" },
//     { kata: "日本人", baca: "にほんじん", arti: "Orang Jepang" }
//   ]
// Kalau field "contoh" tidak diisi, halaman detail akan
// otomatis memakai kanji itu sendiri sebagai contoh pertama.
// Tinggal tambahkan array "contoh" pada kanji mana saja
// yang mau dilengkapi — tidak perlu isi semuanya sekaligus.
//
// Sumber data: kunyomi/onyomi/arti dicocokkan dengan daftar
// Kanji N5 (103 huruf) dari RSP Sensei (rspsensei.com).
//
// Kategori dipakai untuk mengelompokkan tampilan di
// halaman menu Kanji (mis. "Dasar", "Orang", "Alam").
// Tinggal ubah nilai "kategori" kalau mau kelompok lain.
// =====================================================

var KANJI_DATA = [
  { no: 1,  kanji: "一", kunyomi: "ひとつ", onyomi: "イチ・イツ", arti: "satu", kategori: "Angka" },
  { no: 2,  kanji: "二", kunyomi: "ふたつ", onyomi: "ニ", arti: "dua", kategori: "Angka" },
  { no: 3,  kanji: "三", kunyomi: "みっつ", onyomi: "サン", arti: "tiga", kategori: "Angka" },
  { no: 4,  kanji: "四", kunyomi: "よっつ・よん・よ", onyomi: "シ", arti: "empat", kategori: "Angka" },
  { no: 5,  kanji: "五", kunyomi: "いつつ", onyomi: "ゴ", arti: "lima", kategori: "Angka" },
  { no: 6,  kanji: "六", kunyomi: "むっつ", onyomi: "ロク・ロッ", arti: "enam", kategori: "Angka" },
  { no: 7,  kanji: "七", kunyomi: "ななつ", onyomi: "シチ", arti: "tujuh", kategori: "Angka" },
  { no: 8,  kanji: "八", kunyomi: "やっつ", onyomi: "ハチ・ハッ", arti: "delapan", kategori: "Angka" },
  { no: 9,  kanji: "九", kunyomi: "ここのつ", onyomi: "キュウ・ク", arti: "sembilan", kategori: "Angka" },
  { no: 10, kanji: "十", kunyomi: "とお", onyomi: "ジュウ・ジッ・ジュッ", arti: "sepuluh", kategori: "Angka" },
  { no: 11, kanji: "百", kunyomi: "", onyomi: "ヒャク・ハク", arti: "seratus", kategori: "Angka" },
  { no: 12, kanji: "千", kunyomi: "", onyomi: "セン", arti: "ribu", kategori: "Angka" },
  { no: 13, kanji: "万", kunyomi: "", onyomi: "マン・バン", arti: "puluh ribu", kategori: "Angka" },
  { no: 14, kanji: "円", kunyomi: "", onyomi: "エン", arti: "yen", kategori: "Angka" },
  { no: 15, kanji: "年", kunyomi: "とし", onyomi: "ネン", arti: "tahun, umur", kategori: "Waktu" },
  { no: 16, kanji: "山", kunyomi: "やま", onyomi: "サン", arti: "gunung", kategori: "Alam" },
  { no: 17, kanji: "川", kunyomi: "かわ", onyomi: "セン", arti: "sungai", kategori: "Alam" },
  { no: 18, kanji: "田", kunyomi: "", onyomi: "デン・タ", arti: "sawah", kategori: "Alam" },
  { no: 19, kanji: "日", kunyomi: "ひ・び", onyomi: "ニチ・ニ・ジツ", arti: "matahari, hari", kategori: "Alam" },
  { no: 20, kanji: "月", kunyomi: "つき", onyomi: "ゲツ・ガツ", arti: "bulan", kategori: "Alam" },
  { no: 21, kanji: "火", kunyomi: "ひ", onyomi: "カ", arti: "api", kategori: "Alam" },
  { no: 22, kanji: "水", kunyomi: "みず", onyomi: "スイ", arti: "air", kategori: "Alam" },
  { no: 23, kanji: "木", kunyomi: "き", onyomi: "モク", arti: "pohon", kategori: "Alam" },
  { no: 24, kanji: "金", kunyomi: "かね・かな", onyomi: "キン・コン", arti: "uang, logam emas", kategori: "Alam" },
  { no: 25, kanji: "土", kunyomi: "つち", onyomi: "ド・ト", arti: "tanah", kategori: "Alam" },
  { no: 26, kanji: "上", kunyomi: "うえ・あがる", onyomi: "ジョウ・ショウ", arti: "atas, naik", kategori: "Arah" },
  { no: 27, kanji: "下", kunyomi: "した・さがる・さげる", onyomi: "カ・ゲ", arti: "bawah, turun, menurunkan", kategori: "Arah" },
  { no: 28, kanji: "中", kunyomi: "なか", onyomi: "チュウ・ジュウ", arti: "dalam", kategori: "Arah" },
  { no: 29, kanji: "半", kunyomi: "", onyomi: "ハン", arti: "setengah", kategori: "Angka" },
  { no: 30, kanji: "分", kunyomi: "わかる・わける", onyomi: "フン・ブン・プン", arti: "menit, mengerti, memisahkan", kategori: "Waktu" },
  { no: 31, kanji: "人", kunyomi: "ひと", onyomi: "ジン・ニン", arti: "orang", kategori: "Orang",
    contoh: [
      { kata: "人", baca: "ひと", arti: "Orang" },
      { kata: "日本人", baca: "にほんじん", arti: "Orang Jepang" }
    ]
  },
  { no: 32, kanji: "子", kunyomi: "こ", onyomi: "シ", arti: "anak", kategori: "Orang" },
  { no: 33, kanji: "女", kunyomi: "おんな", onyomi: "ジョ", arti: "perempuan", kategori: "Orang" },
  { no: 34, kanji: "男", kunyomi: "おとこ", onyomi: "ダン・ナン", arti: "laki-laki", kategori: "Orang" },
  { no: 35, kanji: "目", kunyomi: "め", onyomi: "モク・ボク", arti: "mata", kategori: "Tubuh" },
  { no: 36, kanji: "口", kunyomi: "くち・ぐち", onyomi: "コウ", arti: "mulut", kategori: "Tubuh" },
  { no: 37, kanji: "耳", kunyomi: "みみ", onyomi: "ジ", arti: "telinga", kategori: "Tubuh" },
  { no: 38, kanji: "手", kunyomi: "て", onyomi: "シュ", arti: "tangan", kategori: "Tubuh" },
  { no: 39, kanji: "足", kunyomi: "あし・たる", onyomi: "ソク", arti: "kaki/cukup", kategori: "Tubuh" },
  { no: 40, kanji: "力", kunyomi: "ちから", onyomi: "リョク・リキ", arti: "tenaga", kategori: "Tubuh" },
  { no: 41, kanji: "父", kunyomi: "ちち", onyomi: "フ", arti: "ayah", kategori: "Keluarga" },
  { no: 42, kanji: "母", kunyomi: "はは", onyomi: "ボ", arti: "ibu", kategori: "Keluarga" },
  { no: 43, kanji: "店", kunyomi: "みせ", onyomi: "テン", arti: "toko, warung", kategori: "Tempat" },
  { no: 44, kanji: "駅", kunyomi: "", onyomi: "エキ", arti: "stasiun", kategori: "Tempat" },
  { no: 45, kanji: "先", kunyomi: "さき", onyomi: "セン", arti: "ujung", kategori: "Arah" },
  { no: 46, kanji: "生", kunyomi: "い・いきる・なま", onyomi: "セイ・ショウ", arti: "hidup, mentah", kategori: "Kehidupan" },
  { no: 47, kanji: "学", kunyomi: "まなぶ", onyomi: "ガク", arti: "mempelajari", kategori: "Belajar" },
  { no: 48, kanji: "校", kunyomi: "", onyomi: "コウ", arti: "sekolah", kategori: "Belajar" },
  { no: 49, kanji: "友", kunyomi: "とも", onyomi: "ユウ", arti: "teman", kategori: "Orang" },
  { no: 50, kanji: "本", kunyomi: "", onyomi: "ホン", arti: "buku", kategori: "Belajar" },
  { no: 51, kanji: "毎", kunyomi: "", onyomi: "マイ", arti: "setiap", kategori: "Waktu" },
  { no: 52, kanji: "前", kunyomi: "まえ", onyomi: "ゼン", arti: "depan, sebelum", kategori: "Arah" },
  { no: 53, kanji: "後", kunyomi: "あと・うしろ", onyomi: "ゴ・コウ", arti: "nanti, belakang", kategori: "Arah" },
  { no: 54, kanji: "左", kunyomi: "ひだり", onyomi: "サ", arti: "kiri", kategori: "Arah" },
  { no: 55, kanji: "右", kunyomi: "みぎ", onyomi: "ウ・ユウ", arti: "kanan", kategori: "Arah" },
  { no: 56, kanji: "東", kunyomi: "ひがし", onyomi: "トウ", arti: "timur", kategori: "Arah" },
  { no: 57, kanji: "西", kunyomi: "にし", onyomi: "セイ・サイ", arti: "barat", kategori: "Arah" },
  { no: 58, kanji: "南", kunyomi: "みなみ", onyomi: "ナン・ナ", arti: "selatan", kategori: "Arah" },
  { no: 59, kanji: "北", kunyomi: "きた", onyomi: "ホク・ボク", arti: "utara", kategori: "Arah" },
  { no: 60, kanji: "名", kunyomi: "な", onyomi: "メイ・ミョウ", arti: "nama", kategori: "Orang" },
  { no: 61, kanji: "牛", kunyomi: "うし", onyomi: "ギュウ", arti: "sapi", kategori: "Hewan" },
  { no: 62, kanji: "馬", kunyomi: "うま", onyomi: "バ", arti: "kuda", kategori: "Hewan" },
  { no: 63, kanji: "魚", kunyomi: "さかな", onyomi: "ギョ", arti: "ikan", kategori: "Hewan" },
  { no: 64, kanji: "貝", kunyomi: "かい", onyomi: "バイ", arti: "kerang", kategori: "Hewan" },
  { no: 65, kanji: "雨", kunyomi: "あめ・あま", onyomi: "ウ", arti: "hujan", kategori: "Alam" },
  { no: 66, kanji: "天", kunyomi: "", onyomi: "テン", arti: "atas, langit", kategori: "Alam" },
  { no: 67, kanji: "気", kunyomi: "", onyomi: "キ・ケ", arti: "jiwa, semangat", kategori: "Kehidupan" },
  { no: 68, kanji: "車", kunyomi: "くるま", onyomi: "シャ", arti: "mobil", kategori: "Kendaraan" },
  { no: 69, kanji: "門", kunyomi: "", onyomi: "モン", arti: "gerbang", kategori: "Tempat" },
  { no: 70, kanji: "午", kunyomi: "", onyomi: "ゴ", arti: "siang", kategori: "Waktu" },
  { no: 71, kanji: "大", kunyomi: "おおきい", onyomi: "ダイ・タイ", arti: "besar", kategori: "Sifat" },
  { no: 72, kanji: "小", kunyomi: "ちいさい", onyomi: "ショウ", arti: "kecil", kategori: "Sifat" },
  { no: 73, kanji: "高", kunyomi: "たかい", onyomi: "コウ", arti: "mahal, tinggi", kategori: "Sifat" },
  { no: 74, kanji: "安", kunyomi: "やすい", onyomi: "アン", arti: "murah", kategori: "Sifat" },
  { no: 75, kanji: "新", kunyomi: "あたらしい", onyomi: "シン", arti: "baru", kategori: "Sifat" },
  { no: 76, kanji: "古", kunyomi: "ふるい", onyomi: "コ", arti: "lama, tua", kategori: "Sifat" },
  { no: 77, kanji: "長", kunyomi: "ながい", onyomi: "チョウ", arti: "panjang", kategori: "Sifat" },
  { no: 78, kanji: "多", kunyomi: "おおい", onyomi: "タ", arti: "banyak", kategori: "Sifat" },
  { no: 79, kanji: "少", kunyomi: "すくない・すこし", onyomi: "ショウ", arti: "sedikit", kategori: "Sifat" },
  { no: 80, kanji: "早", kunyomi: "はやい", onyomi: "ソウ・サツ", arti: "cepat", kategori: "Sifat" },
  { no: 81, kanji: "行", kunyomi: "いく・おこなう", onyomi: "コウ・ギョウ", arti: "pergi, mengadakan", kategori: "Aktivitas" },
  { no: 82, kanji: "来", kunyomi: "くる", onyomi: "ライ", arti: "datang", kategori: "Aktivitas" },
  { no: 83, kanji: "食", kunyomi: "たべる", onyomi: "ショク", arti: "makan", kategori: "Aktivitas" },
  { no: 84, kanji: "見", kunyomi: "みる", onyomi: "ケン", arti: "melihat", kategori: "Aktivitas" },
  { no: 85, kanji: "入", kunyomi: "はいる・いれる", onyomi: "ニュウ", arti: "masuk, memasukan", kategori: "Aktivitas" },
  { no: 86, kanji: "出", kunyomi: "でる・だす", onyomi: "シュツ", arti: "keluar, mengeluarkan", kategori: "Aktivitas" },
  { no: 87, kanji: "立", kunyomi: "たつ", onyomi: "リツ・リュウ", arti: "berdiri", kategori: "Aktivitas" },
  { no: 88, kanji: "書", kunyomi: "かく", onyomi: "ショ", arti: "menulis", kategori: "Aktivitas" },
  { no: 89, kanji: "言", kunyomi: "いう", onyomi: "ゲン・ゴン", arti: "berbicara", kategori: "Aktivitas" },
  { no: 90, kanji: "飲", kunyomi: "のむ", onyomi: "イン", arti: "minum", kategori: "Aktivitas" },
  { no: 91, kanji: "話", kunyomi: "はなす・はなし", onyomi: "ワ", arti: "berbicara, pembicaraan", kategori: "Aktivitas" },
  { no: 92, kanji: "読", kunyomi: "よむ", onyomi: "ドク・トク", arti: "membaca", kategori: "Aktivitas" },
  { no: 93, kanji: "語", kunyomi: "かたる", onyomi: "ゴ", arti: "bercerita", kategori: "Aktivitas" },
  { no: 94, kanji: "間", kunyomi: "あいだ・ま", onyomi: "カン・ケン", arti: "diantara", kategori: "Arah" },
  { no: 95, kanji: "聞", kunyomi: "きく", onyomi: "ブン・モン", arti: "mendengar", kategori: "Aktivitas" },
  { no: 96, kanji: "買", kunyomi: "かう", onyomi: "バイ", arti: "membeli", kategori: "Aktivitas" },
  { no: 97, kanji: "休", kunyomi: "やすむ", onyomi: "キュウ", arti: "istirahat, libur", kategori: "Aktivitas" },
  { no: 98, kanji: "時", kunyomi: "とき", onyomi: "ジ", arti: "saat, jam", kategori: "Waktu" },
  { no: 99, kanji: "週", kunyomi: "", onyomi: "シュウ", arti: "minggu (bukan nama hari)", kategori: "Waktu" },
  { no: 100, kanji: "道", kunyomi: "みち", onyomi: "ドウ・トウ", arti: "jalan", kategori: "Tempat" },
  { no: 101, kanji: "今", kunyomi: "いま", onyomi: "コン・キン", arti: "sekarang", kategori: "Waktu" },
  { no: 102, kanji: "会", kunyomi: "あう", onyomi: "カイ", arti: "bertemu", kategori: "Aktivitas" },
  { no: 103, kanji: "社", kunyomi: "", onyomi: "シャ・ジャ", arti: "perusahaan", kategori: "Tempat" }
];

// Daftar kategori sesuai urutan kemunculan pertama di data.
// Dipakai untuk membuat grup di halaman menu Kanji.
var KANJI_CATEGORIES = [
  "Angka", "Waktu", "Alam", "Arah", "Orang", "Tubuh",
  "Keluarga", "Tempat", "Kehidupan", "Belajar", "Hewan",
  "Kendaraan", "Sifat", "Aktivitas"
];

// Emoji ikon untuk tiap kategori (dipakai di kartu grup)
var KANJI_CATEGORY_ICON = {
  "Angka": "&#128290;",
  "Waktu": "&#8987;",
  "Alam": "&#127795;",
  "Arah": "&#129517;",
  "Orang": "&#128101;",
  "Tubuh": "&#128070;",
  "Keluarga": "&#128106;",
  "Tempat": "&#127974;",
  "Kehidupan": "&#127772;",
  "Belajar": "&#128218;",
  "Hewan": "&#128054;",
  "Kendaraan": "&#128663;",
  "Benda": "&#128268;",
  "Sifat": "&#10024;",
  "Aktivitas": "&#127939;"
};

// Warna badge ikon per kategori (dipakai di kartu kategori & hero).
// Kalau ada kategori baru yang belum terdaftar di sini, otomatis
// jatuh ke warna default (abu-abu) -- lihat kanjiCategoryColor().
var KANJI_CATEGORY_COLOR = {
  "Angka": "pink",
  "Waktu": "amber",
  "Alam": "green",
  "Arah": "indigo",
  "Orang": "blue",
  "Tubuh": "rose",
  "Keluarga": "orange",
  "Tempat": "teal",
  "Kehidupan": "yellow",
  "Belajar": "purple",
  "Hewan": "brown",
  "Kendaraan": "cyan",
  "Benda": "slate",
  "Sifat": "fuchsia",
  "Aktivitas": "red"
};

function kanjiCategoryColor(kategori) {
  return KANJI_CATEGORY_COLOR[kategori] || "slate";
}

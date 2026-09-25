// =====================================================
// DeX Gaku — user-data-store.js
// Util penyimpanan & integrasi data tambahan user (fitur
// "Tambah Data": Kotoba, Kanji, Bunpo) ke localStorage,
// serta penyuntikan data tsb ke variabel global yang SUDAH
// dipakai aplikasi (KOSAKATA_CATEGORIES, KANJI_DATA,
// BUNPO_CATEGORIES) supaya otomatis tampil di halaman
// belajar & (untuk Kanji/Kotoba) ikut ke Quiz, TANPA
// membuat sistem/database kedua.
//
// localStorage key: "dexgaku_userData" (key yang sama yang
// sudah disiapkan drawer.js untuk fitur Import/Export, supaya
// nanti kompatibel begitu Import/Export dilanjutkan).
// Struktur: { kotoba: [...], kanji: [...], bunpo: [...] }
//
// Setiap item disuntikkan dengan penanda:
//   source: "user"   -> data tambahan (boleh dihapus, warna beda)
// Data DEFAULT dari file *-data.js asli TIDAK memiliki field
// "source" ini sama sekali (undefined), sehingga pengecekan
// "apakah data ini boleh dihapus" selalu berdasarkan
// `item.source === "user"`, bukan warna atau posisi.
// =====================================================

var USER_DATA_STORAGE_KEY = "dexgaku_userData";

// Offset angka aman untuk field "no" Kanji tambahan user, supaya
// tidak pernah bentrok dengan "no" Kanji default (1-103 saat ini).
var USER_KANJI_NO_OFFSET = 100000;

// =====================================================
// 1. BACA / SIMPAN localStorage
// =====================================================

function userDataBacaSemua() {
  try {
    var raw = localStorage.getItem(USER_DATA_STORAGE_KEY);
    if (!raw) return { kotoba: [], kanji: [], bunpo: [] };
    var parsed = JSON.parse(raw);
    if (!parsed || typeof parsed !== "object") return { kotoba: [], kanji: [], bunpo: [] };
    return {
      kotoba: Array.isArray(parsed.kotoba) ? parsed.kotoba : [],
      kanji: Array.isArray(parsed.kanji) ? parsed.kanji : [],
      bunpo: Array.isArray(parsed.bunpo) ? parsed.bunpo : []
    };
  } catch (e) {
    return { kotoba: [], kanji: [], bunpo: [] };
  }
}

function userDataSimpanSemua(dataObj) {
  try {
    localStorage.setItem(USER_DATA_STORAGE_KEY, JSON.stringify(dataObj));
    return true;
  } catch (e) {
    return false; // localStorage penuh/nonaktif -- jangan sampai bikin fitur lain error
  }
}

// =====================================================
// 2. VALIDASI DUPLIKAT
// =====================================================

/**
 * Cek duplikat Kotoba: identitas utama = huruf Jepang ("kata").
 * Diperiksa terhadap data default (KOSAKATA_CATEGORIES) + data user.
 */
function userDataIsDuplicateKotoba(hurufJepang) {
  var target = String(hurufJepang).trim();
  if (typeof KOSAKATA_CATEGORIES !== "undefined") {
    for (var c = 0; c < KOSAKATA_CATEGORIES.length; c++) {
      var kataList = KOSAKATA_CATEGORIES[c].kata;
      for (var i = 0; i < kataList.length; i++) {
        if (kataList[i].kata === target) return true;
      }
    }
  }
  return false;
}

/** Cek duplikat Kanji: identitas utama = karakter kanji. */
function userDataIsDuplicateKanji(kanjiChar) {
  var target = String(kanjiChar).trim();
  if (typeof KANJI_DATA !== "undefined") {
    for (var i = 0; i < KANJI_DATA.length; i++) {
      if (KANJI_DATA[i].kanji === target) return true;
    }
  }
  return false;
}

/** Cek duplikat Bunpo: identitas utama = nilai pola/judul bunpo. */
function userDataIsDuplicateBunpo(judulBunpo) {
  var target = String(judulBunpo).trim();
  if (typeof BUNPO_CATEGORIES !== "undefined") {
    for (var c = 0; c < BUNPO_CATEGORIES.length; c++) {
      var materiList = BUNPO_CATEGORIES[c].materi;
      for (var i = 0; i < materiList.length; i++) {
        if (materiList[i].judul === target) return true;
      }
    }
  }
  return false;
}

// =====================================================
// 3. TAMBAH DATA BARU (dipanggil dari form Tambah Data)
// =====================================================

/**
 * @param {Object} entry { kata, arti, kategoriKey }
 * @param {string} [source] - "user" (default, dari form Tambah Data) atau
 *   "import" (dari fitur Import Data). Menentukan warna & badge penanda.
 * @returns {{ok:boolean, reason?:string}}
 */
function userDataTambahKotoba(entry, source) {
  if (userDataIsDuplicateKotoba(entry.kata)) {
    return { ok: false, reason: "duplicate" };
  }
  var all = userDataBacaSemua();
  var item = {
    id: "uk_" + Date.now() + "_" + Math.floor(Math.random() * 100000),
    source: source || "user",
    type: "kotoba",
    kata: entry.kata.trim(),
    romaji: entry.romaji ? entry.romaji.trim() : "",
    arti: entry.arti.trim(),
    kategoriKey: entry.kategoriKey
  };
  all.kotoba.push(item);
  userDataSimpanSemua(all);
  userDataInjectKotobaItem(item);
  return { ok: true, item: item };
}

/**
 * @param {Object} entry { kanji, arti, kunyomi, onyomi, contoh, kategori }
 * kunyomi/onyomi: array string (digabung "・" saat disimpan, sesuai
 * format data default yang sudah ada). contoh: array {kata, baca, arti}.
 * @param {string} [source] - "user" (default) atau "import".
 */
function userDataTambahKanji(entry, source) {
  if (userDataIsDuplicateKanji(entry.kanji)) {
    return { ok: false, reason: "duplicate" };
  }
  var all = userDataBacaSemua();
  var noBaru = USER_KANJI_NO_OFFSET + all.kanji.length + 1;
  var item = {
    id: "ukj_" + Date.now() + "_" + Math.floor(Math.random() * 100000),
    source: source || "user",
    no: noBaru,
    kanji: entry.kanji.trim(),
    kunyomi: (entry.kunyomi || []).filter(Boolean).join("・"),
    onyomi: (entry.onyomi || []).filter(Boolean).join("・"),
    arti: entry.arti.trim(),
    kategori: entry.kategori,
    contoh: (entry.contoh || []).filter(function (c) { return c && c.kata; })
  };
  all.kanji.push(item);
  userDataSimpanSemua(all);
  userDataInjectKanjiItem(item);
  return { ok: true, item: item };
}

/**
 * @param {Object} entry { judul, sub, fungsi, pola, contohKalimat,
 *   contohNegatif, kategoriKey }
 * @param {string} [source] - "user" (default) atau "import".
 */
function userDataTambahBunpo(entry, source) {
  if (userDataIsDuplicateBunpo(entry.judul)) {
    return { ok: false, reason: "duplicate" };
  }
  var all = userDataBacaSemua();
  var item = {
    id: "ub_" + Date.now() + "_" + Math.floor(Math.random() * 100000),
    source: source || "user",
    judul: entry.judul.trim(),
    sub: entry.sub ? entry.sub.trim() : "",
    preview: entry.pola ? entry.pola.trim() : entry.judul.trim(),
    pola: entry.pola ? entry.pola.trim() : "",
    fungsi: entry.fungsi ? entry.fungsi.trim() : "",
    contoh: {
      kanji: entry.contohKalimat ? entry.contohKalimat.trim() : "—",
      hiragana: "—",
      romaji: "—",
      arti: "—"
    },
    negatif: {
      kanji: entry.contohNegatif ? entry.contohNegatif.trim() : "—",
      hiragana: "—",
      romaji: "—",
      arti: "—"
    },
    kategoriKey: entry.kategoriKey
  };
  all.bunpo.push(item);
  userDataSimpanSemua(all);
  userDataInjectBunpoItem(item);
  return { ok: true, item: item };
}

// =====================================================
// 4. HAPUS DATA USER (data default tidak pernah lewat sini)
// =====================================================

function userDataHapus(type, id) {
  var all = userDataBacaSemua();
  if (type === "kotoba") {
    all.kotoba = all.kotoba.filter(function (it) { return it.id !== id; });
    if (typeof KOSAKATA_CATEGORIES !== "undefined") {
      for (var c = 0; c < KOSAKATA_CATEGORIES.length; c++) {
        KOSAKATA_CATEGORIES[c].kata = KOSAKATA_CATEGORIES[c].kata.filter(function (k) { return k.id !== id; });
      }
    }
  } else if (type === "kanji") {
    all.kanji = all.kanji.filter(function (it) { return it.id !== id; });
    if (typeof KANJI_DATA !== "undefined") {
      for (var i = KANJI_DATA.length - 1; i >= 0; i--) {
        if (KANJI_DATA[i].id === id) KANJI_DATA.splice(i, 1);
      }
    }
  } else if (type === "bunpo") {
    all.bunpo = all.bunpo.filter(function (it) { return it.id !== id; });
    if (typeof BUNPO_CATEGORIES !== "undefined") {
      for (var b = 0; b < BUNPO_CATEGORIES.length; b++) {
        BUNPO_CATEGORIES[b].materi = BUNPO_CATEGORIES[b].materi.filter(function (m) { return m.id !== id; });
      }
    }
  }
  userDataSimpanSemua(all);
}

// =====================================================
// 5. PENYUNTIKAN KE VARIABEL GLOBAL (dipanggil sekali saat
//    start, dan sekali lagi tiap kali item baru ditambahkan)
// =====================================================

function userDataInjectKotobaItem(item) {
  if (typeof KOSAKATA_CATEGORIES === "undefined") return;
  for (var c = 0; c < KOSAKATA_CATEGORIES.length; c++) {
    if (KOSAKATA_CATEGORIES[c].key === item.kategoriKey) {
      KOSAKATA_CATEGORIES[c].kata.push({
        id: item.id,
        source: item.source || "user",
        kata: item.kata,
        romaji: item.romaji,
        arti: item.arti
      });
      return;
    }
  }
}

function userDataInjectKanjiItem(item) {
  if (typeof KANJI_DATA === "undefined") return;
  KANJI_DATA.push({
    id: item.id,
    source: item.source || "user",
    no: item.no,
    kanji: item.kanji,
    kunyomi: item.kunyomi,
    onyomi: item.onyomi,
    arti: item.arti,
    kategori: item.kategori,
    contoh: item.contoh
  });
}

function userDataInjectBunpoItem(item) {
  if (typeof BUNPO_CATEGORIES === "undefined") return;
  for (var c = 0; c < BUNPO_CATEGORIES.length; c++) {
    if (BUNPO_CATEGORIES[c].key === item.kategoriKey) {
      BUNPO_CATEGORIES[c].materi.push({
        id: item.id,
        source: item.source || "user",
        judul: item.judul,
        sub: item.sub,
        preview: item.preview,
        pola: item.pola,
        fungsi: item.fungsi,
        contoh: item.contoh,
        negatif: item.negatif
      });
      return;
    }
  }
}

/**
 * Dipanggil sekali di awal (dari app.js atau langsung di file ini
 * lewat DOMContentLoaded) untuk menggabungkan seluruh data user
 * yang tersimpan ke variabel global sebelum halaman manapun dirender.
 */
function userDataInjectAllOnStartup() {
  var all = userDataBacaSemua();
  for (var i = 0; i < all.kotoba.length; i++) userDataInjectKotobaItem(all.kotoba[i]);
  for (var j = 0; j < all.kanji.length; j++) userDataInjectKanjiItem(all.kanji[j]);
  for (var k = 0; k < all.bunpo.length; k++) userDataInjectBunpoItem(all.bunpo[k]);
}

// Jalankan penyuntikan begitu file ini selesai dimuat. Script ini
// diletakkan SETELAH kosakata-data.js/kanji-data.js/bunpo-data.js
// dan SEBELUM app.js di index.html, jadi variabel global sudah ada
// dan halaman belum sempat dirender saat ini berjalan.
userDataInjectAllOnStartup();

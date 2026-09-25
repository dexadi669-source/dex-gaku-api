// =====================================================
// kanji-render.js
// Logika tampilan menu Kanji, 3 halaman:
// 1. Menu utama: tampilan mengikuti menu Kosakata (hero bergambar,
//    kartu ringkasan Kategori & Total Kanji, search global, grid kategori).
// 2. Daftar kanji per kategori: tampilan mengikuti kategori Kosakata
//    (hero bergambar, search lokal, kartu kanji berbentuk list).
// 3. Detail satu kanji: kanji besar+bacaan+arti, lalu 4 tab
//    (Arti/Bacaan/Contoh/Goresan).
//
// Membaca data dari kanji-data.js (KANJI_DATA, KANJI_CATEGORIES,
// KANJI_CATEGORY_ICON, KANJI_CATEGORY_COLOR).
// Untuk ubah/tambah kanji, edit kanji-data.js saja.
// =====================================================

/**
 * Mengelompokkan KANJI_DATA berdasarkan field "kategori".
 * @returns {Object} { "Angka": [...], "Orang": [...], ... }
 */
function groupKanjiByCategory() {
  var grouped = {};
  for (var i = 0; i < KANJI_DATA.length; i++) {
    var item = KANJI_DATA[i];
    if (!grouped[item.kategori]) grouped[item.kategori] = [];
    grouped[item.kategori].push(item);
  }
  return grouped;
}

/**
 * Ambil bacaan singkat pertama (kunyomi jika ada, kalau
 * tidak pakai onyomi) untuk ditampilkan di kartu kecil.
 */
function firstReading(item) {
  var reading = item.kunyomi && item.kunyomi.trim() !== "" ? item.kunyomi : item.onyomi;
  return reading.split("・")[0];
}

function capitalize(str) {
  if (!str) return "";
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * Konversi kana (hiragana/katakana) sederhana ke romaji.
 * Cukup untuk suku kata dasar N5 -- bukan konversi lengkap.
 * @param {string} kana
 * @returns {string}
 */
var KANA_TO_ROMAJI_MAP = {
  "あ":"a","い":"i","う":"u","え":"e","お":"o",
  "か":"ka","き":"ki","く":"ku","け":"ke","こ":"ko",
  "さ":"sa","し":"shi","す":"su","せ":"se","そ":"so",
  "た":"ta","ち":"chi","つ":"tsu","て":"te","と":"to",
  "な":"na","に":"ni","ぬ":"nu","ね":"ne","の":"no",
  "は":"ha","ひ":"hi","ふ":"fu","へ":"he","ほ":"ho",
  "ま":"ma","み":"mi","む":"mu","め":"me","も":"mo",
  "や":"ya","ゆ":"yu","よ":"yo",
  "ら":"ra","り":"ri","る":"ru","れ":"re","ろ":"ro",
  "わ":"wa","を":"wo","ん":"n",
  "が":"ga","ぎ":"gi","ぐ":"gu","げ":"ge","ご":"go",
  "ざ":"za","じ":"ji","ず":"zu","ぜ":"ze","ぞ":"zo",
  "だ":"da","ぢ":"ji","づ":"zu","で":"de","ど":"do",
  "ば":"ba","び":"bi","ぶ":"bu","べ":"be","ぼ":"bo",
  "ぱ":"pa","ぴ":"pi","ぷ":"pu","ぺ":"pe","ぽ":"po",
  "ゃ":"ya","ゅ":"yu","ょ":"yo","っ":"",
  "ア":"a","イ":"i","ウ":"u","エ":"e","オ":"o",
  "カ":"ka","キ":"ki","ク":"ku","ケ":"ke","コ":"ko",
  "サ":"sa","シ":"shi","ス":"su","セ":"se","ソ":"so",
  "タ":"ta","チ":"chi","ツ":"tsu","テ":"te","ト":"to",
  "ナ":"na","ニ":"ni","ヌ":"nu","ネ":"ne","ノ":"no",
  "ハ":"ha","ヒ":"hi","フ":"fu","ヘ":"he","ホ":"ho",
  "マ":"ma","ミ":"mi","ム":"mu","メ":"me","モ":"mo",
  "ヤ":"ya","ユ":"yu","ヨ":"yo",
  "ラ":"ra","リ":"ri","ル":"ru","レ":"re","ロ":"ro",
  "ワ":"wa","ヲ":"wo","ン":"n"
};

function kanaToRomaji(kana) {
  if (!kana) return "";
  var result = "";
  for (var i = 0; i < kana.length; i++) {
    var ch = kana.charAt(i);
    result += KANA_TO_ROMAJI_MAP[ch] !== undefined ? KANA_TO_ROMAJI_MAP[ch] : ch;
  }
  return result;
}

// =====================================================
// HALAMAN 1: Menu utama Kanji
// =====================================================

/**
 * Membuat HTML halaman utama Kanji: header hero + kartu
 * total + search global + grid kategori 2 kolom.
 * @returns {string}
 */
function renderKanjiMenu() {
  var grouped = groupKanjiByCategory();

  // Hitung kategori yang benar-benar berisi kanji
  var activeCats = [];
  for (var k = 0; k < KANJI_CATEGORIES.length; k++) {
    var g = grouped[KANJI_CATEGORIES[k]];
    if (g && g.length > 0) activeCats.push(KANJI_CATEGORIES[k]);
  }

  var html = '<div class="koto-wrapper">';

  // ---------- Header hero (susunan sama dengan menu Kosakata) ----------
  html += '<div class="koto-hero koto-hero-kanji">';
  html += '<button class="koto-back-top" id="kanjiHeroBack" aria-label="Kembali"><svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M15 18l-6-6 6-6"/></svg> Kembali</button>';

  html += '<h1 class="koto-title" style="margin-top:8px;">Kanji</h1>';
  html += '<p class="koto-subtitle">Kumpulan kanji Jepang level N5</p>';

  html += '<div class="koto-summary">';
  html += '<div class="koto-sum-box"><div class="koto-sum-icon" style="background:#fff0e6; color:#ff8a4c;">&#128214;</div><div class="koto-sum-text"><span class="koto-sum-val">' + activeCats.length + '</span><span class="koto-sum-lbl">Kategori</span></div></div>';
  html += '<div class="koto-sum-divider"></div>';
  html += '<div class="koto-sum-box"><div class="koto-sum-icon" style="background:#e6f0ff; color:#4c8aff; font-weight:800;">&#28450;</div><div class="koto-sum-text"><span class="koto-sum-val">' + KANJI_DATA.length + '</span><span class="koto-sum-lbl">Total Kanji</span></div></div>';
  html += '</div>';
  html += '</div>'; // .koto-hero

  html += '<div class="koto-content">';

  // ---------- Search global ----------
  html += '<div class="koto-search">';
  html += '<svg viewBox="0 0 24 24" width="20" height="20" stroke="#a0aab5" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>';
  html += '<input type="text" id="kanjiSearchInput" placeholder="Cari kanji atau arti..." autocomplete="off">';
  html += '<button type="button" id="kanjiSearchClear" class="kanji-search-clear hidden" aria-label="Hapus pencarian">&#10005;</button>';
  html += '</div>';

  html += '<div id="kanjiSearchResults"></div>';

  // ---------- Grid kategori (2 kolom, gaya kartu Kosakata) ----------
  html += '<div id="kanjiCategoryList">';
  html += '<div class="koto-cat-grid">';

  var pastelColors = ['#ffe4e8', '#ffebd9', '#e6f0ff', '#f0e6ff', '#e4f7e8', '#e0f5f2'];
  var textColors = ['#e6395b', '#d6892b', '#2c6fdb', '#7c3aed', '#3c9b4a', '#14a89a'];

  for (var c = 0; c < activeCats.length; c++) {
    var cat = activeCats[c];
    var items = grouped[cat];
    var icon = KANJI_CATEGORY_ICON[cat] || "&#26085;";
    var num = (c + 1 < 10) ? "0" + (c + 1) : (c + 1);
    var bgCol = pastelColors[c % pastelColors.length];
    var txtCol = textColors[c % textColors.length];

    html += '<div class="koto-cat-card" data-kanji-cat="' + escapeHtml(cat) + '">';
    html += '<div class="koto-cat-icon-wrap" style="background:' + bgCol + '; color:' + txtCol + ';">' + icon + '</div>';
    html += '<div class="koto-cat-info">';
    html += '<div class="koto-cat-top"><span class="koto-cat-num">' + num + '</span><span class="koto-cat-arrow">&#8250;</span></div>';
    html += '<h4 class="koto-cat-name">' + cat + '</h4>';
    html += '<p class="koto-cat-count">' + items.length + ' Kanji</p>';
    html += '</div></div>';
  }

  html += '</div>'; // .koto-cat-grid
  html += '</div>'; // #kanjiCategoryList
  html += '</div>'; // .koto-content
  html += '</div>'; // .koto-wrapper

  return html;
}

// Sama seperti menu Kosakata: sembunyikan header standar dan lebarkan area isi
// supaya hero bisa tampil penuh dari tepi ke tepi. Gaya ini hilang otomatis
// saat halaman lain (daftar kategori / detail) dirender.
var KANJI_MENU_STYLE_OVERRIDE = '<style>#detailHeaderStandard, #detailStandardIntro { display: none !important; } .detail-body { padding-top: 0 !important; max-width: 100% !important; margin: 0 !important; }</style>';

/**
 * Dipanggil dari app.js saat menu Kanji dibuka. Menyembunyikan
 * header standar dan menampilkan header hero khusus kanji.
 */
function loadKanjiMenu() {
  var standardIntro = document.getElementById("detailStandardIntro");
  var standardHeader = document.getElementById("detailHeaderStandard");
  if (standardIntro) standardIntro.classList.add("hidden");
  if (standardHeader) standardHeader.classList.add("hidden");

  detailExtra.innerHTML = KANJI_MENU_STYLE_OVERRIDE + renderKanjiMenu();
  initKanjiHeroBack();
  initKanjiCategoryClicks();
  initKanjiSearch();
}

function initKanjiHeroBack() {
  var btn = document.getElementById("kanjiHeroBack");
  if (btn) {
    btn.addEventListener("click", function () {
      history.back();
    });
  }
}

/** Memasang event klik pada tiap kartu kategori (tap: scale 1 -> 0.97 -> 1). */
function initKanjiCategoryClicks() {
  var cards = detailExtra.querySelectorAll(".koto-cat-card[data-kanji-cat]");
  for (var i = 0; i < cards.length; i++) {
    cards[i].addEventListener("click", function () {
      var cat = this.getAttribute("data-kanji-cat");
      var el = this;
      el.classList.add("tap-shrink");
      setTimeout(function () {
        openKanjiCategoryWithHistory(cat);
      }, 140);
    });
  }
}

// =====================================================
// HALAMAN 2: Daftar kanji dalam satu kategori
// =====================================================

/**
 * Membuat HTML halaman daftar kanji dalam satu kategori:
 * header hero kategori + search lokal + list kanji.
 * @param {string} kategori
 * @returns {string}
 */
function renderKanjiCategoryList(kategori) {
  var grouped = groupKanjiByCategory();
  var items = grouped[kategori] || [];
  var icon = KANJI_CATEGORY_ICON[kategori] || "&#26085;";

  // Override gaya disertakan di sini supaya hero tampil penuh, siapa pun yang memanggil fungsi ini.
  var html = KANJI_MENU_STYLE_OVERRIDE;
  html += '<div class="koto-wrapper">';

  // ---------- Hero kategori (susunan sama dengan kategori Kosakata) ----------
  html += '<div class="koto-hero koto-hero-sm koto-hero-kanji">';
  html += '<button class="koto-back-top" id="kanjiCatBack" aria-label="Kembali"><svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M15 18l-6-6 6-6"/></svg> Kembali</button>';
  html += '<div class="koto-cat-hero-content" style="margin-top:8px;">';
  html += '<div class="koto-cat-hero-icon">' + icon + '</div>';
  html += '<div><h2 class="koto-cat-hero-title">' + kategori + '</h2>';
  html += '<p class="koto-cat-hero-sub">' + items.length + ' Kanji</p></div>';
  html += '</div></div>'; // .koto-hero

  html += '<div class="koto-content">';

  // ---------- Search lokal ----------
  html += '<div class="koto-search">';
  html += '<svg viewBox="0 0 24 24" width="20" height="20" stroke="#a0aab5" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>';
  html += '<input type="text" id="kanjiCatSearchInput" placeholder="Cari dalam ' + kategori + '..." autocomplete="off">';
  html += '<button type="button" id="kanjiCatSearchClear" class="kanji-search-clear hidden" aria-label="Hapus pencarian">&#10005;</button>';
  html += '</div>';

  // ---------- Daftar kanji ----------
  html += '<div class="koto-word-list" id="kanjiCatList">';
  html += renderKanjiListCards(items, icon);
  html += '</div>';

  html += '</div>'; // .koto-content
  html += '</div>'; // .koto-wrapper

  return html;
}

/**
 * Membuat HTML daftar kartu kanji (list, bukan grid), tiap
 * kartu berisi nomor urut, kanji, bacaan/romaji, arti, dan panah.
 * @param {Array} items
 * @returns {string}
 */
function renderKanjiListCards(items, icon) {
  if (items.length === 0) {
    return '<div class="kanji-search-empty">Tidak ada kanji di kategori ini.</div>';
  }

  var html = "";
  for (var i = 0; i < items.length; i++) {
    var item = items[i];
    var reading = firstReading(item);
    var romaji = kanaToRomaji(reading);
    var cardIcon = icon || KANJI_CATEGORY_ICON[item.kategori] || "&#26085;";
    var iMark = typeof ieMarkerInfo === "function" ? ieMarkerInfo(item.source) : { isMarked: item.source === "user", attr: item.source === "user" ? ' data-td-source="user"' : "", textClass: item.source === "user" ? " tambah-data-text-user" : "", badge: item.source === "user" ? tdBadgeTambahanHTML() : "" };

    html += '<div class="koto-word-card" data-kanji-no="' + item.no + '"' + (iMark.isMarked ? iMark.attr + ' data-td-id="' + item.id + '"' : '') + '>';
    html += '<div class="koto-word-icon">' + cardIcon + '</div>';
    html += '<div class="koto-word-info">';
    html += '<div class="koto-word-line-top">';
    html += '<span class="koto-word-jp-new' + iMark.textClass + '">' + item.kanji + ' (' + reading + ')</span>';
    html += '<span class="koto-word-rm-new">' + romaji + '</span>';
    html += '</div>';
    html += '<div class="koto-word-id-new">' + capitalize(item.arti) + iMark.badge + '</div>';
    html += '</div>';
    html += '<div class="koto-word-arrow">&#8250;</div>';
    html += '</div>';
  }
  return html;
}

/**
 * Membuka halaman daftar kanji kategori tertentu, dan
 * mendaftarkan ke history supaya tombol back HP kembali
 * ke menu utama Kanji.
 * @param {string} kategori
 */
function openKanjiCategoryWithHistory(kategori) {
  detailExtra.innerHTML = renderKanjiCategoryList(kategori);
  detailExtra.classList.remove("slide-in-right");
  void detailExtra.offsetWidth; // restart animasi
  detailExtra.classList.add("slide-in-right");

  initKanjiCatBack();
  initKanjiListClicks(kategori);
  initKanjiCatSearch(kategori);

  history.pushState({ menu: "kanji", kategori: kategori }, "", "#kanji-cat-" + encodeURIComponent(kategori));
}

function initKanjiCatBack() {
  var btn = document.getElementById("kanjiCatBack");
  if (btn) {
    btn.addEventListener("click", function () {
      history.back();
    });
  }
}

/** Memasang event klik pada tiap kartu kanji di list (tap: scale 0.95 -> 1). */
function initKanjiListClicks(kategori) {
  var cards = detailExtra.querySelectorAll(".koto-word-card[data-kanji-no]");
  for (var i = 0; i < cards.length; i++) {
    cards[i].addEventListener("click", function () {
      var no = parseInt(this.getAttribute("data-kanji-no"), 10);
      var el = this;
      el.classList.add("tap-pop");
      setTimeout(function () {
        openKanjiDetailWithHistory(no, kategori);
      }, 120);
    });
    if (typeof tdAttachLongPress === "function") {
      tdAttachLongPress(cards[i], function () {
        var id = this.getAttribute("data-td-id");
        if (typeof userDataHapus === "function") userDataHapus("kanji", id);
        tdAnimateRemoveCard(this);
      }.bind(cards[i]));
    }
  }
}

/** Pencarian lokal dalam satu kategori kanji. */
function initKanjiCatSearch(kategori) {
  var input = document.getElementById("kanjiCatSearchInput");
  var clearBtn = document.getElementById("kanjiCatSearchClear");
  var listEl = document.getElementById("kanjiCatList");
  if (!input) return;

  input.addEventListener("input", function () {
    var q = input.value.trim().toLowerCase();
    var grouped = groupKanjiByCategory();
    var items = grouped[kategori] || [];

    if (clearBtn) clearBtn.classList.toggle("hidden", !q);

    if (!q) {
      listEl.innerHTML = renderKanjiListCards(items, KANJI_CATEGORY_ICON[kategori]);
      initKanjiListClicks(kategori);
      return;
    }

    var filtered = items.filter(function (item) {
      return kanjiMatchesQuery(item, q);
    });

    listEl.innerHTML = renderKanjiListCards(filtered, KANJI_CATEGORY_ICON[kategori]);
    listEl.classList.remove("slide-in-short");
    void listEl.offsetWidth;
    listEl.classList.add("slide-in-short");
    initKanjiListClicks(kategori);
  });

  if (clearBtn) {
    clearBtn.addEventListener("click", function () {
      input.value = "";
      input.dispatchEvent(new Event("input"));
      input.focus();
    });
  }
}

// =====================================================
// HALAMAN 3: Detail satu kanji (Arti, Bacaan, Contoh
// ditampilkan langsung sekaligus, tanpa sistem tab)
// =====================================================

/**
 * Mengambil daftar contoh kata untuk satu kanji. Kalau
 * item.contoh sudah diisi manual (lihat kanji-data.js),
 * dipakai langsung. Kalau belum, dibuat otomatis: contoh
 * pertama = kanji itu sendiri + bacaan utamanya.
 * @param {Object} item
 * @returns {Array}
 */
function getKanjiExamples(item) {
  if (item.contoh && item.contoh.length > 0) {
    return item.contoh;
  }
  return [
    { kata: item.kanji, baca: firstReading(item), arti: capitalize(item.arti) }
  ];
}

/**
 * Membuat HTML halaman detail satu kanji: kartu utama
 * (lingkaran dekoratif + kanji besar + bacaan + romaji + arti)
 * lalu 3 kartu berurutan: Arti, Bacaan, Contoh Kosakata.
 * @param {number} kanjiNo
 * @returns {string}
 */
function renderKanjiDetail(kanjiNo) {
  var item = findKanjiByNo(kanjiNo);
  if (!item) return "<p>Kanji tidak ditemukan.</p>";

  var mainReading = firstReading(item);
  var mainRomaji = kanaToRomaji(mainReading);

  var html = "";

  html += '<div class="kanji-detail-hero">';
  html += '<button class="kanji-hero-back" id="kanjiDetailBack" aria-label="Kembali">';
  html += '<svg viewBox="0 0 24 24" width="20" height="20"><path d="M15 18l-6-6 6-6" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" fill="none"/></svg>';
  html += "</button>";
  html += "</div>";

  var dMark = typeof ieMarkerInfo === "function" ? ieMarkerInfo(item.source) : { textClass: item.source === "user" ? " tambah-data-text-user" : "", badge: item.source === "user" ? tdBadgeTambahanHTML() : "" };
  html += '<div class="kanji-detail-main">';
  html += '<div class="kanji-detail-char-wrap">';
  html += '<img src="assets/kanji-char-ring.png" alt="" class="kanji-detail-ring" onerror="this.style.display=\'none\'">';
  html += '<div class="kanji-detail-char' + dMark.textClass + '" id="kanjiDetailChar">' + item.kanji + "</div>";
  html += "</div>";
  html += '<p class="kanji-detail-reading">' + mainReading + "</p>";
  html += '<p class="kanji-detail-romaji">' + mainRomaji + "</p>";
  html += '<span class="kanji-detail-arti-pill">' + capitalize(item.arti) + "</span>";
  html += dMark.badge;
  html += "</div>";

  // Ketiga blok ditampilkan sekaligus, berurutan (tidak lagi
  // memakai sistem tab yang harus diklik satu-satu).
  html += '<div class="kanji-detail-sections">';
  html += renderKanjiArtiSection(item);
  html += renderKanjiBacaanSection(item);
  html += renderKanjiContohSection(item);
  html += "</div>";

  return html;
}

/** Kartu "Arti". */
function renderKanjiArtiSection(item) {
  var html = "";
  html += '<div class="kanji-info-card">';
  html += '<p class="kanji-info-label"><span class="kanji-info-icon">&#128172;</span> Arti</p>';
  html += '<p class="kanji-info-value">' + capitalize(item.arti) + "</p>";
  html += "</div>";
  return html;
}

/** Kartu "Bacaan" (On'yomi + Kun'yomi). */
function renderKanjiBacaanSection(item) {
  var html = "";
  html += '<div class="kanji-info-card">';
  html += '<p class="kanji-info-label"><span class="kanji-info-icon">&#128213;</span> Bacaan</p>';
  html += '<div class="kanji-reading-row">';
  html += '<div class="kanji-reading-box">';
  html += '<p class="kanji-reading-boxlabel">On&#39;yomi</p>';
  html += '<p class="kanji-reading-boxvalue">' + (item.onyomi || "&mdash;") + "</p>";
  html += "</div>";
  html += '<div class="kanji-reading-box">';
  html += '<p class="kanji-reading-boxlabel">Kun&#39;yomi</p>';
  html += '<p class="kanji-reading-boxvalue">' + (item.kunyomi || "&mdash;") + "</p>";
  html += "</div>";
  html += "</div>";
  html += "</div>";
  return html;
}

/** Kartu "Contoh Kosakata". */
function renderKanjiContohSection(item) {
  var examples = getKanjiExamples(item);
  var html = "";
  html += '<div class="kanji-info-card">';
  html += '<p class="kanji-info-label"><span class="kanji-info-icon">&#9998;</span> Contoh Kosakata</p>';
  for (var e = 0; e < examples.length; e++) {
    var ex = examples[e];
    var exRomaji = kanaToRomaji(ex.baca);
    html += '<div class="kanji-example-row">';
    html += '<span class="kanji-example-kanji">' + ex.kata + "</span>";
    html += '<div class="kanji-example-text">';
    html += '<p class="kanji-example-reading">' + ex.baca + " / " + exRomaji + "</p>";
    html += '<p class="kanji-example-arti">' + ex.arti + "</p>";
    html += "</div>";
    html += '<span class="kanji-example-arrow">&#8250;</span>';
    html += "</div>";
    if (e < examples.length - 1) html += '<div class="kanji-example-divider"></div>';
  }
  html += "</div>";
  return html;
}

/**
 * Membuka halaman detail satu kanji, dan mendaftarkan ke
 * history supaya tombol back HP kembali ke daftar kategori.
 * @param {number} kanjiNo
 * @param {string} [kategori] - dipakai untuk kembali ke kategori yang benar
 */
function openKanjiDetailWithHistory(kanjiNo, kategori) {
  var item = findKanjiByNo(kanjiNo);
  if (!item) return;

  var effectiveKategori = kategori || item.kategori;

  detailExtra.innerHTML = renderKanjiDetail(kanjiNo);
  animateKanjiCharIn();
  initKanjiDetailBack(effectiveKategori);

  history.pushState(
    { menu: "kanji", kategori: effectiveKategori, kanjiNo: kanjiNo },
    "",
    "#kanji-" + kanjiNo
  );
}

/** Animasi kanji besar: scale 0.95 -> 1.0 saat halaman detail muncul. */
function animateKanjiCharIn() {
  var el = document.getElementById("kanjiDetailChar");
  if (el) {
    el.classList.remove("kanji-char-pop");
    void el.offsetWidth;
    el.classList.add("kanji-char-pop");
  }
}

function initKanjiDetailBack(kategori) {
  var btn = document.getElementById("kanjiDetailBack");
  if (btn) {
    btn.addEventListener("click", function () {
      history.back();
    });
  }
}

function findKanjiByNo(kanjiNo) {
  for (var i = 0; i < KANJI_DATA.length; i++) {
    if (KANJI_DATA[i].no === kanjiNo) return KANJI_DATA[i];
  }
  return null;
}

// =====================================================
// Navigasi mundur (dipakai popstate di app.js)
// =====================================================

/** Kembali ke menu utama Kanji (dari daftar kategori). */
function backToKanjiMenu() {
  loadKanjiMenu();
}

/** Kembali ke daftar kanji kategori tertentu (dari detail kanji). */
function backToKanjiCategoryList(kategori) {
  detailExtra.innerHTML = renderKanjiCategoryList(kategori);
  initKanjiCatBack();
  initKanjiListClicks(kategori);
  initKanjiCatSearch(kategori);
}

// =====================================================
// FITUR PENCARIAN KANJI (global, dari menu utama)
// Mendukung 4 cara pencarian sekaligus:
//   1. Karakter kanji langsung      -> 人
//   2. Romaji dari kunyomi/onyomi    -> hito
//   3. Bacaan kana (hiragana/kana)   -> ひと
//   4. Arti bahasa Indonesia         -> orang
// =====================================================

function kanjiMatchesQuery(item, query) {
  if (!query) return false;

  if (item.kanji.indexOf(query) !== -1) return true;
  if (item.arti.toLowerCase().indexOf(query) !== -1) return true;

  var kunyomi = item.kunyomi || "";
  var onyomi = item.onyomi || "";
  if (kunyomi.indexOf(query) !== -1) return true;
  if (onyomi.indexOf(query) !== -1) return true;

  var kunyomiParts = kunyomi.split("・");
  var onyomiParts = onyomi.split("・");
  var allParts = kunyomiParts.concat(onyomiParts);

  for (var i = 0; i < allParts.length; i++) {
    var romaji = kanaToRomaji(allParts[i]).toLowerCase();
    if (romaji.indexOf(query) !== -1) return true;
  }

  return false;
}

function searchKanji(query) {
  var q = query.trim().toLowerCase();
  if (!q) return [];

  var results = [];
  for (var i = 0; i < KANJI_DATA.length; i++) {
    if (kanjiMatchesQuery(KANJI_DATA[i], q)) {
      results.push(KANJI_DATA[i]);
    }
  }
  return results;
}

/** Membuat HTML kartu hasil pencarian global (mirip kartu list kategori). */
function renderKanjiSearchCard(item) {
  var reading = firstReading(item);
  var romaji = kanaToRomaji(reading);
  var sMark = typeof ieMarkerInfo === "function" ? ieMarkerInfo(item.source) : { textClass: item.source === "user" ? " tambah-data-text-user" : "", badge: item.source === "user" ? tdBadgeTambahanHTML() : "" };

  var html = "";
  html += '<div class="kanji-list-card" data-kanji-no="' + item.no + '">';
  html += '<div class="kanji-list-char' + sMark.textClass + '">' + item.kanji + "</div>";
  html += '<div class="kanji-list-text">';
  html += '<p class="kanji-list-reading">' + reading + " / " + romaji + "</p>";
  html += '<p class="kanji-list-arti">' + capitalize(item.arti) + sMark.badge + "</p>";
  html += "</div>";
  html += '<span class="kanji-list-catlabel">' + escapeHtml(item.kategori) + "</span>";
  html += '<span class="kanji-list-arrow">&#8250;</span>';
  html += "</div>";
  return html;
}

/** Menjalankan pencarian global dan menampilkan hasilnya dengan slide pendek. */
function runKanjiSearch(query) {
  var resultsWrap = document.getElementById("kanjiSearchResults");
  var categoryList = document.getElementById("kanjiCategoryList");
  var clearBtn = document.getElementById("kanjiSearchClear");

  var q = query.trim();

  if (!q) {
    resultsWrap.innerHTML = "";
    categoryList.classList.remove("hidden");
    if (clearBtn) clearBtn.classList.add("hidden");
    return;
  }

  if (clearBtn) clearBtn.classList.remove("hidden");
  categoryList.classList.add("hidden");

  var results = searchKanji(q);

  var html = "";
  html += '<p class="kanji-search-heading">&#128270; Hasil untuk "' + escapeHtml(q) + '"</p>';
  html += '<p class="kanji-search-count">' + results.length + " hasil ditemukan</p>";

  if (results.length === 0) {
    html += '<div class="kanji-search-empty">Tidak ada kanji yang cocok. Coba kata kunci lain.</div>';
  } else {
    for (var i = 0; i < results.length; i++) {
      html += renderKanjiSearchCard(results[i]);
    }
  }

  resultsWrap.innerHTML = html;
  resultsWrap.classList.remove("slide-in-short");
  void resultsWrap.offsetWidth;
  resultsWrap.classList.add("slide-in-short");

  var cards = resultsWrap.querySelectorAll(".kanji-list-card");
  for (var c = 0; c < cards.length; c++) {
    cards[c].addEventListener("click", function () {
      var no = parseInt(this.getAttribute("data-kanji-no"), 10);
      openKanjiDetailWithHistory(no);
    });
  }
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

/** Memasang event listener untuk kotak pencarian global di menu utama Kanji. */
function initKanjiSearch() {
  var input = document.getElementById("kanjiSearchInput");
  var clearBtn = document.getElementById("kanjiSearchClear");
  if (!input) return;

  input.addEventListener("input", function () {
    runKanjiSearch(input.value);
  });

  if (clearBtn) {
    clearBtn.addEventListener("click", function () {
      input.value = "";
      runKanjiSearch("");
      input.focus();
    });
  }
}

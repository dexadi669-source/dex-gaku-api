// =====================================================
// kana-render.js
// Logika untuk menampilkan halaman Hiragana & Katakana:
// - header hero custom (ikon bulat besar, judul, ilustrasi)
//   menggantikan header standar, mirip pola menu Quiz.
// - kartu "Total Huruf" dengan badge Level N5
// - baris tab pill: Seion / Dakuon / Handakuon / Yoon
// - tabel huruf bergaya (header kolom A-I-U-E-O + header
//   baris A/KA/SA/... khusus untuk Seion; grid biasa untuk
//   Dakuon/Handakuon/Yoon karena jumlah kolomnya beda)
//
// File ini MEMBACA data dari kana-data.js (KANA_DATA).
// Kalau cuma mau ubah/tambah huruf, edit kana-data.js saja,
// tidak perlu sentuh file ini.
// =====================================================

// Label baris untuk tabel Seion (5 kolom x 10 baris + ん).
// Diambil dari konsonan awal romaji tiap baris.
var KANA_SEION_ROW_LABELS = ["A", "KA", "SA", "TA", "NA", "HA", "MA", "YA", "RA", "WA"];
var KANA_COLUMN_LABELS = ["A", "I", "U", "E", "O"];

/**
 * Membuat HTML lengkap untuk halaman Hiragana atau Katakana,
 * termasuk header hero-nya sendiri (menggantikan header standar).
 * @param {"hiragana"|"katakana"} kanaType
 * @returns {string} HTML siap disisipkan ke #detailExtra
 */
function renderKanaPage(kanaType) {
  var groupKeys = ["seion", "dakuon", "handakuon", "yoon"];
  var totalHuruf = 0;
  for (var g = 0; g < groupKeys.length; g++) {
    totalHuruf += KANA_DATA[kanaType][groupKeys[g]].filter(function (it) { return it.char; }).length;
  }

  var isHiragana = kanaType === "hiragana";
  var glyphSample = isHiragana ? "あ" : "ア";
  var readingSample = isHiragana ? "ひらがな" : "カタカナ";
  var titleLabel = isHiragana ? "Hiragana" : "Katakana";
  var desc = isHiragana
    ? "Pelajari huruf Hiragana dari yang dasar hingga lengkap. Mulai dari Seion, Dakuon, Handakuon, dan Yoon."
    : "Pelajari huruf Katakana dari yang dasar hingga lengkap. Mulai dari Seion, Dakuon, Handakuon, dan Yoon.";
  // Gambar latar hero berbeda untuk tiap jenis huruf, supaya Hiragana dan
  // Katakana tidak terlihat seperti halaman kembar.
  var heroBgSrc = isHiragana
    ? "assets/kana/kana-hero-bg.svg"
    : "assets/kana/kana-hero-bg-katakana.svg";

  var html = "";

  html += '<div class="kana-context-' + kanaType + '">';

  // ---------- Header hero (menggantikan header standar) ----------
  html += '<div class="kana-hero">';
  html += '<img class="kana-hero-bg" src="' + heroBgSrc + '" alt="" aria-hidden="true">';
  html += '<button class="kana-hero-back" id="kanaHeroBack" aria-label="Kembali">';
  html += '<svg viewBox="0 0 24 24" width="20" height="20"><path d="M15 18l-6-6 6-6" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" fill="none"/></svg>';
  html += "</button>";

  html += '<div class="kana-hero-top">';
  html += '<div class="kana-hero-badge">' + glyphSample + "</div>";
  html += '<div class="kana-hero-titlewrap">';
  html += '<h1 class="kana-hero-title">' + titleLabel + "</h1>";
  html += '<p class="kana-hero-reading">' + readingSample + "</p>";
  html += "</div>";
  html += "</div>";

  html += '<p class="kana-hero-desc">' + desc + "</p>";
  html += "</div>"; // .kana-hero

  // ---------- Kartu "Total Huruf" ----------
  html += '<div class="kana-total-card">';
  html += '<div class="kana-total-icon">&#128214;</div>';
  html += '<div class="kana-total-text">';
  html += '<p class="kana-total-label">Total Huruf</p>';
  html += '<p class="kana-total-value">' + totalHuruf + " karakter</p>";
  html += "</div>";
  html += '<span class="kana-total-badge">&#127793; Level N5</span>';
  html += '<span class="kana-total-arrow">&#8250;</span>';
  html += "</div>";

  // ---------- Baris tab pill ----------
  html += '<div class="kana-tabs" id="kanaTabs-' + kanaType + '">';
  for (var i = 0; i < groupKeys.length; i++) {
    var key = groupKeys[i];
    var activeClass = i === 0 ? " active" : "";
    html +=
      '<button class="kana-tab' + activeClass + '" data-group="' + key + '">' +
      KANA_GROUP_LABELS[key].tab +
      "</button>";
  }
  html += "</div>";

  // Kontainer panel (isi awal = seion / tab pertama)
  html += '<div class="kana-panel" id="kanaPanel-' + kanaType + '"></div>';

  html += "</div>"; // tutup .kana-context-...

  return html;
}

/**
 * Mengisi panel huruf sesuai grup yang dipilih. Untuk Seion,
 * dirender sebagai tabel dengan header kolom + header baris.
 * Untuk grup lain (Dakuon/Handakuon/Yoon), dirender sebagai
 * grid biasa (karena jumlah kolom tidak konsisten 5).
 * @param {"hiragana"|"katakana"} kanaType
 * @param {"seion"|"dakuon"|"handakuon"|"yoon"} groupKey
 */
function renderKanaGroup(kanaType, groupKey) {
  var panel = document.getElementById("kanaPanel-" + kanaType);
  if (!panel) return;

  var list = KANA_DATA[kanaType][groupKey];
  var label = KANA_GROUP_LABELS[groupKey];

  var html = "";
  html += '<div class="kana-group-card">';
  html += '<div class="kana-group-icon">&#127800;</div>';
  html += '<div class="kana-group-headtext">';
  html += '<p class="kana-group-title">' + label.title + "</p>";
  html += '<p class="kana-group-desc">' + label.desc + "</p>";
  html += "</div>";
  html += '<span class="kana-count-pill">' + list.filter(function (it) { return it.char; }).length + " huruf</span>";
  html += "</div>";

  if (groupKey === "seion") {
    html += renderKanaSeionTable(list);
  } else {
    html += renderKanaSimpleGrid(list);
  }

  panel.innerHTML = html;
}

/**
 * Render tabel Seion dengan header kolom (A/I/U/E/O) dan
 * header baris (A/KA/SA/TA/NA/HA/MA/YA/RA/WA). Baris ん
 * ditambahkan tepat di bawah baris WA, hanya mengisi
 * kolom pertama (sejajar dengan label baris), supaya
 * seluruh tabel tetap muat di layar tanpa geser samping.
 * @param {Array} list - KANA_DATA[type].seion (51 entri: 50 grid + ん)
 * @returns {string}
 */
function renderKanaSeionTable(list) {
  var html = '<div class="kana-table">';

  // Header kolom: sel kosong pojok kiri-atas + A I U E O
  html += '<div class="kana-table-row kana-table-headrow">';
  html += '<div class="kana-table-cell kana-row-label kana-row-label-empty"></div>';
  for (var c = 0; c < KANA_COLUMN_LABELS.length; c++) {
    html += '<div class="kana-table-cell kana-col-head">' + KANA_COLUMN_LABELS[c] + "</div>";
  }
  html += "</div>";

  // 10 baris (A, KA, SA, ... WA), masing-masing 5 kolom
  for (var r = 0; r < KANA_SEION_ROW_LABELS.length; r++) {
    html += '<div class="kana-table-row">';
    html += '<div class="kana-table-cell kana-row-label">' + KANA_SEION_ROW_LABELS[r] + "</div>";

    for (var col = 0; col < 5; col++) {
      var idx = r * 5 + col;
      var item = list[idx];
      html += renderKanaTableCell(item);
    }
    html += "</div>";
  }

  // Baris ん: format sama seperti baris lain (label "N" di kolom
  // label, huruf ん di kolom pertama data), sisa kolom kosong.
  var nItem = list[list.length - 1];
  if (nItem && nItem.char) {
    html += '<div class="kana-table-row">';
    html += '<div class="kana-table-cell kana-row-label">N</div>';
    html += renderKanaTableCell(nItem, true);
    for (var blank = 0; blank < 4; blank++) {
      html += '<div class="kana-table-cell kana-cell-blank"></div>';
    }
    html += "</div>";
  }

  html += "</div>"; // .kana-table

  return html;
}

/**
 * Render satu sel tabel Seion: huruf+romaji, atau strip "—" kalau kosong.
 * @param {Object} item
 * @param {boolean} [isSpecial] - true untuk sel ん (dapat kelas tambahan)
 */
function renderKanaTableCell(item, isSpecial) {
  if (!item || !item.char) {
    return '<div class="kana-table-cell kana-cell-empty">&mdash;</div>';
  }
  var extraClass = isSpecial ? " kana-cell-special" : "";
  return (
    '<div class="kana-table-cell kana-cell-filled' + extraClass + '">' +
    '<div class="kana-char">' + item.char + "</div>" +
    '<div class="kana-romaji">' + item.romaji + "</div>" +
    "</div>"
  );
}

/**
 * Render grid biasa (dipakai untuk Dakuon/Handakuon/Yoon,
 * yang jumlah kolomnya tidak konsisten 5).
 * @param {Array} list
 * @returns {string}
 */
function renderKanaSimpleGrid(list) {
  var html = '<div class="kana-grid">';
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    if (!item.char) {
      html += '<div class="kana-cell empty"></div>';
    } else {
      var charClass = item.char.length > 1 ? "kana-char kana-char-double" : "kana-char";
      html +=
        '<div class="kana-cell">' +
        '<div class="' + charClass + '">' + item.char + "</div>" +
        '<div class="kana-romaji">' + item.romaji + "</div>" +
        "</div>";
    }
  }
  html += "</div>";
  return html;
}

/**
 * Memasang event klik pada tab Seion/Dakuon/Handakuon/Yoon.
 * Dipanggil setiap kali halaman Hiragana/Katakana dibuka.
 * @param {"hiragana"|"katakana"} kanaType
 */
function initKanaTabs(kanaType) {
  var tabsWrap = document.getElementById("kanaTabs-" + kanaType);
  if (!tabsWrap) return;

  var tabs = tabsWrap.querySelectorAll(".kana-tab");
  for (var i = 0; i < tabs.length; i++) {
    tabs[i].addEventListener("click", function () {
      var group = this.getAttribute("data-group");

      var siblings = tabsWrap.querySelectorAll(".kana-tab");
      for (var j = 0; j < siblings.length; j++) {
        siblings[j].classList.remove("active");
      }
      this.classList.add("active");

      // Pastikan tab yang baru dipilih selalu terlihat penuh (tidak
      // separuh terpotong), termasuk saat baris tab bisa digeser.
      if (this.scrollIntoView) {
        this.scrollIntoView({ behavior: "smooth", inline: "nearest", block: "nearest" });
      }

      renderKanaGroup(kanaType, group);
    });
  }

  // Tampilkan grup pertama (seion) secara default
  renderKanaGroup(kanaType, "seion");
}

/**
 * Fungsi utama: dipanggil dari app.js saat menu Hiragana/Katakana
 * dibuka. Menyembunyikan header standar dan menampilkan
 * header hero khusus kana di dalam #detailExtra.
 * @param {"hiragana"|"katakana"} kanaType
 */
function loadKanaMenu(kanaType) {
  var standardIntro = document.getElementById("detailStandardIntro");
  var standardHeader = document.getElementById("detailHeaderStandard");
  if (standardIntro) standardIntro.classList.add("hidden");
  if (standardHeader) standardHeader.classList.add("hidden");

  detailExtra.innerHTML = renderKanaPage(kanaType);
  initKanaTabs(kanaType);
  initKanaBackButtonFallback();
}

/**
 * Header hero kana ini tidak punya tombol back sendiri
 * (beda dari Quiz) -- tombol "Kembali" standar disembunyikan
 * bersama header standar. Sebagai gantinya, kita tampilkan
 * tombol back kecil mengambang di pojok kiri-atas hero.
 */
function initKanaBackButtonFallback() {
  var btn = document.getElementById("kanaHeroBack");
  if (btn) {
    btn.addEventListener("click", function () {
      history.back();
    });
  }
}

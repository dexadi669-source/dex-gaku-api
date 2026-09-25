// =====================================================
// DeX Gaku — riwayat-render.js (HANYA HAPUS RIWAYAT)
// =====================================================

var RIWAYAT_STORAGE_KEY = "dexgaku_riwayat_quiz";
var RIWAYAT_MAX_ITEMS = 200; 

var riwayatState = {
  filter: "semua", 
  menuActionOpenId: null 
};

function riwayatBacaSemua() {
  try {
    var raw = localStorage.getItem(RIWAYAT_STORAGE_KEY);
    if (!raw) return [];
    var arr = JSON.parse(raw);
    if (!Array.isArray(arr)) return [];
    return arr;
  } catch (e) {
    return [];
  }
}

function riwayatSimpanSemua(list) {
  try {
    localStorage.setItem(RIWAYAT_STORAGE_KEY, JSON.stringify(list));
    return true;
  } catch (e) {
    return false;
  }
}

function simpanRiwayatQuiz(entry) {
  if (!entry || !entry.mode) return;
  var list = riwayatBacaSemua();
  var item = {
    id: entry.id || ("riw_" + Date.now() + "_" + Math.floor(Math.random() * 100000)),
    mode: entry.mode,
    type: entry.type || "",
    title: entry.title || "",
    subtitle: entry.subtitle || "",
    score: typeof entry.score === "number" ? entry.score : 0,
    maxScore: typeof entry.maxScore === "number" ? entry.maxScore : null,
    correct: typeof entry.correct === "number" ? entry.correct : 0,
    wrong: typeof entry.wrong === "number" ? entry.wrong : 0,
    total: typeof entry.total === "number" ? entry.total : 0,
    time: entry.time || "0:00",
    date: entry.date || riwayatTanggalHariIni(),
    status: entry.status || "",
    snapshot: entry.snapshot || null
  };
  list.unshift(item); 
  if (list.length > RIWAYAT_MAX_ITEMS) list = list.slice(0, RIWAYAT_MAX_ITEMS);
  riwayatSimpanSemua(list);
}

function riwayatTanggalHariIni() {
  var d = new Date();
  return d.getFullYear() + "-" + riwayatPad2(d.getMonth() + 1) + "-" + riwayatPad2(d.getDate());
}

function riwayatPad2(n) { return n < 10 ? "0" + n : String(n); }

function riwayatFormatTanggal(iso) {
  var bulanList = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
  var parts = String(iso).split("-");
  if (parts.length !== 3) return iso;
  var y = parseInt(parts[0], 10), m = parseInt(parts[1], 10), d = parseInt(parts[2], 10);
  if (!y || !m || !d) return iso;
  return d + " " + bulanList[m - 1] + " " + y;
}

function loadRiwayatMenu() {
  hideStandardHeader();
  riwayatState.filter = "semua";

  var container = document.getElementById("detailExtra");
  if (!container) return;

  container.innerHTML = riwayatBuildHTML();
  riwayatAttachEvents();
}

function riwayatBuildHTML() {
  var html = "";
  html += '<div class="riw-wrap r-wrap-v2">';
  
  html += '<div class="riw-hero-header">';
  html += '  <button class="riw-back-btn" id="riwBackBtn">';
  html += '    <span class="riw-back-ic">&lt;</span> Kembali';
  html += '  </button>';
  html += '  <h2 class="riw-title">Riwayat N5</h2>';
  html += '  <p class="riw-subtitle">Lacak progress belajarmu di DeX Gaku</p>';
  html += '</div>';

  html += '<div class="riw-body-content">'; 
  
  html += '<div class="riw-filter-row">';
  html += '<button class="riw-filter-pill active" data-filter="semua">Semua</button>';
  html += '<button class="riw-filter-pill" data-filter="quiz">Quiz</button>';
  html += '<button class="riw-filter-pill" data-filter="simulasi">Simulasi</button>';
  html += '</div>';

  html += '<div class="riw-list" id="riwList">';
  html += riwayatBuildListHTML();
  html += '</div>';

  html += '</div>'; 
  html += '</div>'; 
  return html;
}

function riwayatBuildListHTML() {
  var all = riwayatBacaSemua();
  var filtered = all.filter(function (item) {
    if (riwayatState.filter === "semua") return true;
    return item.mode === riwayatState.filter;
  });

  filtered.sort(function (a, b) {
    var da = String(a.date), db = String(b.date);
    if (da !== db) return da < db ? 1 : -1;
    return String(a.id) < String(b.id) ? 1 : -1;
  });

  if (filtered.length === 0) {
    return riwayatBuildEmptyStateHTML();
  }

  var html = "";
  for (var i = 0; i < filtered.length; i++) {
    html += riwayatBuildCardHTML(filtered[i]);
  }
  return html;
}

function riwayatBuildEmptyStateHTML() {
  var html = "";
  html += '<div class="riw-empty">';
  html += '<div class="riw-empty-emoji">📂</div>';
  html += '<p class="riw-empty-title">Masih Kosong, Nih...</p>';
  html += '<p class="riw-empty-sub">Ayo kerjakan quiz atau simulasi dulu<br>untuk melihat histori nilaimu di sini.</p>';
  html += '</div>';
  return html;
}

function riwayatIconInfo(item) {
  if (item.mode === "simulasi") {
    return { emoji: "🎓", cls: "riw-ic-simulasi" };
  }
  
  var map = {
    kanji: { emoji: "漢", cls: "riw-ic-kanji" },
    kotoba: { emoji: "📖", cls: "riw-ic-kotoba" },
    bunpo: { emoji: "📜", cls: "riw-ic-bunpo" },
    hiragana: { emoji: "あ", cls: "riw-ic-kana" },
    katakana: { emoji: "ア", cls: "riw-ic-kana" },
    campuran: { emoji: "⚡", cls: "riw-ic-campuran" }
  };
  
  return map[item.type] || { emoji: "📝", cls: "riw-ic-default" };
}

function riwayatBuildCardHTML(item) {
  var ic = riwayatIconInfo(item);
  var isSimulasi = item.mode === "simulasi";
  
  var scoreDisplay = isSimulasi ? (item.score + '<span class="riw-slash">/</span>' + item.maxScore) : item.score;
  var scoreUnit = isSimulasi ? '<span class="riw-unit">Poin</span>' : '<span class="riw-unit">%</span>';

  var statusLabel = item.status || (isSimulasi ? "" : "SELESAI");
  var statusCls = "riw-badge-netral";
  if (/lulus/i.test(statusLabel) && !/tidak/i.test(statusLabel)) statusCls = "riw-badge-hijau";
  else if (/tidak\s*lulus/i.test(statusLabel)) statusCls = "riw-badge-merah";

  var html = "";
  html += '<div class="riw-card" data-id="' + item.id + '">';
  html += '<div class="riw-card-main">';
  
  html += '<div class="riw-card-icon-wrap ' + ic.cls + '">';
  html += '<span class="riw-icon-emoji">' + ic.emoji + '</span>';
  html += '</div>';

  html += '<div class="riw-card-bodytext">';
  if (statusLabel) {
    html += '<span class="riw-badge ' + statusCls + '">' + riwayatEscape(statusLabel) + '</span>';
  }
  html += '<p class="riw-card-title">' + riwayatEscape(item.title) + '</p>';
  if (item.subtitle) html += '<p class="riw-card-subtitle">' + riwayatEscape(item.subtitle) + '</p>';
  
  html += '<div class="riw-card-metarow">';
  html += '<span class="riw-meta-item">🕒 ' + riwayatEscape(item.time) + '</span>';
  html += '<span class="riw-meta-item">📅 ' + riwayatFormatTanggal(item.date) + '</span>';
  html += '</div>';
  html += '</div>'; 

  html += '<button class="riw-card-menu-btn" data-menu-id="' + item.id + '" aria-label="Menu">&#8942;</button>';
  html += '</div>';

  html += '<div class="riw-card-result">';
  html += '<div class="riw-score-zone">';
  html += '<span class="riw-card-score">' + scoreDisplay + '</span>' + scoreUnit;
  html += '</div>';
  html += '<div class="riw-stats-zone">';
  html += '<div class="riw-stat-pill good"><span class="riw-st-ic">✅</span> ' + item.correct + ' <span class="riw-st-lbl">Benar</span></div>';
  html += '<div class="riw-stat-pill bad"><span class="riw-st-ic">❌</span> ' + item.wrong + ' <span class="riw-st-lbl">Salah</span></div>';
  html += '</div>';
  html += '</div>'; 
  html += '</div>'; 
  return html;
}

function riwayatEscape(text) {
  if(!text) return "";
  return String(text).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function riwayatAttachEvents() {
  var container = document.getElementById("detailExtra");
  if (!container) return;

  var backBtnEl = document.getElementById("riwBackBtn");
  if (backBtnEl) {
    backBtnEl.onclick = function () {
      history.back();
    };
  }

  var filterBtns = container.querySelectorAll(".riw-filter-pill");
  for (var i = 0; i < filterBtns.length; i++) {
    filterBtns[i].addEventListener("click", function () {
      var f = this.getAttribute("data-filter");
      if (riwayatState.filter === f) return;
      riwayatState.filter = f;

      var allPills = container.querySelectorAll(".riw-filter-pill");
      for (var p = 0; p < allPills.length; p++) {
        allPills[p].classList.toggle("active", allPills[p] === this);
      }

      var listEl = document.getElementById("riwList");
      if (listEl) {
        listEl.style.opacity = 0;
        listEl.style.transform = "translateY(10px)";
        
        setTimeout(function() {
          listEl.innerHTML = riwayatBuildListHTML();
          listEl.style.opacity = 1;
          listEl.style.transform = "translateY(0)";
          
          requestAnimationFrame(function() {
            riwayatAttachCardMenuEvents();
          });
        }, 200);
      }
    });
  }

  riwayatAttachCardMenuEvents();
}

function riwayatAttachCardMenuEvents() {
  var container = document.getElementById("detailExtra");
  if (!container) return;

  var menuBtns = container.querySelectorAll(".riw-card-menu-btn");
  for (var i = 0; i < menuBtns.length; i++) {
    menuBtns[i].addEventListener("click", function (e) {
      e.stopPropagation(); 
      var id = this.getAttribute("data-menu-id");
      riwayatBukaPopupMenu(id);
    });
  }
}

function riwayatBukaPopupMenu(id) {
  riwayatTutupPopupMenu();

  var all = riwayatBacaSemua();
  var item = null;
  for (var i = 0; i < all.length; i++) {
    if (String(all[i].id) === String(id)) { item = all[i]; break; }
  }
  if (!item) return;

  var overlay = document.createElement("div");
  overlay.id = "riwActionOverlay";
  overlay.className = "riw-action-overlay";
  
  var popHtml = "";
  popHtml += '<div class="riw-action-sheet">';
  popHtml += '<div class="riw-sheet-handle"></div>';
  popHtml += '<div class="riw-sheet-header"><p class="riw-sheet-title">Opsi Riwayat</p></div>';
  // HANYA TOMBOL HAPUS SEKARANG
  popHtml += '<button class="riw-action-item danger" id="riwActHapus"><span class="riw-act-ic">🗑️</span> Hapus dari List</button>';
  popHtml += '<div class="riw-sheet-footer"><button class="riw-action-cancel" id="riwActBatal">Batal</button></div>';
  popHtml += '</div>';

  overlay.innerHTML = popHtml;
  document.body.appendChild(overlay);

  setTimeout(function() { overlay.classList.add("show"); }, 10);

  overlay.addEventListener("click", function (e) {
    if (e.target === overlay) riwayatTutupPopupMenu();
  });
  
  document.getElementById("riwActBatal").onclick = riwayatTutupPopupMenu;
  document.getElementById("riwActHapus").onclick = function () {
    riwayatTutupPopupMenu();
    riwayatBukaKonfirmasiHapus(item);
  };
}

function riwayatTutupPopupMenu() {
  var el = document.getElementById("riwActionOverlay");
  if (el) {
    el.classList.remove("show");
    setTimeout(function() { el.remove(); }, 250);
  }
}

function riwayatBukaKonfirmasiHapus(item) {
  var overlay = document.createElement("div");
  overlay.id = "riwDeleteOverlay";
  overlay.className = "riw-action-overlay riw-overlay-center";
  
  var confHtml = "";
  confHtml += '<div class="riw-confirm-box">';
  confHtml += '<div class="riw-conf-ic-warn">⚠️</div>';
  confHtml += '<h3 class="riw-confirm-title">Hapus Data Ini?</h3>';
  confHtml += '<p class="riw-confirm-desc">Data hasil "<span class="riw-text-bold">' + riwayatEscape(item.title) + '</span>" akan dihapus permanen. Tindakan ini tidak dapat dibatalkan.</p>';
  confHtml += '<div class="riw-confirm-actions">';
  confHtml += '<button class="riw-confirm-batal" id="riwDelBatal">Batal</button>';
  confHtml += '<button class="riw-confirm-hapus" id="riwDelHapus">Ya, Hapus</button>';
  confHtml += '</div></div>';

  overlay.innerHTML = confHtml;
  document.body.appendChild(overlay);

  setTimeout(function() { overlay.classList.add("show"); }, 10);

  overlay.addEventListener("click", function (e) {
    if (e.target === overlay) riwayatTutupKonfirmasi();
  });
  
  var tutupFn = function() {
    overlay.classList.remove("show");
    setTimeout(function() { overlay.remove(); }, 250);
  };

  document.getElementById("riwDelBatal").onclick = tutupFn;
  document.getElementById("riwDelHapus").onclick = function () {
    tutupFn();
    riwayatHapusItem(item.id);
  };
}

function riwayatTutupKonfirmasi() {
  var el = document.getElementById("riwDeleteOverlay");
  if (el) {
    el.classList.remove("show");
    setTimeout(function() { el.remove(); }, 250);
  }
}

function riwayatHapusItem(id) {
  var all = riwayatBacaSemua();
  var next = all.filter(function (it) { return String(it.id) !== String(id); });
  riwayatSimpanSemua(next);

  var listEl = document.getElementById("riwList");
  if (listEl) {
    listEl.innerHTML = riwayatBuildListHTML();
    riwayatAttachCardMenuEvents();
    riwayatTampilkanToast("Riwayat berhasil dihapus");
  }
}

function riwayatTampilkanToast(msg) {
  var existing = document.getElementById("riwToast");
  if (existing) existing.remove();

  var toast = document.createElement("div");
  toast.id = "riwToast";
  toast.className = "riw-toast v2-toast";
  toast.innerHTML = '<span class="rt-ic">ℹ️</span> ' + msg;
  document.body.appendChild(toast);

  setTimeout(function () { toast.classList.add("show"); }, 10);

  setTimeout(function () {
    toast.classList.remove("show");
    setTimeout(function () { toast.remove(); }, 300);
  }, 2500);
}

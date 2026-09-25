// =====================================================
// kosakata-render.js (Perbaikan Tombol Back & Susunan Card)
// =====================================================

var KOTOBA_STYLE_OVERRIDE = '<style>#detailHeaderStandard, #detailStandardIntro { display: none !important; } .detail-body { padding-top: 0 !important; max-width: 100% !important; margin: 0 !important; }</style>';


function loadKosakataMenu() {
  detailExtra.innerHTML = KOTOBA_STYLE_OVERRIDE + renderKosakataMenu();
  initKosakataMenuEvents();
}

function renderKosakataMenu() {
  var totalKategori = KOSAKATA_CATEGORIES.length;
  var totalKata = 0;
  for (var i = 0; i < totalKategori; i++) {
    totalKata += KOSAKATA_CATEGORIES[i].kata.length;
  }

  var html = '<div class="koto-wrapper">';
  
  // Hero Header dengan Tombol Back di Pojok Kiri Atas
  html += '<div class="koto-hero">';
  html += '<button class="koto-back-top" onclick="history.back()"><svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M15 18l-6-6 6-6"/></svg> Kembali</button>';
  
  html += '<h1 class="koto-title" style="margin-top:8px;">Kosakata</h1>';
  html += '<p class="koto-subtitle">Kumpulan kosakata bahasa Jepang</p>';
  
  html += '<div class="koto-summary">';
  html += '<div class="koto-sum-box"><div class="koto-sum-icon" style="background:#fff0e6; color:#ff8a4c;">📖</div><div class="koto-sum-text"><span class="koto-sum-val">'+totalKategori+'</span><span class="koto-sum-lbl">Kategori</span></div></div>';
  html += '<div class="koto-sum-divider"></div>';
  html += '<div class="koto-sum-box"><div class="koto-sum-icon" style="background:#e6f0ff; color:#4c8aff;">📄</div><div class="koto-sum-text"><span class="koto-sum-val">'+totalKata+'</span><span class="koto-sum-lbl">Total Kata</span></div></div>';
  html += '</div>';
  html += '</div>'; 

  html += '<div class="koto-content">';
  // Search Bar
  html += '<div class="koto-search">';
  html += '<svg viewBox="0 0 24 24" width="20" height="20" stroke="#a0aab5" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>';
  html += '<input type="text" id="kotoSearchInput" placeholder="Cari kata, romaji, atau arti..." autocomplete="off">';
  html += '</div>';

  html += '<div id="kotoSearchResults"></div>';
  
  // Category Grid
  html += '<div id="kotoCatContainer">';
  html += '<div class="koto-cat-grid">';
  
  var pastelColors = ['#ffe4e8', '#ffebd9', '#e6f0ff', '#f0e6ff', '#e4f7e8', '#e0f5f2'];
  var textColors = ['#e6395b', '#d6892b', '#2c6fdb', '#7c3aed', '#3c9b4a', '#14a89a'];

  for (var i = 0; i < totalKategori; i++) {
    var cat = KOSAKATA_CATEGORIES[i];
    var num = (i + 1 < 10) ? "0" + (i + 1) : (i + 1);
    var bgCol = pastelColors[i % pastelColors.length];
    var txtCol = textColors[i % textColors.length];

    html += '<div class="koto-cat-card" data-cat-key="' + cat.key + '">';
    html += '<div class="koto-cat-icon-wrap" style="background:' + bgCol + '; color:'+txtCol+';">' + cat.icon + '</div>';
    html += '<div class="koto-cat-info">';
    html += '<div class="koto-cat-top"><span class="koto-cat-num">' + num + '</span><span class="koto-cat-arrow">›</span></div>';
    html += '<h4 class="koto-cat-name">' + cat.nama + '</h4>';
    html += '<p class="koto-cat-count">' + cat.kata.length + ' kata</p>';
    html += '</div></div>';
  }
  html += '</div></div>'; 
  html += '</div></div>'; 
  return html;
}

function initKosakataMenuEvents() {
  var cards = document.querySelectorAll(".koto-cat-card");
  for (var i = 0; i < cards.length; i++) {
    cards[i].addEventListener("click", function() {
      openKosakataCategoryWithHistory(this.getAttribute("data-cat-key"));
    });
  }

  var input = document.getElementById("kotoSearchInput");
  if(input) {
    input.addEventListener("input", function() { runKosakataGlobalSearch(this.value); });
  }
}

function openKosakataCategoryWithHistory(catKey) {
  detailExtra.innerHTML = KOTOBA_STYLE_OVERRIDE + renderKosakataCategoryDetail(catKey);
  initKosakataWordEvents(catKey);
  history.pushState({ menu: "kotoba", catKey: catKey }, "", "#kotoba-" + catKey);
  window.scrollTo(0, 0);
}

function renderKosakataCategoryDetail(catKey) {
  var cat = KOSAKATA_CATEGORY_MAP[catKey];
  var html = '<div class="koto-wrapper">';
  
  html += '<div class="koto-hero koto-hero-sm">';
  html += '<button class="koto-back-top" onclick="history.back()"><svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M15 18l-6-6 6-6"/></svg> Kembali</button>';
  
  html += '<div class="koto-cat-hero-content" style="margin-top:8px;">';
  html += '<div class="koto-cat-hero-icon">' + cat.icon + '</div>';
  html += '<div><h2 class="koto-cat-hero-title">' + cat.nama + '</h2>';
  html += '<p class="koto-cat-hero-sub">' + cat.kata.length + ' kosakata</p></div>';
  html += '</div></div>';

  html += '<div class="koto-content">';
  html += '<div class="koto-search">';
  html += '<svg viewBox="0 0 24 24" width="20" height="20" stroke="#a0aab5" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>';
  html += '<input type="text" id="kotoLocalSearch" placeholder="Cari dalam ' + cat.nama + '...">';
  html += '</div>';

  html += '<div class="koto-word-list" id="kotoLocalList">';
  for(var i=0; i<cat.kata.length; i++) {
      var w = cat.kata[i];
      var wMark = typeof ieMarkerInfo === "function" ? ieMarkerInfo(w.source) : { isMarked: w.source === "user", attr: w.source === "user" ? ' data-td-source="user"' : "", textClass: w.source === "user" ? " tambah-data-text-user" : "", badge: w.source === "user" ? tdBadgeTambahanHTML() : "" };
      html += '<div class="koto-word-card" data-idx="'+i+'" data-cat="'+catKey+'"' + (wMark.isMarked ? wMark.attr + ' data-td-id="' + w.id + '"' : '') + '>';
      html += '<div class="koto-word-icon">' + cat.icon + '</div>';
      
      // Susunan baru: Huruf Jepang (atas) | Romaji (samping/bawah) & Arti (bawah)
      html += '<div class="koto-word-info">';
      html += '<div class="koto-word-line-top">';
      html += '<span class="koto-word-jp-new' + wMark.textClass + '">' + w.kata + '</span>';
      html += '<span class="koto-word-rm-new">' + w.romaji + '</span>';
      html += "</div>";
      html += '<div class="koto-word-id-new">' + capitalizeFirst(w.arti) + wMark.badge + '</div>';
      html += '</div>';

      html += '<div class="koto-word-arrow">›</div>';
      html += '</div>';
  }
  html += '</div>';
  html += '</div></div>';

  return html;
}

function initKosakataWordEvents(catKey) {
  var cards = document.querySelectorAll(".koto-word-card");
  for (var i = 0; i < cards.length; i++) {
    var card = cards[i];
    card.addEventListener("click", function() {
      openWordDetail(this.getAttribute("data-cat"), parseInt(this.getAttribute("data-idx")));
    });
    if (typeof tdAttachLongPress === "function") {
      tdAttachLongPress(card, function () {
        var id = this.getAttribute("data-td-id");
        if (typeof userDataHapus === "function") userDataHapus("kotoba", id);
        tdAnimateRemoveCard(this);
      }.bind(card));
    }
  }

  var input = document.getElementById("kotoLocalSearch");
  if(input) {
    input.addEventListener("input", function() {
       var q = this.value.toLowerCase().trim();
       for (var j = 0; j < cards.length; j++) {
         var c = cards[j];
         var text = c.textContent.toLowerCase();
         c.style.display = text.indexOf(q) !== -1 ? "flex" : "none";
       }
    });
  }
}

function openWordDetail(catKey, wordIdx) {
  var cat = KOSAKATA_CATEGORY_MAP[catKey];
  var w = cat.kata[wordIdx];

  var modal = document.createElement("div");
  modal.className = "koto-modal";
  modal.id = "kotoWordModal";

  var html = '';
  html += '<div class="koto-modal-header">';
  html += '<button class="koto-back-top" style="position:relative; top:0; left:0; margin-bottom:10px;" onclick="closeWordDetail()"><svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M15 18l-6-6 6-6"/></svg> Kembali</button>';
  html += '</div>';

  var wMarkDetail = typeof ieMarkerInfo === "function" ? ieMarkerInfo(w.source) : { isMarked: w.source === "user", textClass: w.source === "user" ? " tambah-data-text-user" : "", badge: w.source === "user" ? tdBadgeTambahanHTML() : "" };
  html += '<div class="koto-tag"><span class="koto-tag-icon">' + cat.icon + '</span> ' + cat.nama + wMarkDetail.badge + '</div>';

  html += '<div class="koto-main-card">';
  html += '<img src="assets/kosakata/img-placeholder.png" alt="'+w.kata+'" class="koto-main-img" onerror="this.style.display=\'none\'">';
  html += '<h2 class="koto-detail-kanji' + wMarkDetail.textClass + '">' + w.kata + '</h2>';
  html += '<p class="koto-detail-romaji">' + w.romaji + '</p>';
  html += '<p class="koto-detail-arti">' + capitalizeFirst(w.arti) + '</p>';
  html += '</div>';

  html += '<div class="koto-info-card">';
  html += '<div class="koto-info-title">📖 Arti</div>';
  html += '<p class="koto-info-val">' + capitalizeFirst(w.arti) + '</p>';
  html += '</div>';

  html += '<div class="koto-info-card">';
  html += '<div class="koto-info-title">📍 Contoh Kalimat</div>';
  if(w.contoh_jp) {
      html += '<p class="koto-info-jp">' + w.contoh_jp + '</p>';
      html += '<p class="koto-info-rm">' + w.contoh_rm + '</p>';
      html += '<p class="koto-info-val">' + w.contoh_id + '</p>';
  } else {
      html += '<p class="koto-info-val" style="color:#a0aab5; font-style:italic;">Belum ada contoh kalimat untuk kata ini.</p>';
  }
  html += '</div>';

  html += '<img src="assets/kosakata/bg-footer.png" class="koto-footer-bg" onerror="this.style.display=\'none\'">';

  modal.innerHTML = html;
  document.body.appendChild(modal);
}

function closeWordDetail() {
  var m = document.getElementById("kotoWordModal");
  if(m) {
      m.style.animation = "slideDown 0.2s ease-in forwards";
      setTimeout(function(){ m.remove(); }, 200);
  }
}

function runKosakataGlobalSearch(query) {
  var container = document.getElementById("kotoCatContainer");
  var resultsWrap = document.getElementById("kotoSearchResults");
  var q = query.trim().toLowerCase();

  if (!q) {
    container.style.display = "block";
    resultsWrap.innerHTML = "";
    return;
  }
  
  container.style.display = "none";
  var html = '<div class="koto-word-list">';
  var found = 0;

  for (var c = 0; c < KOSAKATA_CATEGORIES.length; c++) {
    var cat = KOSAKATA_CATEGORIES[c];
    for (var i = 0; i < cat.kata.length; i++) {
      var item = cat.kata[i];
      if (item.kata.indexOf(q) !== -1 || item.romaji.toLowerCase().indexOf(q) !== -1 || item.arti.toLowerCase().indexOf(q) !== -1) {
        found++;
        var iMark = typeof ieMarkerInfo === "function" ? ieMarkerInfo(item.source) : { textClass: item.source === "user" ? " tambah-data-text-user" : "", badge: item.source === "user" ? tdBadgeTambahanHTML() : "" };
        html += '<div class="koto-word-card" onclick="openWordDetail(\''+cat.key+'\', '+i+')">';
        html += '<div class="koto-word-icon" style="background:#ffe4e8; color:#e6395b; font-size:14px; font-weight:800;">' + cat.nama.substring(0,2) + '</div>';
        
        html += '<div class="koto-word-info">';
        html += '<div class="koto-word-line-top">';
        html += '<span class="koto-word-jp-new' + iMark.textClass + '">' + item.kata + '</span>';
        html += '<span class="koto-word-rm-new">' + item.romaji + '</span>';
        html += '</div>';
        html += '<div class="koto-word-id-new">' + capitalizeFirst(item.arti) + ' <span style="font-size:10px; color:#ff5e7e; background:#ffe4e8; padding:2px 8px; border-radius:10px; margin-left:6px;">'+cat.nama+'</span>' + iMark.badge + '</div>';
        html += '</div>';

        html += '<div class="koto-word-arrow">›</div>';
        html += '</div>';
      }
    }
  }
  html += '</div>';
  
  if(found === 0) {
      html = '<div style="text-align:center; padding:30px 20px; color:#888;">Tidak ada kosakata yang cocok.</div>';
  }
  resultsWrap.innerHTML = html;
}

function capitalizeFirst(str) {
  if (!str) return "";
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function backToKosakataMenu() {
  loadKosakataMenu();
}

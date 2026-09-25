// =====================================================
// DeX Gaku — app.js
// Semua logika & data konten aplikasi ada di sini.
// Tambahkan/ubah isi menu lewat MENU_DATA di bawah.
// =====================================================

// Data menu utama. "content" berisi HTML yang akan
// ditampilkan di halaman detail. Kosongkan "" jika
// menu belum diisi (akan tampil empty-state default).
var MENU_DATA = {
  hiragana:  {
    glyph: "&#127760;",
    title: "Hiragana",
    sub: "あいうえお",
    content: ""
  },
  katakana:  {
    glyph: "T",
    title: "Katakana",
    sub: "アイウエオ",
    content: ""
  },
  kanji:     {
    glyph: "&#128214;",
    title: "Kanji",
    sub: "漢字 N5",
    content: ""
  },
  kotoba:    {
    glyph: '<img class="detail-glyph-img" src="assets/kosakata-shiba.svg" alt="Shiba memegang flashcard kosakata">',
    title: "Kosakata",
    sub: "Vocabulary",
    content: ""
  },
  bunpo:     {
    glyph: "&#127891;",
    title: "Grammar",
    sub: "Tata Bahasa",
    content: ""
  },
  quiz:      {
    glyph: "&#10067;",
    title: "Quiz",
    sub: "Latihan Soal",
    content: ""
  },
  simulasi:  {
    glyph: "&#128421;",
    title: "Simulasi JLPT",
    sub: "Mock Test",
    content: ""
  },
  riwayat:   {
    glyph: "&#128337;",
    title: "Riwayat",
    sub: "Histori Belajar",
    content: ""
  },
  tambah:    {
    glyph: "&#10133;",
    title: "Tambah Data",
    sub: "Data Baru",
    content: ""
  },
  rangkuman: {
    glyph: "&#9889;",
    title: "Rangkuman",
    sub: "Minna no Nihongo",
    content: ""
  },
  terjemahan: {
    glyph: "A/あ",
    title: "Terjemahan",
    sub: "Kamus & Translate",
    content: ""
  }
};

// ---------- Referensi elemen ----------
var homeView = document.getElementById("homeView");
var detailView = document.getElementById("detailView");
var detailGlyph = document.getElementById("detailGlyph");
var detailTitle = document.getElementById("detailTitle");
var detailSub = document.getElementById("detailSub");
var detailExtra = document.getElementById("detailExtra");
var backBtn = document.getElementById("backBtn");

// ---------- Fungsi Global UI ----------

function restoreStandardHeader() {
  var standardIntro = document.getElementById("detailStandardIntro");
  var standardHeader = document.getElementById("detailHeaderStandard");
  if (standardIntro) standardIntro.classList.remove("hidden");
  if (standardHeader) standardHeader.classList.remove("hidden");
}

function hideStandardHeader() {
  var standardIntro = document.getElementById("detailStandardIntro");
  var standardHeader = document.getElementById("detailHeaderStandard");
  if (standardIntro) standardIntro.classList.add("hidden");
  if (standardHeader) standardHeader.classList.add("hidden");
}

// ---------- Navigasi ----------

/**
 * Menampilkan halaman detail untuk menu tertentu.
 * @param {string} menuKey - kunci menu, contoh: "hiragana"
 */
function showDetail(menuKey) {
  var data = MENU_DATA[menuKey];
  if (!data) return;

  // ROUTING KHUSUS HALAMAN TERJEMAHAN
  if (menuKey === "terjemahan") {
    homeView.classList.remove("active");
    detailView.classList.remove("active");
    
    var tView = document.getElementById("terjemahanView");
    if(tView) tView.classList.add("active");
    
    window.scrollTo(0, 0);
    return;
  }

  // Jika membuka menu lain, pastikan halaman terjemahan tertutup dan di-reset
  var transView = document.getElementById("terjemahanView");
  if(transView) {
    transView.classList.remove("active");
    if (typeof resetTerjemahanPage === "function") {
      resetTerjemahanPage();
    }
  }

  // Pastikan header standar terlihat kembali setiap kali buka menu baru
  restoreStandardHeader();

  detailGlyph.innerHTML = data.glyph;
  detailTitle.textContent = data.title;
  detailSub.textContent = data.sub;

  // Menu Hiragana & Katakana punya tampilan khusus
  if (menuKey === "hiragana" || menuKey === "katakana") {
    loadKanaMenu(menuKey);
  } else if (menuKey === "kanji") {
    loadKanjiMenu();
  } else if (menuKey === "kotoba") {
    loadKosakataMenu();
  } else if (menuKey === "bunpo") {
    loadBunpoMenu();
  } else if (menuKey === "quiz") {
    loadQuizMenu();
  } else if (menuKey === "simulasi") {
    if (typeof loadSimulasiMenu === "function") {
      loadSimulasiMenu();
    }
  } else if (menuKey === "riwayat") {
    if (typeof loadRiwayatMenu === "function") {
      loadRiwayatMenu();
    }
  } else if (menuKey === "tambah") {
    if (typeof loadTambahDataMenu === "function") {
      loadTambahDataMenu();
    }
  } else if (menuKey === "rangkuman") {
    if (typeof loadRangkumanMenu === "function") {
      loadRangkumanMenu();
    }
  } else if (data.content && data.content.trim() !== "") {
    detailExtra.innerHTML = data.content;
  } else {
    detailExtra.innerHTML =
      '<div class="empty-state">' +
      "<p>Konten untuk menu ini belum diisi.</p>" +
      '<p class="empty-hint">Kita akan lengkapi bagian ini satu per satu &#128021;</p>' +
      "</div>";
  }

  homeView.classList.remove("active");
  detailView.classList.add("active");
  window.scrollTo(0, 0);
}

/** Kembali ke halaman utama (grid menu). */
function showHome() {
  detailView.classList.remove("active");
  
  // Pastikan menu terjemahan ditutup dan di-reset bersih seperti baru
  var tView = document.getElementById("terjemahanView");
  if(tView) {
    tView.classList.remove("active");
    if (typeof resetTerjemahanPage === "function") {
      resetTerjemahanPage();
    }
  }

  homeView.classList.add("active");
  window.scrollTo(0, 0);
}

// ---------- Dukungan tombol Back HP / browser ----------
window.addEventListener("popstate", function (event) {
  var state = event.state;

  // Jika keluar dari halaman Terjemahan via tombol Back HP
  var tView = document.getElementById("terjemahanView");
  if (tView && tView.classList.contains("active")) {
    if (typeof resetTerjemahanPage === "function") {
      resetTerjemahanPage();
    }
    tView.classList.remove("active");
  }

  // ================================================
  // BACK HP SAAT POPUP DETAIL KOSAKATA TERBUKA
  // ================================================
  var kotoModal = document.querySelector(".koto-modal");

  if (kotoModal) {
    window.__kotoModalHandlingPopstate = true;
    kotoModal.remove();
    window.__kotoModalHistoryActive = false;
    return;
  }

  if (state && state.menu === "kanji" && state.kategori && !state.kanjiNo && state.kanjiNo !== 0) {
    backToKanjiCategoryList(state.kategori);
    return;
  }

  if (state && state.menu === "kanji" && !state.kategori) {
    backToKanjiMenu();
    return;
  }

  if (state && state.menu === "kotoba" && !state.catKey) {
    backToKosakataMenu();
    return;
  }

  if (state && state.menu === "bunpo" && state.catKey && !state.materiIdx && state.materiIdx !== 0) {
    backToBunpoMateriList(state.catKey);
    return;
  }

  if (state && state.menu === "bunpo" && !state.catKey) {
    backToBunpoMenu();
    return;
  }

  // Routing khusus menu Quiz
  if (state && state.menu === "quiz" && state.quizStep) {
    if (state.quizStep.indexOf("kanji-") === 0) {
      if (typeof quizKanjiSyncHistoryDepth === "function") {
        quizKanjiSyncHistoryDepth(state);
      }
      handleQuizKanjiPopstate(state);
    } else if (state.quizStep.indexOf("kotoba-") === 0) {
      if (typeof handleQuizKosakataPopstate === "function") {
        handleQuizKosakataPopstate(state);
      }
    } else if (state.quizStep.indexOf("bunpo-") === 0) {
      if (typeof handleQuizBunpoPopstate === "function") {
        handleQuizBunpoPopstate(state);
      }
    } else if (state.quizStep.indexOf("campuran-") === 0) {
      if (typeof handleQuizCampuranPopstate === "function") {
        handleQuizCampuranPopstate(state);
      }
    } else {
      handleQuizKanaPopstate(state);
    }
    return;
  }

  // Routing khusus Simulasi JLPT (CBT)
  if (state && state.menu === "simulasi") {
    if (typeof handleSimulasiPopstate === "function") {
      handleSimulasiPopstate(state);
    }
    return;
  }

  // Routing khusus Tambah Data
  if (state && state.menu === "tambah") {
    if (typeof handleTambahDataPopstate === "function") {
      handleTambahDataPopstate(state);
    }
    return;
  }

  // Routing khusus Rangkuman
  if (state && state.menu === "rangkuman") {
    if (typeof handleRangkumanPopstate === "function") {
      handleRangkumanPopstate(state);
    }
    return;
  }

  if (state && state.menu) {
    showDetail(state.menu);
    return;
  }

  showHome();
});


function openDetailWithHistory(menuKey) {
  showDetail(menuKey);
  history.pushState({ menu: menuKey }, "", "#" + menuKey);
}

// ---------- Event listener ----------
var cards = document.querySelectorAll(".card");
for (var i = 0; i < cards.length; i++) {
  cards[i].addEventListener("click", function () {
    var key = this.getAttribute("data-menu");
    openDetailWithHistory(key);
  });
}

backBtn.addEventListener("click", function () {
  history.back();
});

// =====================================================
// HISTORY POPUP DETAIL KOSAKATA
// =====================================================

window.__kotoModalHistoryActive = false;
window.__kotoModalHandlingPopstate = false;

if (window.MutationObserver) {
  var kotoModalObserver = new MutationObserver(function () {
    var modal = document.querySelector(".koto-modal");

    // Popup baru dibuka
    if (modal && !window.__kotoModalHistoryActive) {
      window.__kotoModalHistoryActive = true;
      history.pushState(
        Object.assign(
          {},
          history.state || {},
          {
            kotoModal: true
          }
        ),
        "",
        location.href
      );
      return;
    }

    // Popup sudah ditutup
    if (!modal && window.__kotoModalHistoryActive) {
      var wasPopstate = window.__kotoModalHandlingPopstate;
      window.__kotoModalHandlingPopstate = false;
      window.__kotoModalHistoryActive = false;

      // Kalau popup ditutup menggunakan tombol di dalam popup, hapus history popup juga.
      if (
        !wasPopstate &&
        history.state &&
        history.state.kotoModal
      ) {
        history.back();
      }
    }
  });

  kotoModalObserver.observe(
    document.body,
    {
      childList: true,
      subtree: true
    }
  );
}

// =====================================================
// LOGIKA WAKTU SAPAAN GELEMBUNG MASKOT (BAHASA JEPANG)
// =====================================================
document.addEventListener("DOMContentLoaded", () => {
  const greetingBubble = document.getElementById("shibaGreeting");
  
  if (greetingBubble) {
    const hour = new Date().getHours();
    let jpText = "";
    let textColor = "";

    if (hour >= 4 && hour < 11) {
      // Pagi (04:00 - 10:59)
      jpText = "おはよう! 🌅";
      textColor = "#FFD166"; // Kuning Hangat
    } else if (hour >= 11 && hour < 15) {
      // Siang (11:00 - 14:59)
      jpText = "こんにちは! ☀️";
      textColor = "#FFE082"; // Kuning terang
    } else if (hour >= 15 && hour < 18) {
      // Sore (15:00 - 17:59)
      jpText = "こんにちは! 🌇"; 
      textColor = "#F28C5B"; // Jingga senja
    } else if (hour >= 18 && hour < 24) {
      // Malam (18:00 - 23:59)
      jpText = "こんばんは! 🌙";
      textColor = "#1E2A44"; // Biru malam
    } else {
      // Dini hari (00:00 - 03:59)
      jpText = "おやすみ! 🌌";
      textColor = "#302B63"; // ungu kebiruan gelap
    }

    greetingBubble.textContent = jpText;
    greetingBubble.style.color = textColor; // Mengubah warna teks sesuai waktu
  }
});

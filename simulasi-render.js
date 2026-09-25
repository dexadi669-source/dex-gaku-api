// =====================================================
// DeX Gaku — simulasi-render.js
// Logika Tampilan & Simulasi JLPT N5 (CBT Fullscreen)
// Termasuk Dukungan Choukai (Listening)
// =====================================================

window.restoreStandardHeader = window.restoreStandardHeader || function() {
  var standardIntro = document.getElementById("detailStandardIntro");
  var standardHeader = document.getElementById("detailHeaderStandard");
  if (standardIntro) standardIntro.classList.remove("hidden");
  if (standardHeader) standardHeader.classList.remove("hidden");
};

var simState = {
  activePacket: null,
  packetData: [],
  packetMeta: null,
  currentIdx: 0,
  answers: {},
  audioPlayCount: {},
  quizActive: false,
  quizFinished: false,
  remainingTime: 90 * 60,
  timerInterval: null,
  activeModalTab: "moji",
  orientationLocked: false,
  exitPopupOpen: false,
  visHiddenTimer: null
};

function getSectionBounds() {
  var rincian = simState.packetMeta.rincian;
  var bounds = {};
  var currentStart = 0;

  if (rincian.moji) {
    bounds.moji = { start: currentStart, end: currentStart + rincian.moji - 1, label: "文字・語彙 (Moji/Goi)", short: "文字・語彙" };
    currentStart += rincian.moji;
  }
  if (rincian.bunpo) {
    bounds.bunpo = { start: currentStart, end: currentStart + rincian.bunpo - 1, label: "文法 (Bunpou)", short: "文法" };
    currentStart += rincian.bunpo;
  }
  if (rincian.dokkai) {
    bounds.dokkai = { start: currentStart, end: currentStart + rincian.dokkai - 1, label: "読解 (Dokkai)", short: "読解" };
    currentStart += rincian.dokkai;
  }
  if (rincian.choukai) {
    bounds.choukai = { start: currentStart, end: currentStart + rincian.choukai - 1, label: "聴解 (Choukai)", short: "聴解" };
  }
  return bounds;
}

function simSectionOfIndex(idx) {
  var bounds = getSectionBounds();
  for (var key in bounds) {
    if (idx >= bounds[key].start && idx <= bounds[key].end) return key;
  }
  return "moji";
}

// =====================================================
// 1. MENU SIMULASI
// =====================================================

function loadSimulasiMenu() {
  hideStandardHeader();
  simCleanupExamOverlay();

  var container = document.getElementById("detailExtra");
  if (!container) return;

  // Total ditarik dari Paket 4 (paket paling lengkap: Full N5 + Listening),
  // supaya kartu ringkasan mencerminkan cakupan simulasi terluas yang tersedia.
  var ringkas = SIMULASI_PACKETS.paket4 || SIMULASI_PACKETS.paket1 || { totalSoal: 0, totalPoin: 0, waktuMenit: 0 };

  var html = '<div class="sim-menu-wrap">';

  // ---------- Hero (gaya sama dengan Kosakata/Kanji/Grammar/Kana, lewat kelas
  // khusus sim-* sendiri -- BUKAN koto-hero/koto-back-top, karena keduanya
  // dibebani aturan lama ".koto-hero{padding-top:54px !important}" untuk
  // sistem tombol back absolut yang berbeda; memakainya di sini akan bentrok). ----------
  html += '<div class="sim-hero">';
  html += '<img class="sim-hero-bg" src="assets/simulasi/simulasi-hero-bg.svg" alt="" aria-hidden="true">';
  html += '<button class="sim-hero-back" id="simBackBtn" aria-label="Kembali"><svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M15 18l-6-6 6-6"/></svg> Kembali</button>';
  html += '<div class="sim-hero-top">';
  html += '<div class="sim-hero-badge">&#127891;</div>';
  html += '<div class="sim-hero-titlewrap"><h1 class="sim-hero-title">Simulasi JLPT N5</h1><p class="sim-hero-reading">&#27169;&#25758;&#35430;&#39443;</p></div>';
  html += "</div>";
  html += '<p class="sim-hero-desc">Latihan ujian seperti tes komputer dengan format asli JLPT.</p>';
  html += "</div>"; // .koto-hero

    // ---------- Kartu ringkasan 4 kolom (menimpa hero) ----------
  html += '<div class="sim-summary">';
  // Kolom Moji
  html += '<div class="sim-sum-box"><div class="sim-sum-ico">&#128214;</div><span class="sim-sum-val">' + (ringkas.rincian ? ringkas.rincian.moji : 25) + '</span><span class="sim-sum-lbl">Moji</span></div>';
  html += '<div class="sim-sum-div"></div>';
  // Kolom Bunpo
  html += '<div class="sim-sum-box"><div class="sim-sum-ico">&#128221;</div><span class="sim-sum-val">' + (ringkas.rincian ? ringkas.rincian.bunpo : 16) + '</span><span class="sim-sum-lbl">Bunpou</span></div>';
  html += '<div class="sim-sum-div"></div>';
  // Kolom Dokkai
  html += '<div class="sim-sum-box"><div class="sim-sum-ico">&#128211;</div><span class="sim-sum-val">' + (ringkas.rincian ? ringkas.rincian.dokkai : 11) + '</span><span class="sim-sum-lbl">Dokkai</span></div>';
  html += '<div class="sim-sum-div"></div>';
  // Kolom Choukai
  html += '<div class="sim-sum-box"><div class="sim-sum-ico">&#127911;</div><span class="sim-sum-val">' + (ringkas.rincian ? ringkas.rincian.choukai : 28) + '</span><span class="sim-sum-lbl">Choukai</span></div>';
  html += "</div>";


  html += '<div class="koto-content sim-content">';
  html += '<p class="sim-sect-label">Pilih Paket Latihan</p>';

  var badgeClasses = ["b1", "b2", "b3", "b1"];
  ["paket1", "paket2", "paket3", "paket4"].forEach(function (key, i) {
    var pkt = SIMULASI_PACKETS[key];
    if (!pkt) return;
    html += '<div class="sim-packet-card' + (i === 3 ? " featured" : "") + '">';
    html += '<span class="sim-packet-badge ' + badgeClasses[i] + '">' + pkt.title + "</span>";
    html += '<p class="sim-packet-title">Simulasi JLPT N5</p>';
    html += '<div class="sim-packet-grid-meta">';
    html += '<div class="sim-grid-item"><span class="sim-grid-ic">&#128221;</span><span class="sim-grid-val">' + pkt.totalSoal + " Soal</span></div>";
    html += '<div class="sim-grid-item"><span class="sim-grid-ic">&#11088;</span><span class="sim-grid-val">' + pkt.totalPoin + " Poin</span></div>";
    html += '<div class="sim-grid-item"><span class="sim-grid-ic">&#9201;&#65039;</span><span class="sim-grid-val">' + pkt.waktuMenit + " Menit</span></div>";
    html += "</div>";
    html += '<button class="sim-packet-start-btn" data-packet-key="' + key + '">Mulai Simulasi <span>&#8250;</span></button>';
    html += "</div>";
  });

  html += "</div>"; // .sim-content
  html += "</div>"; // .sim-menu-wrap

  container.innerHTML = html;

  document.getElementById("simBackBtn").onclick = function () { history.back(); };
  var btns = container.querySelectorAll(".sim-packet-start-btn");
  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
      var key = this.getAttribute("data-packet-key");
      openSimulasiKonfirmasiWithHistory(key);
    });
  }
}

// =====================================================
// 2. HALAMAN KONFIRMASI PAKET
// =====================================================

function openSimulasiKonfirmasiWithHistory(packetKey) {
  openSimulasiKonfirmasi(packetKey);
  history.pushState({ menu: "simulasi", simStep: "konfirmasi", packetKey: packetKey }, "", "#simulasi-konfirmasi");
}

function openSimulasiKonfirmasi(packetKey) {
  var pkt = SIMULASI_PACKETS[packetKey];
  if (!pkt) return;
  simState.activePacket = packetKey;
  simState.packetData = pkt.soal;
  simState.packetMeta = pkt;

  var container = document.getElementById("detailExtra");
  if (!container) return;

  var badgeColor = packetKey === "paket2" ? "#a437c9" : packetKey === "paket3" ? "#17a37e" : "#2c6fdb";

  var html = "";
  html += '<div class="sim-confirm-card">';
  html += '<span class="sim-confirm-badge" style="background:' + badgeColor + ';">' + pkt.title + "</span>";
  html += '<h3 class="sim-confirm-title">Simulasi JLPT N5</h3>';
  html += '<p class="sim-confirm-sub">Pastikan informasi berikut sudah benar sebelum memulai.</p>';
  html += '<div class="sim-confirm-grid">';
  html += '<div class="sim-confirm-item"><span class="sim-confirm-ic">&#128221;</span><div><div class="sim-confirm-lbl">Jumlah soal</div><div class="sim-confirm-val">' + pkt.totalSoal + " soal</div></div></div>";
  html += '<div class="sim-confirm-item"><span class="sim-confirm-ic">&#127942;</span><div><div class="sim-confirm-lbl">Total nilai</div><div class="sim-confirm-val">' + pkt.totalPoin + " poin</div></div></div>";
  html += '<div class="sim-confirm-item"><span class="sim-confirm-ic">&#9201;&#65039;</span><div><div class="sim-confirm-lbl">Waktu pengerjaan</div><div class="sim-confirm-val">' + pkt.waktuMenit + " menit</div></div></div>";
  html += '<div class="sim-confirm-item"><span class="sim-confirm-ic">&#9989;</span><div><div class="sim-confirm-lbl">KKM (Minimal lulus)</div><div class="sim-confirm-val">' + pkt.kkm + " poin</div></div></div>";
  
  html += '<div class="sim-confirm-item"><span class="sim-confirm-ic">&#128203;</span><div><div class="sim-confirm-lbl">Rincian per bagian</div><div class="sim-confirm-section-list">';
  if (pkt.rincian.moji) html += '<div class="sim-confirm-section-row"><span class="sim-dot d-moji"></span> Moji/Goi &nbsp;' + pkt.rincian.moji + " soal</div>";
  if (pkt.rincian.bunpo) html += '<div class="sim-confirm-section-row"><span class="sim-dot d-bunpo"></span> Bunpou &nbsp;' + pkt.rincian.bunpo + " soal</div>";
  if (pkt.rincian.dokkai) html += '<div class="sim-confirm-section-row"><span class="sim-dot d-dokkai"></span> Dokkai &nbsp;' + pkt.rincian.dokkai + " soal</div>";
  if (pkt.rincian.choukai) html += '<div class="sim-confirm-section-row"><span class="sim-dot" style="background:#f59e0b;"></span> Choukai &nbsp;' + pkt.rincian.choukai + " soal</div>";
  html += "</div></div></div></div>";

  html += '<div class="sim-confirm-actions">';
  html += '<button class="sim-confirm-btn-back" id="simBtnKonfirmasiKembali">KEMBALI</button>';
  html += '<button class="sim-confirm-btn-start" id="simBtnKonfirmasiMulai">MULAI SIMULASI &#8250;</button>';
  html += "</div></div>";

  container.innerHTML = html;

  document.getElementById("simBtnKonfirmasiKembali").onclick = function () { history.back(); };
  document.getElementById("simBtnKonfirmasiMulai").onclick = function () { mulaiSimulasiSejatiWithHistory(); };
}

// =====================================================
// 3. MULAI SIMULASI
// =====================================================

function mulaiSimulasiSejatiWithHistory() {
  history.replaceState({ menu: "simulasi", simStep: "ujian" }, "", "#simulasi-ujian");
  mulaiSimulasiSejati();
}

function mulaiSimulasiSejati() {
  simState.currentIdx = 0;
  simState.answers = {};
  simState.audioPlayCount = {};
  simState.quizActive = true;
  simState.quizFinished = false;
  simState.remainingTime = (simState.packetMeta ? simState.packetMeta.waktuMenit : 90) * 60;

  mulaiTimerSimulasi();
  renderHalamanSoalSimulasi();
  setupSimulasiListeners();
}

function simRequestLandscape() {
  try {
    if (screen.orientation && typeof screen.orientation.lock === "function") {
      screen.orientation.lock("landscape").then(function () { simState.orientationLocked = true; }).catch(function () { simState.orientationLocked = false; });
    }
  } catch (e) { simState.orientationLocked = false; }
}

function simReleaseLandscape() {
  try { if (screen.orientation && typeof screen.orientation.unlock === "function") { screen.orientation.unlock(); } } catch (e) { }
  simState.orientationLocked = false;
}

function simMountRotateNotice() {
  if (document.getElementById("simRotateNotice")) return;
  var div = document.createElement("div"); div.id = "simRotateNotice"; div.className = "sim-rotate-notice active";
  div.innerHTML = '<div class="sim-rotate-ic">&#128241;</div><h3>Putar Perangkatmu</h3><p>Simulasi JLPT ditampilkan dalam mode landscape agar terasa seperti ujian CBT sungguhan.</p>';
  document.body.appendChild(div);
}

function simUnmountRotateNotice() {
  var el = document.getElementById("simRotateNotice");
  if (el) el.remove();
}

function mulaiTimerSimulasi() {
  if (simState.timerInterval) clearInterval(simState.timerInterval);
  simState.timerInterval = setInterval(function () {
    if (!simState.quizActive) return;
    simState.remainingTime--;
    updateTimerDisplay();
    if (simState.remainingTime <= 0) {
      simState.remainingTime = 0;
      updateTimerDisplay();
      clearInterval(simState.timerInterval);
      selesaikanSimulasi();
    }
  }, 1000);
}

function updateTimerDisplay() {
  var el = document.getElementById("simTimerDisplay");
  if (!el) return;
  var m = Math.floor(simState.remainingTime / 60);
  var s = simState.remainingTime % 60;
  el.textContent = (m < 10 ? "0" + m : m) + ":" + (s < 10 ? "0" + s : s);
  el.classList.toggle("warn", simState.remainingTime <= 300 && simState.remainingTime > 0);
}

// =====================================================
// 4. HALAMAN PENGERJAAN SOAL
// =====================================================

function renderHalamanSoalSimulasi() {
  window.speechSynthesis.cancel(); 

  var idx = simState.currentIdx;
  var soal = simState.packetData[idx];
  if (!soal) return;
  
  var bounds = getSectionBounds();
  var sectionKey = simSectionOfIndex(idx);
  var sectionLabel = bounds[sectionKey].label;
  var isChoukai = sectionKey === "choukai";

  var root = document.getElementById("simExamRoot");
  if (!root) {
    root = document.createElement("div"); root.id = "simExamRoot"; root.className = "sim-exam-root"; document.body.appendChild(root);
  }

  var isLast = idx === simState.packetData.length - 1;

  var html = "";
  html += '<div class="sim-exam-header">';
  html += '<div class="sim-exam-header-left">';
  html += '<button class="sim-exam-listbtn" id="simListBtn" aria-label="Daftar Soal">&#9776;</button>';
  html += '<span class="sim-exam-title">Simulasi JLPT N5</span>';
  html += '<span class="sim-exam-section-pill">' + sectionLabel + "</span>";
  html += "</div>";
  html += '<div class="sim-exam-header-right">';
  html += '<span class="sim-exam-progress">' + (idx + 1) + " / " + simState.packetData.length + "</span>";
  html += '<span class="sim-exam-timer" id="simTimerDisplay">--:--</span>';
  html += "</div></div>"; 

  html += '<div class="sim-exam-body">';
  html += '<div class="sim-qnum-badge" style="display:inline-block;background:#dbe8fd;color:#1e4a8a;">問題 ' + (idx + 1) + "</div>";
  
  if (isChoukai) {
    var playCount = simState.audioPlayCount[idx] || 0;
    var sisaPlay = 2 - playCount;
    html += '<div style="margin-bottom: 20px;">';
    if (sisaPlay > 0) {
      html += '<button id="simPlayAudioBtn" style="padding:10px 20px; border-radius:12px; background:#2c6fdb; color:#fff; border:none; font-size:14px; font-weight:800; display:flex; align-items:center; gap:8px; cursor:pointer; box-shadow:0 4px 10px rgba(44,111,219,0.2);">&#9654; Putar Suara (Sisa: ' + sisaPlay + 'x)</button>';
    } else {
      html += '<button disabled style="padding:10px 20px; border-radius:12px; background:#f1f3f7; color:#9099ad; border:none; font-size:14px; font-weight:800;">Batas Putar Habis</button>';
    }
    html += '</div>';
  }

  html += '<div class="sim-question-text" style="color:#1a1a1a;display:block;">' + simEscapeQuestion(soal.question) + "</div>";
  html += '<div class="sim-options">';
  soal.options.forEach(function (opt, optIdx) {
    var checked = simState.answers[idx] === optIdx;
    html += '<div class="sim-option' + (checked ? " selected" : "") + '" data-opt-idx="' + optIdx + '">';
    html += '<span class="sim-option-radio"></span><span>' + (optIdx + 1) + ". " + opt + "</span></div>";
  });
  html += "</div></div>"; 

  html += '<div class="sim-exam-footer">';
  var prevDisabled = (idx === 0 || isChoukai) ? " disabled" : "";
  html += '<button class="sim-nav-btn prev" id="simPrevBtn"' + prevDisabled + '>&#8592; Sebelumnya</button>';
  if (isLast) {
    html += '<button class="sim-nav-btn finish" id="simNextBtn">Selesai</button>';
  } else {
    html += '<button class="sim-nav-btn next" id="simNextBtn">Berikutnya &#8594;</button>';
  }
  html += "</div>"; 

  root.innerHTML = html;
  updateTimerDisplay();

  var playBtn = document.getElementById("simPlayAudioBtn");
  if (playBtn) {
    playBtn.onclick = function() {
      var count = simState.audioPlayCount[idx] || 0;
      if (count < 2) {
        simState.audioPlayCount[idx] = count + 1;
        renderHalamanSoalSimulasi(); 
        var speech = new SpeechSynthesisUtterance(soal.audioText);
        speech.lang = 'ja-JP';
        speech.rate = 0.9;
        window.speechSynthesis.speak(speech);
      }
    };
  }

  document.getElementById("simListBtn").onclick = bukaPopupDaftarSoal;
  document.getElementById("simPrevBtn").onclick = function () { pindahSoalSimulasi(-1); };
  document.getElementById("simNextBtn").onclick = function () {
    if (isLast) { konfirmasiSelesaiSimulasi(); } else { pindahSoalSimulasi(1); }
  };
  var optEls = root.querySelectorAll(".sim-option");
  for (var i = 0; i < optEls.length; i++) {
    optEls[i].addEventListener("click", function () {
      var optIdx = parseInt(this.getAttribute("data-opt-idx"), 10);
      pilihJawabanSimulasi(optIdx);
    });
  }
}

function simEscapeQuestion(text) {
  return String(text).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function pilihJawabanSimulasi(optIdx) {
  simState.answers[simState.currentIdx] = optIdx;
  var root = document.getElementById("simExamRoot");
  if (!root) return;
  var optEls = root.querySelectorAll(".sim-option");
  for (var i = 0; i < optEls.length; i++) {
    optEls[i].classList.toggle("selected", i === optIdx);
  }
}

function pindahSoalSimulasi(direction) {
  var isChoukai = simSectionOfIndex(simState.currentIdx) === "choukai";
  if (isChoukai && direction < 0) {
    alert("Kamu tidak bisa kembali ke soal sebelumnya di sesi Listening!");
    return;
  }
  var next = simState.currentIdx + direction;
  if (next >= 0 && next < simState.packetData.length) {
    simState.currentIdx = next;
    renderHalamanSoalSimulasi();
  }
}

function lompatKeSoal(idx) {
  var isChoukai = simSectionOfIndex(simState.currentIdx) === "choukai";
  if (isChoukai && idx < simState.currentIdx) {
    alert("Di sesi Listening, pengerjaan harus maju berurutan. Kamu tidak bisa kembali!");
    return;
  }
  simState.currentIdx = idx;
  tutupPopupDaftarSoal();
  renderHalamanSoalSimulasi();
}

function konfirmasiSelesaiSimulasi() {
  var totalAnswered = Object.keys(simState.answers).length;
  var totalSoal = simState.packetData.length;
  if (totalAnswered < totalSoal) {
    simTampilkanPopupSelesaiBelumLengkap(totalAnswered, totalSoal);
  } else {
    selesaikanSimulasi();
  }
}

function simTampilkanPopupSelesaiBelumLengkap(answered, total) {
  var sisa = total - answered;
  var overlay = document.createElement("div"); overlay.id = "simFinishConfirmOverlay"; overlay.className = "sim-modal-overlay";
  overlay.innerHTML = '<div class="sim-confirm-modal-box"><div class="sim-confirm-modal-ic">!</div><h3 class="sim-confirm-modal-title">Masih Ada Soal Kosong</h3><p class="sim-confirm-modal-desc">Kamu belum menjawab <strong>' + sisa + '</strong> dari ' + total + ' soal. Yakin ingin menyelesaikan simulasi sekarang?</p><div class="sim-confirm-modal-actions"><button class="sim-btn-lanjut" id="simFinishCancelBtn">Lanjut Kerjakan</button><button class="sim-btn-akhiri" id="simFinishOkBtn">Selesaikan</button></div></div>';
  document.body.appendChild(overlay);
  document.getElementById("simFinishCancelBtn").onclick = function () { overlay.remove(); };
  document.getElementById("simFinishOkBtn").onclick = function () { overlay.remove(); selesaikanSimulasi(); };
}

// =====================================================
// 5. POPUP DAFTAR SOAL
// =====================================================

function bukaPopupDaftarSoal() {
  simState.activeModalTab = simSectionOfIndex(simState.currentIdx);
  simRenderPopupDaftarSoal();
}

function simRenderPopupDaftarSoal() {
  var existing = document.getElementById("simModalDaftarSoal");
  if (existing) existing.remove();

  var overlay = document.createElement("div");
  overlay.id = "simModalDaftarSoal"; overlay.className = "sim-modal-overlay";

  var pkt = simState.packetMeta;
  var tabDefs = [];
  if (pkt.rincian.moji) tabDefs.push({ key: "moji", label: "文字・語彙 (" + pkt.rincian.moji + ")" });
  if (pkt.rincian.bunpo) tabDefs.push({ key: "bunpo", label: "文法 (" + pkt.rincian.bunpo + ")" });
  if (pkt.rincian.dokkai) tabDefs.push({ key: "dokkai", label: "読解 (" + pkt.rincian.dokkai + ")" });
  if (pkt.rincian.choukai) tabDefs.push({ key: "choukai", label: "聴解 (" + pkt.rincian.choukai + ")" });

  var tabsHTML = "";
  tabDefs.forEach(function (t) {
    tabsHTML += '<button class="sim-modal-tab' + (simState.activeModalTab === t.key ? " active" : "") + '" data-tab-key="' + t.key + '">' + t.label + "</button>";
  });

  var bounds = getSectionBounds()[simState.activeModalTab];
  var gridHTML = "";
  if (bounds) {
    for (var i = bounds.start; i <= bounds.end; i++) {
      var cls = "sim-num-btn";
      if (simState.answers[i] !== undefined) cls += " answered";
      if (i === simState.currentIdx) cls += " current";
      var numLabel = (i + 1) < 10 ? "0" + (i + 1) : String(i + 1);
      gridHTML += '<button class="' + cls + '" data-idx="' + i + '">' + numLabel + "</button>";
    }
  }

  overlay.innerHTML = '<div class="sim-modal-box"><div class="sim-modal-head"><h3>Daftar Soal</h3><button class="sim-modal-close" id="simModalCloseBtn">&#10005;</button></div><div class="sim-modal-tabs">' + tabsHTML + '</div><div class="sim-modal-body"><div class="sim-num-grid" id="simNumGrid">' + gridHTML + '</div><div class="sim-modal-legend"><span><span class="sim-legend-dot answered"></span> Sudah dijawab</span><span><span class="sim-legend-dot current"></span> Sedang dibuka</span><span><span class="sim-legend-dot empty"></span> Belum dijawab</span></div></div></div>';
  
  document.body.appendChild(overlay);

  document.getElementById("simModalCloseBtn").onclick = tutupPopupDaftarSoal;
  overlay.addEventListener("click", function (e) { if (e.target === overlay) tutupPopupDaftarSoal(); });

  var tabBtns = overlay.querySelectorAll(".sim-modal-tab");
  for (var i = 0; i < tabBtns.length; i++) {
    tabBtns[i].addEventListener("click", function () {
      simState.activeModalTab = this.getAttribute("data-tab-key");
      simRenderPopupDaftarSoal();
    });
  }

  var numBtns = overlay.querySelectorAll(".sim-num-btn");
  for (var i = 0; i < numBtns.length; i++) {
    numBtns[i].addEventListener("click", function () {
      var idx = parseInt(this.getAttribute("data-idx"), 10);
      lompatKeSoal(idx);
    });
  }
}

function tutupPopupDaftarSoal() {
  var el = document.getElementById("simModalDaftarSoal");
  if (el) el.remove();
}

// =====================================================
// 6. SELESAI / HITUNG NILAI / HALAMAN HASIL
// =====================================================

function selesaikanSimulasi() {
  if (!simState.quizActive) return;
  simState.quizActive = false;
  simState.quizFinished = true;
  if (simState.timerInterval) clearInterval(simState.timerInterval);
  window.speechSynthesis.cancel(); 

  tutupPopupDaftarSoal();
  simTutupPopupBackSimulasi();

  var root = document.getElementById("simExamRoot");
  if (root) root.remove();

  simSimpanRiwayat();
  history.replaceState({ menu: "simulasi", simStep: "hasil" }, "", "#simulasi-hasil");
  renderHalamanHasilSimulasi();
}

function simSimpanRiwayat() {
  if (typeof simpanRiwayatQuiz !== "function") return;
  var hasil = simHitungNilai();
  var kkm = simState.packetMeta.kkm;
  var isLulus = hasil.totalNilai >= kkm;
  var waktuTerpakaiDetik = (simState.packetMeta.waktuMenit * 60) - simState.remainingTime;
  if (waktuTerpakaiDetik < 0) waktuTerpakaiDetik = 0;
  var m = Math.floor(waktuTerpakaiDetik / 60);
  var s = waktuTerpakaiDetik % 60;
  var waktuLabel = (m < 10 ? "0" + m : m) + ":" + (s < 10 ? "0" + s : s);

  simpanRiwayatQuiz({
    mode: "simulasi", type: "jlpt", title: "Simulasi JLPT N5", subtitle: simState.packetMeta.title,
    score: hasil.totalNilai, maxScore: simState.packetMeta.totalPoin, correct: hasil.totalBenar,
    wrong: hasil.totalSalah, total: simState.packetData.length, time: waktuLabel,
    status: isLulus ? "LULUS" : "TIDAK LULUS",
    snapshot: { activePacket: simState.activePacket, packetData: simState.packetData, packetMeta: simState.packetMeta, answers: simState.answers }
  });
}

function simHitungNilai() {
  var nilaiPerSection = { moji: 0, bunpo: 0, dokkai: 0, choukai: 0 };
  var benarPerSection = { moji: 0, bunpo: 0, dokkai: 0, choukai: 0 };
  var maksPerSection = { moji: 0, bunpo: 0, dokkai: 0, choukai: 0 };
  var totalNilai = 0, totalBenar = 0, totalSalah = 0, totalKosong = 0;

  simState.packetData.forEach(function (soal, idx) {
    var section = simSectionOfIndex(idx);
    maksPerSection[section] += soal.points;
    var ans = simState.answers[idx];
    if (ans === undefined) {
      totalKosong++; return;
    }
    if (ans === soal.correct) {
      totalNilai += soal.points;
      nilaiPerSection[section] += soal.points;
      benarPerSection[section]++;
      totalBenar++;
    } else {
      totalSalah++;
    }
  });

  return { totalNilai: totalNilai, totalBenar: totalBenar, totalSalah: totalSalah, totalKosong: totalKosong, nilaiPerSection: nilaiPerSection, benarPerSection: benarPerSection, maksPerSection: maksPerSection };
}

function simRincianRow(label, sectionKey, nilai, maks, colorGradient) {
  var pct = maks > 0 ? Math.round((nilai / maks) * 100) : 0;
  var bgStyle = colorGradient ? 'background: ' + colorGradient + ';' : '';
  return (
    '<div class="sim-rincian-row">' +
    '<span class="sim-rincian-lbl">' + label + "</span>" +
    '<span class="sim-rincian-bar-wrap"><span class="sim-rincian-bar ' + sectionKey + '" style="width:' + pct + '%;' + bgStyle + '"></span></span>' +
    '<span class="sim-rincian-val">' + nilai + " / " + maks + "</span>" +
    "</div>"
  );
}

function renderHalamanHasilSimulasi() {
  hideStandardHeader();
  var container = document.getElementById("detailExtra");
  if (!container) return;

  var hasil = simHitungNilai();
  var kkm = simState.packetMeta.kkm;
  var isLulus = hasil.totalNilai >= kkm;
  var pkt = simState.packetMeta;

  var html = "";
  html += '<div class="sim-result-wrap">';
  
  html += '<div class="sim-result-top">';
  html += '<div class="sim-result-icon ' + (isLulus ? "pass" : "fail") + '">' + (isLulus ? "&#10003;" : "&#10005;") + "</div>";
  html += '<p class="sim-result-title">SIMULASI SELESAI!</p>';
  html += '<p class="sim-result-score">' + hasil.totalNilai + " / " + pkt.totalPoin + "</p>";
  html += '<span class="sim-result-status ' + (isLulus ? "pass" : "fail") + '">' + (isLulus ? "LULUS" : "TIDAK LULUS") + "</span>";
  html += '<p class="sim-result-kkm">Minimal kelulusan: ' + kkm + "</p>";
  html += "</div>";

  html += '<div class="sim-result-detail-grid">';
  html += '<div class="sim-result-box"><p class="sim-result-box-title">RINCIAN NILAI</p>';
  if (pkt.rincian.moji) html += simRincianRow("Moji/Goi (" + pkt.rincian.moji + " soal)", "moji", hasil.nilaiPerSection.moji, hasil.maksPerSection.moji, "linear-gradient(90deg, #60a5fa, #3b82f6)");
  if (pkt.rincian.bunpo) html += simRincianRow("Bunpou (" + pkt.rincian.bunpo + " soal)", "bunpo", hasil.nilaiPerSection.bunpo, hasil.maksPerSection.bunpo, "linear-gradient(90deg, #c084fc, #a855f7)");
  if (pkt.rincian.dokkai) html += simRincianRow("Dokkai (" + pkt.rincian.dokkai + " soal)", "dokkai", hasil.nilaiPerSection.dokkai, hasil.maksPerSection.dokkai, "linear-gradient(90deg, #34d399, #10b981)");
  if (pkt.rincian.choukai) html += simRincianRow("Choukai (" + pkt.rincian.choukai + " soal)", "choukai", hasil.nilaiPerSection.choukai, hasil.maksPerSection.choukai, "linear-gradient(90deg, #fbbf24, #f59e0b)");
  
  html += '<div class="sim-rincian-total"><span class="sim-rincian-total-lbl">Total</span><span class="sim-rincian-total-val">' + hasil.totalNilai + " / " + pkt.totalPoin + "</span></div></div>";

  html += '<div class="sim-result-box"><p class="sim-result-box-title">STATISTIK</p><div class="sim-stat-mini-grid">';
  html += '<div class="sim-stat-mini"><div class="sim-stat-mini-val good">' + hasil.totalBenar + '</div><div class="sim-stat-mini-lbl">Benar</div></div>';
  html += '<div class="sim-stat-mini"><div class="sim-stat-mini-val bad">' + hasil.totalSalah + '</div><div class="sim-stat-mini-lbl">Salah</div></div>';
  html += '<div class="sim-stat-mini"><div class="sim-stat-mini-val neutral">' + hasil.totalKosong + '</div><div class="sim-stat-mini-lbl">Tidak dijawab</div></div>';
  html += "</div></div></div>"; 

  html += '<div class="sim-result-actions">';
  html += '<button class="sim-res-btn detail" id="simResBtnDetail">Detail Jawaban</button>';
  html += '<button class="sim-res-btn ulangi" id="simResBtnUlangi">Ulangi Simulasi</button>';
  html += '<button class="sim-res-btn menu" id="simResBtnMenu">Kembali ke Menu</button>';
  html += "</div></div>"; 

  container.innerHTML = html;
  document.getElementById("simResBtnDetail").onclick = function () {
    history.pushState({ menu: "simulasi", simStep: "detail" }, "", "#simulasi-detail");
    renderHalamanDetailJawaban();
  };
  document.getElementById("simResBtnUlangi").onclick = function () { simUlangiSimulasi(); };
  document.getElementById("simResBtnMenu").onclick = function () { simKembaliKeMenuSimulasi(); };
}

function simUlangiSimulasi() {
  simState.currentIdx = 0;
  simState.answers = {};
  simState.audioPlayCount = {};
  simState.quizFinished = false;
  simState.quizActive = false;
  history.replaceState({ menu: "simulasi", simStep: "konfirmasi", packetKey: simState.activePacket }, "", "#simulasi-konfirmasi");
  openSimulasiKonfirmasi(simState.activePacket);
}

function simKembaliKeMenuSimulasi() {
  history.back();
}

// =====================================================
// 7. HALAMAN DETAIL JAWABAN
// =====================================================

function renderHalamanDetailJawaban() {
  var container = document.getElementById("detailExtra");
  if (!container) return;

  if (!simState.activeModalTab || simState.activeModalTab === "") { simState.activeModalTab = "moji"; }

  var pkt = simState.packetMeta;
  var tabDefs = [];
  if (pkt.rincian.moji) tabDefs.push({ key: "moji", label: "文字・語彙 (" + pkt.rincian.moji + ")" });
  if (pkt.rincian.bunpo) tabDefs.push({ key: "bunpo", label: "文法 (" + pkt.rincian.bunpo + ")" });
  if (pkt.rincian.dokkai) tabDefs.push({ key: "dokkai", label: "読解 (" + pkt.rincian.dokkai + ")" });
  if (pkt.rincian.choukai) tabDefs.push({ key: "choukai", label: "聴解 (" + pkt.rincian.choukai + ")" });

    var html = "";
  html += '<div class="sim-detail-wrap">';
  // --- Tambahan Tombol Back ---
  html += '<button class="sim-hero-back" id="simDetailBackBtn" style="margin-bottom: 20px;"><svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M15 18l-6-6 6-6"/></svg> Kembali</button>';
  // ----------------------------
  html += '<div class="sim-detail-tabs">';

  tabDefs.forEach(function (t) {
    html += '<button class="sim-detail-tab' + (simState.activeModalTab === t.key ? " active" : "") + '" data-tab-key="' + t.key + '">' + t.label + "</button>";
  });
  html += "</div>";

  var bounds = getSectionBounds()[simState.activeModalTab];
  html += '<div class="sim-detail-list">';
  if (bounds) {
    for (var i = bounds.start; i <= bounds.end; i++) {
      var soal = simState.packetData[i];
      var ans = simState.answers[i];
      var numLabel = (i + 1) < 10 ? "0" + (i + 1) : String(i + 1);
      var resultCls, resultLabel;
      if (ans === undefined) { resultCls = "kosong"; resultLabel = "&#8212; Kosong"; }
      else if (ans === soal.correct) { resultCls = "benar"; resultLabel = "&#10003; Benar"; }
      else { resultCls = "salah"; resultLabel = "&#10005; Salah"; }
      
      html += '<div class="sim-detail-item" data-idx="' + i + '">';
      html += '<span class="sim-detail-num">' + numLabel + "</span>";
      html += '<span class="sim-detail-type">' + soal.type + "</span>";
      html += '<span class="sim-detail-q">' + simFirstLine(soal.question) + "</span>";
      html += '<span class="sim-detail-result ' + resultCls + '">' + resultLabel + "</span>";
      html += '<span class="sim-detail-arrow">&#8250;</span></div>'; // <-- Bagian yang diperbaiki
    }
  }
  html += "</div></div>"; 

  container.innerHTML = html;

  // --- TAMBAHKAN KODE INI DI SINI ---
  window.scrollTo(0, 0); 
  // ----------------------------------

  var tabBtns = container.querySelectorAll(".sim-detail-tab");
  for (var i = 0; i < tabBtns.length; i++) {
    tabBtns[i].addEventListener("click", function () {
      simState.activeModalTab = this.getAttribute("data-tab-key");
      renderHalamanDetailJawaban();
    });
  }

  var tabBtns = container.querySelectorAll(".sim-detail-tab");
  for (var i = 0; i < tabBtns.length; i++) {
    tabBtns[i].addEventListener("click", function () {
      simState.activeModalTab = this.getAttribute("data-tab-key");
      renderHalamanDetailJawaban();
    });
  }
document.getElementById("simDetailBackBtn").onclick = function () {
    history.back(); // Ini kunci agar tidak loop. Kita mundur 1 langkah di history, sama persis seperti menekan tombol back fisik di HP.
  };
  var itemEls = container.querySelectorAll(".sim-detail-item");
  for (var i = 0; i < itemEls.length; i++) {
    itemEls[i].addEventListener("click", function () {
      var idx = parseInt(this.getAttribute("data-idx"), 10);
      simBukaPopupDetailSoal(idx);
    });
  }
}

function simFirstLine(text) {
  var firstLine = String(text).split("\n")[0];
  if (firstLine.length > 46) firstLine = firstLine.slice(0, 46) + "&#8230;";
  return firstLine;
}

function simBukaPopupDetailSoal(idx) {
  var soal = simState.packetData[idx];
  var ans = simState.answers[idx];
  var isBenar = ans === soal.correct;
  var isKosong = ans === undefined;

  var overlay = document.createElement("div"); overlay.id = "simQDetailOverlay"; overlay.className = "sim-modal-overlay";

  var numLabel = (idx + 1) < 10 ? "0" + (idx + 1) : String(idx + 1);
  var bannerHTML, userAnsHTML;

  if (isKosong) {
    bannerHTML = '<div class="sim-qdetail-result-banner salah">Tidak Dijawab</div>'; userAnsHTML = "";
  } else if (isBenar) {
    bannerHTML = '<div class="sim-qdetail-result-banner benar">&#10003; Jawaban Benar</div>'; userAnsHTML = "";
  } else {
    bannerHTML = '<div class="sim-qdetail-result-banner salah">&#10005; Jawaban Salah</div>';
    userAnsHTML = '<div class="sim-qdetail-userans-lbl">Jawaban kamu</div><div class="sim-qdetail-userans-val"><span>' + soal.options[ans] + "</span><span>&#10005;</span></div>";
  }

  overlay.innerHTML = '<div class="sim-qdetail-box"><div class="sim-qdetail-top"><h3>Soal ' + numLabel + '</h3><span class="sim-qdetail-type-badge">' + soal.type + '</span></div><div class="sim-question-text" style="font-size:14px; margin-bottom:14px;">' + simEscapeQuestion(soal.question) + '</div>' + bannerHTML + userAnsHTML + '<p class="sim-qdetail-note">Catatan: Jawaban benar tidak ditampilkan untuk soal yang salah.</p><button class="sim-qdetail-close-btn" id="simQDetailCloseBtn">Tutup</button></div>';

  document.body.appendChild(overlay);
  document.getElementById("simQDetailCloseBtn").onclick = function () { overlay.remove(); };
  overlay.addEventListener("click", function (e) { if (e.target === overlay) overlay.remove(); });
}

// =====================================================
// 8. PROTEKSI TOMBOL BACK HP + KELUAR APLIKASI
// =====================================================

function setupSimulasiListeners() {
  document.addEventListener("visibilitychange", simHandleVisibilityChange);
  window.addEventListener("pagehide", simHandlePageHide);
}

function simRemoveExtraListeners() {
  document.removeEventListener("visibilitychange", simHandleVisibilityChange);
  window.removeEventListener("pagehide", simHandlePageHide);
}

function simHandleVisibilityChange() {
  if (!simState.quizActive) return;
  if (document.visibilityState === "hidden") {
    simState.visHiddenTimer = setTimeout(function () { handleSimulasiExit(); }, 600);
  } else {
    if (simState.visHiddenTimer) { clearTimeout(simState.visHiddenTimer); simState.visHiddenTimer = null; }
  }
}

function simHandlePageHide() {
  if (!simState.quizActive) return;
  handleSimulasiExit();
}

function handleQuizExit() { handleSimulasiExit(); }

function handleSimulasiExit() {
  if (!simState.quizActive) return; 
  selesaikanSimulasi();
}

function handleSimulasiPopstate(state) {
  if (simState.quizActive) {
    history.pushState({ menu: "simulasi", simStep: "ujian" }, "", "#simulasi-ujian");
    simTampilkanPopupBackSimulasi();
    return;
  }

  var step = state && state.simStep;
  if (step === "detail") { renderHalamanDetailJawaban(); return; }
  if (step === "hasil") { renderHalamanHasilSimulasi(); return; }
  if (step === "konfirmasi" && state.packetKey) { openSimulasiKonfirmasi(state.packetKey); return; }
  loadSimulasiMenu();
}

function simTampilkanPopupBackSimulasi() {
  if (simState.exitPopupOpen) return;
  simState.exitPopupOpen = true;

  var overlay = document.createElement("div"); overlay.id = "simBackConfirmOverlay"; overlay.className = "sim-modal-overlay";
  overlay.innerHTML = '<div class="sim-confirm-modal-box"><div class="sim-confirm-modal-ic">!</div><h3 class="sim-confirm-modal-title">Akhiri Simulasi?</h3><p class="sim-confirm-modal-desc">Apakah kamu yakin ingin mengakhiri simulasi ini? Progress yang sudah dikerjakan akan dihitung sebagai hasil.</p><div class="sim-confirm-modal-actions"><button class="sim-btn-lanjut" id="simBackLanjutBtn">Lanjut</button><button class="sim-btn-akhiri" id="simBackAkhiriBtn">Akhiri</button></div></div>';
  document.body.appendChild(overlay);

  document.getElementById("simBackLanjutBtn").onclick = simTutupPopupBackSimulasi;
  document.getElementById("simBackAkhiriBtn").onclick = function () { simTutupPopupBackSimulasi(); selesaikanSimulasi(); };
}

function simTutupPopupBackSimulasi() {
  simState.exitPopupOpen = false;
  var el = document.getElementById("simBackConfirmOverlay");
  if (el) el.remove();
}

function simCleanupExamOverlay() {
  if (simState.quizActive) { selesaikanSimulasi(); }
  var root = document.getElementById("simExamRoot");
  if (root) root.remove();
  tutupPopupDaftarSoal();
  simTutupPopupBackSimulasi();
  simUnmountRotateNotice();
  var finishOverlay = document.getElementById("simFinishConfirmOverlay");
  if (finishOverlay) finishOverlay.remove();
  var qDetailOverlay = document.getElementById("simQDetailOverlay");
  if (qDetailOverlay) qDetailOverlay.remove();
  if (simState.timerInterval) clearInterval(simState.timerInterval);
  window.speechSynthesis.cancel();
  simRemoveExtraListeners();
}

var UI = (function () {
  // DOM references
  var screenSelection, screenGameplay;
  var songList, songTitleDisplay, progressBar, noteNameEl, pianoEl;
  var overlayCountdown, countdownNumber;
  var overlayPause, overlayComplete, completeMessage;

  // Key elements mapped by note name (e.g. 'C4' -> <div>)
  var keyElements = {};

  // Currently highlighted key element and its class
  var highlightedKey = null;
  var highlightedClass = '';

  // Guard: block song clicks briefly after exiting gameplay
  var songClicksBlocked = false;

  // Solfège mappings
  var SOLFEGE = { 'C': 'Do', 'D': 'Re', 'E': 'Mi', 'F': 'Fa', 'G': 'Sol', 'A': 'La', 'B': 'Si' };
  var SOLFEGE_BLACK = { 'Cs': 'Do#', 'Ds': 'Re#', 'Fs': 'Fa#', 'Gs': 'Sol#', 'As': 'La#' };

  // Piano layout: 2 octaves C4-B5
  var WHITE_NOTES_OCT = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];
  var OCTAVES = [4, 5];

  // Black key info: [noteLetter, position offset within the group of 7 white keys]
  // Position is percentage offset from the left of the white key before it
  var BLACK_KEYS_PER_OCT = [
    { note: 'Cs', afterWhite: 0 }, // between C and D
    { note: 'Ds', afterWhite: 1 }, // between D and E
    { note: 'Fs', afterWhite: 3 }, // between F and G
    { note: 'Gs', afterWhite: 4 }, // between G and A
    { note: 'As', afterWhite: 5 }  // between A and B
  ];

  function init() {
    screenSelection = document.getElementById('screen-selection');
    screenGameplay = document.getElementById('screen-gameplay');
    songList = document.getElementById('song-list');
    songTitleDisplay = document.getElementById('song-title');
    progressBar = document.getElementById('progress-bar');
    noteNameEl = document.getElementById('note-name');
    pianoEl = document.getElementById('piano');
    overlayCountdown = document.getElementById('overlay-countdown');
    countdownNumber = document.getElementById('countdown-number');
    overlayPause = document.getElementById('overlay-pause');
    overlayComplete = document.getElementById('overlay-complete');
    completeMessage = document.getElementById('complete-message');

    buildSongList();
    buildPiano();
    wireButtons();

    Game.setCallbacks({
      onNoteChange: handleNoteChange,
      onNoteClear: handleNoteClear,
      onProgress: handleProgress,
      onCountdownTick: handleCountdownTick,
      onCountdownDone: handleCountdownDone,
      onComplete: handleComplete,
      onDemoStart: handleDemoStart,
      onDemoStop: handleDemoStop
    });
  }

  // ── Song List ──

  function buildSongList() {
    songList.innerHTML = '';
    SONGS.forEach(function (song) {
      var totalNotes = song.notes.length * (song.repeat || 1);
      var diff = song.difficulty.toLowerCase();
      var card = document.createElement('div');
      card.className = 'song-card';
      card.dataset.difficulty = diff;
      card.innerHTML =
        '<div class="song-card-title">' + song.title + '</div>' +
        '<div class="song-card-meta">' +
          (song.artist ? '<span class="song-card-artist">' + song.artist + '</span>' : '') +
          '<span class="song-card-badge">' + song.difficulty + '</span>' +
          '<span class="song-card-notes">' + totalNotes + ' notes</span>' +
        '</div>';
      card.addEventListener('click', function () {
        if (songClicksBlocked) return;
        PianoAudio.init();
        selectSong(song);
      });
      songList.appendChild(card);
    });
  }

  function selectSong(song) {
    songTitleDisplay.textContent = song.title;
    showScreen('gameplay');
    Game.startSong(song);
  }

  // ── Piano Keyboard ──

  function buildPiano() {
    pianoEl.innerHTML = '';
    keyElements = {};

    var totalWhites = WHITE_NOTES_OCT.length * OCTAVES.length;
    var whiteKeyWidth = 100 / totalWhites; // percentage

    // Build white keys
    var whiteIndex = 0;
    OCTAVES.forEach(function (oct) {
      WHITE_NOTES_OCT.forEach(function (noteLetter) {
        var noteName = noteLetter + oct;
        var key = document.createElement('div');
        key.className = 'key-white';
        key.dataset.note = noteName;
        var label = document.createElement('span');
        label.className = 'key-label';
        label.textContent = SOLFEGE[noteLetter];
        key.appendChild(label);
        pianoEl.appendChild(key);
        keyElements[noteName] = key;
        wireKeyEvents(key, noteName);
        whiteIndex++;
      });
    });

    // Build black keys
    OCTAVES.forEach(function (oct, octIdx) {
      BLACK_KEYS_PER_OCT.forEach(function (bk) {
        var noteName = bk.note + oct;
        var key = document.createElement('div');
        key.className = 'key-black';
        key.dataset.note = noteName;
        var label = document.createElement('span');
        label.className = 'key-label';
        label.textContent = SOLFEGE_BLACK[bk.note];
        key.appendChild(label);

        // Position: centered between the two white keys it sits between
        var whitePos = octIdx * WHITE_NOTES_OCT.length + bk.afterWhite;
        var blackKeyWidthPct = 5.5; // matches CSS .key-black width
        var leftPct = (whitePos + 1) * whiteKeyWidth - blackKeyWidthPct / 2;
        key.style.left = leftPct + '%';

        pianoEl.appendChild(key);
        keyElements[noteName] = key;

        // Map flat equivalents to same element
        var flatMap = { 'Cs': 'Db', 'Ds': 'Eb', 'Fs': 'Gb', 'Gs': 'Ab', 'As': 'Bb' };
        if (flatMap[bk.note]) {
          keyElements[flatMap[bk.note] + oct] = key;
        }

        wireKeyEvents(key, noteName);
      });
    });
  }

  function wireKeyEvents(keyEl, noteName) {
    keyEl.addEventListener('pointerdown', function (e) {
      e.preventDefault();
      Game.pressNote(noteName);
    });
  }

  // ── Highlight ──

  function clearHighlight() {
    if (highlightedKey) {
      highlightedKey.classList.remove('highlight-green', 'highlight-yellow', 'highlight-red');
      highlightedKey = null;
      highlightedClass = '';
    }
  }

  function highlightKey(noteName, colorClass) {
    clearHighlight();
    var el = keyElements[noteName];
    if (!el) return;
    el.classList.add(colorClass);
    highlightedKey = el;
    highlightedClass = colorClass;
  }

  // ── Screens ──

  function showScreen(name) {
    screenSelection.classList.remove('active');
    screenGameplay.classList.remove('active');
    if (name === 'selection') {
      screenSelection.classList.add('active');
    } else {
      screenGameplay.classList.add('active');
    }
  }

  function showOverlay(id) {
    overlayCountdown.classList.add('hidden');
    overlayPause.classList.add('hidden');
    overlayComplete.classList.add('hidden');
    if (id === 'countdown') overlayCountdown.classList.remove('hidden');
    if (id === 'pause') overlayPause.classList.remove('hidden');
    if (id === 'complete') overlayComplete.classList.remove('hidden');
  }

  function hideAllOverlays() {
    overlayCountdown.classList.add('hidden');
    overlayPause.classList.add('hidden');
    overlayComplete.classList.add('hidden');
  }

  // ── Game Callbacks ──

  function handleNoteChange(note, colorClass) {
    // Format display: 'Cs4' -> 'C#4', 'Eb5' -> 'Eb5', 'C4' -> 'C4'
    var display = note;
    if (note.length === 3 && note[1] === 's') {
      display = note[0] + '#' + note[2];
    }
    noteNameEl.textContent = display;
    highlightKey(note, colorClass);
  }

  function handleNoteClear() {
    clearHighlight();
    noteNameEl.textContent = '';
  }

  function handleProgress(pct) {
    progressBar.style.width = pct + '%';
  }

  function handleCountdownTick(n) {
    showOverlay('countdown');
    countdownNumber.textContent = n;
    // Re-trigger animation
    countdownNumber.style.animation = 'none';
    // Force reflow
    void countdownNumber.offsetWidth;
    countdownNumber.style.animation = 'pulse 0.6s ease-in-out';
  }

  function handleCountdownDone() {
    hideAllOverlays();
  }

  function handleComplete(song) {
    var totalNotes = song.notes.length * (song.repeat || 1);
    completeMessage.textContent = 'You played all ' + totalNotes + ' notes of "' + song.title + '"!';
    clearHighlight();
    noteNameEl.textContent = '';
    showOverlay('complete');
  }

  function handleDemoStart() {
    var btn = document.getElementById('btn-demo');
    btn.textContent = '\u25A0'; // square (stop) icon
    btn.classList.add('demo-active');
  }

  function handleDemoStop() {
    var btn = document.getElementById('btn-demo');
    btn.textContent = '\u25B6'; // play icon
    btn.classList.remove('demo-active');
  }

  // ── Button Wiring ──

  function wireButtons() {
    // Demo toggle
    document.getElementById('btn-demo').addEventListener('pointerdown', function (e) {
      e.preventDefault();
      if (Game.getState() === Game.State.DEMO) {
        Game.stopDemo();
      } else {
        Game.demo();
      }
    });

    // Label toggle
    document.getElementById('btn-labels').addEventListener('pointerdown', function (e) {
      e.preventDefault();
      pianoEl.classList.toggle('hide-labels');
    });

    // Header buttons
    document.getElementById('btn-exit').addEventListener('pointerdown', function (e) {
      e.preventDefault();
      doExit();
    });
    document.getElementById('btn-pause').addEventListener('pointerdown', function (e) {
      e.preventDefault();
      Game.pause();
      clearHighlight();
      showOverlay('pause');
    });
    document.getElementById('btn-restart').addEventListener('pointerdown', function (e) {
      e.preventDefault();
      clearHighlight();
      Game.restart();
    });

    // Pause overlay buttons
    document.getElementById('btn-resume').addEventListener('pointerdown', function (e) {
      e.preventDefault();
      hideAllOverlays();
      Game.resume(); // resume re-emits note change via callback
    });
    document.getElementById('btn-pause-restart').addEventListener('pointerdown', function (e) {
      e.preventDefault();
      hideAllOverlays();
      clearHighlight();
      Game.restart();
    });
    document.getElementById('btn-pause-exit').addEventListener('pointerdown', function (e) {
      e.preventDefault();
      doExit();
    });

    // Completion overlay buttons
    document.getElementById('btn-complete-restart').addEventListener('pointerdown', function (e) {
      e.preventDefault();
      hideAllOverlays();
      clearHighlight();
      Game.restart();
    });
    document.getElementById('btn-complete-exit').addEventListener('pointerdown', function (e) {
      e.preventDefault();
      doExit();
    });
  }

  function doExit() {
    hideAllOverlays();
    clearHighlight();
    handleDemoStop();
    noteNameEl.textContent = '';
    progressBar.style.width = '0%';
    Game.exit();
    songClicksBlocked = true;
    showScreen('selection');
    setTimeout(function () { songClicksBlocked = false; }, 400);
  }

  return { init: init };
})();

document.addEventListener('DOMContentLoaded', function () {
  UI.init();
});

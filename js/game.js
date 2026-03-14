var Game = (function () {
  var State = {
    IDLE: 'IDLE',
    COUNTDOWN: 'COUNTDOWN',
    PLAYING: 'PLAYING',
    PAUSED: 'PAUSED',
    COMPLETED: 'COMPLETED',
    DEMO: 'DEMO'
  };

  var HIGHLIGHT_COLORS = ['highlight-green', 'highlight-yellow', 'highlight-red'];

  // Enharmonic equivalents: sharp <-> flat
  var ENHARMONIC = {
    'Cs': 'Db', 'Db': 'Cs',
    'Ds': 'Eb', 'Eb': 'Ds',
    'Fs': 'Gb', 'Gb': 'Fs',
    'Gs': 'Ab', 'Ab': 'Gs',
    'As': 'Bb', 'Bb': 'As'
  };

  function enharmonicOf(noteName) {
    var letter = noteName.slice(0, -1);
    var oct = noteName.slice(-1);
    return ENHARMONIC[letter] ? ENHARMONIC[letter] + oct : null;
  }

  var state = State.IDLE;
  var currentSong = null;
  var noteIndex = 0;
  var colorIndex = 0;
  var countdownTimer = null;
  var noteTimer = null;
  var waitingForNext = false; // true during delay between notes

  // Callbacks set by UI
  var onNoteChange = null;
  var onNoteClear = null;
  var onProgress = null;
  var onCountdownTick = null;
  var onCountdownDone = null;
  var onComplete = null;
  var onDemoStart = null;
  var onDemoStop = null;

  function setCallbacks(cbs) {
    onNoteChange = cbs.onNoteChange || null;
    onNoteClear = cbs.onNoteClear || null;
    onProgress = cbs.onProgress || null;
    onCountdownTick = cbs.onCountdownTick || null;
    onCountdownDone = cbs.onCountdownDone || null;
    onComplete = cbs.onComplete || null;
    onDemoStart = cbs.onDemoStart || null;
    onDemoStop = cbs.onDemoStop || null;
  }

  function startSong(song) {
    clearTimeout(noteTimer);
    waitingForNext = false;
    currentSong = song;
    noteIndex = 0;
    colorIndex = 0;
    state = State.COUNTDOWN;
    runCountdown(3);
  }

  function runCountdown(n) {
    if (n <= 0) {
      state = State.PLAYING;
      if (onCountdownDone) onCountdownDone();
      emitNoteChange();
      emitProgress();
      return;
    }
    if (onCountdownTick) onCountdownTick(n);
    countdownTimer = setTimeout(function () {
      runCountdown(n - 1);
    }, 800);
  }

  function getTotalNotes() {
    if (!currentSong) return 0;
    return currentSong.notes.length * (currentSong.repeat || 1);
  }

  function getNoteAt(idx) {
    if (!currentSong) return null;
    return currentSong.notes[idx % currentSong.notes.length];
  }

  function getBeatDelay() {
    if (!currentSong || !currentSong.tempo) return 0;
    // Half-beat delay: gives rhythm feel without being too slow
    return Math.round(60000 / currentSong.tempo * 0.5);
  }

  function emitNoteChange() {
    if (onNoteChange && currentSong) {
      var note = getNoteAt(noteIndex);
      var highlightClass = HIGHLIGHT_COLORS[colorIndex % HIGHLIGHT_COLORS.length];
      onNoteChange(note, highlightClass);
    }
  }

  function emitProgress() {
    if (onProgress && currentSong) {
      var pct = (noteIndex / getTotalNotes()) * 100;
      onProgress(pct);
    }
  }

  function pressNote(noteName) {
    // Always play the sound regardless of state
    PianoAudio.playNote(noteName);

    if (state !== State.PLAYING) return;
    if (!currentSong) return;
    if (waitingForNext) return; // still waiting for next note to appear

    var expected = getNoteAt(noteIndex);
    if (noteName !== expected && enharmonicOf(noteName) !== expected) return;

    // Correct note
    noteIndex++;
    emitProgress();

    if (noteIndex >= getTotalNotes()) {
      state = State.COMPLETED;
      if (onProgress) onProgress(100);
      if (onComplete) onComplete(currentSong);
      return;
    }

    // Determine color for next note
    var nextNote = getNoteAt(noteIndex);
    if (nextNote === expected) {
      colorIndex++;
    } else {
      colorIndex = 0;
    }

    // Apply beat delay before showing next note
    var delay = getBeatDelay();
    if (delay > 0) {
      waitingForNext = true;
      if (onNoteClear) onNoteClear();
      noteTimer = setTimeout(function () {
        waitingForNext = false;
        if (state === State.PLAYING) {
          emitNoteChange();
        }
      }, delay);
    } else {
      emitNoteChange();
    }
  }

  function pause() {
    if (state === State.PLAYING) {
      state = State.PAUSED;
      clearTimeout(noteTimer);
      waitingForNext = false;
    }
  }

  function resume() {
    if (state === State.PAUSED) {
      state = State.PLAYING;
      emitNoteChange();
      emitProgress();
    }
  }

  function restart() {
    clearTimeout(countdownTimer);
    clearTimeout(noteTimer);
    waitingForNext = false;
    if (currentSong) {
      startSong(currentSong);
    }
  }

  function exit() {
    clearTimeout(countdownTimer);
    clearTimeout(noteTimer);
    waitingForNext = false;
    state = State.IDLE;
    currentSong = null;
    noteIndex = 0;
    colorIndex = 0;
  }

  function demo() {
    if (!currentSong) return;
    // Stop any current playback
    clearTimeout(countdownTimer);
    clearTimeout(noteTimer);
    waitingForNext = false;
    noteIndex = 0;
    colorIndex = 0;
    state = State.DEMO;
    if (onDemoStart) onDemoStart();
    emitProgress();
    demoStep();
  }

  function demoStep() {
    if (state !== State.DEMO || !currentSong) return;
    if (noteIndex >= getTotalNotes()) {
      state = State.COMPLETED;
      if (onProgress) onProgress(100);
      if (onNoteClear) onNoteClear();
      if (onDemoStop) onDemoStop();
      if (onComplete) onComplete(currentSong);
      return;
    }

    var note = getNoteAt(noteIndex);
    var highlightClass = HIGHLIGHT_COLORS[colorIndex % HIGHLIGHT_COLORS.length];
    if (onNoteChange) onNoteChange(note, highlightClass);
    PianoAudio.playNote(note);
    emitProgress();

    // Advance color if next note is the same
    var nextIdx = noteIndex + 1;
    if (nextIdx < getTotalNotes() && getNoteAt(nextIdx) === note) {
      colorIndex++;
    } else {
      colorIndex = 0;
    }

    noteIndex++;

    // Full beat delay at song tempo
    var beatMs = Math.round(60000 / currentSong.tempo);
    noteTimer = setTimeout(function () {
      if (state === State.DEMO) {
        if (onNoteClear) onNoteClear();
        // Short gap between notes for visual clarity
        noteTimer = setTimeout(function () {
          demoStep();
        }, Math.min(beatMs * 0.15, 80));
      }
    }, beatMs * 0.85);
  }

  function stopDemo() {
    if (state === State.DEMO) {
      clearTimeout(noteTimer);
      waitingForNext = false;
      state = State.PLAYING;
      noteIndex = 0;
      colorIndex = 0;
      if (onNoteClear) onNoteClear();
      if (onProgress) onProgress(0);
      if (onDemoStop) onDemoStop();
      // Restart into normal play mode
      startSong(currentSong);
    }
  }

  function getState() {
    return state;
  }

  return {
    State: State,
    setCallbacks: setCallbacks,
    startSong: startSong,
    pressNote: pressNote,
    pause: pause,
    resume: resume,
    restart: restart,
    demo: demo,
    stopDemo: stopDemo,
    exit: exit,
    getState: getState
  };
})();

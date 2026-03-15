var Game = (function () {
  var State = {
    IDLE: 'IDLE',
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
  var noteTimer = null;

  // Callbacks set by UI
  var onNoteChange = null;
  var onNoteClear = null;
  var onProgress = null;
  var onComplete = null;
  var onDemoStart = null;
  var onDemoStop = null;

  function setCallbacks(cbs) {
    onNoteChange = cbs.onNoteChange || null;
    onNoteClear = cbs.onNoteClear || null;
    onProgress = cbs.onProgress || null;
    onComplete = cbs.onComplete || null;
    onDemoStart = cbs.onDemoStart || null;
    onDemoStop = cbs.onDemoStop || null;
  }

  function startSong(song) {
    clearTimeout(noteTimer);
    currentSong = song;
    noteIndex = 0;
    colorIndex = 0;
    state = State.PLAYING;
    skipRests();
    emitNoteChange();
    emitProgress();
  }

  // Advance past any rest markers at current position
  function skipRests() {
    while (noteIndex < getTotalNotes() && getNoteAt(noteIndex) === '-') {
      noteIndex++;
    }
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

    var expected = getNoteAt(noteIndex);
    if (noteName !== expected && enharmonicOf(noteName) !== expected) return;

    // Correct note — advance immediately
    noteIndex++;
    skipRests();
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

    emitNoteChange();
  }

  function pause() {
    if (state === State.PLAYING) {
      state = State.PAUSED;
      clearTimeout(noteTimer);
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
    clearTimeout(noteTimer);
    if (currentSong) {
      startSong(currentSong);
    }
  }

  function exit() {
    clearTimeout(noteTimer);
    state = State.IDLE;
    currentSong = null;
    noteIndex = 0;
    colorIndex = 0;
  }

  function demo() {
    if (!currentSong) return;
    // Stop any current playback
    clearTimeout(noteTimer);
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
    var beatMs = getBeatDelay();

    // Rest: silent pause between phrases
    if (note === '-') {
      if (onNoteClear) onNoteClear();
      noteIndex++;
      emitProgress();
      noteTimer = setTimeout(function () {
        if (state === State.DEMO) demoStep();
      }, beatMs);
      return;
    }

    var highlightClass = HIGHLIGHT_COLORS[colorIndex % HIGHLIGHT_COLORS.length];
    if (onNoteChange) onNoteChange(note, highlightClass);
    PianoAudio.playNote(note);
    emitProgress();

    // Check what comes next (skip rests for color logic)
    var nextIdx = noteIndex + 1;
    while (nextIdx < getTotalNotes() && getNoteAt(nextIdx) === '-') nextIdx++;
    var nextNote = nextIdx < getTotalNotes() ? getNoteAt(nextIdx) : null;
    var sameAsNext = (nextNote === note);

    if (sameAsNext) {
      colorIndex++;
    } else {
      colorIndex = 0;
    }

    noteIndex++;

    // Hold note for 60% of beat, then clear for 40% (the "halt")
    var holdMs = Math.round(beatMs * 0.6);
    var haltMs = beatMs - holdMs;

    noteTimer = setTimeout(function () {
      if (state !== State.DEMO) return;
      if (onNoteClear) onNoteClear();
      noteTimer = setTimeout(function () {
        if (state === State.DEMO) demoStep();
      }, haltMs);
    }, holdMs);
  }

  function stopDemo() {
    if (state === State.DEMO) {
      clearTimeout(noteTimer);
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

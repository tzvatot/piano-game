var Game = (function () {
  var State = {
    IDLE: 'IDLE',
    COUNTDOWN: 'COUNTDOWN',
    PLAYING: 'PLAYING',
    PAUSED: 'PAUSED',
    COMPLETED: 'COMPLETED'
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

  function setCallbacks(cbs) {
    onNoteChange = cbs.onNoteChange || null;
    onNoteClear = cbs.onNoteClear || null;
    onProgress = cbs.onProgress || null;
    onCountdownTick = cbs.onCountdownTick || null;
    onCountdownDone = cbs.onCountdownDone || null;
    onComplete = cbs.onComplete || null;
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

  function getBeatDelay() {
    if (!currentSong || !currentSong.tempo) return 0;
    // Half-beat delay: gives rhythm feel without being too slow
    return Math.round(60000 / currentSong.tempo * 0.5);
  }

  function emitNoteChange() {
    if (onNoteChange && currentSong) {
      var note = currentSong.notes[noteIndex];
      var highlightClass = HIGHLIGHT_COLORS[colorIndex % HIGHLIGHT_COLORS.length];
      onNoteChange(note, highlightClass);
    }
  }

  function emitProgress() {
    if (onProgress && currentSong) {
      var pct = (noteIndex / currentSong.notes.length) * 100;
      onProgress(pct);
    }
  }

  function pressNote(noteName) {
    // Always play the sound regardless of state
    PianoAudio.playNote(noteName);

    if (state !== State.PLAYING) return;
    if (!currentSong) return;
    if (waitingForNext) return; // still waiting for next note to appear

    var expected = currentSong.notes[noteIndex];
    if (noteName !== expected && enharmonicOf(noteName) !== expected) return;

    // Correct note
    noteIndex++;
    emitProgress();

    if (noteIndex >= currentSong.notes.length) {
      state = State.COMPLETED;
      if (onProgress) onProgress(100);
      if (onComplete) onComplete(currentSong);
      return;
    }

    // Determine color for next note
    var nextNote = currentSong.notes[noteIndex];
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
    exit: exit,
    getState: getState
  };
})();

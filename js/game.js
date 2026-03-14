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
    // e.g. 'As4' -> 'Bb4', 'Bb4' -> 'As4'
    var letter = noteName.slice(0, -1);
    var oct = noteName.slice(-1);
    return ENHARMONIC[letter] ? ENHARMONIC[letter] + oct : null;
  }

  var state = State.IDLE;
  var currentSong = null;
  var noteIndex = 0;
  var colorIndex = 0;
  var countdownTimer = null;

  // Callbacks set by UI
  var onNoteChange = null;
  var onProgress = null;
  var onCountdownTick = null;
  var onCountdownDone = null;
  var onComplete = null;

  function setCallbacks(cbs) {
    onNoteChange = cbs.onNoteChange || null;
    onProgress = cbs.onProgress || null;
    onCountdownTick = cbs.onCountdownTick || null;
    onCountdownDone = cbs.onCountdownDone || null;
    onComplete = cbs.onComplete || null;
  }

  function startSong(song) {
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

    var expected = currentSong.notes[noteIndex];
    if (noteName !== expected && enharmonicOf(noteName) !== expected) return; // wrong note, ignore

    // Correct note
    noteIndex++;

    if (noteIndex >= currentSong.notes.length) {
      // Song completed
      state = State.COMPLETED;
      if (onProgress) onProgress(100);
      if (onComplete) onComplete(currentSong);
      return;
    }

    // Check if next note is same as current — cycle color
    var nextNote = currentSong.notes[noteIndex];
    if (nextNote === expected) {
      colorIndex++;
    } else {
      colorIndex = 0;
    }

    emitNoteChange();
    emitProgress();
  }

  function pause() {
    if (state === State.PLAYING) {
      state = State.PAUSED;
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
    if (currentSong) {
      startSong(currentSong);
    }
  }

  function exit() {
    clearTimeout(countdownTimer);
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

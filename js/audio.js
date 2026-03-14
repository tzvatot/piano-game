var PianoAudio = (function () {
  var ctx = null;

  // Equal temperament frequencies: A4 = 440 Hz
  // Note naming: 's' for sharp (e.g., Cs4 = C#4)
  var NOTE_FREQ = {};
  var NOTE_NAMES = [
    'C', 'Cs', 'D', 'Ds', 'E', 'F', 'Fs', 'G', 'Gs', 'A', 'As', 'B'
  ];

  // Pre-compute frequencies for octaves 3-6
  for (var oct = 3; oct <= 6; oct++) {
    for (var i = 0; i < 12; i++) {
      var semitone = (oct - 4) * 12 + (i - 9); // semitones from A4
      NOTE_FREQ[NOTE_NAMES[i] + oct] = 440 * Math.pow(2, semitone / 12);
    }
  }

  // Also support 'b' (flat) notation by mapping to sharp equivalents
  NOTE_FREQ['Db3'] = NOTE_FREQ['Cs3'];
  NOTE_FREQ['Eb3'] = NOTE_FREQ['Ds3'];
  NOTE_FREQ['Gb3'] = NOTE_FREQ['Fs3'];
  NOTE_FREQ['Ab3'] = NOTE_FREQ['Gs3'];
  NOTE_FREQ['Bb3'] = NOTE_FREQ['As3'];
  NOTE_FREQ['Db4'] = NOTE_FREQ['Cs4'];
  NOTE_FREQ['Eb4'] = NOTE_FREQ['Ds4'];
  NOTE_FREQ['Gb4'] = NOTE_FREQ['Fs4'];
  NOTE_FREQ['Ab4'] = NOTE_FREQ['Gs4'];
  NOTE_FREQ['Bb4'] = NOTE_FREQ['As4'];
  NOTE_FREQ['Db5'] = NOTE_FREQ['Cs5'];
  NOTE_FREQ['Eb5'] = NOTE_FREQ['Ds5'];
  NOTE_FREQ['Gb5'] = NOTE_FREQ['Fs5'];
  NOTE_FREQ['Ab5'] = NOTE_FREQ['Gs5'];
  NOTE_FREQ['Bb5'] = NOTE_FREQ['As5'];

  function init() {
    if (ctx) return;
    ctx = new (window.AudioContext || window.webkitAudioContext)();
    if (ctx.state === 'suspended') {
      ctx.resume();
    }
  }

  function playNote(noteName, duration) {
    if (!ctx) init();
    duration = duration || 0.4;

    var freq = NOTE_FREQ[noteName];
    if (!freq) return;

    var now = ctx.currentTime;

    // Master gain for ADSR envelope
    var masterGain = ctx.createGain();
    masterGain.connect(ctx.destination);
    masterGain.gain.setValueAtTime(0, now);

    // Attack
    masterGain.gain.linearRampToValueAtTime(0.35, now + 0.01);
    // Decay
    masterGain.gain.linearRampToValueAtTime(0.25, now + 0.08);
    // Sustain (hold)
    masterGain.gain.setValueAtTime(0.25, now + duration - 0.1);
    // Release
    masterGain.gain.linearRampToValueAtTime(0, now + duration);

    // Triangle wave (fundamental)
    var osc1 = ctx.createOscillator();
    osc1.type = 'triangle';
    osc1.frequency.setValueAtTime(freq, now);
    var g1 = ctx.createGain();
    g1.gain.setValueAtTime(0.6, now);
    osc1.connect(g1);
    g1.connect(masterGain);

    // 2nd harmonic (sine)
    var osc2 = ctx.createOscillator();
    osc2.type = 'sine';
    osc2.frequency.setValueAtTime(freq * 2, now);
    var g2 = ctx.createGain();
    g2.gain.setValueAtTime(0.25, now);
    osc2.connect(g2);
    g2.connect(masterGain);

    // 3rd harmonic (sine, quieter)
    var osc3 = ctx.createOscillator();
    osc3.type = 'sine';
    osc3.frequency.setValueAtTime(freq * 3, now);
    var g3 = ctx.createGain();
    g3.gain.setValueAtTime(0.1, now);
    osc3.connect(g3);
    g3.connect(masterGain);

    osc1.start(now);
    osc2.start(now);
    osc3.start(now);
    osc1.stop(now + duration);
    osc2.stop(now + duration);
    osc3.stop(now + duration);
  }

  return {
    init: init,
    playNote: playNote
  };
})();

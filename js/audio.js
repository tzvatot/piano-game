var PianoAudio = (function () {
  var ctx = null;
  var buffers = {}; // noteName -> AudioBuffer
  var loading = false;
  var loaded = false;

  var BASE_URL = 'https://gleitz.github.io/midi-js-soundfonts/FluidR3_GM/acoustic_grand_piano-mp3/';

  // Map internal note names to CDN file names
  // CDN uses flat notation for black keys: Db4, Eb4, Gb4, Ab4, Bb4
  var SHARP_TO_FLAT = {
    'Cs': 'Db', 'Ds': 'Eb', 'Fs': 'Gb', 'Gs': 'Ab', 'As': 'Bb'
  };

  // All notes on our 2-octave keyboard (C4-B5)
  var ALL_NOTES = [
    'C4','Db4','D4','Eb4','E4','F4','Gb4','G4','Ab4','A4','Bb4','B4',
    'C5','Db5','D5','Eb5','E5','F5','Gb5','G5','Ab5','A5','Bb5','B5'
  ];

  function getCdnName(noteName) {
    // Convert 'Cs4' -> 'Db4', 'Ds5' -> 'Eb5', etc. for CDN lookup
    var letter = noteName.slice(0, -1);
    var oct = noteName.slice(-1);
    if (SHARP_TO_FLAT[letter]) {
      return SHARP_TO_FLAT[letter] + oct;
    }
    return noteName;
  }

  function init() {
    if (ctx) {
      if (ctx.state === 'suspended') ctx.resume();
      return;
    }
    ctx = new (window.AudioContext || window.webkitAudioContext)();
    if (ctx.state === 'suspended') ctx.resume();
    if (!loading && !loaded) loadSamples();
  }

  function loadSamples() {
    loading = true;
    var remaining = ALL_NOTES.length;

    ALL_NOTES.forEach(function (note) {
      var url = BASE_URL + note + '.mp3';
      var xhr = new XMLHttpRequest();
      xhr.open('GET', url, true);
      xhr.responseType = 'arraybuffer';
      xhr.onload = function () {
        if (xhr.status === 200) {
          ctx.decodeAudioData(xhr.response, function (buffer) {
            buffers[note] = buffer;
            remaining--;
            if (remaining === 0) {
              loaded = true;
              loading = false;
            }
          }, function () {
            remaining--;
            if (remaining === 0) { loaded = true; loading = false; }
          });
        } else {
          remaining--;
          if (remaining === 0) { loaded = true; loading = false; }
        }
      };
      xhr.onerror = function () {
        remaining--;
        if (remaining === 0) { loaded = true; loading = false; }
      };
      xhr.send();
    });
  }

  function playNote(noteName) {
    if (!ctx) init();

    // Normalize note name to CDN flat notation
    var cdnName = getCdnName(noteName);
    var buffer = buffers[cdnName];

    if (buffer) {
      var source = ctx.createBufferSource();
      source.buffer = buffer;
      var gain = ctx.createGain();
      gain.gain.setValueAtTime(0.8, ctx.currentTime);
      // Fade out after 1.5 seconds for a natural decay
      gain.gain.setTargetAtTime(0, ctx.currentTime + 0.8, 0.3);
      source.connect(gain);
      gain.connect(ctx.destination);
      source.start(0);
    } else {
      // Fallback: simple oscillator if sample not yet loaded
      playFallback(noteName);
    }
  }

  // Fallback oscillator for when samples haven't loaded yet
  function playFallback(noteName) {
    var NOTE_NAMES = ['C','Cs','D','Ds','E','F','Fs','G','Gs','A','As','B'];
    var FLAT_MAP = {'Db':'Cs','Eb':'Ds','Gb':'Fs','Ab':'Gs','Bb':'As'};
    var letter = noteName.slice(0, -1);
    var oct = parseInt(noteName.slice(-1));
    if (FLAT_MAP[letter]) letter = FLAT_MAP[letter];
    var idx = NOTE_NAMES.indexOf(letter);
    if (idx === -1) return;
    var semitone = (oct - 4) * 12 + (idx - 9);
    var freq = 440 * Math.pow(2, semitone / 12);

    var now = ctx.currentTime;
    var osc = ctx.createOscillator();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(freq, now);
    var g = ctx.createGain();
    g.gain.setValueAtTime(0.3, now);
    g.gain.linearRampToValueAtTime(0, now + 0.3);
    osc.connect(g);
    g.connect(ctx.destination);
    osc.start(now);
    osc.stop(now + 0.3);
  }

  return {
    init: init,
    playNote: playNote
  };
})();

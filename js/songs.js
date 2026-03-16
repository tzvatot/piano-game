var SONGS = [
  {
    id: 'twinkle',
    title: 'Twinkle Twinkle Little Star',
    artist: 'Traditional',
    desc: 'Classic lullaby and children\'s song',
    difficulty: 'Easy',
    tempo: 100,
    notes: [
      'C4','C4','G4','G4','A4','A4','G4','-',
      'F4','F4','E4','E4','D4','D4','C4','-',
      'G4','G4','F4','F4','E4','E4','D4','-',
      'G4','G4','F4','F4','E4','E4','D4','-',
      'C4','C4','G4','G4','A4','A4','G4','-',
      'F4','F4','E4','E4','D4','D4','C4'
    ]
  },
  {
    id: 'mary',
    title: 'Mary Had a Little Lamb',
    artist: 'Traditional',
    desc: 'Popular children\'s nursery rhyme',
    difficulty: 'Easy',
    tempo: 110,
    repeat: 2,
    notes: [
      'E4','D4','C4','D4','E4','E4','E4','-',
      'D4','D4','D4','-',
      'E4','G4','G4','-',
      'E4','D4','C4','D4','E4','E4','E4','E4','-',
      'D4','D4','E4','D4','C4'
    ]
  },
  {
    id: 'hotcross',
    title: 'Hot Cross Buns',
    artist: 'Traditional',
    desc: 'Simple English nursery rhyme',
    difficulty: 'Easy',
    tempo: 100,
    repeat: 3,
    notes: [
      'E4','D4','C4','-',
      'E4','D4','C4','-',
      'C4','C4','C4','C4','D4','D4','D4','D4','-',
      'E4','D4','C4'
    ]
  },
  {
    id: 'birthday',
    title: 'Happy Birthday',
    artist: 'Traditional',
    desc: 'The universal celebration song',
    difficulty: 'Medium',
    tempo: 90,
    repeat: 2,
    notes: [
      'C4','C4','D4','C4','F4','E4','-',
      'C4','C4','D4','C4','G4','F4','-',
      'C4','C4','C5','A4','F4','E4','D4','-',
      'Bb4','Bb4','A4','F4','G4','F4'
    ]
  },
  {
    id: 'jinglebells',
    title: 'Jingle Bells',
    artist: 'Traditional',
    desc: 'Classic Christmas carol favorite',
    difficulty: 'Medium',
    tempo: 130,
    notes: [
      'E4','E4','E4','E4','E4','E4','-',
      'E4','G4','C4','D4','E4','-',
      'F4','F4','F4','F4','F4','E4','E4','E4','E4','-',
      'E4','D4','D4','E4','D4','G4','-',
      'E4','E4','E4','E4','E4','E4','-',
      'E4','G4','C4','D4','E4','-',
      'F4','F4','F4','F4','F4','E4','E4','E4','E4','-',
      'G4','G4','F4','D4','C4'
    ]
  },
  {
    id: 'ode',
    title: 'Ode to Joy',
    artist: 'Beethoven',
    desc: 'Famous melody from Symphony No. 9',
    difficulty: 'Medium',
    tempo: 100,
    notes: [
      'E4','E4','F4','G4','G4','F4','E4','D4','-',
      'C4','C4','D4','E4','E4','D4','D4','-',
      'E4','E4','F4','G4','G4','F4','E4','D4','-',
      'C4','C4','D4','E4','D4','C4','C4'
    ]
  },
  {
    id: 'london',
    title: 'London Bridge Is Falling Down',
    artist: 'Traditional',
    desc: 'English children\'s nursery rhyme',
    difficulty: 'Easy',
    tempo: 110,
    repeat: 2,
    notes: [
      'G4','A4','G4','F4','E4','F4','G4','-',
      'D4','E4','F4','E4','F4','G4','-',
      'G4','A4','G4','F4','E4','F4','G4','-',
      'D4','G4','E4','C4'
    ]
  },
  {
    id: 'frere',
    title: 'Are You Sleeping (Fr\u00e8re Jacques)',
    artist: 'Traditional',
    desc: 'French children\'s round song',
    difficulty: 'Easy',
    tempo: 110,
    repeat: 2,
    notes: [
      'C4','D4','E4','C4','-',
      'C4','D4','E4','C4','-',
      'E4','F4','G4','-',
      'E4','F4','G4','-',
      'G4','A4','G4','F4','E4','C4','-',
      'G4','A4','G4','F4','E4','C4','-',
      'C4','G4','C4','-',
      'C4','G4','C4'
    ]
  },
  {
    id: 'row',
    title: 'Row Row Row Your Boat',
    artist: 'Traditional',
    desc: 'Classic children\'s round melody',
    difficulty: 'Easy',
    tempo: 90,
    repeat: 2,
    notes: [
      'C4','C4','C4','D4','E4','-',
      'E4','D4','E4','F4','G4','-',
      'C5','C5','C5','G4','G4','G4','E4','E4','E4','C4','C4','C4','-',
      'G4','F4','E4','D4','C4'
    ]
  },
  {
    id: 'scale',
    title: 'C Major Scale Up and Down',
    artist: 'Exercise',
    desc: 'Basic two-octave scale practice',
    difficulty: 'Easy',
    tempo: 90,
    repeat: 3,
    notes: [
      'C4','D4','E4','F4','G4','A4','B4','C5','-',
      'C5','B4','A4','G4','F4','E4','D4','C4'
    ]
  },

  // ── Pop Songs ──

  {
    id: 'whatislove',
    title: 'What Is Love (Haddaway)',
    artist: 'Haddaway',
    desc: 'Iconic 90s Eurodance anthem',
    difficulty: 'Easy',
    tempo: 120,
    repeat: 2,
    notes: [
      // "What is love?"
      'D4','D4','D4','F4','-',
      // "Baby don't hurt me"
      'F4','E4','D4','C4','D4','-',
      // "Don't hurt me"
      'D4','E4','F4','-',
      // "No more"
      'E4','D4','-','-',
      // "What is love?"
      'D4','D4','D4','F4','-',
      // "Baby don't hurt me"
      'F4','E4','D4','C4','D4','-',
      // "Don't hurt me, no more"
      'D4','E4','F4','E4','D4'
    ]
  },
  {
    id: 'clocks',
    title: 'Clocks (Coldplay)',
    artist: 'Coldplay',
    desc: 'Iconic descending piano arpeggio riff',
    difficulty: 'Hard',
    tempo: 90,
    repeat: 3,
    notes: [
      'Eb5','Bb4','G4', 'Eb5','Bb4','G4', 'Eb5','Bb4','G4','-',
      'Db5','Bb4','F4', 'Db5','Bb4','F4', 'Db5','Bb4','F4','-',
      'Db5','Bb4','F4', 'Db5','Bb4','F4', 'Db5','Bb4','F4','-',
      'C5','Ab4','F4',  'C5','Ab4','F4',  'C5','Ab4','F4'
    ]
  },
  {
    id: 'scientist',
    title: 'The Scientist (Coldplay)',
    artist: 'Coldplay',
    desc: 'Emotional ballad with flowing melody',
    difficulty: 'Medium',
    tempo: 55,
    notes: [
      'F4','F4','A4','A4','C5','A4','-',
      'Bb4','Bb4','A4','G4','A4','-',
      'F4','A4','C5','C5','C5','Bb4','A4','G4','-','-',
      'F4','F4','A4','A4','C5','A4','-',
      'Bb4','Bb4','A4','G4','A4','-',
      'F4','A4','C5','C5','C5','Bb4','A4','G4'
    ]
  },
  {
    id: 'letitbe',
    title: 'Let It Be (Beatles)',
    artist: 'Beatles',
    desc: 'Timeless anthem of comfort and peace',
    difficulty: 'Medium',
    tempo: 70,
    notes: [
      // "When I find myself in times of trouble"
      'E4','G4','G4','G4','A4','G4','G4','E4','-',
      // "Mother Mary comes to me"
      'G4','A4','C5','C5','B4','A4','G4','-',
      // "Speaking words of wisdom, let it be"
      'E5','E5','E5','F5','E5','D5','E5','D5','D5','C5','-','-',
      // "Let it be, let it be"
      'E5','D5','C5','-','E5','D5','C5','-',
      // "let it be, let it be"
      'E5','D5','C5','-','E5','G5','-',
      // "Whisper words of wisdom, let it be"
      'E5','E5','E5','F5','E5','D5','E5','D5','D5','C5'
    ]
  },
  {
    id: 'imagine',
    title: 'Imagine (John Lennon)',
    artist: 'John Lennon',
    desc: 'Iconic peace anthem in C major',
    difficulty: 'Easy',
    tempo: 70,
    repeat: 2,
    notes: [
      'E4','G4','E4','G4','B4','B4','A4','-',
      'E4','G4','E4','G4','B4','B4','A4','-',
      'E4','G4','B4','B4','A4','-',
      'E4','G4','E4','G4','B4','B4','A4','-','-',
      'A4','C5','A4','C5','E5','E5','D5','C5','A4','-',
      'B4','B4','B4','C5','D5','E5','D5','C5'
    ]
  },
  {
    id: 'someonelikeyou',
    title: 'Someone Like You (Adele)',
    artist: 'Adele',
    desc: 'Heart-wrenching breakup ballad',
    difficulty: 'Medium',
    tempo: 60,
    notes: [
      'E4','E4','Cs5','Cs5','B4','A4','B4','-',
      'E4','Cs5','Cs5','B4','A4','B4','Cs5','-',
      'E4','E4','Cs5','Cs5','B4','A4','B4','-',
      'E4','Cs5','Cs5','Cs5','B4','A4','Gs4','A4','B4','-','-',
      'Cs5','Cs5','B4','A4','Gs4','A4','B4','Cs5','Cs5','-',
      'Cs5','Cs5','B4','A4','Gs4','A4','B4','Cs5'
    ]
  },
  {
    id: 'thousandyears',
    title: 'A Thousand Years (Christina Perri)',
    artist: 'Christina Perri',
    desc: 'Romantic Twilight saga theme song',
    difficulty: 'Medium',
    tempo: 55,
    notes: [
      'D4','D4','C4','Bb4','C4','D4','Eb4','D4','-',
      'D4','D4','C4','Bb4','C4','D4','-',
      'Eb4','D4','C4','Bb4','C4','-','-',
      'F5','Eb5','D5','C5','D5','Eb5','F5','Eb5','D5','-',
      'F5','Eb5','D5','C5','D5','-',
      'Eb5','F5','Eb5','D5','C5','D5','Eb5','F5'
    ]
  },
  {
    id: 'hallelujah',
    title: 'Hallelujah (Leonard Cohen)',
    artist: 'Leonard Cohen',
    desc: 'Hauntingly beautiful sacred ballad',
    difficulty: 'Medium',
    tempo: 50,
    notes: [
      'C4','E4','E4','G4','G4','G4','G4','A4','A4','-',
      'A4','A4','G4','G4','G4','G4','A4','E4','-',
      'E4','E4','G4','A4','A4','A4','G4','G4','F4','G4','E4','-',
      'E4','G4','G4','G4','G4','A4','A4','B4','-',
      'B4','C5','C5','C5','D5','C5','C5','B4','-',
      'A4','C5','C5','C5','C5','D5','E5','D5','D5','C5','-','-',
      'F4','A4','A4','A4','G4','E4','-',
      'F4','A4','A4','A4','G4','E4','-',
      'F4','A4','A4','A4','G4','E4','-',
      'E4','G4','A4','A4','G4','E4','D4','C4'
    ]
  },
  {
    id: 'canthelp',
    title: "Can't Help Falling in Love (Elvis)",
    artist: 'Elvis Presley',
    desc: 'Classic romantic ballad from Blue Hawaii',
    difficulty: 'Medium',
    tempo: 60,
    notes: [
      'F4','C5','G4','F4','G4','A4','Bb4','A4','G4','-',
      'C4','D4','E4','F4','G4','A4','Bb4','A4','G4','F4','-','-',
      'E4','A4','C5','E5','D5','-',
      'E4','A4','C5','E5','D5','-',
      'C5','A4','C5','A4','Bb4','A4','-',
      'F4','C5','F4','G4','A4','Bb4','A4','G4','-',
      'C4','D4','E4','F4','G4','A4','Bb4','A4','G4','F4'
    ]
  },
  {
    id: 'riverflows',
    title: 'River Flows in You (Yiruma)',
    artist: 'Yiruma',
    desc: 'Delicate flowing piano composition',
    difficulty: 'Hard',
    tempo: 60,
    notes: [
      'A4','B4','C5','B4','A4','G4','A4','E4','-',
      'A4','B4','C5','D5','E5','D5','C5','B4','A4','-',
      'A4','B4','C5','B4','A4','G4','A4','E4','-',
      'A4','B4','C5','D5','E5','D5','C5','B4','A4','G4','A4'
    ]
  },
  {
    id: 'leanonme',
    title: 'Lean on Me (Bill Withers)',
    artist: 'Bill Withers',
    desc: 'Soulful anthem of friendship',
    difficulty: 'Easy',
    tempo: 75,
    notes: [
      'C5','C5','D5','E5','F5','F5','E5','D5','-',
      'C5','C5','D5','E5','E5','D5','-',
      'C5','C5','D5','E5','F5','-',
      'F5','E5','D5','C5','C5','D5','E5','B4','C5','-','-',
      'E5','D5','C5','E5','E5','D5','D5','C5','-',
      'C5','C5','B4','A4','G4','-',
      'C5','D5','E5','E5','C5','D5','-',
      'E5','D5','C5','C5','B4','C5'
    ]
  },
  {
    id: 'heyjude',
    title: 'Hey Jude (Beatles)',
    artist: 'Beatles',
    desc: 'Epic singalong anthem with na-na coda',
    difficulty: 'Hard',
    tempo: 65,
    notes: [
      'C5','A4','A4','C5','D5','G4','-',
      'G4','A4','Bb4','F5','F5','E5','C5','D5','C5','Bb4','A4','-',
      'C5','D5','D5','D5','G5','F5','E5','F5','D5','C5','-',
      'F4','G4','A4','D5','C5','C5','Bb4','A4','E4','F4','-','-',
      'F4','A4','C5','G5','F5','G5','F5','G5','F5','D5','C5'
    ]
  },
  {
    id: 'overrainbow',
    title: 'Somewhere Over the Rainbow',
    artist: 'Harold Arlen',
    desc: 'Dreamy classic from The Wizard of Oz',
    difficulty: 'Medium',
    tempo: 70,
    notes: [
      'C4','C5','B4','G4','A4','B4','C5','-',
      'C4','A4','G4','-',
      'A4','G4','E4','F4','G4','A4','G4',
      'E4','F4','G4','E4','C4','-','-',
      'C4','C5','B4','G4','A4','B4','C5','-',
      'C4','A4','G4','-',
      'A4','G4','E4','F4','G4','A4','B4','C5',
      'C5','B4','A4','G4','A4'
    ]
  }
];

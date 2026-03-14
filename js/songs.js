var SONGS = [
  {
    id: 'twinkle',
    title: 'Twinkle Twinkle Little Star',
    difficulty: 'Easy',
    tempo: 100,
    notes: [
      'C4','C4','G4','G4','A4','A4','G4',
      'F4','F4','E4','E4','D4','D4','C4',
      'G4','G4','F4','F4','E4','E4','D4',
      'G4','G4','F4','F4','E4','E4','D4',
      'C4','C4','G4','G4','A4','A4','G4',
      'F4','F4','E4','E4','D4','D4','C4'
    ]
  },
  {
    id: 'mary',
    title: 'Mary Had a Little Lamb',
    difficulty: 'Easy',
    tempo: 110,
    repeat: 2,
    notes: [
      'E4','D4','C4','D4','E4','E4','E4',
      'D4','D4','D4',
      'E4','G4','G4',
      'E4','D4','C4','D4','E4','E4','E4','E4',
      'D4','D4','E4','D4','C4'
    ]
  },
  {
    id: 'hotcross',
    title: 'Hot Cross Buns',
    difficulty: 'Easy',
    tempo: 100,
    repeat: 3,
    notes: [
      'E4','D4','C4',
      'E4','D4','C4',
      'C4','C4','C4','C4','D4','D4','D4','D4',
      'E4','D4','C4'
    ]
  },
  {
    id: 'birthday',
    title: 'Happy Birthday',
    difficulty: 'Medium',
    tempo: 90,
    repeat: 2,
    notes: [
      'C4','C4','D4','C4','F4','E4',
      'C4','C4','D4','C4','G4','F4',
      'C4','C4','C5','A4','F4','E4','D4',
      'Bb4','Bb4','A4','F4','G4','F4'
    ]
  },
  {
    id: 'jinglebells',
    title: 'Jingle Bells',
    difficulty: 'Medium',
    tempo: 130,
    notes: [
      'E4','E4','E4','E4','E4','E4',
      'E4','G4','C4','D4','E4',
      'F4','F4','F4','F4','F4','E4','E4','E4','E4',
      'E4','D4','D4','E4','D4','G4',
      'E4','E4','E4','E4','E4','E4',
      'E4','G4','C4','D4','E4',
      'F4','F4','F4','F4','F4','E4','E4','E4','E4',
      'G4','G4','F4','D4','C4'
    ]
  },
  {
    id: 'ode',
    title: 'Ode to Joy',
    difficulty: 'Medium',
    tempo: 100,
    notes: [
      'E4','E4','F4','G4','G4','F4','E4','D4',
      'C4','C4','D4','E4','E4','D4','D4',
      'E4','E4','F4','G4','G4','F4','E4','D4',
      'C4','C4','D4','E4','D4','C4','C4'
    ]
  },
  {
    id: 'london',
    title: 'London Bridge Is Falling Down',
    difficulty: 'Easy',
    tempo: 110,
    repeat: 2,
    notes: [
      'G4','A4','G4','F4','E4','F4','G4',
      'D4','E4','F4','E4','F4','G4',
      'G4','A4','G4','F4','E4','F4','G4',
      'D4','G4','E4','C4'
    ]
  },
  {
    id: 'frere',
    title: 'Are You Sleeping (Fr\u00e8re Jacques)',
    difficulty: 'Easy',
    tempo: 110,
    repeat: 2,
    notes: [
      'C4','D4','E4','C4',
      'C4','D4','E4','C4',
      'E4','F4','G4',
      'E4','F4','G4',
      'G4','A4','G4','F4','E4','C4',
      'G4','A4','G4','F4','E4','C4',
      'C4','G4','C4',
      'C4','G4','C4'
    ]
  },
  {
    id: 'row',
    title: 'Row Row Row Your Boat',
    difficulty: 'Easy',
    tempo: 90,
    repeat: 2,
    notes: [
      'C4','C4','C4','D4','E4',
      'E4','D4','E4','F4','G4',
      'C5','C5','C5','G4','G4','G4','E4','E4','E4','C4','C4','C4',
      'G4','F4','E4','D4','C4'
    ]
  },
  {
    id: 'scale',
    title: 'C Major Scale Up and Down',
    difficulty: 'Easy',
    tempo: 90,
    repeat: 3,
    notes: [
      'C4','D4','E4','F4','G4','A4','B4','C5',
      'C5','B4','A4','G4','F4','E4','D4','C4'
    ]
  },

  // ── Pop Songs ──

  {
    id: 'clocks',
    title: 'Clocks (Coldplay)',
    difficulty: 'Hard',
    tempo: 90,
    repeat: 3,
    notes: [
      // Piano riff in Eb major - descending arpeggios
      // Eb major: Eb Bb G
      'Eb5','Bb4','G4', 'Eb5','Bb4','G4', 'Eb5','Bb4','G4',
      // Bbm: Db Bb F
      'Db5','Bb4','F4', 'Db5','Bb4','F4', 'Db5','Bb4','F4',
      // Bbm repeated
      'Db5','Bb4','F4', 'Db5','Bb4','F4', 'Db5','Bb4','F4',
      // Fm: C Ab F
      'C5','Ab4','F4',  'C5','Ab4','F4',  'C5','Ab4','F4'
    ]
  },
  {
    id: 'scientist',
    title: 'The Scientist (Coldplay)',
    difficulty: 'Medium',
    tempo: 55,
    notes: [
      // Key of Dm/F - melody built on F triad with Bb
      // "Come up to meet you"
      'F4','F4','A4','A4','C5','A4',
      // "tell you I'm sorry"
      'Bb4','Bb4','A4','G4','A4',
      // "you don't know how lovely you are"
      'F4','A4','C5','C5','C5','Bb4','A4','G4',
      // "I had to find you"
      'F4','F4','A4','A4','C5','A4',
      // "tell you I need you"
      'Bb4','Bb4','A4','G4','A4',
      // "tell you I set you apart"
      'F4','A4','C5','C5','C5','Bb4','A4','G4'
    ]
  },
  {
    id: 'fixyou',
    title: 'Fix You (Coldplay)',
    difficulty: 'Hard',
    tempo: 55,
    notes: [
      // Key of Eb major - melody descends from Ab
      // "When you try your best but you don't succeed"
      'Ab4','Ab4','Ab4','G4','F4','Eb4','F4','G4','Ab4',
      // "When you get what you want but not what you need"
      'Ab4','Ab4','Ab4','G4','F4','Eb4','F4','G4',
      // "When you feel so tired but you can't sleep"
      'Ab4','Ab4','Ab4','G4','F4','Eb4','G4',
      // "Stuck in reverse"
      'Ab4','G4','F4','Eb4',
      // Chorus: "Lights will guide you home"
      'Eb5','Eb5','Db5','C5','Bb4',
      // "And ignite your bones"
      'Eb5','Eb5','Db5','C5','Bb4',
      // "And I will try to fix you"
      'Bb4','C5','Db5','Eb5','Db5','C5','Bb4'
    ]
  },
  {
    id: 'yellow',
    title: 'Yellow (Coldplay)',
    difficulty: 'Hard',
    tempo: 65,
    repeat: 2,
    notes: [
      // Key of B major - uses C#, D#, F#, G#
      // "Look at the stars"
      'Cs5','Ds5','Cs5','Ds5',
      // "Look how they shine for you"
      'Fs4','Cs5','Fs4','Cs5','B4',
      // "And everything you do"
      'Cs5','Fs4','B4','Gs4','B4','Gs4','Fs4',
      // "I came along"
      'Cs5','Ds5','Cs5','Ds5',
      // "I wrote a song for you"
      'Fs4','Cs5','Cs5','Ds5','Cs5','Ds5',
      // "And all the things you do"
      'Fs4','B4','Cs5','Fs4','B4','Gs4','B4','Gs4','Fs4'
    ]
  },
  {
    id: 'letitbe',
    title: 'Let It Be (Beatles)',
    difficulty: 'Medium',
    tempo: 70,
    notes: [
      // Key of C major - melody from noobnotes.net
      // "When I find myself in times of trouble"
      'G4','G4','G4','G4','A4','E4','G4','G4',
      // "Mother Mary comes to me"
      'C5','D5','E5','E5','E5','D5','D5','C5',
      // "Speaking words of wisdom, let it be"
      'C5','E5','E5','F5','E5','E5','D5','E5','D5','D5','C5',
      // Chorus: "Let it be, let it be"
      'E5','D5','C5','E5','G5',
      // "let it be, let it be"
      'A5','G5','E5','C5','A4','G4',
      // "Whisper words of wisdom, let it be"
      'E5','E5','E5','F5','E5','E5','D5','E5','D5','D5','C5'
    ]
  },
  {
    id: 'imagine',
    title: 'Imagine (John Lennon)',
    difficulty: 'Easy',
    tempo: 70,
    repeat: 2,
    notes: [
      // Key of C major - melody from noobnotes.net
      // "Imagine there's no heaven"
      'E4','G4','E4','G4','B4','B4','A4',
      // "It's easy if you try"
      'E4','G4','E4','G4','B4','B4','A4',
      // "No hell below us, above us only sky"
      'E4','G4','B4','B4','A4','E4','G4','E4','G4','B4','B4','A4',
      // Chorus: "Imagine all the people"
      'A4','C5','A4','C5','E5','E5','D5','C5','A4',
      // "Living for today"
      'B4','B4','B4','C5','D5','E5','D5','C5'
    ]
  },
  {
    id: 'someonelikeyou',
    title: 'Someone Like You (Adele)',
    difficulty: 'Medium',
    tempo: 60,
    notes: [
      // Key of A major - uses C#, F#, G#
      // "I heard that you're settled down"
      'E4','E4','Cs5','Cs5','B4','A4','B4',
      // "That you found a girl and you're married now"
      'E4','Cs5','Cs5','B4','A4','B4','Cs5',
      // "I heard that your dreams came true"
      'E4','E4','Cs5','Cs5','B4','A4','B4',
      // "Guess she gave you things I didn't give to you"
      'E4','Cs5','Cs5','Cs5','B4','A4','Gs4','A4','B4',
      // Chorus: "Never mind I'll find someone like you"
      'Cs5','Cs5','B4','A4','Gs4','A4','B4','Cs5','Cs5',
      // "I wish nothing but the best for you"
      'Cs5','Cs5','B4','A4','Gs4','A4','B4','Cs5'
    ]
  },
  {
    id: 'thousandyears',
    title: 'A Thousand Years (Christina Perri)',
    difficulty: 'Medium',
    tempo: 55,
    notes: [
      // Key of Bb major - uses Bb, Eb
      // "Heart beats fast, colors and promises"
      'D4','D4','C4','Bb4','C4','D4','Eb4','D4',
      // "How to be brave, how can I love"
      'D4','D4','C4','Bb4','C4','D4',
      // "When I'm afraid to fall"
      'Eb4','D4','C4','Bb4','C4',
      // Chorus: "I have died every day waiting for you"
      'F5','Eb5','D5','C5','D5','Eb5','F5','Eb5','D5',
      // "Darling don't be afraid"
      'F5','Eb5','D5','C5','D5',
      // "I have loved you for a thousand years"
      'Eb5','F5','Eb5','D5','C5','D5','Eb5','F5'
    ]
  },
  {
    id: 'perfect',
    title: 'Perfect (Ed Sheeran)',
    difficulty: 'Medium',
    tempo: 60,
    notes: [
      // Key of G major - uses F#
      // "I found a love for me"
      'B4','B4','B4','A4','G4','B4',
      // "Darling just dive right in, follow my lead"
      'B4','B4','B4','A4','G4','B4','C5','B4','A4','G4',
      // Chorus: "Baby I'm dancing in the dark"
      'D5','E5','D5','C5','B4','A4','G4',
      // "with you between my arms"
      'B4','C5','D5','E5','D5',
      // "Barefoot on the grass"
      'D5','E5','D5','C5','B4',
      // "Listening to our favourite song"
      'B4','C5','D5','Fs4','G4','A4','B4','A4','G4'
    ]
  },
  {
    id: 'hallelujah',
    title: 'Hallelujah (Leonard Cohen)',
    difficulty: 'Medium',
    tempo: 50,
    notes: [
      // Key of C major - melody from noobnotes.net
      // "I've heard there was a secret chord"
      'G4','G4','G4','G4','G4','G4','A4','A4','A4',
      // "That David played and it pleased the Lord"
      'E4','G4','G4','G4','G4','A4','E4','E4','A4',
      // "But you don't really care for music, do ya"
      'A4','A4','A4','A4','A4','A4','G4','G4','F4','G4','E4',
      // "It goes like this, the fourth, the fifth"
      'G4','G4','G4','G4','G4','A4','A4','B4',
      // "The minor fall, the major lift"
      'B4','C5','C5','C5','C5','D5','C5','D5',
      // "The baffled king composing Hallelujah"
      'C5','D5','D5','D5','D5','D5','E5','D5','D5','C5',
      // Chorus: "Hallelujah" x2
      'E4','G4','A4','A4','A4','G4','E4','E4',
      'E4','G4','A4','A4','A4','G4','E4','D4','C4'
    ]
  },
  {
    id: 'canthelp',
    title: "Can't Help Falling in Love (Elvis)",
    difficulty: 'Medium',
    tempo: 60,
    notes: [
      // Key of F major - uses Bb. Melody from noobnotes.net
      // "Wise men say only fools rush in"
      'F4','C5','G4','F4','G4','A4','Bb4','A4','G4',
      // "But I can't help falling in love with you"
      'C4','D4','E4','F4','G4','A4','Bb4','A4','G4','F4',
      // Bridge: "Like a river flows"
      'E4','A4','C5','E5','D5',
      // "Surely to the sea"
      'E4','A4','C5','E5','D5',
      // "Some things are meant to be"
      'C5','A4','C5','A4','Bb4','A4',
      // "Take my hand, take my whole life too"
      'F4','C5','F4','G4','A4','Bb4','A4','G4',
      // "For I can't help falling in love with you"
      'C4','D4','E4','F4','G4','A4','Bb4','A4','G4','F4'
    ]
  },
  {
    id: 'riverflows',
    title: 'River Flows in You (Yiruma)',
    difficulty: 'Hard',
    tempo: 60,
    notes: [
      // Key of A minor
      // Main theme - Part A
      'A4','B4','C5','B4','A4','G4','A4','E4',
      // Part A repeat with extension
      'A4','B4','C5','D5','E5','D5','C5','B4','A4',
      // Part B
      'A4','B4','C5','B4','A4','G4','A4','E4',
      // Part B ending
      'A4','B4','C5','D5','E5','D5','C5','B4','A4','G4','A4'
    ]
  },
  {
    id: 'leanonme',
    title: 'Lean on Me (Bill Withers)',
    difficulty: 'Easy',
    tempo: 75,
    notes: [
      // Key of C major
      // Melody from noobnotes.net (plays in octave 5)
      // "Sometimes in our lives we all have pain"
      'C5','C5','D5','E5','F5','F5','E5','D5',
      // "We all have sorrow"
      'C5','C5','D5','E5','E5','D5',
      // "But if we are wise"
      'C5','C5','D5','E5','F5',
      // "We know that there's always tomorrow"
      'F5','E5','D5','C5','C5','D5','E5','B4','C5',
      // Chorus: "Lean on me when you're not strong"
      'E5','D5','C5','E5','E5','D5','D5','C5',
      // "And I'll be your friend"
      'C5','C5','B4','A4','G4',
      // "I'll help you carry on"
      'C5','D5','E5','E5','C5','D5',
      // "Somebody to lean on"
      'E5','D5','C5','C5','B4','C5'
    ]
  },
  {
    id: 'heyjude',
    title: 'Hey Jude (Beatles)',
    difficulty: 'Hard',
    tempo: 65,
    notes: [
      // Key of F major - uses Bb. Melody from noobnotes.net
      // "Hey Jude, don't make it bad"
      'C5','A4','A4','C5','D5','G4',
      // "Take a sad song and make it better"
      'G4','A4','Bb4','F5','F5','E5','C5','D5','C5','Bb4','A4',
      // "Remember to let her into your heart"
      'C5','D5','D5','D5','G5','F5','E5','F5','D5','C5',
      // "Then you can start to make it better"
      'F4','G4','A4','D5','C5','C5','Bb4','A4','E4','F4',
      // Na-na-na
      'F4','A4','C5','G5','F5','G5','F5','G5','F5','D5','C5'
    ]
  },
  {
    id: 'overrainbow',
    title: 'Somewhere Over the Rainbow',
    difficulty: 'Medium',
    tempo: 70,
    notes: [
      // Key of C major - intervals from noobnotes.net
      // "Somewhere over the rainbow"
      'C4','C5','B4','G4','A4','B4','C5',
      // "way up high"
      'C4','A4','G4',
      // "There's a land that I heard of once in a lullaby"
      'A4','G4','E4','F4','G4','A4','G4',
      'E4','F4','G4','E4','C4',
      // "Somewhere over the rainbow, skies are blue"
      'C4','C5','B4','G4','A4','B4','C5',
      'C4','A4','G4',
      // "And the dreams that you dare to dream really do come true"
      'A4','G4','E4','F4','G4','A4','B4','C5',
      'C5','B4','A4','G4','A4'
    ]
  }
];

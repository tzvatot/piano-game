var SONGS = [
  {
    id: 'twinkle',
    title: 'Twinkle Twinkle Little Star',
    difficulty: 'Easy',
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
    notes: [
      'C4','D4','E4','F4','G4','A4','B4','C5',
      'C5','B4','A4','G4','F4','E4','D4','C4'
    ]
  },

  // ── Pop Songs ──

  {
    id: 'clocks',
    title: 'Clocks (Coldplay)',
    difficulty: 'Medium',
    notes: [
      // Piano riff - arpeggio pattern
      'E4','G4','C5', 'E4','G4','C5', 'E4','G4','C5',
      'D4','G4','B4', 'D4','G4','B4', 'D4','G4','B4',
      'C4','E4','A4', 'C4','E4','A4', 'C4','E4','A4',
      'C4','F4','A4', 'C4','F4','A4', 'C4','F4','A4'
    ]
  },
  {
    id: 'scientist',
    title: 'The Scientist (Coldplay)',
    difficulty: 'Medium',
    notes: [
      // "Come up to meet you, tell you I'm sorry"
      'G4','A4','C5','C5','A4',
      'B4','B4','A4','G4','A4',
      // "You don't know how lovely you are"
      'G4','A4','C5','C5','C5','B4','A4','G4',
      // "I had to find you, tell you I need you"
      'G4','A4','C5','C5','A4',
      'B4','B4','A4','G4','A4',
      // "Tell you I set you apart"
      'G4','A4','C5','C5','C5','B4','A4','G4'
    ]
  },
  {
    id: 'fixyou',
    title: 'Fix You (Coldplay)',
    difficulty: 'Medium',
    notes: [
      // "When you try your best but you don't succeed"
      'E4','G4','G4','G4','A4','G4','G4','E4',
      // "When you get what you want but not what you need"
      'E4','G4','G4','G4','A4','G4','G4','E4',
      // "When you feel so tired but you can't sleep"
      'E4','G4','G4','G4','A4','G4','E4',
      // "Stuck in reverse"
      'G4','A4','G4','E4','C4',
      // "Lights will guide you home"
      'C5','B4','A4','G4','E4',
      // "And ignite your bones"
      'C5','B4','A4','G4','E4',
      // "And I will try to fix you"
      'G4','A4','B4','C5','B4','A4','G4'
    ]
  },
  {
    id: 'yellow',
    title: 'Yellow (Coldplay)',
    difficulty: 'Easy',
    notes: [
      // "Look at the stars"
      'G4','G4','E4','D4',
      // "Look how they shine for you"
      'G4','G4','G4','A4','G4','E4','D4',
      // "And everything you do"
      'D4','E4','D4','E4','C4',
      // "Yeah they were all yellow"
      'E4','D4','C4','D4','C4',
      // "I came along, I wrote a song for you"
      'G4','G4','E4','D4',
      'G4','G4','G4','A4','G4','E4','D4',
      // "And all the things you do"
      'D4','E4','D4','E4','C4',
      // "And it was called Yellow"
      'E4','D4','C4','D4','C4'
    ]
  },
  {
    id: 'letitbe',
    title: 'Let It Be (Beatles)',
    difficulty: 'Medium',
    notes: [
      // "When I find myself in times of trouble"
      'G4','G4','A4','A4','A4','G4','G4','E4','E4',
      // "Mother Mary comes to me"
      'D4','E4','F4','F4','E4','D4','C4',
      // "Speaking words of wisdom"
      'G4','G4','A4','A4','G4','E4','D4','C4',
      // "Let it be"
      'D4','E4','F4','E4','D4','C4',
      // Chorus: "Let it be, let it be"
      'A4','B4','C5','C5','B4','A4',
      'A4','B4','C5','B4','A4','G4',
      // "Whisper words of wisdom, let it be"
      'E4','F4','G4','G4','F4','E4','D4','C4'
    ]
  },
  {
    id: 'imagine',
    title: 'Imagine (John Lennon)',
    difficulty: 'Medium',
    notes: [
      // "Imagine there's no heaven"
      'C4','C4','C4','D4','E4','C4','D4','D4',
      // "It's easy if you try"
      'C4','C4','C4','D4','E4','E4','D4',
      // "No hell below us"
      'C4','C4','C4','D4','E4','E4',
      // "Above us only sky"
      'F4','F4','E4','D4','C4','D4','E4','D4',
      // "Imagine all the people"
      'C4','C4','C4','D4','E4','D4','E4','F4','E4',
      // "Living for today"
      'G4','G4','F4','E4','D4','E4'
    ]
  },
  {
    id: 'someonelikeyou',
    title: 'Someone Like You (Adele)',
    difficulty: 'Medium',
    notes: [
      // "I heard that you're settled down"
      'E4','E4','E4','E4','D4','C4','D4',
      // "That you found a girl and you're married now"
      'E4','E4','E4','E4','D4','C4','D4','E4',
      // "I heard that your dreams came true"
      'E4','E4','E4','E4','D4','C4','D4',
      // "Guess she gave you things I didn't give to you"
      'E4','E4','E4','E4','E4','D4','C4','D4','E4',
      // Chorus: "Never mind, I'll find someone like you"
      'G4','G4','G4','F4','E4','D4','C4','D4','E4',
      // "I wish nothing but the best for you too"
      'G4','G4','G4','F4','E4','D4','C4','D4','E4'
    ]
  },
  {
    id: 'thousandyears',
    title: 'A Thousand Years (Christina Perri)',
    difficulty: 'Medium',
    notes: [
      // "Heart beats fast, colors and promises"
      'E4','E4','D4','C4','D4','E4','F4','E4',
      // "How to be brave, how can I love"
      'E4','E4','D4','C4','D4','E4',
      // "When I'm afraid to fall"
      'F4','E4','D4','C4','D4',
      // Chorus: "I have died every day waiting for you"
      'C5','B4','A4','G4','A4','B4','C5','B4','A4',
      // "Darling don't be afraid"
      'C5','B4','A4','G4','A4',
      // "I have loved you for a thousand years"
      'B4','C5','B4','A4','G4','A4','B4','C5'
    ]
  },
  {
    id: 'perfect',
    title: 'Perfect (Ed Sheeran)',
    difficulty: 'Medium',
    notes: [
      // "I found a love for me"
      'E4','E4','E4','D4','C4','E4',
      // "Darling just dive right in, follow my lead"
      'E4','E4','E4','D4','C4','E4','F4','E4','D4','C4',
      // Chorus: "Baby, I'm dancing in the dark"
      'G4','A4','G4','F4','E4','D4','C4',
      // "With you between my arms"
      'E4','F4','G4','A4','G4',
      // "Barefoot on the grass"
      'G4','A4','G4','F4','E4',
      // "Listening to our favourite song"
      'E4','F4','G4','A4','G4','F4','E4','D4','C4'
    ]
  },
  {
    id: 'hallelujah',
    title: 'Hallelujah (Leonard Cohen)',
    difficulty: 'Hard',
    notes: [
      // "I've heard there was a secret chord"
      'C4','E4','E4','E4','E4','E4','D4','E4','F4',
      // "That David played and it pleased the Lord"
      'F4','F4','E4','D4','D4','E4','C4',
      // "But you don't really care for music, do ya?"
      'C4','E4','E4','E4','E4','E4','D4','D4','E4','F4',
      // "It goes like this: the fourth, the fifth"
      'A4','A4','A4','G4','F4','E4',
      // "The minor fall, the major lift"
      'A4','A4','A4','G4','F4','E4',
      // "The baffled king composing Hallelujah"
      'E4','E4','E4','E4','D4','D4','E4','F4','G4','A4',
      // Chorus: "Hallelujah" x4
      'F4','A4','A4','G4',
      'F4','A4','A4','G4',
      'F4','A4','A4','G4',
      'F4','E4','D4','C4'
    ]
  },
  {
    id: 'canthelp',
    title: "Can't Help Falling in Love (Elvis)",
    difficulty: 'Medium',
    notes: [
      // "Wise men say only fools rush in"
      'E4','F4','G4','C5','B4','A4','G4','F4','E4',
      // "But I can't help falling in love with you"
      'G4','A4','B4','C5','C5','B4','A4','G4','F4','E4','D4','C4',
      // "Shall I stay, would it be a sin"
      'E4','F4','G4','C5','B4','A4','G4','F4','E4',
      // "If I can't help falling in love with you"
      'G4','A4','B4','C5','C5','B4','A4','G4','F4','E4','D4','C4'
    ]
  },
  {
    id: 'riverflows',
    title: 'River Flows in You (Yiruma)',
    difficulty: 'Hard',
    notes: [
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
    notes: [
      // "Sometimes in our lives we all have pain"
      'C4','C4','D4','E4','F4','E4','D4','D4','E4','F4','G4',
      // "We all have sorrow"
      'G4','F4','E4','D4','E4',
      // "But if we are wise"
      'C4','D4','E4','F4','E4',
      // "We know that there's always tomorrow"
      'D4','E4','F4','G4','G4','F4','E4','D4','C4',
      // Chorus: "Lean on me when you're not strong"
      'E4','D4','C4','E4','F4','G4','G4',
      // "And I'll be your friend, I'll help you carry on"
      'G4','F4','E4','D4','E4','F4','E4','D4','C4','D4',
      // "For it won't be long till I'm gonna need"
      'E4','F4','G4','G4','G4','F4','E4','D4',
      // "Somebody to lean on"
      'E4','F4','E4','D4','C4'
    ]
  },
  {
    id: 'heyjude',
    title: 'Hey Jude (Beatles)',
    difficulty: 'Medium',
    notes: [
      // "Hey Jude, don't make it bad"
      'G4','E4','E4','D4','C4','D4','E4',
      // "Take a sad song and make it better"
      'E4','F4','G4','G4','G4','F4','E4','D4','E4','D4',
      // "Remember to let her into your heart"
      'D4','E4','D4','C4','D4','E4','F4','E4','D4',
      // "Then you can start to make it better"
      'D4','C4','D4','E4','F4','E4','D4','C4',
      // Na-na-na ending
      'C5','B4','A4','G4','A4','B4','C5',
      'B4','A4','G4','F4','E4','D4','C4'
    ]
  },
  {
    id: 'overrainbow',
    title: 'Somewhere Over the Rainbow',
    difficulty: 'Medium',
    notes: [
      // "Somewhere over the rainbow, way up high"
      'C4','C5','B4','A4','B4','C5','A4',
      'F4','G4','A4',
      // "There's a land that I heard of once in a lullaby"
      'A4','G4','E4','F4','G4','A4','G4',
      'E4','F4','G4','E4','C4',
      // "Somewhere over the rainbow, skies are blue"
      'C4','C5','B4','A4','B4','C5','A4',
      'F4','G4','A4',
      // "And the dreams that you dare to dream really do come true"
      'A4','G4','E4','F4','G4','A4','B4','C5',
      'C5','B4','A4','G4','A4'
    ]
  }
];

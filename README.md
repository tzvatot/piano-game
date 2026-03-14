# Piano Learning Game

A browser-based piano learning game that teaches you to play popular songs by highlighting keys one at a time. No timing pressure — just press the right key to advance.

**[Try it out](https://tzvatot.github.io/piano-game/)**

## Features

- 25 songs: nursery rhymes, classical melodies, and pop hits (Coldplay, Beatles, Adele, Ed Sheeran, and more)
- 2-octave piano keyboard (C4–B5) with realistic 3D styling
- Press-to-advance gameplay — no timing, just hit the highlighted key
- Color-cycling highlights for consecutive same notes (green, yellow, red)
- Web Audio API synthesis — no audio files needed
- Countdown, pause, restart, and completion overlays
- Optimized for tablets and phones in landscape orientation
- Works offline — just open `index.html`

## Songs

### Nursery Rhymes & Classical
Twinkle Twinkle Little Star, Mary Had a Little Lamb, Hot Cross Buns, Happy Birthday, Jingle Bells, Ode to Joy, London Bridge, Frere Jacques, Row Row Row Your Boat, C Major Scale

### Pop & Rock
Clocks (Coldplay), The Scientist (Coldplay), Fix You (Coldplay), Yellow (Coldplay), Let It Be (Beatles), Imagine (John Lennon), Someone Like You (Adele), A Thousand Years (Christina Perri), Perfect (Ed Sheeran), Hallelujah (Leonard Cohen), Can't Help Falling in Love (Elvis), River Flows in You (Yiruma), Lean on Me (Bill Withers), Hey Jude (Beatles), Somewhere Over the Rainbow

## Tech

Plain HTML, CSS, and JavaScript. No frameworks, no build tools, no dependencies.

```
index.html        — single-page app
css/styles.css    — responsive layout, 3D piano keys
js/audio.js       — Web Audio API oscillator synthesis
js/songs.js       — song data as note arrays
js/game.js        — state machine + note matching
js/app.js         — UI rendering + event wiring
```

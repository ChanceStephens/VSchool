import React from 'react'

import airhorn from '../DJReactSoundEffects/airhorn.mp3'
import scratch from '../DJReactSoundEffects/scratch.mp3'
import rock from '../DJReactSoundEffects/rock.wav'
import okay from '../DJReactSoundEffects/okay.wav'
import pang from '../DJReactSoundEffects/pang.wav'
import funk from '../DJReactSoundEffects/funk.wav'
import alien from '../DJReactSoundEffects/alien.wav'
import glitch from '../DJReactSoundEffects/glitch.wav'
import cat from '../DJReactSoundEffects/cat.wav'
import guitar from '../DJReactSoundEffects/guitar.wav'
import strum from '../DJReactSoundEffects/strum.wav'
import rewind from '../DJReactSoundEffects/rewind.wav'
import rewindagain from '../DJReactSoundEffects/rewindagain.wav'
import beep from '../DJReactSoundEffects/beep.wav'
import statics from '../DJReactSoundEffects/static.wav'
import cheer from '../DJReactSoundEffects/cheer.wav'
import horn from '../DJReactSoundEffects/horn.wav'
import magic from '../DJReactSoundEffects/magic.wav'
import bass from '../DJReactSoundEffects/bass.wav'
import explosion from '../DJReactSoundEffects/explosion.wav'
import guncocked from '../DJReactSoundEffects/guncocked.mp3'
import alarm from '../DJReactSoundEffects/alarm.wav'
import abandonShip from '../DJReactSoundEffects/abandonShip.wav'
import whistle from '../DJReactSoundEffects/whistle.wav'
import fairy from '../DJReactSoundEffects/fairy.wav'

// This component takes an array of sound files and plays a random sound upon the button click.  This app renders a button element with an event lister.
const SoundBoard = () => {
  const soundsArray = [
    airhorn,
    scratch,
    rock,
    okay,
    pang,
    funk,
    alien,
    glitch,
    cat,
    guitar,
    strum,
    rewind,
    rewindagain,
    beep,
    statics,
    cheer,
    horn,
    magic,
    bass,
    explosion,
    guncocked,
    alarm,
    abandonShip,
    whistle,
    fairy
  ]
  const [currentSound, setCurrentSound] = React.useState(airhorn)

  function getRandomIndex() {
  return  Math.floor(Math.random() * soundsArray.length)
  }
  function playSound() {
    const randomIndex = getRandomIndex()
    const randomSound = soundsArray[randomIndex]
    setCurrentSound(randomSound)
    const audio = new Audio (currentSound);
    audio.play();
  }

  return (
    <button onClick={playSound}>Sound Effects</button>
  )
}
export default SoundBoard


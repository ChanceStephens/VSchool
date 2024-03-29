import React from 'react';
import astronaut from "../DJReactMusic/astronaut.mp3"
import blindingLights from "../DJReactMusic/blindinglights.mp3"
import callMe from "../DJReactMusic/callme.mp3"
import madWorld from "../DJReactMusic/madworld.mp3"
import monster from "../DJReactMusic/monster.mp3"
import thunder from "../DJReactMusic/thunder.mp3"

export default function Music() {
    const songs = [
        astronaut,
        blindingLights,
        callMe,
        madWorld,
        monster,
        thunder
    ]

    const [currentSong, setCurrentSong] = React.useState(null)

    function getRandomIndex() {
        return Math.floor(Math.random() * songs.length)
    }

    function startMusic() {
        const randomIndex = getRandomIndex()
        const randomSong = songs[randomIndex]
        setCurrentSong(randomSong)
    }
// currentSong: This is a conditional rendering statement in JSX. It checks if the currentSong variable is a truthy value. if the currentSong is truthy, && allows the expression after to be ran.
//controls: Adds standard playback controls (such as play, pause, and volume control) to the audio player. 
//autoPlay: Specifies that the audio should start playing automatically as soon as it is loaded.

    return (
        <>
            <button onClick={startMusic}>Play!</button>
            {currentSong && <audio src={currentSong} controls autoPlay />}
        </>
    )
}

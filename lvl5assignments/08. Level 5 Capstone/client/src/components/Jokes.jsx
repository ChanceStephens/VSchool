import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function RandomQuote() {

    const [randomJoke, setRandomJoke] = useState("")

    useEffect(() => {
        getRandomJoke()
    }, [])

    function getRandomJoke() {
        axios.get('/api/jokes')
        .then(res => {
            const jokes = res.data
            const randomIndex = Math.floor(Math.random() * jokes.length);
            const randomJoke = jokes[randomIndex].joke
            setRandomJoke(randomJoke)
        })
        .catch(err => {
            console.log("Error Fetching Random Joke", err)
        })
    }
    return(
        <div className="randomJoke">
            <p className="title">Funnies:</p>
            <p className="writing">"{randomJoke}"</p>
        </div>
    )
}
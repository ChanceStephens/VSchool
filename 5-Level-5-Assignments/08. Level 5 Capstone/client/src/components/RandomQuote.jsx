import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function RandomQuote() {

    const [randomQuote, setRandomQuote] = useState("")
    const [quoteAuthor, setQuoteAuthor] = useState("")

    useEffect(() => {
        getRandomQuote()
    }, [])

    function getRandomQuote() {
        axios.get('/api/quotes')
        .then(res => {
            const quotes = res.data
            const randomIndex = Math.floor(Math.random() * quotes.length);
            const randomQuote = quotes[randomIndex]
            setRandomQuote(randomQuote.q)
            setQuoteAuthor(randomQuote.a)
        })
        .catch(err => {
            console.log("Error Fetching Random Quote", err)
        })
    }
    return(
        <div className="randomQuote">
            <p className="title">Inspiration:</p>
            <p className="writing">"{randomQuote}"</p>
            <p className="writing">~ {quoteAuthor}</p>
        </div>
    )
}

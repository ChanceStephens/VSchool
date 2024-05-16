import React from 'react'
import RandomQuote from './RandomQuote'
import LifeAdvice from './LifeAdvice'
import Jokes from './Jokes'
import border2B from '../images/border2B.png'

export default function DailyDose() {

    return (
        <div className="dailyDose">
            <div className="dailyDose-border">
                <img src={border2B}/>
            </div>
            <div className="dailyDose-items">
                <h1 className="dailyDose-title">Your Daily Dose of:</h1>
                <div className="dailyDose-components">
                <Jokes/>
                <LifeAdvice/>
                <RandomQuote/>
                </div>
            </div>
        </div>
    )
}
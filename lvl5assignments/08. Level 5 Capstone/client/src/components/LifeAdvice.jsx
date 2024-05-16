import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function LifeAdvice() {
    const [advice, setAdvice] = useState('');

    useEffect(() => {
        fetchAdvice();
    }, []);

    function fetchAdvice() {
        axios.get('https://api.adviceslip.com/advice') 
            .then(response => {
                const slip = response.data.slip
                setAdvice(slip.advice);
            })
            .catch(error => {
                console.error('Error fetching advice:', error);
            });
    }

    return (
        <div className='slip'>
            <p className="title">Life Advice:</p>
            <p className="writing">{advice}</p>
        </div>
    );
}

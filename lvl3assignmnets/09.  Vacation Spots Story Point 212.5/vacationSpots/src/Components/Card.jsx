import React from 'react';

export default function Card({place, price, timeToGo, image, style, pricey}) {

    return (
        <div className="card">
            <div className="card--info" style={style}>
                <img src={image}/>
                <h1>{place}</h1>
                <h1>{pricey}</h1>
                <h1>Cost: ${price}</h1>
                <h1>Peak Season: {timeToGo}</h1>
            </div>
        </div>
    )
};
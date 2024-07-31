import React from 'react';

export default function Badge({badgeData, id}) {

    
    return (
        <ol >
            <li className="badge">
                <div className={id % 2 === 0 ? `badgeHeader blue` : `badgeHeader red`} >
                    <p>Hello, my name is {badgeData.firstName}!</p>
                </div>
                <div className='badgeInfo'>
                    <p className='name'><span>Name: </span> {badgeData.firstName} {badgeData.lastName}</p>
                    <p className='phoneNumber'><span>Telephone: </span> {badgeData.phoneNumber}</p>
                    <p className='email'><span>Email: </span> {badgeData.email}</p>
                    <p className='birthPlace'><span>I was born in: </span> {badgeData.birthPlace}</p>
                    <p className='favoriteFood'><span>I love to eat: </span> {badgeData.favoriteFood}</p>
                    <p className='aboutSelf'><span>A little about myself: </span> {badgeData.aboutSelf}</p>
                </div>
            </li>
        </ol>
    )
}


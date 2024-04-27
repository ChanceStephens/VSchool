import React, { useContext } from 'react'
import { UglyThingsContext } from './Context'
import UglyCard from './UglyCard' 

export default function UglyCardList() {
    const { uglyCards } = useContext(UglyThingsContext)

    return (
        <div className="uglyCardList">
            {uglyCards.map((card) => (
                <UglyCard
                    key={card._id}
                    id={card._id}
                    imgUrl={card.imgUrl}
                    title={card.title}
                    description={card.description}
                />
            ))}
        </div>
    )
}

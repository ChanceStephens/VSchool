import React from 'react';
import Badge from './Badge';
export default function BadgeList({badges}) {

    return(
    <div className='badgeList'>
        {badges.map((badge, index) => (
            <Badge key={index} id={index} badgeData={badge} />
        ))}
    </div>
    )
}
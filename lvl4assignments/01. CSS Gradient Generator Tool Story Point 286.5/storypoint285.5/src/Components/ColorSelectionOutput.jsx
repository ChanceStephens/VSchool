import React from 'react'

export default function ColorSelectionOutput({value}) {

    return (
        <div className='colorSelectionOutput'>
            <textarea readOnly value={value} />
        </div>
    )
}
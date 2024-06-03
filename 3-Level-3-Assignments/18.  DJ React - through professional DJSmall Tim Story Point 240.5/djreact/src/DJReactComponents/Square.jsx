import React from "react";
// This component renders a square with the color prop passed from the parent.  The color prop is then used in the return of the box element as its background color.  When rendered from the App component, it will use the code logic there to set the color the background of the element.
export default function Square({color}) {

    return (
        <div >
            <div className="box" style={{backgroundColor: color}}></div>
        </div>
    )
}
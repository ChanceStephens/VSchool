// AIRBNB APP NAVBAR FILE =============>

import React from "react"
import airbnbLogo from '../images/airbnb-logo.png'
export default function Navbar() {
    return (
        <nav>
            <img src={airbnbLogo} className="nav--logo" />
        </nav>
    )
}

// FROM 00. SCRIMBA APP

// import React from "react"
// import smallImage from "../images/react-icon-small.png"
// export default function Navbar() {
//     return (
//         <nav>
//             <img src={smallImage} className="nav--icon" />
//             <h3 className="nav--logo_text">ReactFacts</h3>
//             <h4 className="nav--title">React Course - Project 1</h4>
//         </nav>
//     )
// }
import React from "react";
import facebook from "../images/logo-facebook.svg";
import github from "../images/logo-github.svg";
import twitter from "../images/logo-twitter.svg";

export default function Footer() {
    return (
        <div className="footer">
            <div className="socialMedia">
                <img src={twitter} alt="Twitter Logo" />
                <img src={facebook} alt="Facebook Logo" />
                <img src={github} alt="GitHub Logo" />            
            </div> 
            <div className="copyright">Copyright © Your Website 2024</div>
        </div>
    );
}

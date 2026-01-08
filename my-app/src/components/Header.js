import React from "react";
import "../style.css"

function Header(){
    return(
         <div className="header">
            <h1>React</h1>
            <ul className="ul-tag">
                <li><a>Home</a></li>
                <li><a>Über uns</a></li>
                <li><a>Konatkt</a></li>
            </ul>
         </div>
    )
}

export default Header;
import React from "react";
import "../style.css"

function Body(){
    return(
        <div>
            <form >
               <div className="input">
                   <div>
                       <label for = "Benutzname">Benutzname</label>
                   </div>                   
                   <input type = "text" placeholder="bitte geben Sie Benutzname an" id="user-name" class ="style-input" oninput="Benutznamevalidation"></input>
                   <span id="check Name"></span>
               </div>
               <div className="input">
                   <div>
                       <label for = "email">Email</label>
                   </div>                   
                   <input type = "text" placeholder="bitte geben Sie Email an" id="user-name" class ="style-input" oninput="Benutznamevalidation"></input>
                   <span id="check Email"></span>
               </div>
               <div className="input">
                   <div>
                       <label for = "Handynummer">Handynummer</label>
                   </div>                   
                   <input type = "text" placeholder="bitte geben Sie Handynummer an" id="user-name" class ="style-input" oninput="Benutznamevalidation"></input>
                   <span id="check Handynummer"></span>
               </div>
               <button type="submit" onClick=" return validateForm()" >Anmelden</button>
            </form>
        </div>
    )
}

export default Body;
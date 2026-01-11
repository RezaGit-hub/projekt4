import React from "react";
import "../style.css"

function Body(){
    var checkFullName = document.getElementById("checkName");
    var checkFullEmail = document.getElementById("checkEmail");
    var checkFullHandynummer = document.getElementById("checkHandynummer");
    var checkSubmit = document.getElementById("checkSubmit");

    function checkFullName(){
        var fullname = document.getElementById("user-name").value;
        var fullname = fullname.lenght;
        if(fullname < 1 ){
            checkFullEmail.innerHTML = "Benutzname ist benötigt"
            return false;
        }
        if(fullname != fullname.match(/^[A-ZA-z]+\s{1}[A-Za-z]+$/)){
            checkFullEmail.innerHTML = "bitte geben Sie Vor und Nachname an"
        }
    }
    return(
        <div>
            <form >
               <div className="input">
                   <div>
                       <label for = "Benutzname">Benutzname</label>
                   </div>                   
                   <input type = "text" placeholder="bitte geben Sie Benutzname an" id="user-name" class ="style-input" oninput="Benutznamevalidation"></input>
                   <span id="checkName"></span>
               </div>
               <div className="input">
                   <div>
                       <label for = "email">Email</label>
                   </div>                   
                   <input type = "text" placeholder="bitte geben Sie Email an" id="user-email" class ="style-input" oninput="Benutznamevalidation"></input>
                   <span id="checkEmail"></span>
               </div>
               <div className="input">
                   <div>
                       <label for = "Handynummer">Handynummer</label>
                   </div>                   
                   <input type = "text" placeholder="bitte geben Sie Handynummer an" id="user-name" class ="style-input" oninput="Benutznamevalidation"></input>
                   <span id="checkHandynummer"></span>
               </div>
               <button type="submit" onClick=" return validateForm()" >Anmelden</button>
               <span id="checkSubmit"></span>
            </form>
            <p>Webseite wurde von  <strong><a href="https://github.com/RezaGit-hub">Reza(GitHub)</a></strong> entwickelt</p>
        </div>
        
    )
}

export default Body;
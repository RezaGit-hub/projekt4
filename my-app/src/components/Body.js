import React, {useState} from "react";
import "../style.css"
 function Body(){
    const [name, setName] = useState("");
    const [nameError, setNameError] = useState("");
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [handynummer, setHandynummer] = useState("");
    const [HandynummerError, setHandynummerError] = useState("");

    function validateName(value){
        setName(value);

        if (value.length < 1){
            setNameError("Benutzername ist erforderlich");
        }else if (!/^[A-Za-z]+\s[A-Za-z]+$/.test(value)){
            setNameError("bitte vor-Nachname eingeben");
        }else{
            setNameError("");
        }
    }

    function validateEmail(value){
        setEmail(value);

        if (value.length < 1){
            setEmailError("bitte Email eingeben");
        }else if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)){
            setEmailError("bitte Email vollständig eingeben");
        }else{
            setEmailError("");
        }
    }

    function validateHandynummer(value){
        setHandynummer(value);

        if (value.length < 11 || value.length > 13){
            setHandynummerError("bitte handynummer vollständig eingeben");
        }else if(!/^(?:\+49|0)1[5-7][0-9]{8}$/.test(value)){
            setHandynummerError("bitte Handynummer richtig eingeben");
        }
        else{
            setHandynummerError("");
        }
    }

    return(
        <div className="mainpage">
            <form >
               <div className="input">
                   <label htmlFor="username">Benutzername</label>
                   <input
                   id = "username"
                   className="styleinput"
                   type="text"
                   value={name}
                   onChange={(e) => validateName(e.target.value)}
                   placeholder="bitte Benutzername eingeben"
                   />
                   <span>{nameError}</span>          
                   
               </div>
               <div className="input">
                <label htmlFor="Email">Email</label>
                <input
                id="email"
                className="style-input"
                type="text"
                value={email}
                onChange={(e) => validateEmail(e.target.value)}
                placeholder="bitte Email eingeben"
                />
                <span>{emailError}</span>
               </div>
               <div className="input">
                   <label htmlFor="Handynummer">Handynummer</label>
                   <input
                   id="handynummer"
                   className="style-input"
                   type="text"
                   value={handynummer}
                   onChange={(e) => validateHandynummer(e.target.value)}
                   placeholder="bitte Handynummer eingeben"
                   />
                   <span>{HandynummerError}</span>
               </div>
               <button type="submit">Anmelden</button>
               
            </form>
            <p>Webseite wurde von  <strong><a href="https://github.com/RezaGit-hub">Reza(GitHub)</a></strong> entwickelt</p>
        </div>
        
    )
}

export default Body;
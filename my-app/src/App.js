import React from 'react';
import './App.css';
import Header from "./components/Header";
import Body from "./components/Body";
import "./style.css"

function App(){
  return(
    <>
    <div className='main'>
      <Header />
      <Body />
    </div>
    <p>Webseite wurde von  <strong><a href="https://github.com/RezaGit-hub">Reza(GitHub)</a></strong> entwickelt</p>
    </>

  );
}



export default App;

import "./App.css";
import React from "react";
import { useState } from "react";
import Hangman from "./components/Hangman";
import Help from "./components/Help";

function App() {
  
const [showHelp, setshowHelp] = useState (false);
const changeHelp = () => {
  setshowHelp(current => !current)
}

  return (
    <div >
      <h1>Hangman</h1>
      <div>
        <button id="help" onClick={changeHelp}>Help - Rules of the game</button>  
        <Help userHelp = {showHelp} />
      </div>
      <div className="App">
        <Hangman />        
      </div>
    </div>
  );
}

export default App;
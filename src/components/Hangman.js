import React, { Component } from "react";
import { randomWord } from "./Words";
import "./Hangman.css";

import image1 from "./images/state1.GIF";
import image2 from "./images/state2.GIF";
import image3 from "./images/state3.GIF";
import image4 from "./images/state4.GIF";
import image5 from "./images/state5.GIF";
import image6 from "./images/state6.GIF";
import image7 from "./images/state7.GIF";

class Hangman extends Component {
  static defaultProps = {
    maxWrong: 6,  // 6 guesses
    images: [image1, image2, image3, image4, image5, image6, image7]
  };

  constructor(props) {
    super(props);

    this.state = { 
      nWrong: 0, 
      guessed: new Set(), 
      answer: randomWord() 
    };

    this.handleGuess = this.handleGuess.bind(this);
    this.resetGame = this.resetGame.bind(this);
  }

  // reset the game
  resetGame() {
    this.setState({
      nWrong: 0,
      guessed: new Set(),
      answer: randomWord()
    });
  }

  //show the current state of a word
  guessedWord() {
    const { answer, guessed } = this.state;

    return answer
      .split("")
      .map(letter => (guessed.has(letter) ? letter : "_"));
  }

  // handle a guessed letter, adding guessed letters or increasing number-wrong guesses
  handleGuess(e) {
    let letter = e.target.value;

    this.setState(userState => ({
      guessed: userState.guessed.add(letter),
      nWrong: userState.nWrong + (userState.answer.includes(letter) ? 0 : 1)
    }));
  }

  //letter buttons to generate
  generateButtons() {
    const  { handleGuess } = this;
    const { guessed } = this.state;

    return "abcdefghijklmnopqrstuvwxyz".split("").map((letter, index) => (
      <button key={index} value={letter} onClick={handleGuess} disabled={guessed.has(letter)}>
        {letter}
      </button>
    ));
  }

  //render the game
  render() {
    const { nWrong, answer} = this.state;
    const { images, maxWrong } = this.props;


    return (
      <div className="Hangman">

        <button id="reset" onClick={this.resetGame}>Reset the game</button>        
        <img src={images[nWrong]} alt="" />
        <p>Wrong quesses number: {nWrong}</p>

        {answer === this.guessedWord().join("") ? 
            <div>
              <p>Congratulations, you win!</p>
              <p>The correct word is: {answer}</p>
            </div>
            :
            (nWrong === maxWrong ?
            <div>
              <p>Sorry, you lose.</p>
              <p>The correct word is: {answer}</p>
            </div>
            :
        <div>
          <p className="Hangman-word">{this.guessedWord()}</p>
          <p className="Hangman-buttons">{this.generateButtons()}</p>
        </div>)
        }
      </div>
    );

  }
}

export default Hangman;
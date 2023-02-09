import "./Help.css";
import React from "react";

function Help(props) {

    if (props.userHelp) {

    return (
        <div>
            <p className="help-component">
            The word to guess is represented below by a row of dashes representing each letter of the word. 
            If you suggest by pressing a letter-button a letter which occurs in the word, it will appear in all its correct positions. 
            If the suggested letter does not occur in the word, one element of a hanged stick figure will be added. 
            The game ends once the word is guessed, or if the stick figure is complete — signifying that 6 guesses have been used.
            </p>
        </div>
    )
    } else {
        return (
            <div></div>
        )
    }
}

export default Help;
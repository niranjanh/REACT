import React from "react";
import ReactDOM from "react-dom";

function Joke(props) {
    return (
        <div>
            <div>Question: {props.joke.que}</div>
            <div>Punchline: {props.joke.punchline}</div>
            <hr />
        </div>
    )    
}

export default Joke

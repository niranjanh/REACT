import React from "react";
import ReactDOM from "react-dom";

import Joke from "./JokeComponents/Joke.js";

function App() {
    return (
        <div>
            <Joke joke={{que: "1", punchline: "One"}}/>
            <Joke joke={{que: "2", punchline: "Two"}}/>
            <Joke joke={{que: "3", punchline: "Three"}}/>
        </div>
    )    
}

export default App

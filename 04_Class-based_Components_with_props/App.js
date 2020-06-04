import React from "react";
import ReactDOM from "react-dom";

import Header from "./Header.js";
import Greeting from "./Greeting.js";

class App extends React.Component {
    render() {
        return (
            <div>
                <Header username="Niranjan"/>
                <Greeting />
            </div>
        )
    }
}

export default App;

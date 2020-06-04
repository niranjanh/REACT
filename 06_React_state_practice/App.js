import React from "react"


// Challenge:
// Given an incomplete class-based component without a constructor, 
// add a constructor and initialize state to fix the broken component.

class App extends React.Component {
    
    constructor() {
        super();
        this.state = {
            name: "Niranjan",
            age: 24,
        }
    }
    
    render() {
        return (
            <div>
                <h1>Hi everyone, My name is {this.state.name}.</h1>
                <h3>and I am {this.state.age} years old.</h3>
            </div>
        )
    }
}

export default App


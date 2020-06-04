import React from "react"


class App extends React.Component {
    constructor() {
        super()
        this.state = {
            answer: "Yes"
        }
    }
    
    render() {
        return (
            <div>
                <h3>Is state important to know?</h3>
		<h1>{this.state.answer}</h1>
            </div>
        )
    }
}

export default App

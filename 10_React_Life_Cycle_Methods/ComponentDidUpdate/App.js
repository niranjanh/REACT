import React from "react"

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            count: 0
        }
        this.increment = this.increment.bind(this)
    }
    
    increment() {
        this.setState(prevState => {
            return {
                count: prevState.count + 1
            }
        })
    }
    
    componentDidMount() {
        console.log("Mounted")
    }
    
    componentDidUpdate() {
        console.log("Did Update")
    }
    
    render() {
        console.log("Render")
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.increment}>
                    Increment!
                </button>
            </div>
        )
    }
}

export default App


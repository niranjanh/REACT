import React, {Component} from "react"
import Conditional from "./Conditional"

class App extends Component {
    constructor() {
        super()
        this.state = {
            isLoading: true
        }
    }
    
    componentDidMount() {
        setTimeout(() => {
            this.setState({
                isLoading: false
            })
        }, 1500)
    }
    
    render() {
        return (
            <div>
                <h2>Hi Niranjan,</h2>
                {
                    this.state.isLoading ?
                        <h1>I am Loading...</h1> :
                        <Conditional />
                }
                <h3>Thank You!</h3>
            </div>
        )
    }
}

export default App


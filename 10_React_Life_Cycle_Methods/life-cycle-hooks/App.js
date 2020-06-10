import React from "react"

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            count: 0,
            color: ""
        }
        this.increment = this.increment.bind(this)
        this.decrement = this.decrement.bind(this)
    }
    
    increment() {
        this.setState(prevState => {
            return {
                count: prevState.count + 1
            }
        })
    }
    
    decrement() {
        this.setState(prevState => {
            return {
                count: prevState.count - 1
            }
        })
    }
    
    randomcolor() {
        const colors = ["blue", "red", "green", "yellow", "black"];
        const number = Math.floor(Math.random() * Math.floor(5))
        return colors[number];
    }
    
    componentWillMount() {
        console.log("componentWillMount")
        // not suitable for doing DOM manipulation as
        // as the component is not yet loaded hence DOM is not present
        
        // you should not do below thing though
        // const newColor = this.randomcolor()
        // this.setState({color: newColor}) 
    }
    
    componentDidMount() {
        console.log("componentDidMount")
        const newColor = this.randomcolor()
        this.setState({color: newColor}) 
    }
    
    shouldComponentUpdate() {
        console.log("shouldComponentUpdate")    
        // return false; // it wont update component even if you click button
        
        // if we try to change state in componentWillMount, shouldComponentUpdate wont be called
        // as the component is not yet loaded, hence its not getting updated
        
        // as we are changing the state in componentDidMount, i.e. after component is mounted
        // it will call shouldComponentUpdate
        // if we dont change state in componentDidMount then shouldComponentUpdate wont be called
        return true;
    }
    
    componentDidUpdate(prevProps, prevState) {
        console.log("componentDidUpdate")
        if(prevState.count !== this.state.count) {
            const newColor = this.randomcolor()
            this.setState({color: newColor})
        }
    }
    
    componentWillUnmount() {
        console.log("componentWillUnmount")    
    }
    
    // after React 16
    // componentWillMount         ---> deprecated
    // componentWillReceiveProps  ---> deprecated
    // componentWillUpdate        ---> deprecated
    
    render() {
        return (
            <div>
                <h1 style={{color: this.state.color}}>{this.state.count}</h1>
                <button onClick={this.increment}>
                    Increment!
                </button>
                <br></br>
                <button onClick={this.decrement}>
                    Decrement!
                </button>
            </div>
        )
    }
}

export default App


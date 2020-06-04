import React from "react"

class ChildComponent extends React.Component {
    constructor() {
        super();
        
    }
    
    render(props) {
        return (
            <div>
                <h3>Child Compoenent</h3>
                <p>Count is: {this.props.count}</p>
            </div>
        )
    }
}

export default ChildComponent

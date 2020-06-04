import React from "react";
import ReactDOM from "react-dom";

class Header extends React.Component {
    render() {
        console.log("PROPS", this.props)
        return (
            <header>
                <p>Welcome, {this.props.username}!</p>
            </header>
        )
    }
}

export default Header;

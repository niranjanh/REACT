import React from "react";
import ReactDOM from "react-dom";

class Greeting extends React.Component {
    
    getTimeOfDay() {
        const date = new Date();
        const hours = date.getHours();
        let timeOfDay;
     
        if (hours < 12) {
            timeOfDay = "morning"
        } else if (hours >= 12 && hours < 17) {
            timeOfDay = "afternoon"
        } else {
            timeOfDay = "night"
        }
        
        return timeOfDay;
    }
    
    render() {    
        return (
            <h1>Good {this.getTimeOfDay()} to you, sir or madam!</h1>
        )
    }
}

export default Greeting;

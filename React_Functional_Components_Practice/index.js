// Objectives:
// 1. Set up the basic React code from scratch
// 2. Create a functional component called MyInfo that returns the following UI:
    // a. An h1 with your name
    // b. A paragraph with a little blurb about yourself
    // c. An ordered or unordered list of the top 3 vacation spots you'd like to visit
// 3. Render an instance of that functional component to the browser
// Extra challenge: learn on your own (Google!) how you can add some style to your page.
// (We will also cover this in an upcoming lesson).

import React from "react";
import ReactDOM from "react-dom";

function MyName() {
    return (
      <h1>Niranjan Harpale</h1>
    ) 
}

function AboutMe() {
  return (
    <p>
      <h3>About Me</h3>
      Learning React.<br></br>
      Always LEARN BY PRACTICE.
    </p>
  )
}

function NextInLine() {
  return (
    <ul>
      <h3>Next things to learn</h3>
      <li>Machine Learnign (in Process...)</li>
      <li>Android</li>
      <li>AWS</li>
    </ul>
  )
  
}

ReactDOM.render(
  <div>
    <MyName />
    <AboutMe />
    <NextInLine />
  </div>,
  document.getElementById("root")
)


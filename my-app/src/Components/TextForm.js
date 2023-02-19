import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick =()=>{
    console.log("function is fired");
    let newText = text.toUpperCase();
    setText(newText);
    // console.log(text);
  }

 
  const [text, setText] = useState("Enter your text here");
    // text ="new text"; // wrong way to change the state
    // setText("new text ") // Right way to change the state
    const handleOnChange=(event)=>{
        // console.log("On Change"); 
        setText(event.target.value);
        }
  return (
    <div className="container my-3">
      <h1>{props.heading} </h1>
      <div className="form-floating">
        <textarea
          className="form-control"
          id="floatingTextarea"
         value ={text} onChange={handleOnChange}></textarea>
      </div>
      <button className="btn btn-primary my-3" onClick={handleUpClick}>Convert to uppercase</button>
    </div>
  );
}

import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick =()=>{
    console.log("function is fired");
    let newText = text.toUpperCase();
    setText(newText);
    // console.log(text);
  }

  const handleLoClick =()=>{
    // console.log("function is fired");
    let newText = text.toLowerCase();
    setText(newText);
    // console.log(text);
  }

 const handleClear =()=>{
    setText("");
 }
  const [text, setText] = useState("Enter your text here");
    // text ="new text"; // wrong way to change the state
    // setText("new text ") // Right way to change the state
    const handleOnChange=(event)=>{
        // console.log("On Change"); 
        setText(event.target.value);
        }
  return (
    <>
    <div className="container my-3">
      <h1>{props.heading} </h1>
      <div className="form-floating">
        <textarea
          className="form-control"
          id="floatingTextarea"
         value ={text} onChange={handleOnChange}></textarea>
      </div>
      <div className="container">
        
      <button className="btn btn-primary my-3 mx-2" onClick={handleUpClick}>Convert to Upercase</button>
      <button className="btn btn-primary my-3 mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
      <button className="btn btn-primary my-3 mx-2" onClick={handleClear}>Clear</button>
      </div>
      <p>Total Words : {text.split(" ").length}</p>
      <p>Total Characters : {text.length}</p>
      <p>Total time to raed : {(0.008 * text.split(" ").length).toPrecision(2)}  Minutes</p>
      </div>
    <div className="container">
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>
  );
}

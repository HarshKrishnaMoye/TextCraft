import React , {useState} from 'react'



export default function TextForm(props) {

  const handleUpClick = ()=>{
    // console.log("Uppercase was clicked"); 
    let newText1 = text.toUpperCase();
    setText(newText1);
  }


  const handledownClick= ()=>{
    // console.log("Lowercase was clicked"); 
    let newText2 = text.toLowerCase();
    setText(newText2);
  }

  const handlereClick =() =>{
    console.log("Button was clicked"); 
    let newText3 = text.trim();
    console.log(newText3); 
    setText(newText3);
  }


  const handleInClick = ()=>{
    let newText4="";

    console.log("Invert Clicked")

    for(let i = (text.length) - 1  ; i>=0 ; i--)
    {
      newText4 = newText4 + text[i];
      console.log(text[i])
    }

    // console.log(newText4)

    setText(newText4);
  }

  const handleClClick = ()=>{
    let newText5 = " ";
    setText(newText5);
  }


  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
  }

  const handleOnChange = (event)=>{
    // console.log("On Change"); 
    setText(event.target.value);
  }

 
    
// React Hooks
// Hooks ---> https://legacy.reactjs.org/docs/hooks-intro.html

const [text , setText]=  useState("Enter Text Here");

// text = "Please Enter Text Here"; //Wrong Way Of Assigning Text
//setText("Please Enter The Text Here"); //Correct Way OF Assigning Text 
    
  return (
    <>
    <div className="container">
        <h3>{props.heading}</h3>
    <div className="form-group">
      <textarea className="form-control" value={text} onChange={handleOnChange} id="MyBox" rows="10"></textarea>
    </div>
    <button className="btn btn-primary" onClick={handleUpClick}>Convert To Uppercase</button>
    <button className="btn btn-primary mx-2" onClick={handledownClick}>Convert To Lowercase</button>
    <button className="btn btn-primary mx-2" onClick={handlereClick}>Remove Spaces</button>
    <button className="btn btn-primary mx-2" onClick={handleInClick}>Invert Text</button>
    <button className="btn btn-primary mx-2" onClick={handleClClick}>Clear Text</button>
    <button type="submit" onClick={speak} className="btn btn-warning mx-2">Speak</button>
  </div>
  <div className="container my-5">
    <h4>Your Text Summmary</h4>
    <p><b>Characters :</b> {text.length} characters</p>
    <p><b>Words :</b> {text.split(" ").length} words</p>
    <p><b>Total Time To Count Words :</b> {text.split(" ").length * 0.008} </p>
    <h5>Preview Text</h5>
    <p>{text}</p>
  </div>
    </>
  )
}

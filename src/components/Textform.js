import React,{useState} from 'react'

export default function Textform(props) {
    const handleUPclick= ()=>{
        // console.log("upper case was clicked" + text);
        let newtext=text.toUpperCase();
        setText(newtext)
        props.showAlert(' Converted to Upper Case','success');
    }
    const handlextraspaces = ()=>{
        // console.log("upper case was clicked" + text);
        let newtext= text.split(/[ ]+/);
        setText(newtext.join(' '))
    }
    const  handleloclick=()=>{
        // console.log("upper case was clicked" + text);
        let newtext=text.toLowerCase();
        setText(newtext)
        props.showAlert(' Converted to Lower Case','success');
    }

    const handlecopy= () => {
        // console.log("i am copy")
        var  text = document.getElementById("Mybox")
        text.select();
        navigator.clipboard.writeText(text.value);
    }
   
     const handleonChange=(event)=>{
        // console.log("on change");
        setText(event.target.value);
    }
    const [text,setText] = useState("");
// setText="new text"; wrong way 
// setText("newtext"); wright way to change text 
   return (
       <>
    <div className="container" style={{color: props.mode==='sucess'?'white':'black'}}>
        <h1>{props.heading}</h1>
<div className="mb-3">
<textarea className="form-control"   onChange={handleonChange} value ={text} style={{backgroundColor: props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}} id="Mybox" rows="8"></textarea>
</div>
<button className="btn btn-dark mx-3" onClick={handleUPclick}>Convert Uppercase</button>
<button className="btn btn-dark mx-3" onClick={handleloclick}>Convert lowercase</button>
<button className="btn btn-dark mx-3" onClick={handleonChange}>Clear All</button>
<button className="btn btn-dark mx-3" onClick={handlecopy}>Copy text</button>
<button className="btn btn-dark mx-3" onClick={handlextraspaces}>remove spaces</button>

</div>
<div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
    <h2>Your text Summary</h2>
    <p><b>{text.split(" ").length} words and {text.length} Characters</b></p>
    <p>{.008*text.split(" ").length} Minutes to complete reading  </p>
    <h3>Preview</h3>
    <p><b>{text.length>0?text:'Enter Something in text box  to preview here '}</b></p>
</div>
    </>
  )
}

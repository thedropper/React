import React,{useState} from 'react'

export default function Textplace(props) {
    const [text,setText] = useState("");

    const h1 = ()=>{
      let newtext=text.toUpperCase();
      setText(newtext)
      console.log(newtext)
    }
    const h2 = (event)=>{
        setText(event.target.value)
      }

    const h3 = ()=>{
     var text= document.getElementById("exampleFormControlTextarea1")
     text.select()
     navigator.clipboard.writeText(text.value)

    }

  return (
  
    <div className='container' style={{color: props.mode === "dark"? "white":"black"}}>
      
        <div class="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label">Fill Your Sentence Here</label>
        <textarea className="form-control" id="exampleFormControlTextarea1"  rows="8" value={text} onChange={h2} placeholder="Fill here" style={{backgroundColor: props.mode === "dark" ? "grey":"white"}}></textarea>
        </div>
        <button className='btn btn-success' onClick={h1}>Convert to uppercase</button>
        <button className='btn btn-success mx-3' onClick={h3}>Copy</button>
        <p>You have {text.length} characters and {(text.split(" ")).filter((element) => {return element.length!==0}).length} words</p>
        <u><h2>PREVIEW HERE</h2></u>
        <p>{text}</p>
        
    </div>
  )
}

import React, { useState } from "react";

export default function TextForm() {
  const touc = () => {
    let newtext = text.toLocaleUpperCase();
    setText(newtext);
  };
  const tolc = () => {
    let newtext = text.toLocaleLowerCase();
    setText(newtext);
  };
  const handelonchange = (event) => {
    setText(event.target.value);
  };
  const Cl=()=>{
    let newtext=" "
    setText(newtext);
  }
  const Res=()=>{
  let newtext=text.split(/[ ]+/);
  setText(newtext.join(" "))
  }
  const Ct=()=>{
    let newtext=document.getElementById("mybox");
    newtext.select();
    navigator.clipboard.writeText(newtext.value)
  }
  const [text, setText] = useState("enter text here");
  return (
    <>
    <div className=" container my-3 mb-3">
      <label htmlFor="exampleFormControlTextarea1" className="form-label">
        Enter Text to Analyize
      </label>
      <textarea
        className="form-control"
        value={text}
        onChange={handelonchange}
        id="mybox"
        rows="8"
      ></textarea>
      <button
        type="button"
        onClick={touc}
        className=" my-3 mx-1 btn btn-primary"
      >
        Change To upper Case
      </button>
      <button
        type="button"
        onClick={tolc}
        className=" my-3 mx-1 btn btn-primary"
      >
        Change To lower Case
      </button>
      <button type="button" onClick={Res} className=" my-3 mx-1 btn btn-primary">
        Remove Extra Spaces
      </button>
      <button type="button" onClick={Ct} className=" my-3 mx-1 btn btn-primary">
        Copy text
      </button>
      <button
        type="button"
        onClick={Cl}
        className=" my-3 mx-1 btn btn-primary"
      >
        Clear Text
      </button>
    </div>
    <div className="container my-3">
      <h2>DETAILS ABOUT YOUR CONTENT </h2>
      <p className="my-3">There are {text.split(" ").length} words and {text.length} character in your provided content </p>
      <p>The Content can take {0.008*text.split(" ").length} Mins to Read </p>

    </div>
    </>
  );
}

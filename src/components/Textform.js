import React, { useState } from "react";

export default function Textform(props) {
  const [Text, setText] = useState("");
  const handleUpClick = () => {
    console.log("uppercase was clicked" + Text);
    let newText = Text.toUpperCase();
    setText(newText);
  };

  const handleLowClick = () => {
    console.log("uppercase was clicked" + Text);
    let newText = Text.toLowerCase();
    setText(newText);
  };
  const handleOnchange = (event) => {
    console.log("You clicked on change");
    setText(event.target.value);
  };
  const clearonclick = () => {
    setText("");
  };
  const handleOncopy = () => {
    navigator.clipboard.writeText(Text);
  };

  return (
    <div>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          value={Text}
          onChange={handleOnchange}
          id="mybox"
          rows="8"
        ></textarea>
      </div>
      <button className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>
        convert to Uppercase
      </button>
      <button className="btn btn-primary mx-2 my-1" onClick={handleLowClick}>
        convert to lowercase
      </button>
      <button className="btn btn-primary mx-2 my-1" onClick={clearonclick}>
        clear
      </button>
      <button className="btn btn-primary mx-2 my-1" onClick={handleOncopy}>
        copyText
      </button>
      {/* <button className="btn btn-primary mx-2" onClick={changeToOthercase}>
        buttton click
      </button> */}
      <div className="container my-2">
        <h2> your text summary </h2>
        <b>
          <p>
            {" "}
            {
              Text.split(" ").filter((element) => {
                return element.length != 0;
              }).length
            }
            words and {Text.length} character
          </p>
        </b>
        <p>{0.008 * Text.split(" ").length} minutes</p>
        <h2> preview</h2>
        <b>
          {" "}
          <p>{Text}</p>
        </b>
      </div>
    </div>
  );
}

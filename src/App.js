import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import { useState } from "react";

function App() {
  const [mode, setMode] = useState("dark");

  const togglemode = () => {
    if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "white";
    } else {
      setMode("dark");
      document.body.style.backgroundColor = "grey";
    }
  };

  return (
    <>
      <Navbar a="textPad" mode={mode} togglemode={togglemode}></Navbar>
      <div className="container my-3">
        <Textform heading="Enter the text to analyze"></Textform>
      </div>
      {/* <About></About> */}
    </>
  );
}
export default App;

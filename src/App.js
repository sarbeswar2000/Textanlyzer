import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import { useState } from "react";
import About from "./components/About";
// import Alert from "./components/Alert";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Fetch from "./components/Fetch";

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
      <Router>
        <Navbar a="textPad" mode={mode} togglemode={togglemode}></Navbar>
        <Routes>
          <Route
            path="/"
            element={
              <div className="container my-3">
                <Textform heading="Enter  text to analyze"></Textform>
              </div>
            }
          />
          <Route
            path="/Home"
            element={
              <div className="container my-3">
                <Textform heading="Enter  text to analyze"></Textform>
              </div>
            }
          />
          <Route path="/About" element={<About />} />
          <Route
            path="/Fetch"
            element={
              <Fetch
                content=" With the release of React Router v6, the introduction of the component has
      brought several advantages over the deprecated component in previous
      versions. look at some advantages of using for handling routing logic in
      your React applications."
              />
            }
          />
        </Routes>
      </Router>
    </>
  );
}
export default App;

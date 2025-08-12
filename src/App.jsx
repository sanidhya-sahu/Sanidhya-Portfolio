import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import { ReactLenis} from 'lenis/react'
function App() {
  const lenisOptions = {
    lerp: 0.1,
    duration: 1.2,
    smooth: true,
  };
  return (
    <>
      <ReactLenis root options={lenisOptions} />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} ></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App

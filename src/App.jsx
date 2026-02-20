import React from "react";
import { NavBar } from "./components/NavBar";
import Hero from "./components/Hero";
import ProductViewer from "./components/ProductViewer";
import gsap from 'gsap';
import {ScrollTrigger,SplitText } from "gsap/all"
function App() {
  return (
    <div>
      <Hero/>
      <NavBar/>
      <ProductViewer/>
    </div>
  );
}

export default App;
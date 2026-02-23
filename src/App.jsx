import React from "react";
import { NavBar } from "./components/NavBar";
import Hero from "./components/Hero";
import ProductViewer from "./components/ProductViewer";
import gsap from 'gsap';
import {ScrollTrigger,SplitText } from "gsap/all"
import ShowCase from "./components/ShowCase";
function App() {
  return (
    <div>
      <Hero/>
      <NavBar/>
      <ProductViewer/>
      <ShowCase/>
    </div>
  );
}

export default App;
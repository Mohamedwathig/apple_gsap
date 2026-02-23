import React from "react";
import { NavBar } from "./components/NavBar";
import Hero from "./components/Hero";
import ProductViewer from "./components/ProductViewer";
import gsap from 'gsap';
import {ScrollTrigger,SplitText } from "gsap/all"
import ShowCase from "./components/ShowCase";
import Performance from "./components/Performance";
import Features from "./components/Features";
import HighLights from "./components/HighLights";
import Fotter from "./components/Fotter";
function App() {
  return (
    <div>
      <Hero/>
      <NavBar/>
      <ProductViewer/>
      <ShowCase/>
      <Performance/>
      <Features/>
      <HighLights/>
      <Fotter/>
    </div>
  );
}

export default App;
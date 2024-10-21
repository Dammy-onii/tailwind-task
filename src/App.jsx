import React from "react";
import Hero from "./assets/components/Hero";

import "./App.css";
import OurServices from "./assets/components/OurServices";
import AboutUs from "./assets/components/AboutUs";
import Capabilities from "./assets/components/Capabilities";
import Gallery from "./assets/components/Gallery";
import Nav from "./assets/components/Nav";
import Blog from "./assets/components/Blog";
import Newsletter from "./assets/components/Newsletter";

function App() {
  return (
    <div>
      <Nav />
      <Hero />
      <OurServices />
      <AboutUs />
      <Gallery />
      <Capabilities />
      <Blog />
      <Newsletter />
    </div>
  );
}

export default App;

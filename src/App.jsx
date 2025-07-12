import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import BaseLayout from "./base/Baselayout";
import Skills from "./pages/Skills";
import Education from "./pages/Education";
import Gallery from "./pages/Gallery";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800, // Animation duration in ms
      once: false, // Whether animation should happen only once
      // Offset (in px) from the original trigger point
    });
  }, []);

  return (
    <BaseLayout>
      <div>
        <Home />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Gallery />
        <Contact />
      </div>
    </BaseLayout>
  );
}

export default App;

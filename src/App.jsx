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
  return (
    <>
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
    </>
  );
}

export default App;

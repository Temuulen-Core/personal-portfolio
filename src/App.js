import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/About";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
import Projects from "./components/Project";
import Skill from "./components/Skill";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <div className="bg-[#0F0F0F]">
              <Hero />
              <About />
              <Projects />
              <Skill />
              <Contact />
            </div>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import React from "react";
import Navbar from "./sections/Navbar";
import Hero from "./sections/hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Clients from "./sections/Clients";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import WorkExperience from "./sections/WorkExperience";

function App() {
  return (
    <main className="max-w-[1440px] mx-auto">
      <Navbar />
      <Hero/>
      <About/>
      <Projects/>
      <Clients/>
      <WorkExperience/>
      <Contact/>
      <Footer/>
    </main>

  );
}

export default App;

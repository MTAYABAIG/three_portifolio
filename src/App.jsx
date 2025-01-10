import React from "react";
import Navbar from "./sections/Navbar";
import Hero from "./sections/hero";

function App() {
  return (
    <main className="max-w-[1440px] mx-auto">
      <Navbar />
      <Hero/>
    </main>
  );
}

export default App;

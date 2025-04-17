import React from "react";
import Navbar from "./components/Navbar";
import { Home } from "./components/Home";
import Skills from "./components/Skills";

const App = () => {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900 relative top-0 left-0 z-0 w-full min-h-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
      {/* Global background */}
      <div className="fixed top-0 left-0 z-[-1] w-full min-h-screen"></div>
      <Navbar />

      {/* Main container */}
      <div className="container px-3 mx-auto">
        <Home />
        <Skills />
      </div>
    </div>
  );
};

export default App;

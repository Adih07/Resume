import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutMe from "./Components/AboutMe";
import Contact from "./Components/Contact";
import Education from "./Components/Education";
import Hobby from "./Components/Hobby";
import Im from "./Components/Im";
import Skills from "./Components/Skills";

const App = () => {
  return (
    <BrowserRouter>
      <AboutMe />
      <Routes>
        <Route path="/" element={<Im />} />

        <Route path="/education" element={<Education />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/hobby" element={<Hobby />} />
        <Route path="/skills" element={<Skills />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

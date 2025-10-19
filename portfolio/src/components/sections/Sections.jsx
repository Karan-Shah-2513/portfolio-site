import React from "react";
import About from "./about";
import Skills from "./skills";
import Experience from "./experience";
import Projects from "./projects";
import Achievements from "./achievements";
import Contact from "./contact";

const Sections = () => {
  return (
    <div>
      <div>
        <About />
        <div className="relative h-5 bg-transparent mt-20 before:content-[''] before:absolute before:w-full before:h-full before:border-t-[3px] before:border-white before:-rotate-3 before:origin-left" />

        <Skills />
        <div className="relative h-5 bg-transparent mt-20 before:content-[''] before:absolute before:w-full before:h-full before:border-t-[3px] before:border-white before:rotate-3 before:origin-left" />

        <Experience />
        <div className="relative h-5 bg-transparent mt-20 before:content-[''] before:absolute before:w-full before:h-full before:border-t-[3px] before:border-white before:-rotate-3 before:origin-left" />

        <Projects />
        <div className="relative h-5 bg-transparent mt-20 before:content-[''] before:absolute before:w-full before:h-full before:border-t-[3px] before:border-white before:rotate-3 before:origin-left" />

        <Achievements />
        <div className="relative h-5 bg-transparent mt-20 before:content-[''] before:absolute before:w-full before:h-full before:border-t-[3px] before:border-white before:-rotate-3 before:origin-left" />

        <Contact />
      </div>
    </div>
  );
};

export default Sections;

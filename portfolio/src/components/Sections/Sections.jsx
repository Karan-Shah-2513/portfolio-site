import React from "react";
import About from "./About/About";
import Skills from "./Skills/Skils";
import Experience from "./Experience/Experience";
import Projects from "./Projects/Projects";
import Achievements from "./Achievements/Achievements";
import Contact from "./Contact/Contact";

const Sections = () => {
  const sections = [
    "About",
    "Skills",
    "Work Experience",
    "Projects",
    "Achievements",
    "Contact",
  ];

  return (
    <div>
      <div>
        <>
          <About />
          <div className="relative h-5 bg-transparent mt-20 before:content-[''] before:absolute before:w-full before:h-full before:border-t-[3px] before:border-white before:-rotate-3 before:origin-left" />
        </>

        <>
          <Skills />
          <div className="relative h-5 bg-transparent mt-20 before:content-[''] before:absolute before:w-full before:h-full before:border-t-[3px] before:border-white before:rotate-3 before:origin-left" />
        </>

        <>
          <Experience />
          <div className="relative h-5 bg-transparent mt-20 before:content-[''] before:absolute before:w-full before:h-full before:border-t-[3px] before:border-white before:-rotate-3 before:origin-left" />
        </>

        <>
          <Projects />
          <div className="relative h-5 bg-transparent mt-20 before:content-[''] before:absolute before:w-full before:h-full before:border-t-[3px] before:border-white before:rotate-3 before:origin-left" />
        </>

        <>
          <Achievements />
          <div className="relative h-5 bg-transparent mt-20 before:content-[''] before:absolute before:w-full before:h-full before:border-t-[3px] before:border-white before:-rotate-3 before:origin-left" />
        </>

        <>
          <Contact />
        </>
      </div>
    </div>
  );
};

export default Sections;

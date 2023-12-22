import React from "react";
import styles from "./Sections.module.scss";
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
      {sections.map((section, index) => (
        <div key={index}>
          {index === 0 && (
            <>
              <About />
              <div className={styles.hrSlantLeft} />
            </>
          )}
          {index === 1 && (
            <>
              <Skills />
              <div className={styles.hrSlantRight} />
            </>
          )}
          {index === 2 && (
            <>
              <Experience />
              <div className={styles.hrSlantLeft} />
            </>
          )}
          {index === 3 && (
            <>
              <Projects />
              <div className={styles.hrSlantRight} />
            </>
          )}
          {index === 4 && (
            <>
              <Achievements />
              <div className={styles.hrSlantLeft} />
            </>
          )}
          {index === 5 && (
            <>
              <Contact />
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default Sections;

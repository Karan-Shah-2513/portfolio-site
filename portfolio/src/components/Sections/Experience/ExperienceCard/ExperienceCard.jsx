// A Card where I can Write about my work experience 1 is at Deutsche Bank and 2 is at AI & DL lab at SP-IT
//
// Path: portfolio/src/components/Sections/Experience/ExperienceCard/ExperienceCard.jsx

import React from "react";
import styles from "./ExperienceCard.module.scss";

const ExperienceCard = ({ title, company, duration, content }) => {
  return (
    <div className={styles.ExperienceCard}>
      <div className={styles.title}>{title}</div>
      <div className={styles.company}>{company}</div>
      <div className={styles.duration}>{duration}</div>
      <div className={styles.content}>
        {content.map((line, index) => (
          <div key={index}>{line}</div>
        ))}
      </div>
    </div>
  );
};
export default ExperienceCard;

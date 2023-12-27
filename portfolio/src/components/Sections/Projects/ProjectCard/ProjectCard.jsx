"use client";
import React, { useState } from "react";
import styles from "./ProjectCard.module.scss";

const ProjectCard = ({ projectName, link, imagePath, description }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div
      className={styles["project-card"]}
      onMouseEnter={handleCardFlip}
      onMouseLeave={handleCardFlip}
    >
      <div
        className={`${styles["project-card-front"]} ${
          isFlipped ? styles.hidden : ""
        }`}
      >
        <img src={imagePath} alt={projectName} />
        <h3>{projectName}</h3>
        <a href={link} target="_blank" rel="noopener noreferrer">
          Visit Project
        </a>
      </div>
      <div
        className={`${styles["project-card-back"]} ${
          isFlipped ? "" : styles.hidden
        }`}
      >
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;

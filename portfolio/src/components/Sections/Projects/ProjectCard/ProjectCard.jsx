"use client";
import styles from "./ProjectCard.module.scss";

const ProjectCard = ({ projectName, link, imagePath, description }) => {
  return (
    <div className={styles["project-card"]}>
      <div className={styles["project-card-front"]}>
        <h2 className={styles["title"]}>{projectName}</h2>
        <img width="70%" src={imagePath} alt={projectName} />
        <a href={link} target="_blank" rel="noopener noreferrer">
          Visit Project
        </a>
      </div>
      <div className={styles["description"]}>
        <p>{description}</p>
      </div>
    </div>
    // <div
    //   className={styles["project-card"]}
    //   onMouseEnter={handleCardFlip}
    //   onMouseLeave={handleCardFlip}
    // >
    //   <div
    //     className={`${styles["project-card-front"]} ${
    //       isFlipped ? styles.hidden : ""
    //     }`}
    //   >
    //     <img src={imagePath} alt={projectName} />
    //     <h2>{projectName}</h2>
    //     <a href={link} target="_blank" rel="noopener noreferrer">
    //       Visit Project
    //     </a>
    //   </div>
    //   <div
    //     className={`${styles["project-card-back"]} ${
    //       isFlipped ? "" : styles.hidden
    //     }`}
    //   >
    //     <p>{description}</p>
    //   </div>
    // </div>
  );
};

export default ProjectCard;

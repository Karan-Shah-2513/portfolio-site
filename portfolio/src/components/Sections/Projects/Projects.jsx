import styles from "./Projects.module.scss";

import ProjectCard from "./ProjectCard/ProjectCard";
import Command from "@/components/Command/Command";

const projectList = [
  {
    projectName: "Decentralised Web Meetings with Code Collaboration",
    link: "https://proxima-karan-shah-2513.cloud.okteto.net/",
    imagePath: "/projectsImages/proxima.png",
    description: [
      "Through this website developers can have decentralised video meetings with live code collaboration",
      "Used QuillJS and sockets to edit code simultaneously from multiple places just like google docs",
      "Used Huddle01 is used for decentralised meetings",
      "Used Lighthouse IPFS (Interplanetary File System) for storing meeting files",
      "Dockerised the application and scheduled a cron job to deploy the website once everyday",
    ],
    date: "Feb 2023",
  },
  {
    projectName: "Defensive Data Transfer",
    link: "https://example.com/data-transfer",
    imagePath: "/projectImages/data-transfer.png",
    description: [
      "Created a CLI solution for shifting large databases/files from local to cloud",
      "Implemented PKI using OpenSSL, used AES-CBC mode for encrypting data and RSA for the AES key",
      "Tested with AWS RDS with PostgreSQL setup",
    ],
    date: "April 2023",
  },
  {
    projectName: "Restaurant reviews website",
    link: "https://example.com/restaurant-reviews",
    imagePath: "/projectImages/restaurant-reviews.png",
    description: [
      "Through the website you can Add, Edit or Delete a review of restaurants",
      "Used MongoDB Atlas for storing reviews",
      "Used ExpressJS framework for building apis for the React Frontend",
    ],
    date: "July 2022",
  },
  {
    projectName: "Data Structure Visualizer",
    link: "https://example.com/data-structure-visualizer",
    imagePath: "/projectImages/data-structure-visualizer.png",
    description: [
      "Built a Website that aims to help programmers visualize Data Structures",
      "Data Structures covered include Heap, Binary search tree, Binary tree, Stack and Queue",
      "Used HTML canvas for the visualization of nodes/stacks",
    ],
    date: "Dec 2021",
  },
  {
    projectName: "Basic Android Calculator App",
    link: "https://example.com/calculator-app",
    imagePath: "/projectImages/calculator-app.png",
    description: [
      "Built a calculator app can that can do basic operations(+,-,*,/)",
      "The app was built on Android Studio",
    ],
    date: "2020",
  },
];

const Projects = () => {
  return (
    <>
      <div className={styles["command"]}>
        <Command id="projects" command="ls projects/" />
      </div>

      <div className={styles.projectsList}>
        {projectList.map((project, index) => (
          <ProjectCard
            key={index}
            projectName={project.projectName}
            link={project.link}
            imagePath={project.imagePath}
            description={project.description}
            date={project.date}
          />
        ))}
      </div>
    </>
  );
};

export default Projects;

"use client";

const ProjectCard = ({ projectName, link, imagePath, description }) => {
  const resolvedImagePath = imagePath
    ? imagePath.startsWith("http")
      ? imagePath
      : `${import.meta.env.BASE_URL}${imagePath.replace(/^\//, "")}`
    : imagePath;

  return (
    <div className="flex flex-col justify-center items-center m-10 md:m-4">
      <div className="flex flex-col justify-center items-center m-4">
        <h2 className="text-4xl md:text-2xl">{projectName}</h2>
        <img width="70%" src={resolvedImagePath} alt={projectName} />
        <a href={link} target="_blank" rel="noopener noreferrer">
          Visit Project
        </a>
      </div>
      <div className="m-4 md:m-2">
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;

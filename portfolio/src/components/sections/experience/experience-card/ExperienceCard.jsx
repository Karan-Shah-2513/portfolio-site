// A Card where I can Write about my work experience 1 is at Deutsche Bank and 2 is at AI & DL lab at SP-IT
//
// Path: portfolio/src/components/Sections/Experience/ExperienceCard/ExperienceCard.jsx

import React from "react";

const ExperienceCard = ({ title, company, duration, content }) => {
  return (
    <div className="flex flex-col items-center justify-center m-8 border border-[#eaeaea] hover:scale-105 hover:cursor-pointer transition-all duration-200 ease-in-out md:mb-4">
      <div className="text-2xl font-semibold mb-4">{title}</div>
      <div className="text-lg font-medium">{company}</div>
      <div className="text-base font-normal">{duration}</div>
      <div className="text-base font-normal m-4">
        {content.map((line, index) => (
          <div key={index}>{line}</div>
        ))}
      </div>
    </div>
  );
};
export default ExperienceCard;

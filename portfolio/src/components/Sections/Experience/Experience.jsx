import Command from "@/components/command-prompt";
import ExperienceCard from "./ExperienceCard/ExperienceCard";

const experience = [
  {
    title: "Software Engineering Intern",
    company: "Deutsche Bank",
    duration: "May 2023 - July 2023",
    content: [
      "Developed a web application to automate the process of creating and managing the data for the bank’s internal applications.",
      "The application was built using React and Node.js and was deployed on the bank’s internal cloud.",
    ],
  },
  {
    title: "Research Intern",
    company: "AI & DL lab at SP-IT",
    duration: "June 2023 - July 2023",
    content: [
      "Developed a web application to automate the process of creating and managing the data for the bank’s internal applications.",
      "The application was built using React and Node.js and was deployed on the bank’s internal cloud.",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="m-16 text-white">
      <div className="flex justify-center items-center">
        <Command command="grep -i 'work experience' resume.txt" />
      </div>
      <div className="text-2xl m-8 flex flex-col justify-center items-center">
        <h3 className="text-5xl text-[#ff720b]">Work Experience</h3>

        {/* loop over experience */}
        {experience.map((exp, index) => (
          <ExperienceCard
            key={index}
            title={exp.title}
            company={exp.company}
            duration={exp.duration}
            content={exp.content}
          />
        ))}
      </div>
    </section>
  );
};
export default Experience;

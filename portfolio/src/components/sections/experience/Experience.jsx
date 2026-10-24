import Command from "@/components/command-prompt";
import ExperienceCard from "./experience-card";

const experience = [
  // TODO
  {
    id: "dws-software-engineer-2024",
    title: "Senior Technology Analyst - SDE-I",
    company: "DWS Group",
    duration: "July 2024 - Present",
    content: ["Working as a full-stack"],
  },
  {
    id: "deutsche-bank-software-engineer-2023",
    title: "Software Engineering Intern",
    company: "Deutsche Bank",
    duration: "May 2023 - July 2023",
    content: [
      "Developed a web application to automate the process of creating and managing the data for the bank’s internal applications.",
      "The application was built using React and Node.js and was deployed on the bank’s internal cloud.",
    ],
  },
  {
    id: "spit-ai-research-intern-2023",
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
        {/* loop over experience */}
        {experience.map((exp) => (
          <ExperienceCard
            key={exp.id}
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

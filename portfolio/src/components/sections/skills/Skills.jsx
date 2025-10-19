import Command from "@/components/command-prompt";

const skills = [
  "React",
  "Node",
  "Express",
  "Next.js",
  "MongoDB",
  "PostgreSQL",
  "Python",
  "C/C++",
  "Java",
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "Git",
  "GitHub",
  "AWS",
  "Docker",
  "Kubernetes",
  "Jenkins",
  "Linux",
  "Bash",
  "REST",
  "Django",
  "Flask",
  "Bootstrap",
  "Material UI",
  "Tailwind CSS",
  "Android",
  "Figma",
  "TensorFlow",
  "PyTorch",
  "OpenCV",
  "Pandas",
  "Numpy",
  "Matplotlib",
  "Seaborn",
  "Scikit-learn",
];

const Skills = () => {
  return (
    <section id="skills" className="m-8 mx-32 md:mx-8">
      <div className="flex flex-col items-center">
        <Command command="ls skills/" />
        {/* <div className="mt-32 block">
          Crazy Developer who wants to explore every stack
        </div> */}
      </div>
      <div className="m-8 grid grid-cols-3 gap-4 md:grid-cols-2">
        {skills.map((skill, index) => (
          <div key={index}>{skill}</div>
        ))}
      </div>
    </section>
  );
};

export default Skills;

import Command from "@/components/command-prompt";

const skills = [
  "TypeScript",
  "JavaScript",
  "React",
  "Next.js",
  "Node.js",
  "Deno",
  "NestJS",
  "PostgreSQL",
  "MongoDB",
  "Redis",
  "AWS",
  "Serverless",
  "Docker",
  "Kubernetes",
  "Terraform",
  "Git",
  "GitHub Actions",
  "Python",
  "Go",
  "Rust",
  "PyTorch",
  "Hugging Face",
  "Prompt Engineering",
  "Pandas",
  "NumPy",
  "Tailwind CSS",
  "Figma",
  "Linux",
  "Bash",
];

const Skills = () => {
  return (
    <section id="skills" className="m-8 mx-32 md:mx-8">
      <div className="flex flex-col items-center">
        <Command command="ls skills/" />
      </div>
      <div className="m-8 grid grid-cols-3 gap-4 md:grid-cols-2">
        {skills.map((skill) => (
          <div key={skill}>{skill}</div>
        ))}
      </div>
    </section>
  );
};

export default Skills;

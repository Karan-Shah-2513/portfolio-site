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
      <div className="flex flex-col items-center text-center">
        <Command command="ls skills/" />
        <h2 className="mt-4 text-lg font-semibold text-gray-100">Skills</h2>
        <p className="mt-1 text-sm text-gray-400 max-w-xl">
          Technologies I use regularly — focused, modern and production-ready.
        </p>
      </div>

      <ul className="mt-8 m-8 grid grid-cols-3 gap-3 md:grid-cols-2 lg:grid-cols-4 list-none p-0">
        {skills.map((skill) => (
          <li key={skill} className="m-0">
            <span
              className="inline-flex items-center justify-center rounded-full px-3 py-1 text-sm font-medium bg-gray-800/60 text-gray-100 border border-gray-700/60 hover:bg-gray-700/60 transition-colors"
              aria-label={skill}
            >
              {skill}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;

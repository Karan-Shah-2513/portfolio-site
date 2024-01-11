import Command from "@/components/Command/Command";
import styles from "./Skills.module.scss";

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
    <section id="skills" className={styles.Skills}>
      <div className={styles.Command}>
        <Command command="ls skills/" />
        {/* <div className="para">
          Crazy Developer who wants to explore every stack
        </div> */}
      </div>
      <div className={styles.skillsList}>
        {skills.map((skill, index) => (
          <div key={index} className={styles.skill}>
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;

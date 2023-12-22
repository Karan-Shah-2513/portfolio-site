import Command from "@/components/Command/Command";
import styles from "./Experience.module.scss";

const Experience = () => {
  return (
    <div className={styles.Experience}>
      <div className={styles.Command}>
        <Command command="grep -i 'work experience' resume.txt" />
      </div>
      <div className={styles.content}>
        <h3 className={styles.workExperience}>Work Experience</h3>
        <ol>
          <li>Software Engineer Intern @ Deutsche Bank</li>
          <li>Research Intern @ AI & DL lab at SP-IT</li>
        </ol>
      </div>
    </div>
  );
};
export default Experience;

import styles from "./About.module.scss";
import Command from "@/components/Command/Command";

const About = () => {
  return (
    <section id="about" className={styles.About}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.welcome}>Welcome!</div>
          <Command command="whoami" />
          <p>
            I am <span>Karan Shah</span> a Fourth Year{" "}
            <span>Information Technology</span> Student with an ability to
            generate high quality code in <span>C/C++</span>, <span>Java</span>,{" "}
            <span>JavaScript</span> and <span>Python</span> who is fascinated by
            new tech and eager to learn.
          </p>
        </div>
        <div className={styles.gif}>
          <img src="/icons/replace-with-good-svg.jpg" alt="coder" />
        </div>
      </div>
    </section>
  );
};
export default About;

import styles from "./Navbar.module.scss";
const Navbar = () => {
  return (
    <>
      <div className={styles.Navbar}>
        <div className="name">Karan Shah</div>
        {/* menu bar for about, skills, Experience, Projects and Contact */}
        <div className={styles.menu}>
          <a href="#about" className={styles.menuItem}>
            About
          </a>
          <a href="#skills" className={styles.menuItem}>
            Skills
          </a>
          <a href="#experience" className={styles.menuItem}>
            Experience
          </a>
          <a href="#projects" className={styles.menuItem}>
            Projects
          </a>
          <a href="#achievements" className={styles.menuItem}>
            Achievements
          </a>
          <a href="#contact" className={styles.menuItem}>
            Contact
          </a>
        </div>
        {/* LinkedIn and Github Icons with Link */}
        <div className={styles.social}>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/karan-sunil-shah/"
          >
            <img width="35px" src="/icons/linkedin.png" alt="LinkedIn" />
          </a>
          <a target="_blank" href="https://github.com/Karan-Shah-2513/">
            <img width="30px" src="/icons/github.png" alt="LinkedIn" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;

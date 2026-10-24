import githubIcon from "@/assets/github.png";
import linkedinIcon from "@/assets/linkedin.png";
const Navbar = () => {
  return (
    <div className="flex justify-start items-center bg-black text-white p-4 sticky top-0 border-b border-[#72ffc9] z-10">
      <div className="name">Karan Shah</div>
      {/* menu bar for about, skills, Experience, Projects and Contact */}
      <div className="flex flex-1 justify-end items-center">
        <a href="#about" className="ml-4 cursor-pointer">
          About
        </a>
        <a href="#skills" className="ml-4 cursor-pointer">
          Skills
        </a>
        <a href="#experience" className="ml-4 cursor-pointer">
          Experience
        </a>
        <a href="#projects" className="ml-4 cursor-pointer">
          Projects
        </a>
        <a href="#achievements" className="ml-4 cursor-pointer">
          Achievements
        </a>
        <a href="#contact" className="ml-4 cursor-pointer">
          Contact
        </a>
      </div>
      {/* LinkedIn and Github Icons with Link */}
      <div className="ml-4 flex justify-end items-center">
        <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/karan-sunil-shah/">
          <img width={35} height={35} src={linkedinIcon} alt="LinkedIn" />
        </a>
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/Karan-Shah-2513/">
          <img width={30} height={30} src={githubIcon} alt="GitHub" />
        </a>
      </div>
    </div>
  );
};

export default Navbar;

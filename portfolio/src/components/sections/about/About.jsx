import Command from "@/components/command-prompt";

const About = () => {
  return (
    <section id="about" className="mx-8 my-2 md:mx-32">
      <div className="flex flex-col md:flex-row justify-between mt-20 mb-32">
        <div className="w-full md:w-2/5 mt-16 text-2xl">
          <div className="text-4xl font-semibold mb-4">Welcome!</div>
          <Command command="whoami" />
          <p>
            I am <span>Karan Shah</span> an Experienced Developer with a
            Bachelors in <span>Information Technology</span> who has an ability
            to generate high quality code in <span>Java</span>,{" "}
            <span>Python</span>, <span>TypeScript/JavaScript</span> and{" "}
            <span>C/C++</span> who is fascinated by new tech and eager to learn.
          </p>
        </div>
        <div className="w-full md:w-1/2 mt-8 md:mt-0 justify-end items-end">
          <img src="/icons/replace-with-good-svg.jpg" alt="coder" />
        </div>
      </div>
    </section>
  );
};
export default About;

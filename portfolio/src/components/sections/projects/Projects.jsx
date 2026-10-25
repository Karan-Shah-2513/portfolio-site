import ProjectCard from "./ProjectCard/ProjectCard";
import Command from "@/components/command-prompt";

const projectList = [
  {
    projectName: "Proxima",
    subtitle: "Decentralized web meetings & code collaboration",
    link: "https://github.com/Karan-Shah-2513/Proxima",
    secondaryLink: "https://ethglobal.com/showcase/proxima-z0rpt",
    imagePath: "/projectsImages/proxima.png",
    description: [
      "Built a collaborative code editor with QuillJS and real-time updates over WebSockets.",
      "Combined decentralized video meetings with Huddle01 and meeting-file storage on IPFS.",
    ],
    technologies: ["Node.js", "Socket.io", "React", "IPFS"],
    linkLabel: "View source",
    date: "February 2023",
  },
  {
    projectName: "Defensive Data Transfer",
    subtitle: "A CLI for secure database transfers",
    description: [
      "Created a command-line tool to transfer large databases and files from local environments to the cloud.",
      "Used AES-CBC encryption with RSA key exchange and tested transfers with AWS RDS and PostgreSQL.",
    ],
    technologies: ["AWS RDS", "PostgreSQL", "OpenSSL", "RSA"],
    date: "April 2023",
  },
  {
    projectName: "Data Structure Visualizer",
    subtitle: "Learn data structures through interaction",
    link: "https://karan-shah-2513.github.io/visualizer/",
    description: [
      "Created an interactive visualizer for heaps, binary search trees, stacks, and queues.",
      "Rendered data structure operations using HTML Canvas.",
    ],
    technologies: ["HTML", "JavaScript", "CSS", "Canvas"],
    linkLabel: "Open live demo",
    date: "December 2021",
  },
];

const Projects = () => (
  <section id="projects" className="mx-auto w-[min(1120px,calc(100%-48px))] border-t border-border/60 py-16 md:py-20">
    <Command command="ls projects/" />
    <div className="mb-8 mt-5 max-w-[660px]">
      <p className="mb-2 font-mono text-xs tracking-[0.12em] text-primary">SELECTED WORK</p>
      <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Projects</h2>
      <p className="mt-3 leading-7 text-muted-foreground">A few builds that bring together systems thinking and hands-on engineering.</p>
    </div>
    <div className="grid grid-cols-1 items-start gap-4 md:grid-cols-2">
      {projectList.map((project) => (
        <ProjectCard key={project.projectName} {...project} />
      ))}
    </div>
  </section>
);

export default Projects;

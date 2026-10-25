import Command from "@/components/command-prompt";
import ExperienceCard from "./experience-card";

const experience = [
  {
    id: "dws",
    title: "Senior Technology Analyst (SDE-I)",
    company: "DWS Group",
    duration: "July 2024 — Present · Mumbai–Pune, Hybrid",
    content: [
      "Designed a multi-tenant architecture across Java Spring Boot services, enabling multiple institutional business units to share one codebase with isolated data and configurable routing.",
      "Took full-stack ownership of business-critical services, shaping architecture across Spring Boot, React, WebSockets, and ActiveMQ.",
      "Built real-time trading dashboards with React and AG Grid, backed by Java services and event-driven updates with WebSockets, ActiveMQ, and Kafka.",
      "Coordinated data pipelines and releases with engineering and business partners; recognized by senior leadership for high-impact delivery while maintaining 99.9%+ operational stability.",
    ],
  },
  {
    id: "wematter",
    title: "Software Engineer Intern",
    company: "W.E. matter",
    duration: "January 2024 — June 2024 · Mumbai",
    content: [
      "Built REST APIs with Node.js, Fastify, and MySQL alongside a React frontend.",
      "Worked on a cross-platform social application using React Native.",
      "Automated client-ready PowerPoint reports with TypeScript, reducing manual reporting time by 50%.",
    ],
  },
  {
    id: "deutsche-bank",
    title: "Software Engineer Intern",
    company: "Deutsche Bank",
    duration: "June 2023 — July 2023 · Pune",
    content: [
      "Collaborated with DevOps to integrate a Java Spring Boot application into existing infrastructure.",
      "Identified and addressed open-source software vulnerabilities.",
    ],
  },
];

const Experience = () => (
  <section id="experience" className="mx-auto w-[min(1120px,calc(100%-48px))] border-t border-border/60 py-16 md:py-20">
    <Command command="grep -i 'work experience' resume.txt" />
    <div className="mb-8 mt-5 max-w-[660px]">
      <p className="mb-2 font-mono text-xs tracking-[0.12em] text-primary">THE JOURNEY SO FAR</p>
      <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Experience</h2>
      <p className="mt-3 leading-7 text-muted-foreground">Building and supporting software in finance, technology, and product teams.</p>
    </div>
    <div className="grid gap-4">
      {experience.map((item) => (
        <ExperienceCard
          key={item.id}
          title={item.title}
          company={item.company}
          duration={item.duration}
          content={item.content}
        />
      ))}
    </div>
  </section>
);

export default Experience;

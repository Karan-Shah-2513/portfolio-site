import Command from "@/components/command-prompt";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const skillGroups = [
  { name: "Languages", skills: ["Java", "Python", "C / C++", "TypeScript", "JavaScript", "SQL", "Solidity"] },
  { name: "Frameworks", skills: ["Spring Boot", "React", "Node.js", "Express.js", "React Native"] },
  { name: "Systems & tools", skills: ["Kafka", "ActiveMQ", "WebSockets", "Liquibase", "PostgreSQL", "MySQL", "Linux"] },
];

const Skills = () => (
  <section id="skills" className="mx-auto w-[min(1120px,calc(100%-48px))] border-t border-border/60 py-16 md:py-20">
    <Command command="ls skills/" />
    <div className="mb-8 mt-5 max-w-[660px]">
      <p className="mb-2 font-mono text-xs tracking-[0.12em] text-primary">WHAT I WORK WITH</p>
      <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Tools for building end to end.</h2>
      <p className="mt-3 leading-7 text-muted-foreground">Technologies drawn from my professional experience and shipped projects.</p>
    </div>
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {skillGroups.map((group) => (
        <Card key={group.name}>
          <CardHeader className="p-5 pb-0">
            <CardTitle className="text-base">{group.name}</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-2 p-5">
            {group.skills.map((skill) => <Badge key={skill} variant="outline" className="font-normal text-muted-foreground">{skill}</Badge>)}
          </CardContent>
        </Card>
      ))}
    </div>
  </section>
);

export default Skills;

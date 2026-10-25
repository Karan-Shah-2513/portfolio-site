import { ArrowUpRight, CloudCog, Sparkles } from "lucide-react";
import Command from "@/components/command-prompt";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const cloudLearning = {
  title: "Google Cloud Skills Boost",
  detail:
    "Completed hands-on cloud engineering labs and earned Google Cloud skill badges—practical, structured learning across cloud engineering topics.",
  link: "https://www.credly.com/users/karan-b-shah/badges/credly",
};

const achievements = [
  {
    title: "ETHGlobal 2023",
    detail: "Winner · Best Use of Huddle01",
    link: "https://ethglobal.com/showcase/proxima-z0rpt",
    linkLabel: "See the project",
  },
  {
    title: "Barclays Data Stellar Hackathon",
    detail: "Winner · Most Innovative Solution",
  },
  {
    title: "Campus leadership",
    detail:
      "Class Representative for a batch of 79; SP-IT Computer Society tech team.",
  },
];

const Achievements = () => (
  <section
    id="achievements"
    className="mx-auto w-[min(1120px,calc(100%-48px))] border-t border-border/60 py-16 md:py-20"
  >
    <Command command="grep -i 'highlights' resume.txt" />
    <div className="mb-8 mt-5 max-w-[660px]">
      <p className="mb-2 font-mono text-xs tracking-[0.12em] text-primary">
        BEYOND THE DAY JOB
      </p>
      <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
        Highlights
      </h2>
    </div>
    <Card className="mb-4 overflow-hidden border-primary/30 bg-gradient-to-br from-primary/10 via-card to-card shadow-lg shadow-primary/5">
      <CardContent className="flex flex-col gap-6 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-7">
        <div className="max-w-2xl">
          <div className="mb-4 flex flex-wrap items-center gap-2">
            <span className="grid size-10 place-items-center rounded-lg border border-primary/25 bg-primary/10 text-primary">
              <CloudCog aria-hidden="true" className="size-5" />
            </span>
            <Badge variant="outline" className="border-primary/30 text-primary">
              Google Cloud Skills Boost · 2026
            </Badge>
          </div>
          <h3 className="text-lg font-semibold tracking-tight">
            {cloudLearning.title}
          </h3>
          <p className="mt-2 text-sm leading-6 text-muted-foreground">
            {cloudLearning.detail}
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <Badge variant="secondary" className="font-normal">
              Hands-on cloud engineering labs
            </Badge>
            <Badge variant="secondary" className="font-normal">
              Google Cloud skill badges
            </Badge>
          </div>
        </div>
        <a
          className="inline-flex shrink-0 items-center gap-1 text-sm font-medium text-primary hover:underline"
          href={cloudLearning.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          View badges <ArrowUpRight aria-hidden="true" className="size-4" />
        </a>
      </CardContent>
    </Card>
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      {achievements.map((achievement) => (
        <Card key={achievement.title}>
          <CardContent className="p-5">
            <Sparkles aria-hidden="true" className="mb-3 size-5 text-primary" />
            <h3 className="font-semibold">{achievement.title}</h3>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              {achievement.detail}
            </p>
            {achievement.link && (
              <a
                className="mt-3 inline-flex items-center gap-1 text-sm text-primary hover:underline"
                href={achievement.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {achievement.linkLabel}{" "}
                <ArrowUpRight aria-hidden="true" className="size-4" />
              </a>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  </section>
);

export default Achievements;

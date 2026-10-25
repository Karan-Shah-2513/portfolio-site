import { ArrowDown, ArrowUpRight } from "lucide-react";
import Terminal from "@/components/command-prompt/Terminal";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { PROFILE_EMAIL } from "@/lib/profile";

const About = () => (
  <section
    id="about"
    className="mx-auto grid min-h-[calc(100svh-var(--header-height))] w-[min(1120px,calc(100%-48px))] grid-cols-1 items-center gap-12 py-16 md:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20"
  >
    <div className="max-w-152.5">
      <p className="mb-4 font-mono text-xs tracking-[0.12em] text-primary">
        <span className="mr-2 inline-block size-2 rounded-full bg-primary shadow-[0_0_12px_rgb(83_217_152/70%)]" />
        FULL-STACK SOFTWARE ENGINEER · MUMBAI, INDIA
      </p>
      <h1 className="text-[clamp(2.8rem,6vw,5.1rem)] font-semibold leading-[1.02] tracking-[-0.07em]">
        I build reliable
        <br />
        <span className="text-muted-foreground">real-time systems.</span>
      </h1>
      <p className="mt-6 max-w-132.5 text-base leading-8 text-muted-foreground sm:text-lg">
        I&apos;m Karan Shah, a full-stack engineer working across Java, Spring
        Boot, React, and TypeScript. At DWS, I build multi-tenant platforms and
        real-time trading tools where reliability and clear ownership matter.
      </p>
      <div className="mt-7 flex flex-wrap gap-3">
        <a
          className={cn(
            buttonVariants({ variant: "default" }),
            "bg-primary text-primary-foreground hover:bg-primary/90",
          )}
          href="#experience"
        >
          Explore my work <ArrowDown aria-hidden="true" />
        </a>
        <a
          className={buttonVariants({ variant: "outline" })}
          href={`${import.meta.env.BASE_URL}resume.html`}
          target="_blank"
          rel="noopener noreferrer"
        >
          View résumé <ArrowUpRight aria-hidden="true" />
        </a>
        <a
          className={buttonVariants({ variant: "outline" })}
          href={`mailto:${PROFILE_EMAIL}`}
        >
          Get in touch <ArrowUpRight aria-hidden="true" />
        </a>
      </div>
      <div
        className="mt-10 flex flex-wrap gap-x-10 gap-y-5"
        aria-label="Career highlights"
      >
        <div className="grid gap-1">
          <strong className="text-xl tracking-tight">99.9%+</strong>
          <span className="text-xs text-muted-foreground">operational stability</span>
        </div>
        <div className="grid gap-1">
          <strong className="text-xl tracking-tight">50%</strong>
          <span className="text-xs text-muted-foreground">
            less reporting time
          </span>
        </div>
        <div className="grid gap-1">
          <strong className="text-xl tracking-tight">2×</strong>
          <span className="text-xs text-muted-foreground">
            hackathon wins
          </span>
        </div>
      </div>
    </div>
    <div className="min-w-0">
      <Terminal />
    </div>
  </section>
);

export default About;

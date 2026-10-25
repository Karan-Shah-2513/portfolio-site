import { ArrowDown, ArrowUpRight } from "lucide-react";
import Terminal from "@/components/command-prompt/Terminal";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const About = () => (
  <section id="about" className="mx-auto grid min-h-[calc(100svh-var(--header-height))] w-[min(1120px,calc(100%-48px))] grid-cols-1 items-center gap-12 py-16 md:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
    <div className="max-w-[610px]">
      <p className="mb-4 font-mono text-xs tracking-[0.12em] text-primary">
        <span className="mr-2 inline-block size-2 rounded-full bg-primary shadow-[0_0_12px_rgb(83_217_152_/_70%)]" />
        SOFTWARE ENGINEER · MUMBAI, INDIA
      </p>
      <h1 className="text-[clamp(3.2rem,7vw,5.8rem)] font-semibold leading-[0.98] tracking-[-0.075em]">
        Hi, I&apos;m Karan.<br /><span className="text-muted-foreground">I build useful things.</span>
      </h1>
      <p className="mt-6 max-w-[530px] text-base leading-8 text-muted-foreground sm:text-lg">
        Full-stack software engineer working across Java, Spring Boot, React, and TypeScript.
        I enjoy turning complex problems into reliable products—from multi-tenant platforms
        to real-time systems.
      </p>
      <div className="mt-7 flex flex-wrap gap-3">
        <a className={cn(buttonVariants({ variant: "default" }), "bg-primary text-primary-foreground hover:bg-primary/90")} href="#experience">
          Explore my work <ArrowDown aria-hidden="true" />
        </a>
        <a className={buttonVariants({ variant: "outline" })} href="mailto:shahkaran2513@gmail.com">
          Get in touch <ArrowUpRight aria-hidden="true" />
        </a>
      </div>
      <div className="mt-10 flex flex-wrap gap-x-10 gap-y-5" aria-label="Career highlights">
        <div className="grid gap-1"><strong className="text-xl tracking-tight">99.9%+</strong><span className="text-xs text-muted-foreground">service stability</span></div>
        <div className="grid gap-1"><strong className="text-xl tracking-tight">50%</strong><span className="text-xs text-muted-foreground">less manual reporting</span></div>
        <div className="grid gap-1"><strong className="text-xl tracking-tight">2×</strong><span className="text-xs text-muted-foreground">hackathon winner</span></div>
      </div>
    </div>
    <div className="min-w-0">
      <Terminal />
    </div>
  </section>
);

export default About;

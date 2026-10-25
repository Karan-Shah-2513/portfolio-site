import { ArrowUpRight } from "lucide-react";
import Command from "@/components/command-prompt";
import { buttonVariants } from "@/components/ui/button";

const Contact = () => (
  <section
    id="contact"
    className="mx-auto flex w-[min(1120px,calc(100%-48px))] flex-col items-start border-t border-border/60 py-16 md:py-24"
  >
    <Command command="echo let's build something useful" />
    <p className="mb-3 mt-9 font-mono text-xs tracking-[0.12em] text-primary">
      OPEN TO GOOD CONVERSATIONS
    </p>
    <h2 className="max-w-[650px] text-3xl font-semibold tracking-tight sm:text-5xl">
      Have a challenge in mind?
    </h2>
    <p className="mb-6 mt-4 max-w-[550px] leading-7 text-muted-foreground">
      I&apos;m always glad to connect about thoughtful engineering, interesting
      products, and new opportunities.
    </p>
    <a
      className={buttonVariants({ variant: "default" })}
      href="mailto:shahkaran2513+website@gmail.com"
    >
      shahkaran2513@gmail.com <ArrowUpRight aria-hidden="true" />
    </a>
    <div className="mt-5 flex gap-5 text-sm text-muted-foreground">
      <a
        className="transition-colors hover:text-primary"
        href="https://www.linkedin.com/in/karan-sunil-shah/"
        target="_blank"
        rel="noopener noreferrer"
      >
        LinkedIn ↗
      </a>
      <a
        className="transition-colors hover:text-primary"
        href="https://github.com/Karan-Shah-2513"
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub ↗
      </a>
    </div>
  </section>
);

export default Contact;

import { ArrowUpRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { PROFILE_EMAIL } from "@/lib/profile";

const links = [
  ["About", "about"],
  ["Skills", "skills"],
  ["Experience", "experience"],
  ["Projects", "projects"],
  ["Education", "education"],
  ["Highlights", "achievements"],
  ["Contact", "contact"],
];

const Navbar = () => (
  <header className="sticky top-0 z-50 flex min-h-(--header-height) flex-wrap items-center justify-between gap-x-6 gap-y-2 border-b border-primary/15 bg-background/90 px-5 py-3 backdrop-blur-xl md:px-8">
    <a
      className="inline-flex shrink-0 items-center gap-2.5 font-semibold tracking-tight"
      href="#about"
      aria-label="Karan Shah, back to top"
    >
      <span className="grid size-8.5 place-items-center rounded-lg border border-primary/35 font-mono text-xs text-primary">
        KS
      </span>
      <span>Karan Shah</span>
    </a>
    <nav
      className="order-3 flex w-full items-center justify-start gap-5 overflow-x-auto pb-1 text-xs text-muted-foreground scrollbar-none md:order-none md:w-auto md:justify-center md:gap-6 md:overflow-visible md:pb-0 md:text-sm"
      aria-label="Main navigation"
    >
      {links.map(([label, id]) => (
        <a
          className="shrink-0 py-1 transition-colors hover:text-primary"
          key={id}
          href={`#${id}`}
        >
          {label}
        </a>
      ))}
    </nav>
    <div className="flex shrink-0 items-center gap-2">
      <a
        className="hidden text-sm font-medium text-primary transition-colors hover:text-primary/80 sm:inline-flex sm:items-center sm:gap-1"
        href={`${import.meta.env.BASE_URL}resume.html`}
        target="_blank"
        rel="noopener noreferrer"
      >
        Résumé <ArrowUpRight aria-hidden="true" className="size-4" />
      </a>
      <a
        className={buttonVariants({ variant: "outline", size: "sm" })}
        href={`mailto:${PROFILE_EMAIL}`}
      >
        Let&apos;s talk
      </a>
    </div>
  </header>
);

export default Navbar;

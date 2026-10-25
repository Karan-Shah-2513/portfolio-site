import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

const commands = {
  whoami: {
    output:
      "Karan Shah — software engineer building reliable, full-stack systems.",
    target: "about",
  },
  skills: {
    output:
      "Languages, frameworks, and tools I use across production and project work.",
    target: "skills",
  },
  experience: {
    output:
      "Professional experience at DWS Group, W.E. matter, and Deutsche Bank.",
    target: "experience",
  },
  projects: {
    output:
      "Selected projects: Proxima, Defensive Data Transfer, and Data Structure Visualizer.",
    target: "projects",
  },
  education: {
    output:
      "B.Tech in Information Technology, Sardar Patel Institute of Technology.",
    target: "education",
  },
  achievements: {
    output: "Hackathon wins, cloud learning, and campus leadership.",
    target: "achievements",
  },
  contact: {
    output: "Get in touch by email, LinkedIn, or GitHub.",
    target: "contact",
  },
  help: {
    output:
      "Available commands: whoami, skills, experience, projects, education, achievements, contact, help, clear.",
  },
};

const Terminal = () => {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState([]);

  const runCommand = (rawCommand) => {
    const command = rawCommand.trim().toLowerCase();
    if (!command) return;

    if (command === "clear") {
      setHistory([]);
      return;
    }

    const result = Object.hasOwn(commands, command)
      ? commands[command]
      : undefined;
    const output =
      result?.output ??
      `Command not found: ${command}. Type "help" to see available commands.`;

    setHistory((current) => [...current, { command, output }]);
    if (result?.target) {
      document.getElementById(result.target)?.scrollIntoView({
        behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
          ? "instant"
          : "smooth",
      });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    runCommand(input);
    setInput("");
  };

  return (
    <Card className="overflow-hidden border-border/80 bg-card/95 font-mono text-[0.8rem] shadow-2xl shadow-black/30">
      <div
        className="flex h-11 items-center gap-1.5 border-b border-border bg-secondary/60 px-4"
        aria-hidden="true"
      >
        <span className="size-2 rounded-full bg-rose-400" />
        <span className="size-2 rounded-full bg-amber-300" />
        <span className="size-2 rounded-full bg-emerald-400" />
        <span className="flex-1 pr-8 text-center text-[0.7rem] text-muted-foreground">
          profile — zsh
        </span>
      </div>
      <div className="min-h-[270px] p-4 sm:p-6">
        <p className="mb-2 text-primary">Explore my profile with a command.</p>
        <p className="text-muted-foreground">
          Try <code className="text-primary">help</code> to see what you can
          run.
        </p>
        <div
          className="mt-5 max-h-[215px] overflow-y-auto"
          aria-live="polite"
          aria-relevant="additions"
        >
          {history.map((entry, index) => (
            <div className="mb-3.5" key={`${entry.command}-${index}`}>
              <p className="mb-1.5 leading-relaxed">
                <span className="text-primary">karan@portfolio:~$</span>{" "}
                {entry.command}
              </p>
              <p
                className={
                  entry.output.startsWith("Command not found:")
                    ? "text-rose-300"
                    : "text-muted-foreground"
                }
              >
                {entry.output}
              </p>
            </div>
          ))}
        </div>
        <form
          className="mt-5 flex items-center gap-2 border-t border-border pt-4"
          onSubmit={handleSubmit}
        >
          <label
            className="shrink-0 text-xs text-primary sm:text-sm"
            htmlFor="terminal-command"
          >
            karan@portfolio:~$
          </label>
          <Input
            id="terminal-command"
            className="h-9 min-w-0 border-0 bg-transparent px-1 font-mono text-xs shadow-none ring-0 placeholder:text-muted-foreground/70 focus-visible:ring-0 focus-visible:ring-offset-0 sm:text-sm"
            placeholder="try help"
            autoComplete="off"
            spellCheck="false"
            value={input}
            onChange={(event) => setInput(event.target.value)}
            aria-label="Enter a portfolio command"
          />
          <Button
            className="h-8 px-2.5 font-mono text-xs"
            type="submit"
            variant="secondary"
          >
            Run
          </Button>
        </form>
      </div>
    </Card>
  );
};

export default Terminal;

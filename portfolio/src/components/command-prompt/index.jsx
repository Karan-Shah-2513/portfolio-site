const Command = ({ command }) => (
  <div className="flex flex-wrap items-center gap-2.5 font-mono text-xs text-muted-foreground" aria-label={`Command: ${command}`}>
    <span className="text-primary">karan@portfolio:~$</span>
    <span>{command}</span>
  </div>
);

export default Command;

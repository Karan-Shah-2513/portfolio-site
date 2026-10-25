import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const ProjectCard = ({
  projectName,
  subtitle,
  link,
  secondaryLink,
  imagePath,
  description,
  technologies,
  linkLabel,
  date,
}) => (
  <Card className="flex h-fit flex-col self-start overflow-hidden">
    {imagePath && <img className="aspect-[16/8] w-full border-b border-border object-cover" src={imagePath} alt={`${projectName} project preview`} loading="lazy" />}
    <CardContent className="flex flex-col items-start p-5 sm:p-6">
      <p className="mb-3 text-xs text-muted-foreground">{date}</p>
      <h3 className="text-lg font-semibold tracking-tight">{projectName}</h3>
      <p className="mt-1 text-sm text-muted-foreground">{subtitle}</p>
      <ul className="ml-4 mt-4 grid list-disc gap-2 pl-0 text-sm leading-6 text-muted-foreground marker:text-primary">
        {description.map((line) => <li key={line}>{line}</li>)}
      </ul>
      <ul className="mt-4 flex flex-wrap gap-2" aria-label={`${projectName} technologies`}>
        {technologies.map((technology) => <li key={technology}><Badge variant="secondary" className="font-normal">{technology}</Badge></li>)}
      </ul>
      {(link || secondaryLink) && (
        <div className="flex flex-wrap gap-x-5 gap-y-2 pt-5 text-sm text-primary">
          {link && (
            <a className="inline-flex items-center gap-1 hover:underline" href={link} target="_blank" rel="noopener noreferrer">
              {linkLabel} <ArrowUpRight aria-hidden="true" className="size-4" />
            </a>
          )}
          {secondaryLink && (
            <a className="inline-flex items-center gap-1 hover:underline" href={secondaryLink} target="_blank" rel="noopener noreferrer">
              ETHGlobal showcase <ArrowUpRight aria-hidden="true" className="size-4" />
            </a>
          )}
        </div>
      )}
    </CardContent>
  </Card>
);

export default ProjectCard;

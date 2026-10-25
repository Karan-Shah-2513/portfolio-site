import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ExperienceCard = ({ title, company, duration, content }) => (
  <Card>
    <CardHeader className="flex flex-col gap-4 p-5 sm:flex-row sm:items-start sm:justify-between sm:p-7">
      <div>
        <CardTitle className="text-base">{title}</CardTitle>
        <p className="mt-2 text-sm text-primary">{company}</p>
      </div>
      <p className="m-0 text-left text-xs text-muted-foreground sm:text-right">{duration}</p>
    </CardHeader>
    <CardContent className="p-5 pt-0 sm:px-7 sm:pb-7">
      <ul className="ml-4 grid list-disc gap-2.5 text-sm leading-7 text-muted-foreground marker:text-primary">
        {content.map((line) => <li key={line}>{line}</li>)}
      </ul>
    </CardContent>
  </Card>
);

export default ExperienceCard;

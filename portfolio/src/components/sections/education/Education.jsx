import Command from "@/components/command-prompt";
import { Card, CardContent } from "@/components/ui/card";

const Education = () => (
  <section
    id="education"
    className="mx-auto w-[min(1120px,calc(100%-48px))] border-t border-border/60 py-16 md:py-20"
  >
    <Command command="cat education.txt" />
    <div className="mb-8 mt-5 max-w-[660px]">
      <p className="mb-2 font-mono text-xs tracking-[0.12em] text-primary">
        EDUCATION
      </p>
      <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
        Learning that lasts.
      </h2>
    </div>
    <Card>
      <CardContent className="flex flex-col gap-5 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
        <div>
          <h3 className="font-semibold">
            Sardar Patel Institute of Technology (SP-IT)
          </h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Bachelor of Technology in Information Technology
          </p>
        </div>
        <div className="grid justify-items-start gap-2 text-sm text-muted-foreground sm:justify-items-end sm:text-right">
          <span>Mumbai · 2020-2024</span>
          <strong className="font-semibold text-primary">CGPA 8.8</strong>
          <span>MHT-CET rank 248 · 99.81 percentile</span>
        </div>
      </CardContent>
    </Card>
  </section>
);

export default Education;

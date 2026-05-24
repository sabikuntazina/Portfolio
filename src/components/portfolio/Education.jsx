import { GraduationCap, BookOpen, Code2 } from "lucide-react";
import { SectionHeading, Reveal } from "./Section";

const items = [
  { Icon: GraduationCap, title: "SSC", org: "Viqarunnisa School", meta: "GPA 5.00" },
  { Icon: BookOpen, title: "HSC", org: "Viqarunnisa College", meta: "GPA 5.00" },
  { Icon: Code2, title: "Currently", org: "Learning Full Stack Web Development", meta: "MERN Stack" },
];

export function Education() {
  return (
    <section id="education" className="relative py-24">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading eyebrow="Journey" title="Education & Path" />
        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px animated-gradient" aria-hidden />
          {items.map((it, i) => (
            <Reveal key={it.title} delay={i * 0.08}>
              <div className={`relative flex items-center gap-6 mb-10 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 grid h-9 w-9 place-items-center rounded-full animated-gradient text-white shadow-glow pulse-glow z-10">
                  <it.Icon size={16} />
                </div>
                <div className="md:w-1/2" />
                <div className="ml-16 md:ml-0 md:w-1/2">
                  <div className="rounded-2xl glass p-6 hover:neon-glow transition-all">
                    <div className="text-xs uppercase tracking-widest text-primary">{it.title}</div>
                    <h3 className="mt-1 text-lg font-bold">{it.org}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{it.meta}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

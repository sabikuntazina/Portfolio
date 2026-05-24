import {
  SiHtml5, SiCss, SiJavascript, SiReact, SiNextdotjs, SiTailwindcss, SiDaisyui,
  SiNodedotjs, SiExpress, SiJsonwebtokens, SiMongodb, SiC, SiCplusplus,
} from "react-icons/si";
import { FaJava, FaShieldHalved } from "react-icons/fa6";
import { SectionHeading, Reveal } from "./Section";

const groups = [
  {
    title: "Frontend",
    items: [
      { name: "HTML", Icon: SiHtml5 },
      { name: "CSS", Icon: SiCss },
      { name: "JavaScript", Icon: SiJavascript },
      { name: "React", Icon: SiReact },
      { name: "Next.js", Icon: SiNextdotjs },
      { name: "Tailwind CSS", Icon: SiTailwindcss },
      { name: "DaisyUI", Icon: SiDaisyui },
      { name: "HeroUI", Icon: SiReact },
    ],
  },
  {
    title: "Backend",
    items: [
      { name: "Node.js", Icon: SiNodedotjs },
      { name: "Express.js", Icon: SiExpress },
      { name: "JWT Middleware", Icon: SiJsonwebtokens },
      { name: "BetterAuth", Icon: FaShieldHalved },
    ],
  },
  {
    title: "Database",
    items: [{ name: "MongoDB", Icon: SiMongodb }],
  },
  {
    title: "Languages",
    items: [
      { name: "C", Icon: SiC },
      { name: "C++", Icon: SiCplusplus },
      { name: "Java (OOP)", Icon: FaJava },
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="relative py-24">
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] rounded-full blur-3xl opacity-20"
        style={{ background: "var(--gradient-glow)" }}
        aria-hidden
      />
      <div className="relative mx-auto max-w-7xl px-6">
        <SectionHeading eyebrow="Skills" title="My Tech Arsenal" desc="Tools and technologies I use to bring ideas to life." />
        <div className="space-y-10">
          {groups.map((g, gi) => (
            <Reveal key={g.title} delay={gi * 0.08}>
              <div>
                <h3 className="mb-4 text-sm uppercase tracking-widest text-muted-foreground">{g.title}</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                  {g.items.map(({ name, Icon }) => (
                    <div
                      key={name}
                      className="group relative overflow-hidden rounded-2xl glass p-5 flex flex-col items-center gap-3 transition-all hover:-translate-y-1 hover:neon-glow"
                    >
                      <div
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                        style={{ background: "var(--gradient-glow)" }}
                        aria-hidden
                      />
                      <Icon className="relative text-3xl text-primary group-hover:scale-110 transition-transform" />
                      <span className="relative text-sm font-medium">{name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* marquee */}
        <Reveal delay={0.2}>
          <div className="mt-16 overflow-hidden glass rounded-2xl py-5">
            <div className="marquee gap-12 text-muted-foreground whitespace-nowrap">
              {[...Array(2)].map((_, k) => (
                <div className="flex gap-12 px-6" key={k}>
                  {["React", "Next.js", "Tailwind CSS", "MongoDB", "Express", "Node.js", "JavaScript", "TypeScript", "JWT", "DaisyUI", "BetterAuth"].map(
                    (t) => (
                      <span key={t} className="text-lg font-semibold tracking-wide">
                        ✦ {t}
                      </span>
                    )
                  )}
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

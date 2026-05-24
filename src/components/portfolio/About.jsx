import { Code2, Sparkles, Rocket, Brain } from "lucide-react";
import { SectionHeading, Reveal } from "./Section";

const stats = [
  { label: "Projects Completed", value: "10+", Icon: Rocket },
  { label: "Technologies Learned", value: "15+", Icon: Code2 },
  { label: "Learning Journey", value: "2+ yrs", Icon: Brain },
  { label: "UI/UX Focused", value: "100%", Icon: Sparkles },
];

export function About() {
  return (
    <section id="about" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading eyebrow="About me" title="Crafting Modern Web Experiences" />
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <Reveal>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I'm a frontend-focused developer passionate about turning ideas into elegant,
                responsive interfaces. My toolbox revolves around <span className="text-foreground font-medium">React</span>,{" "}
                <span className="text-foreground font-medium">Next.js</span>, and{" "}
                <span className="text-foreground font-medium">Tailwind CSS</span> — but I'm
                continually expanding into full-stack MERN territory.
              </p>
              <p>
                I love crafting beautiful UI/UX, building micro-interactions, and shipping pixel-perfect
                experiences. Solving real-world problems through code keeps me curious and constantly
                learning.
              </p>
              <p>
                Currently sharpening my full-stack skills while building meaningful projects that
                bridge design and engineering.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-2 gap-4">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.08}>
                <div className="group relative overflow-hidden rounded-2xl glass p-6 hover:neon-glow transition-all hover:-translate-y-1">
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{ background: "var(--gradient-glow)" }}
                    aria-hidden
                  />
                  <s.Icon className="relative text-primary" size={26} />
                  <div className="relative mt-4 text-3xl font-bold gradient-text">{s.value}</div>
                  <div className="relative mt-1 text-sm text-muted-foreground">{s.label}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

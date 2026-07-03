import { ExternalLink, Github } from "lucide-react";
import { SectionHeading, Reveal } from "./Section";
import Image from "next/image";
import Link from "next/link";
import focusroom from "@/assets/focusroom.png";
import wanderlust from "@/assets/wanderlust.jpg";
import lendora from "@/assets/lendora.png";
import lifeatlas from "@/assets/lifeatlas.png"

const projects = [
  {
  name: "LifeAtlas",
  image: lifeatlas,
  desc: "LifeAtlas is a modern full-stack platform where users can create, organize, and share meaningful life lessons and personal growth experiences. Users can publish lessons publicly or privately, interact through likes and comments, save favorites, and access premium content through a secure subscription system. The platform also includes an admin dashboard for managing users, lessons, reports, featured content, and analytics.",
  features: [
    "Authentication",
    "Role-based access",
    "Premium subscription",
    "Likes & comments",
    "Favorites",
    "Admin dashboard",
    "Responsive UI"
  ],
  tech: [
    "Next.js",
    "React.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "JWT",
    "Tailwind CSS",
    "DaisyUI"
  ],
  githubLink: "https://github.com/sabikuntazina/LifeAtlas-client",
  liveLink: "https://life-atlas-client.vercel.app/",
},
  {
    name: "FocusRoom",
    image: focusroom,
    desc: "FocusRoom is a modern full-stack room booking platform where students, teachers, and professionals can discover and reserve spaces for studying, meetings, classes, group discussions, and collaborative work.The platform allows users to browse available rooms, check facilities, search and filter spaces, and book rooms for specific date and time slots with automatic time-conflict prevention.",
    features: ["Authentication", "Room booking", "Responsive UI", "Dashboard", "Dynamic room details"],
    tech: ["Next.js", "MongoDB", "Tailwind CSS", "DaisyUI"],
    githubLink: `https://github.com/sabikuntazina/FocusRoom-client`,
    liveLink:`https://focus-room-client.vercel.app/`,
  },
   {
    name: "Lendora",
    image: lendora,
    desc: "A book lending and management platform where users can borrow books, manage collections, and explore reading resources.",
    features: ["Borrow system", "Authentication", "Book management", "Dashboard", "Responsive UI"],
    tech: ["React", "MongoDB", "Express.js"],
    githubLink: `https://github.com/sabikuntazina/Lendora-Online-Book-Borrowing-Platform`,
    liveLink: `https://lendora-online-book-borrowing-platf.vercel.app/`
  },
 
];

export function Projects() {
  return (
    <section id="projects" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading eyebrow="Projects" title="Featured Work" desc="A selection of real-world projects I've designed and built." />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.1}>
              <article className="group relative h-full overflow-hidden rounded-3xl glass transition-all hover:-translate-y-2 hover:neon-glow">
                <div className="relative overflow-hidden aspect-[16/10]">
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-60 transition-opacity z-10"
                    style={{ background: "var(--gradient-glow)" }}
                    aria-hidden
                  />
                  <Image
                    src={p.image}
                    alt={p.name}
                    loading="lazy"
                    width={1024}
                    height={640}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold gradient-text">{p.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                  <ul className="mt-4 flex flex-wrap gap-1.5">
                    {p.features.map((f) => (
                      <li key={f} className="text-[11px] px-2 py-0.5 rounded-full border border-border text-muted-foreground">
                        {f}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {p.tech.map((t) => (
                      <span key={t} className="text-[11px] px-2 py-0.5 rounded-md animated-gradient text-primary-foreground font-medium">
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="mt-5 flex gap-2">
                    <a
                      href={p.liveLink}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium animated-gradient text-primary-foreground hover:scale-105 transition-transform"
                    >
                      <ExternalLink size={14} /> Live Demo
                    </a>
                    <a
                      href={p.githubLink}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium glass hover:neon-glow transition-all"
                    >
                      <Github size={14} /> GitHub
                    </a>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

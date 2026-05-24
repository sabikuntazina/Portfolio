"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Download, Mail, FolderGit2, Github, Linkedin, MapPin } from "lucide-react";
import { SiReact, SiNextdotjs, SiTailwindcss, SiMongodb, SiJavascript, SiNodedotjs } from "react-icons/si";
import Image from "next/image";
import Link from "next/link";
import profile from "@/assets/porfolio2.png";

const titles = ["Frontend Developer", "MERN Stack Developer", "Next.js Developer"];

function Typewriter() {
  const [i, setI] = useState(0);
  const [text, setText] = useState("");
  const [del, setDel] = useState(false);

  useEffect(() => {
    const current = titles[i];
    const speed = del ? 50 : 90;
    const t = setTimeout(() => {
      if (!del) {
        const next = current.slice(0, text.length + 1);
        setText(next);
        if (next === current) setTimeout(() => setDel(true), 1400);
      } else {
        const next = current.slice(0, text.length - 1);
        setText(next);
        if (next === "") {
          setDel(false);
          setI((p) => (p + 1) % titles.length);
        }
      }
    }, speed);
    return () => clearTimeout(t);
  }, [text, del, i]);

  return (
    <span className="gradient-text">
      {text}
      <span className="ml-0.5 inline-block w-[2px] h-[1em] bg-primary align-middle animate-pulse" />
    </span>
  );
}

const floatingIcons = [
  { Icon: SiReact, pos: "top-0 left-0", delay: "0s" },
  { Icon: SiNextdotjs, pos: "top-4 right-0", delay: "1s" },
  { Icon: SiTailwindcss, pos: "bottom-8 -left-4", delay: "2s" },
  { Icon: SiMongodb, pos: "bottom-0 right-2", delay: "1.5s" },
  { Icon: SiJavascript, pos: "top-1/2 -right-6", delay: "0.5s" },
  { Icon: SiNodedotjs, pos: "top-1/2 -left-8", delay: "2.5s" },
];

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-40" aria-hidden />
      <div
        className="absolute -top-20 -left-20 w-96 h-96 rounded-full blur-3xl opacity-40 float-anim"
        style={{ background: "var(--gradient-glow)" }}
        aria-hidden
      />
      <div
        className="absolute -bottom-20 -right-20 w-[28rem] h-[28rem] rounded-full blur-3xl opacity-40 float-anim"
        style={{ background: "var(--gradient-glow)", animationDelay: "2s" }}
        aria-hidden
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-12 items-center w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" /> Available for opportunities
          </span>
          <h1 className="mt-6 text-5xl md:text-7xl font-bold leading-[1.05] tracking-tight">
            Hi, I'm <span className="gradient-text">Sabikun Enam</span>
            <br />
            <span className="gradient-text">Tazina</span>
          </h1>
          <p className="mt-4 text-2xl md:text-3xl font-semibold">
            <Typewriter />
          </p>
          <p className="mt-6 text-muted-foreground text-base md:text-lg max-w-xl leading-relaxed">
            A passionate frontend-focused MERN stack developer building modern, responsive, and
            user-friendly web applications with React, Next.js, and Tailwind CSS.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full px-6 py-3 font-medium text-primary-foreground animated-gradient hover:scale-105 hover:neon-glow transition-all"
            >
              <FolderGit2 size={18} /> View Projects
            </Link>
            <a
              href="/resume.pdf"
              download
              className="group inline-flex items-center gap-2 rounded-full px-6 py-3 font-medium glass hover:neon-glow transition-all"
            >
              <Download size={18} /> Download Resume
            </a>
            <Link
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full px-6 py-3 font-medium border border-border hover:border-primary hover:text-primary transition-all"
            >
              <Mail size={18} /> Contact Me
            </Link>
          </div>

          <div className="mt-8 flex items-center gap-4 text-muted-foreground">
            <a href="https://github.com/sabikuntazina" target="_blank" rel="noreferrer" className="hover:text-foreground hover:scale-110 transition-transform"><Github size={20} /></a>
            <a href="https://www.linkedin.com/in/sabikun-enam-tazina-/" target="_blank" rel="noreferrer" className="hover:text-foreground hover:scale-110 transition-transform"><Linkedin size={20} /></a>
            <a href="mailto:sabikuntazina@gmail.com" className="hover:text-foreground hover:scale-110 transition-transform"><Mail size={20} /></a>
            <span className="flex items-center gap-1 text-xs"><MapPin size={14} /> Dhaka, Bangladesh</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="relative mx-auto w-72 h-72 md:w-96 md:h-96"
        >
          <div className="absolute inset-0 rounded-full animated-gradient blur-2xl opacity-60" aria-hidden />
          <div className="absolute -inset-3 rounded-full animated-gradient spin-slow opacity-90" aria-hidden />
          <div className="absolute inset-1 rounded-full bg-background" aria-hidden />
          <Image
            src={profile}
            alt="Sabikun Enam Tazina"
            width={768}
            height={768}
            className="relative z-10 h-full w-full rounded-full object-cover p-2 pulse-glow"
          />
          {floatingIcons.map(({ Icon, pos, delay }, idx) => (
            <div
              key={idx}
              className={`absolute ${pos} z-20 grid h-12 w-12 place-items-center rounded-2xl glass float-anim text-primary`}
              style={{ animationDelay: delay }}
            >
              <Icon size={22} />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

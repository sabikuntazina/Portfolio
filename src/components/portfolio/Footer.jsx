"use client";

import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

export function Footer() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const on = () => setShow(window.scrollY > 600);
    window.addEventListener("scroll", on);
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <footer className="relative mt-12 border-t border-border">
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{ background: "var(--gradient-glow)" }}
        aria-hidden
      />
      <div className="relative mx-auto max-w-7xl px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 font-bold">
          <span className="grid h-8 w-8 place-items-center rounded-lg animated-gradient text-white">S</span>
          <span className="gradient-text">Sabikun Enam Tazina</span>
        </div>
        <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} — Crafted with passion & React.</p>
        <div className="flex items-center gap-3">
          <a href="https://github.com/sabikuntazina" target="_blank" rel="noreferrer" className="grid h-10 w-10 place-items-center rounded-full glass hover:neon-glow transition-all"><Github size={16} /></a>
          <a href="https://www.linkedin.com/in/sabikun-enam-tazina-/" target="_blank" rel="noreferrer" className="grid h-10 w-10 place-items-center rounded-full glass hover:neon-glow transition-all"><Linkedin size={16} /></a>
          <a href="mailto:sabikuntazina@gmail.com" className="grid h-10 w-10 place-items-center rounded-full glass hover:neon-glow transition-all"><Mail size={16} /></a>
        </div>
      </div>

      {show && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Scroll to top"
          className="fixed bottom-6 right-6 z-50 grid h-12 w-12 place-items-center rounded-full animated-gradient text-white pulse-glow hover:scale-110 transition-transform"
        >
          <ArrowUp size={18} />
        </button>
      )}
    </footer>
  );
}

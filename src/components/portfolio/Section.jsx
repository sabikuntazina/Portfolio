"use client";

import { motion } from "framer-motion";

export function SectionHeading({ eyebrow, title, desc }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="text-center mb-14"
    >
      <span className="inline-block rounded-full glass px-4 py-1 text-xs uppercase tracking-widest text-primary">
        {eyebrow}
      </span>
      <h2 className="mt-4 text-4xl md:text-5xl font-bold">
        <span className="gradient-text">{title}</span>
      </h2>
      {desc && <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">{desc}</p>}
    </motion.div>
  );
}

export function Reveal({ children, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  );
}

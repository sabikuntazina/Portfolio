"use client";

import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { Mail, Github, Linkedin, MapPin, Send } from "lucide-react";
import { SectionHeading, Reveal } from "./Section";

export function Contact() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const formRef = useRef();

  const onSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setSent(true);
          setLoading(false);

          setTimeout(() => setSent(false), 4000);

          e.target.reset();
        },
        (error) => {
          console.log("Email error:", error);
          setLoading(false);
        }
      );
  };

  return (
    <section id="contact" className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Contact"
          title="Let's Build Something"
          desc="Got a project, idea, or opportunity? My inbox is always open."
        />

        <div className="grid md:grid-cols-2 gap-8">
          {/* LEFT SIDE */}
          <Reveal>
            <div className="space-y-3">
              {[
                {
                  Icon: Mail,
                  label: "Email",
                  value: "sabikuntazina@gmail.com",
                  href: "mailto:sabikuntazina@gmail.com",
                },
                {
                  Icon: Github,
                  label: "GitHub",
                  value: "github.com/sabikuntazina",
                  href: "https://github.com/sabikuntazina",
                },
                {
                  Icon: Linkedin,
                  label: "LinkedIn",
                  value: "sabikun-enam-tazina",
                  href: "https://www.linkedin.com/in/sabikun-enam-tazina-/",
                },
                {
                  Icon: MapPin,
                  label: "Location",
                  value: "Dhaka, Khilkhet, Bangladesh",
                  href: "#",
                },
              ].map(({ Icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="group flex items-center gap-4 rounded-2xl glass p-4 hover:neon-glow transition-all hover:-translate-y-0.5"
                >
                  <div className="grid h-12 w-12 place-items-center rounded-xl animated-gradient text-white">
                    <Icon size={20} />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-widest text-muted-foreground">
                      {label}
                    </div>
                    <div className="font-medium">{value}</div>
                  </div>
                </a>
              ))}
            </div>
          </Reveal>

          {/* FORM */}
          <Reveal delay={0.1}>
            <form
              ref={formRef}
              onSubmit={onSubmit}
              className="rounded-3xl glass p-6 space-y-4"
            >
              <div>
                <label className="text-xs uppercase tracking-widest text-muted-foreground">
                  Name
                </label>
                <input
                  name="name"
                  required
                  className="mt-1 w-full rounded-xl bg-input/60 border border-border px-4 py-3 outline-none focus:border-primary focus:neon-glow transition-all"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="text-xs uppercase tracking-widest text-muted-foreground">
                  Email
                </label>
                <input
                  name="email"
                  type="email"
                  required
                  className="mt-1 w-full rounded-xl bg-input/60 border border-border px-4 py-3 outline-none focus:border-primary focus:neon-glow transition-all"
                  placeholder="you@email.com"
                />
              </div>

              <div>
                <label className="text-xs uppercase tracking-widest text-muted-foreground">
                  Message
                </label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  className="mt-1 w-full rounded-xl bg-input/60 border border-border px-4 py-3 outline-none focus:border-primary focus:neon-glow transition-all resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="group inline-flex w-full items-center justify-center gap-2 rounded-xl px-6 py-3 font-semibold text-primary-foreground animated-gradient hover:scale-[1.02] hover:neon-glow transition-all pulse-glow disabled:opacity-60"
              >
                <Send size={16} className="group-hover:translate-x-1 transition-transform" />
                {sent
                  ? "Message Sent ✨"
                  : loading
                  ? "Sending..."
                  : "Send Message"}
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
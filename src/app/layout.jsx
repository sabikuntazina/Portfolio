import { Navbar } from "../components/portfolio/Navbar";
import { Footer } from "../components/portfolio/Footer";
import { CursorGlow } from "../components/portfolio/CursorGlow";
import "./globals.css";

export const metadata = {
  title: "Sabikun Enam Tazina — Frontend & MERN Developer",
  description: "Portfolio of Sabikun Enam Tazina — frontend-focused MERN stack developer building modern, responsive web experiences with React, Next.js & Tailwind CSS.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="relative min-h-screen bg-background text-foreground">
          <CursorGlow />
          <Navbar />
          <main className="relative z-10">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}

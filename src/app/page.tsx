import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { WhatIDo } from "@/components/sections/what-i-do";
import { Projects } from "@/components/sections/projects";
import { Experience } from "@/components/sections/experience";
import { TechStack } from "@/components/sections/tech-stack";
import { Education } from "@/components/sections/education";
import { Focus } from "@/components/sections/focus";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <WhatIDo />
        <Projects />
        <Experience />
        <TechStack />
        <Education />
        <Focus />
        <Contact />
      </main>
      <footer className="border-t border-border py-8 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Rifki Febrian. Built with Next.js & TypeScript.
      </footer>
    </>
  );
}

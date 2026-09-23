"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, FileText, Mail } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";
import { Button } from "@/components/ui/button";

export function Hero() {
  const { t } = useLanguage();

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-16">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-6 py-16 grid lg:grid-cols-2 gap-12 items-center w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-medium text-primary mb-4 tracking-wider uppercase">
            {t("Halo, saya", "Hi! I am")}
          </p>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight">
            Rifki Febrian
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
            {t(
              "Backend Developer & Software Engineer yang menikmati proses membangun sistem, mencari tahu bagaimana sesuatu bekerja, dan terus belajar dari project nyata.",
              "Backend Developer & Software Engineer who enjoys building systems, figuring out how things work, and learning from real projects."
            )}
          </p>

          <div className="flex flex-wrap gap-3 mb-8">
            <Button asChild size="lg">
              <a href="#projects">
                {t("Project Saya", "My Projects")}
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="/cv.pdf" target="_blank" rel="noopener noreferrer">
                <FileText className="mr-2 h-4 w-4" />
                {t("Lihat CV", "View CV")}
              </a>
            </Button>
          </div>

          <div className="flex flex-wrap gap-5 text-sm">
            <a
              href="https://github.com/rynrifn"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors font-medium"
            >
              GitHub ↗
            </a>
            <a
              href="https://www.linkedin.com/in/rifki-febrian-3074b1415"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors font-medium"
            >
              LinkedIn ↗
            </a>
            <a
              href="mailto:rifkifebrian489@gmail.com"
              className="text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1 font-medium"
            >
              <Mail className="h-4 w-4" />
              Email
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center lg:justify-end"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-primary/5 rounded-full blur-2xl scale-110" />
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-background shadow-2xl">
              <Image
                src="/images/rifki.jpg"
                alt="Rifki Febrian"
                fill
                sizes="(max-width: 768px) 256px, 320px"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

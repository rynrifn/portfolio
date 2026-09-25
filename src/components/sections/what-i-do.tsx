"use client";

import { motion } from "framer-motion";
import { Server, Globe, TestTube, Headphones, Palette } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";
import { Badge } from "@/components/ui/badge";

const services = [
  {
    icon: Server,
    title: { id: "Backend Development", en: "Backend Development" },
    desc: {
      id: "Merancang dan membangun REST API, mengelola database, dan integrasi sistem.",
      en: "Design and build REST APIs, manage databases, and integrate systems.",
    },
    tags: ["Node.js", "Express.js", "PHP", "Laravel", "REST API"],
  },
  {
    icon: Globe,
    title: { id: "Web Development", en: "Web Development" },
    desc: {
      id: "Membangun aplikasi web modern dengan fokus pada fungsionalitas & user experience.",
      en: "Build modern web applications focused on functionality & user experience.",
    },
    tags: ["Laravel", "MySQL", "Bootstrap", "Next.js"],
  },
  {
    icon: Palette,
    title: { id: "UI/UX Design", en: "UI/UX Design" },
    desc: {
      id: "Merancang antarmuka aplikasi mobile & web dengan fokus pada usability dan konsistensi visual.",
      en: "Design mobile & web app interfaces focused on usability and visual consistency.",
    },
    tags: ["Figma", "Wireframing", "Prototyping", "Mobile Design"],
  },
  {
    icon: TestTube,
    title: { id: "Software Testing", en: "Software Testing" },
    desc: {
      id: "Manual testing, black-box testing, dan dokumentasi bug secara terstruktur.",
      en: "Manual testing, black-box testing, and structured bug documentation.",
    },
    tags: ["Manual Testing", "Black-box", "Bug Docs"],
  },
  {
    icon: Headphones,
    title: { id: "IT Support", en: "IT Support" },
    desc: {
      id: "Troubleshooting teknis, remote support, dan pengecekan API & database.",
      en: "Technical troubleshooting, remote support, and API & database checking.",
    },
    tags: ["Troubleshooting", "Remote Support", "Postman"],
  },
];

export function WhatIDo() {
  const { t } = useLanguage();

  return (
    <section id="what-i-do" className="py-24 md:py-32 bg-muted/30">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-medium text-primary mb-3 tracking-wider uppercase">
            02 — {t("Yang Saya Kerjakan", "What I Do")}
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-14 tracking-tight">
            {t("Bidang yang saya tekuni", "Areas I work on")}
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-6 md:p-8 rounded-2xl border border-border bg-background hover:border-primary/50 transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  {t(s.title.id, s.title.en)}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {t(s.desc.id, s.desc.en)}
                </p>
                <div className="flex flex-wrap gap-2">
                  {s.tags.map((tag) => (
                    <Badge key={tag}>{tag}</Badge>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

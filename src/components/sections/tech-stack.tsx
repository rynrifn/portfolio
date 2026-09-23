"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/language-context";
import { Server, Database, Smartphone, Cloud, TestTube, Wrench } from "lucide-react";

const stack = [
  {
    icon: Server,
    title: { id: "Backend", en: "Backend" },
    items: ["Node.js", "Express.js", "PHP", "Laravel", "REST API"],
  },
  {
    icon: Database,
    title: { id: "Database", en: "Database" },
    items: ["MySQL", "SQL", "MongoDB", "Firebase Firestore"],
  },
  {
    icon: Smartphone,
    title: { id: "Mobile", en: "Mobile" },
    items: ["Flutter", "Dart", "Kotlin"],
  },
  {
    icon: Cloud,
    title: { id: "DevOps", en: "DevOps" },
    items: ["Docker", "Docker Compose", "Git", "GitLab"],
  },
  {
    icon: TestTube,
    title: { id: "Testing", en: "Testing" },
    items: ["Manual Testing", "Black-box", "Browser DevTools"],
  },
  {
    icon: Wrench,
    title: { id: "Tools", en: "Tools" },
    items: ["Postman", "VS Code", "MongoDB Compass", "Google Sheets"],
  },
];

export function TechStack() {
  const { t } = useLanguage();

  return (
    <section id="stack" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-medium text-primary mb-3 tracking-wider uppercase">
            05 — {t("Tech Stack", "Tech Stack")}
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-14 tracking-tight">
            {t("Alat yang saya pakai", "Tools I work with")}
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stack.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="p-6 rounded-2xl border border-border bg-background hover:border-primary/50 transition-colors"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Icon className="h-5 w-5 text-primary" />
                  <h3 className="font-semibold">{t(s.title.id, s.title.en)}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {s.items.map((item) => (
                    <span
                      key={item}
                      className="text-xs px-2.5 py-1 rounded-md bg-muted text-muted-foreground"
                    >
                      {item}
                    </span>
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

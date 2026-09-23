"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/language-context";
import { Badge } from "@/components/ui/badge";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    company: "PT Minato Teknologi Global",
    role: { id: "Backend Developer Intern", en: "Backend Developer Intern" },
    period: { id: "Februari 2026 — Juni 2026", en: "February 2026 — June 2026" },
    points: [
      {
        id: "Mengembangkan REST API menggunakan Node.js dan Express.js.",
        en: "Developed REST APIs using Node.js and Express.js.",
      },
      {
        id: "Menggunakan yt-dlp untuk ekstraksi transcript YouTube.",
        en: "Used yt-dlp for YouTube transcript extraction.",
      },
      {
        id: "Menerapkan Docker untuk containerisasi aplikasi.",
        en: "Applied Docker for application containerization.",
      },
      {
        id: "Melakukan manual testing: 140 test scenarios untuk 6 modul utama.",
        en: "Performed manual testing: 140 test scenarios across 6 main modules.",
      },
      {
        id: "Mengidentifikasi dan mendokumentasikan 4 critical bugs.",
        en: "Identified and documented 4 critical bugs.",
      },
    ],
    tags: ["Node.js", "Express.js", "yt-dlp", "Docker", "Manual Testing"],
  },
  {
    company: "PT Nagatech System Integrator",
    role: { id: "IT Support / Helpdesk", en: "IT Support / Helpdesk" },
    period: { id: "Agustus 2026 — September 2026", en: "August 2026 — September 2026" },
    points: [
      {
        id: "Melakukan technical support dan troubleshooting terhadap sistem dan aplikasi yang digunakan client.",
        en: "Provided technical support and troubleshooting for client systems and applications.",
      },
      {
        id: "Melakukan remote support serta pengecekan API, database, dan proses aplikasi.",
        en: "Performed remote support and checks on APIs, databases, and application processes.",
      },
      {
        id: "Menggunakan Postman, MongoDB Compass, PM2, dan Remote Viewer dalam proses troubleshooting.",
        en: "Used Postman, MongoDB Compass, PM2, and Remote Viewer during troubleshooting.",
      },
    ],
    tags: ["Postman", "MongoDB Compass", "PM2", "Remote Support"],
  },
];

export function Experience() {
  const { t } = useLanguage();

  return (
    <section id="experience" className="py-24 md:py-32 bg-muted/30">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-medium text-primary mb-3 tracking-wider uppercase">
            04 — {t("Pengalaman Kerja", "Work Experience")}
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-14 tracking-tight">
            {t("Perjalanan karier saya", "My career journey")}
          </h2>
        </motion.div>

        <div className="space-y-6">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-6 md:p-8 rounded-2xl border border-border bg-background"
            >
              <div className="flex items-start gap-4 mb-5">
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Briefcase className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">
                    {t(exp.role.id, exp.role.en)}
                  </h3>
                  <p className="text-primary text-sm font-medium">
                    {exp.company}
                  </p>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    {t(exp.period.id, exp.period.en)}
                  </p>
                </div>
              </div>

              <ul className="space-y-2 mb-5 pl-1">
                {exp.points.map((pt, idx) => (
                  <li
                    key={idx}
                    className="text-sm text-muted-foreground flex items-start gap-2 leading-relaxed"
                  >
                    <span className="text-primary mt-1.5 shrink-0">▸</span>
                    {t(pt.id, pt.en)}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {exp.tags.map((tag) => (
                  <Badge key={tag}>{tag}</Badge>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

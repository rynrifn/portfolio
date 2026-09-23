"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "@/contexts/language-context";
import { Badge } from "@/components/ui/badge";
import { featuredProjects, otherProjects } from "@/data/projects";

export function Projects() {
  const { t } = useLanguage();

  return (
    <section id="projects" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-medium text-primary mb-3 tracking-wider uppercase">
            03 — {t("Project Pilihan", "Selected Projects")}
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-14 tracking-tight">
            {t("Yang pernah saya bangun", "Things I've built")}
          </h2>
        </motion.div>

        <div className="space-y-16">
          {featuredProjects.map((p, i) => (
            <motion.article
              key={p.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className={`grid md:grid-cols-2 gap-8 md:gap-12 items-center ${
                i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div className="relative aspect-video rounded-2xl overflow-hidden border border-border bg-muted">
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>

              <div>
                <p className="text-xs font-mono text-primary mb-2">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="text-2xl md:text-3xl font-bold mb-2">
                  {p.title}
                </h3>
                <p className="text-primary text-sm mb-4">
                  {t(p.subtitle.id, p.subtitle.en)}
                </p>
                <p className="text-muted-foreground mb-5 leading-relaxed">
                  {t(p.description.id, p.description.en)}
                </p>

                {p.highlights.length > 0 && (
                  <ul className="space-y-1.5 mb-5">
                    {p.highlights.map((h, idx) => (
                      <li
                        key={idx}
                        className="text-sm text-muted-foreground flex items-start gap-2"
                      >
                        <span className="text-primary mt-1.5 shrink-0">▸</span>
                        {t(h.id, h.en)}
                      </li>
                    ))}
                  </ul>
                )}

                <div className="flex flex-wrap gap-2 mb-5">
                  {p.tech.map((tech) => (
                    <Badge key={tech}>{tech}</Badge>
                  ))}
                </div>

                {p.github && (
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors"
                  >
                    {t("Lihat Repository", "View Repository")} ↗
                  </a>
                )}
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24"
        >
          <h3 className="text-2xl font-bold mb-8">
            {t("Project Lainnya", "Other Projects")}
          </h3>
          <div className="grid md:grid-cols-3 gap-4">
            {otherProjects.map((p, i) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-xl border border-border bg-background hover:border-primary/50 transition-colors flex flex-col"
              >
                <h4 className="font-semibold mb-2">{p.title}</h4>
                <p className="text-sm text-muted-foreground mb-4 flex-1">
                  {t(p.description.id, p.description.en)}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {p.tech.slice(0, 3).map((tag) => (
                    <Badge key={tag} className="text-[10px]">
                      {tag}
                    </Badge>
                  ))}
                </div>
                {p.github && (
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium hover:text-primary transition-colors"
                  >
                    {t("Lihat Repository", "View Repository")} ↗
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

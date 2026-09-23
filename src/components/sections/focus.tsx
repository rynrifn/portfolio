"use client";

import { motion } from "framer-motion";
import { Target } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";
import { Badge } from "@/components/ui/badge";

export function Focus() {
  const { t } = useLanguage();

  return (
    <section id="focus" className="py-24 md:py-32 bg-muted/30">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
            <Target className="h-7 w-7 text-primary" />
          </div>
          <p className="text-sm font-medium text-primary mb-3 tracking-wider uppercase">
            08 — {t("Fokus Saat Ini", "Current Focus")}
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">
            {t("Yang sedang saya kejar", "What I'm pursuing")}
          </h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed">
            {t(
              "Saat ini saya berfokus pada Web Development, Backend Development, dan Software Engineering. Saya ingin terus memperdalam pengembangan REST API, database, system integration, dan aplikasi full-stack melalui pengalaman kerja dan project nyata.",
              "Currently focusing on Web Development, Backend Development, and Software Engineering. I aim to deepen my skills in REST API development, databases, system integration, and full-stack applications through real work experience and projects."
            )}
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Badge className="text-sm px-4 py-2">Backend Developer</Badge>
            <Badge className="text-sm px-4 py-2">Software Engineer</Badge>
            <Badge className="text-sm px-4 py-2">Web Developer</Badge>
            <Badge className="text-sm px-4 py-2">QA Engineer</Badge>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

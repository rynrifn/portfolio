"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";

export function Education() {
  const { t } = useLanguage();

  return (
    <section id="education" className="py-24 md:py-32 bg-muted/30">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-medium text-primary mb-3 tracking-wider uppercase">
            06 — {t("Pendidikan", "Education")}
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-14 tracking-tight">
            {t("Latar belakang pendidikan", "Educational background")}
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-6 md:p-8 rounded-2xl border border-border bg-background"
        >
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
              <GraduationCap className="h-6 w-6 text-primary" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold">
                Universitas Teknologi Bandung
              </h3>
              <p className="text-primary text-sm font-medium">
                S1 Teknik Informatika
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                2023 — {t("Sekarang", "Present")} · {t("Semester 7", "Semester 7")}
              </p>

              <div className="mt-4 grid grid-cols-2 gap-4 max-w-md">
                <div>
                  <p className="text-xs text-muted-foreground mb-1">IPK</p>
                  <p className="text-lg font-semibold">3,47 / 4,00</p>
                </div>
              </div>

              <p className="text-sm text-muted-foreground mt-4 leading-relaxed">
                {t(
                  "Perkuliahan dilakukan secara online sehingga memungkinkan saya untuk bekerja secara full-time.",
                  "Classes are held online, allowing me to work full-time."
                )}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

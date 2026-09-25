"use client";

import { motion } from "framer-motion";
import { Mail, MapPin } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";
import { Button } from "@/components/ui/button";

export function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-medium text-primary mb-3 tracking-wider uppercase">
            07 — {t("Kontak", "Contact")}
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            {t("Mari Berkolaborasi", "Let's Collaborate")}
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            {t(
              "Saya memiliki pengalaman mengembangkan aplikasi full-stack, backend, dan mobile, mulai dari membangun aplikasi web menggunakan Laravel, mengembangkan REST API dengan Node.js, hingga mengembangkan aplikasi mobile menggunakan Flutter dan Firebase.",
              "I have experience developing full-stack, backend, and mobile applications, along with IT support and software QA testing — from building web apps with Laravel, developing REST APIs with Node.js, to creating mobile apps with Flutter and Firebase."
            )}
          </p>
          <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
            {t(
              "Saat ini saya terbuka untuk peluang kerja, project freelance, maupun kolaborasi di bidang teknologi.",
              "I'm currently open to job opportunities, freelance projects, or collaboration in the tech field."
            )}
          </p>

          <div className="flex justify-center mb-12">
            <Button size="lg" asChild>
              <a href="mailto:rifkifebrian489@gmail.com">
                <Mail className="mr-2 h-4 w-4" />
                {t("Kirim Email", "Send Email")}
              </a>
            </Button>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-muted-foreground">
            <a
              href="https://github.com/rynrifn"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors font-medium"
            >
              github.com/rynrifn ↗
            </a>
            <a
              href="https://www.linkedin.com/in/rifki-febrian-3074b1415"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors font-medium"
            >
              linkedin.com/in/rifki-febrian ↗
            </a>
            <span className="inline-flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              Indonesia
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

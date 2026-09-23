"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/language-context";

export function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-24 md:py-32">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-medium text-primary mb-3 tracking-wider uppercase">
            01 — {t("Tentang Saya", "About Me")}
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">
            {t("Kenalan dulu, yuk", "Let's get to know each other")}
          </h2>

          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              {t(
                "Saya memiliki ketertarikan pada komputer dan teknologi sejak kelas 3 SD. Ketertarikan tersebut membuat saya mulai mempelajari pemrograman dan akhirnya memilih Teknik Informatika sebagai bidang pendidikan saya.",
                "I've been interested in computers and technology since 3rd grade of elementary school. That curiosity led me to learn programming and eventually choose Informatics Engineering as my field of study."
              )}
            </p>
            <p>
              {t(
                "Seiring belajar, saya mencoba berbagai bidang dalam software development — mulai dari web development, mobile development, backend, database, hingga software testing. Dari berbagai pengalaman tersebut, saya semakin tertarik pada backend development dan software engineering.",
                "As I learned, I explored various areas in software development — from web development, mobile development, backend, databases, to software testing. From those experiences, I grew more interested in backend development and software engineering."
              )}
            </p>
            <p>
              {t(
                "Saya menikmati proses ketika harus mencari tahu bagaimana sesuatu bekerja, mencoba teknologi baru, menemukan masalah, kemudian mencari cara untuk memperbaikinya. Karena itu, sebagian besar kemampuan saya berkembang melalui project, pengalaman kerja, dan belajar secara mandiri.",
                "I enjoy the process of figuring out how things work, trying new technologies, finding problems, then looking for ways to fix them. Because of that, most of my skills grew through projects, work experience, and self-learning."
              )}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

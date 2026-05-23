"use client";

import { motion } from "framer-motion";
import { Calendar, Scale } from "lucide-react";

const EASE = [0.25, 1, 0.5, 1] as [number, number, number, number];

type Poza = {
  src: string;
  fish: string;
  weight: string;
  date: string;
  alt?: string;
};

const poze: Poza[] = [
  {
    src: "/capturi/poza1.jpg",
    fish: "Crap",
    weight: "9 kg",
    date: "Lacul Verde Sâncrai",
    alt: "Captură crap",
  },
  {
    src: "/capturi/poza2.jpg",
    fish: "Somn Mare",
    weight: "28 kg",
    date: "Lacul Verde Sâncrai",
    alt: "Captură somn mare",
  },
  {
    src: "/capturi/poza3.jpg",
    fish: "Crap Iarbă",
    weight: "6 kg",
    date: "Lacul Verde Sâncrai",
    alt: "Captură crap iarbă",
  },
  {
    src: "/capturi/poza4.jpg",
    fish: "Somn",
    weight: "10 kg",
    date: "Lacul Verde Sâncrai",
    alt: "Captură somn",
  },
  {
    src: "/capturi/poza5.jpg",
    fish: "Somn",
    weight: "12 kg",
    date: "Lacul Verde Sâncrai",
    alt: "Captură somn",
  },
  {
    src: "/capturi/poza6.jpg",
    fish: "Crap",
    weight: "13 kg",
    date: "Lacul Verde Sâncrai",
    alt: "Captură crap",
  },
];

export default function CapturiPage() {
  return (
    <div className="mx-auto max-w-7xl overflow-x-hidden px-6 py-14 sm:py-20">
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45, ease: EASE }}
        className="mb-12 text-center sm:mb-20"
      >
        <h1 className="text-4xl font-bold text-primary sm:text-5xl">Capturi</h1>
        <p className="mx-auto mt-4 max-w-2xl text-base text-on-surface-variant sm:mt-6 sm:text-lg">
          Galerie cu cele mai frumoase capturi realizate de pescarii noștri la Lacul Verde Sâncrai.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {poze.map((poza, i) => (
          <motion.article
            key={`${poza.src}-${i}`}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.45, delay: i * 0.08, ease: EASE }}
            className="group flex flex-col overflow-hidden rounded-3xl border border-outline-variant/30 bg-white shadow-sm"
          >
            <img
              src={poza.src}
              alt={poza.alt ?? poza.fish}
              style={{ width: "100%", height: "auto", display: "block" }}
              className="transition-transform duration-300 group-hover:scale-110"
            />

            <div className="flex flex-1 flex-col p-6">
              <h2 className="text-2xl font-bold text-primary">{poza.fish}</h2>
              <div className="mt-3 flex items-center gap-2 text-sm font-bold text-tertiary">
                <Scale className="h-5 w-5" />
                <span>{poza.weight}</span>
              </div>
              <div className="mt-6 flex items-center gap-2 border-t border-outline-variant/30 pt-4 text-sm text-on-surface-variant">
                <Calendar className="h-4 w-4" />
                <span>{poza.date}</span>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
}

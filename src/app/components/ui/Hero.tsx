"use client";
import { motion } from "motion/react";
import Link from "next/link";

export const Hero = () => {
  return (
    <section className="grid lg:grid-cols-2 min-h-[90vh] bg-black relative">
      <div className="flex flex-col justify-center px-12 py-20 text-white z-10">
        <motion.span
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="border-l-2 border-[#c9a96e] pl-4 text-[#c9a96e] text-xs tracking-widest uppercase"
        >
          SS 2026 Collection
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-serif text-6xl md:text-8xl mt-6 leading-[0.9]"
        >
          Wear Your <br />{" "}
          <span className="text-[#c9a96e] italic">Story.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-white/50 mt-8 max-w-sm text-lg font-light leading-relaxed"
        >
          Curated fashion for those who believe clothing is a language. Timeless
          pieces, modern sensibility.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex gap-4 mt-10"
        >
          <Link href="#shop" aria-label="Shop All Products">
            <button className="bg-[#c9a96e] hover:bg-[#e8d5b0] text-black px-8 py-4 font-bold uppercase text-xs tracking-widest transition-colors">
              Shop All
            </button>
          </Link>
          <Link href="#lookbook" aria-label="View Lookbook">
            <button className="border border-white/20 hover:border-[#c9a96e] text-white px-8 py-4 font-bold uppercase text-xs tracking-widest transition-colors focus:ring-2 focus:ring-[#c9a96e]">
              Lookbook
            </button>
          </Link>
        </motion.div>
      </div>

      <div className="bg-[#1a1510] relative overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-br from-[#c9a96e]/20 to-transparent z-0" />
        <motion.div
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.3 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="h-full w-full flex items-center justify-center text-[10rem] grayscale group-hover:grayscale-0 transition-all duration-700 relative z-10"
          aria-hidden="true"
        >
          🎭
        </motion.div>
      </div>
    </section>
  );
};

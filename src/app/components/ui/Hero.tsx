"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import Link from "next/link";

export const Hero = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <section ref={containerRef} className="grid lg:grid-cols-2 min-h-[90vh] bg-black relative overflow-hidden">
      <motion.div 
        style={{ y: textY, opacity: textOpacity }}
        className="flex flex-col justify-center px-12 py-20 text-white z-10"
      >
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
          Wear Your <br /> <span className="text-[#c9a96e] italic">Story.</span>
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
            <button className="bg-[#c9a96e] hover:bg-[#e8d5b0] text-black px-8 py-4 font-bold uppercase text-xs tracking-widest transition-colors cursor-pointer">
              Shop All
            </button>
          </Link>
          <Link href="#lookbook" aria-label="View Lookbook">
            <button className="border border-white/20 hover:border-[#c9a96e] text-white px-8 py-4 font-bold uppercase text-xs tracking-widest transition-colors focus:ring-2 focus:ring-[#c9a96e] cursor-pointer">
              Lookbook
            </button>
          </Link>
        </motion.div>
      </motion.div>

      <div className="relative overflow-hidden group min-h-[50vh] lg:min-h-full">
        <div className="absolute inset-0 bg-linear-to-br from-[#c9a96e]/20 to-transparent z-0 pointer-events-none" />
        <motion.div 
          style={{ y: imageY }}
          className="absolute inset-[-10%] h-[120%] w-[120%] z-10"
        >
          <motion.div
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.8 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="h-full w-full flex items-center justify-center grayscale group-hover:grayscale-0 transition-all duration-700"
            aria-hidden="true"
          >
            <Image
              src={
                "https://lh3.googleusercontent.com/aida-public/AB6AXuBf2LawzGPDpXyfGe3dQ5yzWfmEk5O_LorDPttP_wTO-RgegfDnYKn1cXoIVQiQ_P1SO5EvxsQkpqfaXrDUssw8mwsDMXXCKWmM5IO783IXmzJ9GtHECOfZTPVf0zXhGOz1uzjztkNgO5XKnNfVZnIO3mOcJmhGNBK5wZq1cXLMgPwxsITXnrXe7PpBr8_45yCQ3uqlhozH7pg4ngEawwwCfKuRUi2w0aIzrHB8lOymcFlCgogUgw_WOgcTin7u3AWAI2xjxG2QIgs"
              }
              alt="Western Women Stylish"
              className="w-full h-full object-cover"
              width={1000}
              height={1200}
              priority
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

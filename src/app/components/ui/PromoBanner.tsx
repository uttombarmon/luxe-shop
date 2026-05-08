"use client";
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import Image from 'next/image';

export const PromoBanner = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const yImage = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

  return (
    <section ref={ref} className="relative bg-black py-32 px-8 overflow-hidden text-center min-h-[70vh] flex items-center justify-center" aria-labelledby="promo-heading">
      {/* Background Image Parallax Effect */}
      <motion.div 
        style={{ y: yImage }}
        className="absolute inset-[-20%] w-[140%] h-[140%] z-0"
      >
        <Image
          src="https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&w=2000"
          alt="End of season sale background"
          fill
          className="object-cover opacity-40 brightness-50"
          priority
        />
      </motion.div>

      <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-[#c9a96e] text-xs font-bold tracking-[0.3em] uppercase"
        >
          Limited Time
        </motion.span>
        
        <motion.h2 
          id="promo-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-white font-serif text-5xl md:text-7xl mt-4 leading-tight"
        >
          End of Season
        </motion.h2>
        
        <motion.h3 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-[#c9a96e] font-serif italic text-4xl md:text-5xl mt-2"
        >
          Up to 60% Off
        </motion.h3>
        
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-white/80 my-8 text-sm leading-relaxed max-w-md font-light"
        >
          Our most exclusive pieces, now available at accessible prices. Refine your wardrobe with timeless luxury.
        </motion.p>
        
        <motion.button 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.4 }}
          className="bg-[#c9a96e] hover:bg-[#e8d5b0] text-black px-10 py-4 text-sm font-bold uppercase tracking-[0.2em] transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black cursor-pointer"
          aria-label="Claim End of Season Offer"
        >
          Claim Offer
        </motion.button>
      </div>
    </section>
  );
};
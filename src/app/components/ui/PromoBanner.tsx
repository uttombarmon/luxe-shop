"use client";
import { motion } from 'motion/react';

export const PromoBanner = () => (
  <section className="relative bg-black py-32 px-8 overflow-hidden text-center" aria-labelledby="promo-heading">
    {/* Background Decorative Text - Parallax Effect */}
    <motion.div 
      initial={{ y: 0 }}
      whileInView={{ y: -50 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[25vw] font-serif font-black text-[#c9a96e]/5 leading-none pointer-events-none whitespace-nowrap"
      aria-hidden="true"
    >
      SALE
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
        className="text-white/50 my-8 text-sm leading-relaxed max-w-md"
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
        className="bg-[#c9a96e] hover:bg-[#e8d5b0] text-black px-10 py-4 text-sm font-bold uppercase tracking-[0.2em] transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
        aria-label="Claim End of Season Offer"
      >
        Claim Offer
      </motion.button>
    </div>
  </section>
);
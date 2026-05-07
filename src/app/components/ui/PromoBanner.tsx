"use client";
import { motion } from 'motion/react';

export const PromoBanner = () => (
  <section className="relative bg-black py-24 px-8 overflow-hidden text-center">
    {/* Background Decorative Text */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[25vw] font-serif font-black text-[#c9a96e]/5 leading-none pointer-events-none">
      SALE
    </div>

    <div className="relative z-10 max-w-2xl mx-auto">
      <span className="text-[#c9a96e] text-xs font-bold tracking-[0.3em] uppercase">Limited Time</span>
      <h2 className="text-white font-serif text-5xl md:text-7xl mt-4 leading-tight">End of Season</h2>
      <h3 className="text-[#c9a96e] font-serif italic text-4xl md:text-5xl mt-2">Up to 60% Off</h3>
      <p className="text-white/50 my-8 text-sm leading-relaxed">
        Our most exclusive pieces, now available at accessible prices. Refine your wardrobe with timeless luxury.
      </p>
      <button className="bg-[#c9a96e] hover:bg-[#e8d5b0] text-black px-10 py-4 text-sm font-bold uppercase tracking-[0.2em] transition-all">
        Claim Offer
      </button>
    </div>
  </section>
);
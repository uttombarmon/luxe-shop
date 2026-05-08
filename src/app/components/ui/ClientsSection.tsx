"use client";
import { motion } from "motion/react";

const clients = [
  "VOGUE", "GQ", "HARPER'S BAZAAR", "ELLE", "VANITY FAIR", "L'OFFICIEL", "ESQUIRE", "MARIE CLAIRE"
];

export const ClientsSection = () => {
  return (
    <section className="py-20 bg-white border-y border-gray-100 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-8 mb-12 text-center relative z-20">
         <motion.span 
           initial={{ opacity: 0, y: 10 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="text-[#c9a96e] text-xs font-bold tracking-[0.3em] uppercase"
         >
           As Featured In
         </motion.span>
      </div>

      <div className="relative flex overflow-hidden group">
        {/* Fading edges for infinite scroll illusion */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-linear-to-r from-white to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-linear-to-l from-white to-transparent z-10 pointer-events-none"></div>

        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            ease: "linear",
            duration: 35,
            repeat: Infinity,
          }}
          className="flex whitespace-nowrap items-center"
        >
          {/* Double the list for seamless loop */}
          {[...clients, ...clients].map((client, index) => (
            <div 
              key={index} 
              className="mx-12 md:mx-20 text-3xl md:text-5xl font-serif text-gray-200 hover:text-[#c9a96e] transition-colors duration-500 cursor-default"
            >
              {client}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

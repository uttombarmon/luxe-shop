"use client";
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import Image from 'next/image';

export const AboutSection = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);

  return (
    <section ref={ref} className="py-24 px-8 bg-[#f9f8f6] overflow-hidden" aria-labelledby="about-heading">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative h-[600px] w-full grid grid-cols-2 gap-4">
          <motion.div style={{ y: y1 }} className="relative h-[80%] mt-[20%] w-full overflow-hidden">
             <Image src="https://images.unsplash.com/photo-1550614000-4b95dd244747?q=80&w=800" alt="Model walking" fill className="object-cover" sizes="(max-width: 768px) 50vw, 33vw" />
          </motion.div>
          <motion.div style={{ y: y2 }} className="relative h-[80%] w-full overflow-hidden">
             <Image src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=800" alt="Fashion details" fill className="object-cover" sizes="(max-width: 768px) 50vw, 33vw" />
          </motion.div>
        </div>

        <div className="flex flex-col justify-center">
          <motion.span 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-[#c9a96e] text-xs font-bold tracking-widest uppercase mb-4"
          >
            Our Heritage
          </motion.span>
          <motion.h2 
            id="about-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-4xl md:text-5xl leading-tight mb-8"
          >
            Crafting elegance for the modern individual.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-600 mb-6 leading-relaxed font-light"
          >
            We believe that style is a reflection of one's inner narrative. Since our inception, we have been dedicated to sourcing the finest materials globally and marrying them with timeless tailoring.
          </motion.p>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 mb-10 leading-relaxed font-light"
          >
            Our garments are not merely worn; they are experienced. They are artifacts of luxury designed to age gracefully with you, telling your story stitch by stitch.
          </motion.p>
          <motion.button 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="self-start border-b border-black pb-1 text-xs font-bold uppercase tracking-widest hover:text-[#c9a96e] hover:border-[#c9a96e] transition-all focus:outline-none cursor-pointer"
          >
            Discover Our Story
          </motion.button>
        </div>
      </div>
    </section>
  );
};

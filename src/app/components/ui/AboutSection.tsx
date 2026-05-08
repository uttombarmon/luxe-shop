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

  const y1 = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["15%", "-15%"]);
  const y3 = useTransform(scrollYProgress, [0, 1], ["-5%", "25%"]);

  return (
    <section ref={ref} className="py-32 px-8 bg-[#f9f8f6] overflow-hidden relative" aria-labelledby="about-heading">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#c9a96e]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 z-0 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center relative z-10">
        <div className="relative h-[700px] w-full flex items-center justify-center">
          {/* Back image */}
          <motion.div style={{ y: y1 }} className="absolute left-0 top-[10%] h-[60%] w-[55%] overflow-hidden shadow-2xl">
             <Image src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=800" alt="Model walking" fill className="object-cover" sizes="(max-width: 768px) 50vw, 33vw" />
          </motion.div>
          {/* Front overlapping image */}
          <motion.div style={{ y: y2 }} className="absolute right-0 bottom-[10%] h-[65%] w-[60%] overflow-hidden shadow-2xl z-10 border-8 border-[#f9f8f6]">
             <Image src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=800" alt="Fashion details" fill className="object-cover" sizes="(max-width: 768px) 50vw, 33vw" />
          </motion.div>
          {/* Small floating detail image */}
          <motion.div style={{ y: y3 }} className="absolute left-[10%] bottom-[5%] h-[30%] w-[35%] overflow-hidden shadow-xl z-20 border-4 border-white">
             <Image src="https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?q=80&w=600" alt="Fabric texture or accessories" fill className="object-cover" sizes="25vw" />
          </motion.div>
        </div>

        <div className="flex flex-col justify-center lg:pl-10">
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: "40px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="h-[2px] bg-[#c9a96e] mb-6"
          />
          <motion.span 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-[#c9a96e] text-xs font-bold tracking-[0.3em] uppercase mb-4"
          >
            Our Heritage
          </motion.span>
          <motion.h2 
            id="about-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-serif text-4xl md:text-6xl leading-[1.1] mb-8 text-black"
          >
            Crafting elegance <br/>for the modern <span className="italic text-[#c9a96e]">individual.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-gray-600 mb-6 leading-relaxed font-light text-lg"
          >
            We believe that style is a reflection of one&apos;s inner narrative. Since our inception, we have been dedicated to sourcing the finest materials globally and marrying them with timeless tailoring.
          </motion.p>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-gray-600 mb-10 leading-relaxed font-light text-lg"
          >
            Our garments are not merely worn; they are experienced. They are artifacts of luxury designed to age gracefully with you, telling your story stitch by stitch.
          </motion.p>
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8, delay: 0.6 }}
          >
            <button 
              className="group relative inline-flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-black hover:text-[#c9a96e] transition-colors focus:outline-none cursor-pointer"
            >
              <span className="border-b border-black group-hover:border-[#c9a96e] pb-1 transition-colors">Discover Our Story</span>
              <span className="w-8 h-[1px] bg-black group-hover:bg-[#c9a96e] group-hover:w-12 transition-all duration-300"></span>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

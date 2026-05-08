"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";

const categories = [
  {
    name: "Women's Collection",
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=800",
    link: "#",
  },
  {
    name: "Men's Edit",
    image: "https://images.unsplash.com/photo-1617137968427-85924c800a22?q=80&w=800",
    link: "#",
  },
  {
    name: "Fine Accessories",
    image: "https://images.unsplash.com/photo-1509319117193-57bab727e09d?q=80&w=800",
    link: "#",
  },
];

export const CategoriesSection = () => {
  return (
    <section className="py-24 px-8 max-w-7xl mx-auto" aria-labelledby="categories-heading">
      <div className="flex flex-col items-center mb-16 text-center">
        <motion.span 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[#c9a96e] text-xs font-bold tracking-[0.3em] uppercase mb-4"
        >
          Curated For You
        </motion.span>
        <motion.h2 
          id="categories-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-serif text-4xl md:text-5xl"
        >
          Shop by Category
        </motion.h2>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {categories.map((cat, index) => {
          return <CategoryCard key={cat.name} category={cat} index={index} />;
        })}
      </div>
    </section>
  );
};

const CategoryCard = ({ category, index }: { category: any; index: number }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="group relative h-[500px] overflow-hidden cursor-pointer"
    >
      <motion.div style={{ y: imageY }} className="absolute inset-0 h-[120%] w-full -top-[10%]">
        <Image 
          src={category.image} 
          alt={category.name} 
          fill 
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105" 
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </motion.div>
      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />
      <div className="absolute inset-0 p-8 flex flex-col justify-end items-center text-center">
        <h3 className="text-white font-serif text-2xl mb-4 tracking-wide">{category.name}</h3>
        <span className="text-white/80 uppercase tracking-widest text-[10px] font-bold border-b border-white/40 pb-1 group-hover:border-white transition-colors duration-300">
          Explore
        </span>
      </div>
    </motion.div>
  );
};

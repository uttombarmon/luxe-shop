"use client";
import { motion } from 'motion/react';
import { useState } from 'react';

type ProductItem = {
  icon: string;
  badge?: string;
  category: string;
  name: string;
  price: string;
  oldPrice?: string;
};

export const ProductCard = ({ item, index = 0 }: { item: ProductItem; index?: number }) => {
  const [added, setAdded] = useState(false);

  return (
    <motion.article 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
      className="group"
      aria-label={`${item.name} product`}
    >
      <div className="relative h-[400px] bg-[#f5f0e8] overflow-hidden flex items-center justify-center rounded-sm">
        <span className="text-7xl group-hover:scale-110 transition-transform duration-700 ease-out" aria-hidden="true">{item.icon}</span>
        
        {item.badge && (
          <span className="absolute top-4 left-4 bg-[#c9a96e] text-black text-[10px] font-bold uppercase px-3 py-1 tracking-wider">
            {item.badge}
          </span>
        )}

        {/* Slide-up Overlay */}
        <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
          <button 
            onClick={() => setAdded(true)}
            aria-live="polite"
            className={`translate-y-10 group-hover:translate-y-0 transition-transform duration-500 ease-out px-6 py-3 text-xs uppercase font-bold tracking-widest focus:outline-none focus:ring-2 focus:ring-[#c9a96e] focus:ring-offset-2 ${added ? 'bg-[#c9a96e] text-black' : 'bg-black text-white hover:bg-black/90'}`}
          >
            {added ? '✓ Added' : 'Add to Cart'}
          </button>
        </div>
      </div>

      <div className="mt-5 space-y-2">
        <p className="text-[10px] text-gray-400 uppercase tracking-widest">{item.category}</p>
        <h3 className="font-serif text-lg font-bold text-[#0a0a0a] group-hover:text-[#c9a96e] transition-colors">{item.name}</h3>
        <div className="flex gap-3 items-center">
          <span className="font-medium">{item.price}</span>
          {item.oldPrice && <span className="text-gray-400 line-through text-sm">{item.oldPrice}</span>}
        </div>
      </div>
    </motion.article>
  );
};
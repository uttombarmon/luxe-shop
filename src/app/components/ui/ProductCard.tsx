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

export const ProductCard = ({ item }: { item: ProductItem }) => {
  const [added, setAdded] = useState(false);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group cursor-pointer"
    >
      <div className="relative h-[400px] bg-[#f5f0e8] overflow-hidden flex items-center justify-center">
        <span className="text-7xl group-hover:scale-110 transition-transform duration-500">{item.icon}</span>
        
        {item.badge && (
          <span className="absolute top-4 left-4 bg-[#c9a96e] text-black text-[10px] font-bold uppercase px-3 py-1">
            {item.badge}
          </span>
        )}

        {/* Slide-up Overlay */}
        <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
          <button 
            onClick={() => setAdded(true)}
            className={`translate-y-10 group-hover:translate-y-0 transition-transform duration-500 px-6 py-3 text-xs uppercase font-bold tracking-widest ${added ? 'bg-[#c9a96e] text-black' : 'bg-black text-white'}`}
          >
            {added ? '✓ Added' : 'Add to Cart'}
          </button>
        </div>
      </div>

      <div className="mt-4 space-y-1">
        <p className="text-[10px] text-gray-400 uppercase tracking-widest">{item.category}</p>
        <h3 className="font-serif text-lg font-bold">{item.name}</h3>
        <div className="flex gap-3 items-center">
          <span className="font-medium">{item.price}</span>
          {item.oldPrice && <span className="text-gray-400 line-through text-sm">{item.oldPrice}</span>}
        </div>
      </div>
    </motion.div>
  );
};
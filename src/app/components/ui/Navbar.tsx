"use client";
import { motion } from "motion/react";
import Link from "next/link";

export const Navbar = () => (
  <motion.header 
    initial={{ y: -100 }}
    animate={{ y: 0 }}
    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5 bg-black/80 backdrop-blur-md border-b border-[#c9a96e]/20"
  >
    <Link href="/" aria-label="Luxe Home">
      <span className="font-serif text-2xl font-black text-[#c9a96e] tracking-widest focus:outline-none focus:ring-2 focus:ring-[#c9a96e] focus:ring-offset-2 focus:ring-offset-black">
        LUXE
      </span>
    </Link>
    <nav aria-label="Main Navigation">
      <ul className="hidden md:flex gap-10 text-[0.75rem] uppercase tracking-widest text-white/70 font-medium">
        {["Collection", "Women", "Men", "Accessories"].map((item) => (
          <li key={item} className="relative group">
            <Link 
              href={`#${item.toLowerCase()}`}
              className="hover:text-[#c9a96e] transition-colors cursor-pointer py-2 focus:outline-none focus:text-[#c9a96e]"
            >
              {item}
            </Link>
            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#c9a96e] transition-all duration-300 group-hover:w-full" aria-hidden="true" />
          </li>
        ))}
      </ul>
    </nav>
    <div className="flex items-center gap-6">
      <button 
        className="text-white/70 hover:text-[#c9a96e] text-lg focus:outline-none focus:ring-2 focus:ring-[#c9a96e] rounded-full p-1 transition-all hover:scale-110"
        aria-label="Search"
      >
        🔍
      </button>
      <button 
        className="bg-[#c9a96e] hover:bg-[#e8d5b0] text-black px-5 py-2 text-[0.7rem] font-bold uppercase tracking-wider transition-all focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
        aria-label="Shopping Cart with 2 items"
      >
        Cart (2)
      </button>
    </div>
  </motion.header>
);

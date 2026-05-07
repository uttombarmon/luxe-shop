"use client";
import { motion } from "motion";

export const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5 bg-black/90 backdrop-blur-md border-b border-[#c9a96e]/20">
    <span className="font-serif text-2xl font-black text-[#c9a96e] tracking-widest">
      LUXE
    </span>
    <ul className="hidden md:flex gap-10 text-[0.75rem] uppercase tracking-widest text-white/70 font-medium">
      {["Collection", "Women", "Men", "Accessories"].map((item) => (
        <li
          key={item}
          className="hover:text-[#c9a96e] transition-colors cursor-pointer"
        >
          {item}
        </li>
      ))}
    </ul>
    <div className="flex items-center gap-6">
      <button className="text-white/70 hover:text-[#c9a96e] text-lg">🔍</button>
      <button className="bg-[#c9a96e] hover:bg-[#e8d5b0] text-black px-5 py-2 text-[0.7rem] font-bold uppercase tracking-wider transition-all">
        Cart (2)
      </button>
    </div>
  </nav>
);

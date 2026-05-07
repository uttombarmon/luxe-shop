import { Navbar } from "./components/ui/Navbar";
import { ProductCard } from "./components/ui/ProductCard";
import { PromoBanner } from "./components/ui/PromoBanner";
import { Hero } from "./components/ui/Hero";

const products = [
  {
    icon: "🧥",
    name: "Cashmere Trench",
    category: "Women · Outerwear",
    price: "$289",
    oldPrice: "$380",
    badge: "New",
  },
  {
    icon: "👟",
    name: "Italian Sneaker",
    category: "Men · Footwear",
    price: "$175",
  },
  {
    icon: "👜",
    name: "Structured Tote",
    category: "Women · Accessories",
    price: "$149",
    oldPrice: "$210",
    badge: "Sale",
  },
  { icon: "🧣", name: "Silk Scarf", category: "Accessories", price: "$89" },
];

export default function Home() {
  return (
    <main className="pt-20">
      <Navbar />

      <Hero />

      {/* Product Grid */}
      <section id="shop" className="px-8 py-24" aria-labelledby="new-arrivals-heading">
        <div className="flex justify-between items-end mb-12">
          <div>
            <span className="text-[#c9a96e] text-xs font-bold tracking-widest uppercase">
              Featured
            </span>
            <h2 id="new-arrivals-heading" className="font-serif text-4xl mt-2">New Arrivals</h2>
          </div>
          <button 
            className="border-b border-black pb-1 text-xs font-bold uppercase tracking-widest hover:text-[#c9a96e] hover:border-[#c9a96e] transition-all focus:outline-none focus:ring-2 focus:ring-[#c9a96e] focus:ring-offset-4"
            aria-label="View all new arrivals"
          >
            View All
          </button>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((p, i) => (
            <ProductCard key={i} item={p} index={i} />
          ))}
        </div>
      </section>

      <PromoBanner />

      {/* Footer placeholder */}
      <footer className="bg-[#0a0a0a] text-white/70 py-12 px-8 text-center text-sm" role="contentinfo">
        <p>&copy; {new Date().getFullYear()} LUXE Shop. All rights reserved.</p>
      </footer>
    </main>
  );
}

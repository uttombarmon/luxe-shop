import { Navbar } from "./components/ui/Navbar";
import { ProductCard } from "./components/ui/ProductCard";
import { PromoBanner } from "./components/ui/PromoBanner";

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

      {/* Hero Section */}
      <section className="grid lg:grid-cols-2 min-h-[90vh] bg-black">
        <div className="flex flex-col justify-center px-12 py-20 text-white">
          <span className="border-l-2 border-[#c9a96e] pl-4 text-[#c9a96e] text-xs tracking-widest uppercase">
            SS 2026 Collection
          </span>
          <h1 className="font-serif text-6xl md:text-8xl mt-6 leading-[0.9]">
            Wear Your <br />{" "}
            <span className="text-[#c9a96e] italic">Story.</span>
          </h1>
          <p className="text-white/50 mt-8 max-w-sm text-lg font-light leading-relaxed">
            Curated fashion for those who believe clothing is a language.
            Timeless pieces, modern sensibility.
          </p>
          <div className="flex gap-4 mt-10">
            <button className="bg-[#c9a96e] text-black px-8 py-4 font-bold uppercase text-xs tracking-widest">
              Shop All
            </button>
            <button className="border border-white/20 hover:border-[#c9a96e] text-white px-8 py-4 font-bold uppercase text-xs tracking-widest transition-colors">
              Lookbook
            </button>
          </div>
        </div>
        <div className="bg-[#1a1510] relative overflow-hidden group">
          <div className="absolute inset-0 bg-linear-to-br from-[#c9a96e]/10 to-transparent" />
          <div className="h-full w-full flex items-center justify-center text-[10rem] opacity-30 grayscale group-hover:grayscale-0 transition-all duration-700">
            🎭
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="px-8 py-24">
        <div className="flex justify-between items-end mb-12">
          <div>
            <span className="text-[#c9a96e] text-xs font-bold tracking-widest uppercase">
              Featured
            </span>
            <h2 className="font-serif text-4xl mt-2">New Arrivals</h2>
          </div>
          <button className="border-b border-black pb-1 text-xs font-bold uppercase tracking-widest hover:text-[#c9a96e] hover:border-[#c9a96e] transition-all">
            View All
          </button>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((p, i) => (
            <ProductCard key={i} item={p} />
          ))}
        </div>
      </section>

      <PromoBanner />

      {/* Footer is similar, just using Tailwind flex and grid utils */}
    </main>
  );
}

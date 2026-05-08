import { Navbar } from "./components/ui/Navbar";
import { ProductCard } from "./components/ui/ProductCard";
import { PromoBanner } from "./components/ui/PromoBanner";
import { Hero } from "./components/ui/Hero";
import { AboutSection } from "./components/ui/AboutSection";
import { ClientsSection } from "./components/ui/ClientsSection";
import { CategoriesSection } from "./components/ui/CategoriesSection";
import { Footer } from "./components/ui/Footer";

const products = [
  {
    image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=800",
    name: "Cashmere Trench",
    category: "Women · Outerwear",
    price: "$289",
    oldPrice: "$380",
    badge: "New",
  },
  {
    image: "https://images.unsplash.com/photo-1560343090-f0409e92791a?q=80&w=800",
    name: "Italian Leather Oxford",
    category: "Men · Footwear",
    price: "$175",
  },
  {
    image: "https://images.unsplash.com/photo-1584916201218-f4242ceb4809?q=80&w=800",
    name: "Structured Tote",
    category: "Women · Accessories",
    price: "$149",
    oldPrice: "$210",
    badge: "Sale",
  },
  { 
    image: "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?q=80&w=800", 
    name: "Classic Chronograph", 
    category: "Accessories", 
    price: "$289" 
  },
];

export default function Home() {
  return (
    <main className="pt-20">
      <Navbar />

      <Hero />
      
      <ClientsSection />

      <CategoriesSection />
      
      <AboutSection />

      {/* Product Grid */}
      <section id="shop" className="px-8 py-24 max-w-7xl mx-auto" aria-labelledby="new-arrivals-heading">
        <div className="flex justify-between items-end mb-12">
          <div>
            <span className="text-[#c9a96e] text-xs font-bold tracking-widest uppercase">
              Featured
            </span>
            <h2 id="new-arrivals-heading" className="font-serif text-4xl mt-2">New Arrivals</h2>
          </div>
          <button 
            className="border-b border-black pb-1 text-xs font-bold uppercase tracking-widest hover:text-[#c9a96e] hover:border-[#c9a96e] transition-all focus:outline-none focus:ring-2 focus:ring-[#c9a96e] focus:ring-offset-4 cursor-pointer"
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

      <Footer />
    </main>
  );
}

export const Footer = () => {
  return (
    <footer className="bg-[#0a0a0a] text-white pt-24 pb-12 px-8" role="contentinfo">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        <div>
          <h3 className="font-serif text-2xl italic tracking-wider text-white mb-6">LUXE</h3>
          <p className="text-white/50 text-sm leading-relaxed mb-6 max-w-xs">
            Redefining modern elegance through timeless tailoring and exclusive materials. Crafted for those who appreciate the poetry of fashion.
          </p>
          <div className="flex gap-4">
            {["Instagram", "Twitter", "Pinterest"].map((social) => (
              <a key={social} href="#" className="text-white/50 hover:text-[#c9a96e] transition-colors text-xs font-bold uppercase tracking-widest">
                {social}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-xs font-bold uppercase tracking-[0.2em] mb-6 text-[#c9a96e]">Explore</h4>
          <ul className="space-y-4">
            {["New Arrivals", "Women's Edit", "Men's Collection", "Accessories", "Lookbook"].map((link) => (
              <li key={link}>
                <a href="#" className="text-white/60 hover:text-white transition-colors text-sm">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-bold uppercase tracking-[0.2em] mb-6 text-[#c9a96e]">Customer Care</h4>
          <ul className="space-y-4">
            {["Contact Us", "Shipping & Returns", "Size Guide", "FAQ", "Track Order"].map((link) => (
              <li key={link}>
                <a href="#" className="text-white/60 hover:text-white transition-colors text-sm">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-bold uppercase tracking-[0.2em] mb-6 text-[#c9a96e]">Newsletter</h4>
          <p className="text-white/50 text-sm leading-relaxed mb-4">
            Subscribe to receive exclusive access to new collections and private sales.
          </p>
          <form className="flex border-b border-white/20 hover:border-white transition-colors focus-within:border-[#c9a96e]">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="bg-transparent border-none outline-none py-3 px-0 w-full text-sm text-white placeholder-white/30"
            />
            <button type="submit" className="text-xs font-bold uppercase tracking-widest text-white hover:text-[#c9a96e] transition-colors pl-4">
              Join
            </button>
          </form>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-white/40 text-xs">
          &copy; {new Date().getFullYear()} LUXE Shop. All rights reserved.
        </p>
        <div className="flex gap-6 text-white/40 text-xs">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

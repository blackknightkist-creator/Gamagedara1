import React, { useState, useEffect } from 'react';
import { ShoppingBag, Phone, Menu, X, ArrowUpRight } from 'lucide-react';

interface HeaderProps {
  cartCount: number;
  onOpenCart: () => void;
}

export const Header: React.FC<HeaderProps> = ({ cartCount, onOpenCart }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'මුලපිටුව', href: '#hero' },
    { name: 'අපේ නිෂ්පාදන', href: '#products' },
    { name: 'අපේ කතාව', href: '#about' },
    { name: 'නිතර අසන ප්‍රශ්න', href: '#faq' },
    { name: 'ස්ථානය හා සිතියම', href: '#location-map' },
    { name: 'පාරිභෝගික ඇගයීම්', href: '#reviews' },
    { name: 'සම්බන්ධ වන්න', href: '#contact' },
  ];

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'glass-panel shadow-2xl py-2.5 border-b border-amber-500/20'
          : 'bg-gradient-to-b from-[#0a0806]/95 via-[#0a0806]/80 to-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo & Name */}
          <a
            href="#hero"
            id="brand-logo-link"
            className="flex items-center gap-3.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 rounded-xl"
            aria-label="ගමගෙදර මුලපිටුවට"
          >
            <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full p-0.5 logo-ring transition-transform duration-300 group-hover:scale-105 flex items-center justify-center bg-black border-2 border-amber-500/60 overflow-hidden shadow-lg shadow-amber-950/50">
              <img
                src="/logo.jpg"
                alt="ගමගෙදර - අපේ උරුමය ලාංඡනය"
                className="w-full h-full object-cover rounded-full"
                loading="eager"
                onError={(e) => {
                  // Fallback to stylized text badge if image is unavailable
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-black tracking-wide text-amber-400 font-sinhala leading-tight drop-shadow-sm group-hover:text-amber-300 transition-colors">
                ගමගෙදර
              </span>
              <span className="text-[11px] sm:text-xs tracking-widest text-amber-200/90 font-sinhala font-medium">
                අපේ උරුමය
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav
            id="desktop-navigation"
            aria-label="ප්‍රධාන මෙනුව"
            className="hidden lg:flex items-center gap-7 text-sm font-medium text-gray-300"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-amber-400 transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-amber-400 hover:after:w-full after:transition-all"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action Buttons: Hotline & Cart */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Phone Hotline Link */}
            <a
              id="header-hotline-btn"
              href="tel:+94711650300"
              className="hidden md:inline-flex items-center gap-2 px-3.5 py-2 rounded-full glass-panel-subtle hover:border-amber-400 text-amber-300 text-xs font-bold transition-all"
              title="දුරකථනයෙන් අමතන්න: +94 71 165 0300"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>+94 71 165 0300</span>
            </a>

            {/* Direct WhatsApp Quick Order Button */}
            <a
              id="header-whatsapp-btn"
              href="https://wa.me/94711650300?text=%E0%B7%84%E0%B6%BD%E0%B7%9D%20%E0%B6%9C%E0%B6%B8%E0%B6%9C%E0%B7%89%E0%B6%AF%E0%B6%BB%2C%20%E0%B6%B8%E0%B6%A7%20%E0%B6%B1%E0%B7%92%E0%B7%82%E0%B7%8A%E0%B6%B4%E0%B7%8F%E0%B6%AF%E0%B6%B1%20%E0%B6%9C%E0%B7%90%E0%B6%B1%20%E0%B7%80%E0%B7%92%E0%B7%83%E0%B7%8A%E0%B6%AD%E0%B6%BB%20%E0%B6%AF%E0%B7%90%E0%B6%B1%E0%B6%9C%E0%B7%90%E0%B6%B1%E0%B7%83%E0%B7%93%E0%B6%B8%E0%B6%A7%20%E0%B6%85%E0%B7%80%E0%B7%81%E0%B7%8A%E0%B6%BA%E0%B6%BA%E0%B7%92."
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-full glow-btn text-black font-extrabold text-xs uppercase tracking-wider"
            >
              <span>WhatsApp ඇණවුම්</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            {/* Shopping Cart Drawer Trigger Button */}
            <button
              id="cart-drawer-toggle-btn"
              onClick={onOpenCart}
              className="relative p-2.5 sm:p-3 rounded-full bg-stone-900/90 text-amber-400 border border-amber-500/40 hover:border-amber-400 hover:bg-stone-800 transition-all focus:outline-none focus:ring-2 focus:ring-amber-400"
              aria-label={`Cart එක බලන්න (${cartCount} අයිතම)`}
            >
              <ShoppingBag className="w-5 h-5" />
              {cartCount > 0 && (
                <span
                  id="cart-badge-count"
                  className="absolute -top-1 -right-1 w-5 h-5 bg-red-600 text-white text-[11px] font-black rounded-full flex items-center justify-center border border-black shadow-md animate-bounce"
                >
                  {cartCount}
                </span>
              )}
            </button>

            {/* Mobile Hamburger Menu Toggle */}
            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-amber-400 hover:text-amber-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-400"
              aria-label="මෙනුව විවෘත කරන්න"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>

        {/* Mobile Dropdown Navigation Menu */}
        {mobileMenuOpen && (
          <div
            id="mobile-nav-menu"
            className="lg:hidden mt-4 pt-3 pb-5 border-t border-amber-500/20 bg-stone-950/95 rounded-2xl p-4 space-y-3 shadow-2xl animate-in fade-in slide-in-from-top-4 duration-200"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-gray-200 hover:text-amber-400 font-sinhala text-sm py-2 px-3 rounded-lg hover:bg-stone-900 border-b border-stone-900 last:border-0"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2 flex flex-col gap-2">
              <a
                href="tel:+94711650300"
                className="flex items-center justify-center gap-2 py-2.5 rounded-xl bg-stone-900 border border-amber-500/30 text-amber-300 text-xs font-bold"
              >
                <Phone className="w-4 h-4 text-amber-400" />
                <span>+94 71 165 0300 (ක්ෂණික ඇමතුම්)</span>
              </a>
              <a
                href="https://wa.me/94711650300?text=%E0%B7%84%E0%B6%BD%E0%B7%9D%20%E0%B6%9C%E0%B6%B8%E0%B6%9C%E0%B7%89%E0%B6%AF%E0%B6%BB"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-2.5 rounded-xl glow-btn text-black text-xs font-black uppercase"
              >
                <span>WhatsApp හරහා සම්බන්ධ වන්න</span>
              </a>
            </div>
          </div>
        )}

      </div>
    </header>
  );
};

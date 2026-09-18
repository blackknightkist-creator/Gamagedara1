import React from 'react';
import { Phone, MessageCircle, ShoppingBag } from 'lucide-react';

interface MobileQuickBarProps {
  cartCount: number;
  onOpenCart: () => void;
}

export const MobileQuickBar: React.FC<MobileQuickBarProps> = ({
  cartCount,
  onOpenCart,
}) => {
  return (
    <div
      id="mobile-bottom-quick-bar"
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#0c0906]/95 backdrop-blur-lg border-t border-amber-500/25 px-4 py-2.5 flex items-center justify-around shadow-2xl safe-area-pb"
    >
      {/* Phone Call */}
      <a
        href="tel:+94711650300"
        className="flex flex-col items-center gap-1 text-gray-300 hover:text-amber-400 text-[11px] font-sinhala"
        aria-label="දුරකථනයෙන් අමතන්න"
      >
        <div className="w-9 h-9 rounded-full bg-stone-900 border border-stone-700 flex items-center justify-center text-amber-400">
          <Phone className="w-4 h-4" />
        </div>
        <span>ඇමතුම්</span>
      </a>

      {/* Center WhatsApp Primary Action */}
      <a
        href="https://wa.me/94711650300?text=%E0%B7%84%E0%B6%BD%E0%B7%9D%20%E0%B6%9C%E0%B6%B8%E0%B6%9C%E0%B7%89%E0%B6%AF%E0%B6%BB%2C%20%E0%B6%B8%E0%B6%A7%20%E0%B6%87%E0%B6%AB%E0%B7%80%E0%B7%94%E0%B6%B8%E0%B6%9A%E0%B7%8A%20%E0%B6%9A%E0%B6%BB%E0%B6%B1%E0%B7%8A%E0%B6%B1%20%E0%B6%85%E0%B7%80%E0%B7%81%E0%B7%8A%E0%B6%BA%E0%B6%BA%E0%B7%92."
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 px-5 py-2.5 rounded-full glow-btn text-black font-extrabold text-xs uppercase tracking-wide shadow-lg"
      >
        <MessageCircle className="w-4 h-4" />
        <span>WhatsApp ඇණවුම්</span>
      </a>

      {/* Cart Drawer Trigger */}
      <button
        onClick={onOpenCart}
        className="flex flex-col items-center gap-1 text-gray-300 hover:text-amber-400 text-[11px] font-sinhala relative"
        aria-label="Cart එක බලන්න"
      >
        <div className="w-9 h-9 rounded-full bg-stone-900 border border-stone-700 flex items-center justify-center text-amber-400 relative">
          <ShoppingBag className="w-4 h-4" />
          {cartCount > 0 && (
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-600 text-white text-[10px] font-bold rounded-full flex items-center justify-center">
              {cartCount}
            </span>
          )}
        </div>
        <span>Cart</span>
      </button>
    </div>
  );
};

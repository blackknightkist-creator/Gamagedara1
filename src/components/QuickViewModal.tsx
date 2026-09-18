import React, { useState, useEffect } from 'react';
import { X, Check, ShoppingBag, MessageCircle, Star, ShieldCheck } from 'lucide-react';
import { Product } from '../types';

interface QuickViewModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product, quantity: number) => void;
}

export const QuickViewModal: React.FC<QuickViewModalProps> = ({
  product,
  onClose,
  onAddToCart,
}) => {
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  useEffect(() => {
    setQuantity(1);
    setAdded(false);
  }, [product]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!product) return null;

  const handleAdd = () => {
    onAddToCart(product, quantity);
    setAdded(true);
    setTimeout(() => {
      setAdded(false);
      onClose();
    }, 1200);
  };

  const totalPrice = product.price * quantity;

  return (
    <div
      id="quick-view-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-product-title"
    >
      {/* Dark Blur Backdrop */}
      <div
        className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-3xl bg-[#120e0a] rounded-3xl border border-amber-500/40 p-6 sm:p-8 shadow-2xl z-10 glass-panel overflow-hidden my-auto max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          id="close-quickview-btn"
          onClick={onClose}
          className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2 rounded-full bg-stone-900/80 text-gray-400 hover:text-white hover:bg-stone-800 transition-colors z-20 focus:outline-none focus:ring-2 focus:ring-amber-400"
          aria-label="වසා දමන්න"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-center">
          
          {/* Product Image Preview */}
          <div className="relative rounded-2xl overflow-hidden border border-amber-500/30 bg-stone-900 h-64 sm:h-80">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            {product.badge && (
              <span className="absolute top-3 left-3 bg-red-600 text-white text-xs font-black px-3 py-1 rounded-full uppercase shadow">
                {product.badge}
              </span>
            )}
            <span className="absolute bottom-3 right-3 bg-black/80 backdrop-blur text-amber-300 text-xs font-bold px-3 py-1.5 rounded-xl border border-amber-500/30">
              {product.volumeOrWeight}
            </span>
          </div>

          {/* Product Information */}
          <div className="space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>100% දේශීය හොරණ නිෂ්පාදනයක්</span>
            </div>

            <h2
              id="modal-product-title"
              className="text-2xl sm:text-3xl font-black text-white font-sinhala leading-tight"
            >
              {product.name}
            </h2>

            {/* Rating Stars */}
            <div className="flex items-center gap-2 text-amber-400 text-xs">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-3.5 h-3.5 fill-amber-400 text-amber-400"
                  />
                ))}
              </div>
              <span className="text-gray-300 font-bold">{product.rating.toFixed(1)}</span>
              <span className="text-gray-500">({product.reviewCount} තෘප්තිමත් පාරිභෝගිකයින්)</span>
            </div>

            <p className="text-gray-300 text-xs sm:text-sm font-sinhala leading-relaxed">
              {product.fullDesc}
            </p>

            {/* Benefits Checklist */}
            <div className="space-y-1.5 pt-1">
              <span className="text-xs font-bold text-amber-400 uppercase tracking-wide block">
                සුවිශේෂී ගුණාංග:
              </span>
              {product.benefits.map((benefit, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-gray-300 font-sinhala">
                  <Check className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>

            {/* Price & Quantity Selector */}
            <div className="pt-3 border-t border-stone-800 flex items-center justify-between">
              <div>
                <span className="text-xs text-gray-400 block">මිල:</span>
                <span className="text-2xl font-black text-amber-400 font-sans">
                  රු. {totalPrice.toLocaleString()}
                </span>
              </div>

              {/* Quantity Controls */}
              <div className="flex items-center gap-3 bg-stone-900 px-3 py-1.5 rounded-xl border border-stone-800">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-7 h-7 rounded-lg bg-stone-800 hover:bg-amber-500 hover:text-black text-white font-bold text-sm transition-colors flex items-center justify-center"
                  aria-label="අඩු කරන්න"
                >
                  -
                </button>
                <span className="text-sm font-bold text-white min-w-[20px] text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-7 h-7 rounded-lg bg-stone-800 hover:bg-amber-500 hover:text-black text-white font-bold text-sm transition-colors flex items-center justify-center"
                  aria-label="වැඩි කරන්න"
                >
                  +
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <button
                id="modal-add-to-cart-btn"
                onClick={handleAdd}
                className="w-full py-3 rounded-xl glow-btn text-black font-extrabold text-xs font-sinhala flex items-center justify-center gap-2 shadow-lg"
              >
                {added ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>Cart එකට දැම්මා!</span>
                  </>
                ) : (
                  <>
                    <ShoppingBag className="w-4 h-4" />
                    <span>Cart එකට එකතු කරන්න</span>
                  </>
                )}
              </button>

              <a
                href={`https://wa.me/94711650300?text=${encodeURIComponent(
                  `හලෝ ගමගෙදර, මට "${product.name}" (${quantity} ක්) ඇණවුම් කිරීමට අවශ්‍යයි.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 rounded-xl bg-emerald-950/80 hover:bg-emerald-900 border border-emerald-500/40 text-emerald-300 hover:text-white font-extrabold text-xs font-sinhala flex items-center justify-center gap-2 transition-all"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp ඇණවුම</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};

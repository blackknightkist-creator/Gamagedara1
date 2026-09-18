import React from 'react';
import { Star, Eye, ShoppingBag, Check } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onQuickView: (product: Product) => void;
  onAddToCart: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onQuickView,
  onAddToCart,
}) => {
  const [justAdded, setJustAdded] = React.useState(false);

  const handleAdd = () => {
    onAddToCart(product);
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 1500);
  };

  const discount = Math.round(
    ((product.originalPrice - product.price) / product.originalPrice) * 100
  );

  return (
    <div
      id={`product-card-${product.id}`}
      className="product-card rounded-3xl p-5 sm:p-6 border border-amber-500/20 relative group flex flex-col justify-between"
    >
      <div>
        {/* Product Image Container */}
        <div className="relative h-60 sm:h-64 rounded-2xl overflow-hidden mb-5 bg-stone-900 flex items-center justify-center border border-amber-500/10">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
            loading="lazy"
            referrerPolicy="no-referrer"
          />

          {/* Ribbon Badge */}
          {product.badge && (
            <span className="absolute top-3 left-3 bg-gradient-to-r from-red-600 to-amber-600 text-white text-[11px] font-black px-3 py-1 rounded-full uppercase tracking-wider shadow-lg border border-red-400/40">
              {product.badge}
            </span>
          )}

          {/* Discount Pill */}
          <span className="absolute top-3 right-3 bg-black/75 backdrop-blur-md text-amber-300 text-xs font-bold px-2.5 py-1 rounded-full border border-amber-500/30">
            -{discount}%
          </span>

          {/* Volume / Weight Badge */}
          <span className="absolute bottom-3 left-3 bg-stone-950/80 backdrop-blur-md text-gray-200 text-xs font-semibold px-3 py-1 rounded-xl border border-stone-800">
            {product.volumeOrWeight}
          </span>
        </div>

        {/* Category & Title */}
        <span className="text-[11px] font-bold uppercase tracking-wider text-amber-500/90 font-sinhala block mb-1">
          {product.category}
        </span>
        <h3 className="text-xl font-bold text-white mb-2 font-sinhala group-hover:text-amber-400 transition-colors">
          {product.name}
        </h3>

        {/* Short Description */}
        <p className="text-gray-400 text-xs font-sinhala mb-4 line-clamp-2 leading-relaxed">
          {product.shortDesc}
        </p>

        {/* Rating & Reviews */}
        <div className="flex items-center gap-1.5 text-amber-400 text-xs mb-4">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-3.5 h-3.5 ${
                  i < Math.floor(product.rating)
                    ? 'fill-amber-400 text-amber-400'
                    : 'text-stone-600'
                }`}
              />
            ))}
          </div>
          <span className="font-bold text-white ml-1">{product.rating.toFixed(1)}</span>
          <span className="text-gray-500">({product.reviewCount} ඇගයීම්)</span>
        </div>
      </div>

      {/* Pricing & Actions */}
      <div className="pt-2 border-t border-stone-800/80">
        <div className="flex items-baseline justify-between mb-4">
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-black text-amber-400 font-sans tracking-tight">
              රු. {product.price.toLocaleString()}
            </span>
            <span className="text-xs text-gray-500 line-through font-sans">
              රු. {product.originalPrice.toLocaleString()}
            </span>
          </div>
          <span className="text-[11px] font-bold text-emerald-400 bg-emerald-950/80 px-2.5 py-1 rounded-full border border-emerald-500/30">
            ලබාගත හැක
          </span>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <button
            id={`btn-quickview-${product.id}`}
            onClick={() => onQuickView(product)}
            className="px-3 py-2.5 rounded-xl glass-panel text-gray-200 hover:text-white text-xs font-bold font-sinhala hover:border-amber-400 transition-all flex items-center justify-center gap-1.5 focus:outline-none focus:ring-1 focus:ring-amber-400"
          >
            <Eye className="w-3.5 h-3.5 text-amber-400" />
            <span>විස්තර</span>
          </button>

          <button
            id={`btn-addtocart-${product.id}`}
            onClick={handleAdd}
            className={`px-3 py-2.5 rounded-xl glow-btn text-black font-extrabold text-xs font-sinhala flex items-center justify-center gap-1.5 transition-all focus:outline-none focus:ring-2 focus:ring-amber-300 ${
              justAdded ? 'bg-emerald-500 text-black' : ''
            }`}
          >
            {justAdded ? (
              <>
                <Check className="w-4 h-4" />
                <span>එකතු කළා!</span>
              </>
            ) : (
              <>
                <ShoppingBag className="w-3.5 h-3.5" />
                <span>එකතු කරන්න</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

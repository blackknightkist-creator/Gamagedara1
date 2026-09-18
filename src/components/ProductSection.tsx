import React, { useState, useMemo } from 'react';
import { Search, Sparkles, SlidersHorizontal } from 'lucide-react';
import { Product } from '../types';
import { PRODUCTS } from '../data/products';
import { ProductCard } from './ProductCard';
import { sanitizeInput } from '../utils/security';

interface ProductSectionProps {
  onQuickView: (product: Product) => void;
  onAddToCart: (product: Product) => void;
}

export const ProductSection: React.FC<ProductSectionProps> = ({
  onQuickView,
  onAddToCart,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('සියල්ල');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    'සියල්ල',
    'කිතුල් නිෂ්පාදන',
    'පෝෂණ පිටි',
    'විශේෂ ඇසුරුම්',
  ];

  const filteredProducts = useMemo(() => {
    const cleanSearch = sanitizeInput(searchQuery).toLowerCase();
    return PRODUCTS.filter((p) => {
      const matchesCat =
        selectedCategory === 'සියල්ල' || p.category === selectedCategory;
      const matchesSearch =
        !cleanSearch ||
        p.name.toLowerCase().includes(cleanSearch) ||
        p.shortDesc.toLowerCase().includes(cleanSearch) ||
        p.category.toLowerCase().includes(cleanSearch);
      return matchesCat && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section id="products" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Section Title */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider mb-4">
          <Sparkles className="w-3.5 h-3.5" />
          <span>අපේ නිෂ්පාදන පෙළ (Our Products)</span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-sinhala leading-tight mb-4">
          නොකැළැල් පිරිසිදු <span className="text-amber-400">ගමගෙදර ස්වාභාවික රසය</span>
        </h2>
        <p className="text-gray-400 text-sm sm:text-base font-sinhala font-light">
          හොරණ පාරම්පරික කිතුල් ගසින් සෘජුවම නෙලා, ස්වාභාවික ගුණය ආරක්‍ෂිතව ඔබගේ මේසයට ගෙනෙන පිරිසිදුම නිෂ්පාදන.
        </p>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10 pb-6 border-b border-stone-800">
        
        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all font-sinhala ${
                selectedCategory === cat
                  ? 'bg-amber-500 text-black shadow-lg shadow-amber-500/30'
                  : 'bg-stone-900/90 text-gray-300 hover:text-white hover:bg-stone-800 border border-stone-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search Input with OWASP sanitization */}
        <div className="relative w-full md:w-72">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-500" />
          <input
            id="product-search-input"
            type="text"
            maxLength={40}
            placeholder="නිෂ්පාදන සොයන්න..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-stone-900/90 border border-stone-800 focus:border-amber-400 focus:outline-none text-xs sm:text-sm text-white placeholder:text-stone-500 font-sinhala"
          />
        </div>

      </div>

      {/* Products Grid */}
      {filteredProducts.length === 0 ? (
        <div className="text-center py-20 bg-stone-950/60 rounded-3xl border border-stone-800 p-8">
          <SlidersHorizontal className="w-12 h-12 text-stone-600 mx-auto mb-3" />
          <p className="text-gray-300 font-sinhala text-base">
            සොයන ලද නමින් නිෂ්පාදන සොයා ගැනීමට නොහැකි විය.
          </p>
          <button
            onClick={() => {
              setSelectedCategory('සියල්ල');
              setSearchQuery('');
            }}
            className="mt-4 px-5 py-2 rounded-xl glow-btn text-black font-bold text-xs font-sinhala"
          >
            සියලු නිෂ්පාදන පෙන්වන්න
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onQuickView={onQuickView}
              onAddToCart={onAddToCart}
            />
          ))}
        </div>
      )}

    </section>
  );
};

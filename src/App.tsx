import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TrustBadges } from './components/TrustBadges';
import { ProductSection } from './components/ProductSection';
import { QuickViewModal } from './components/QuickViewModal';
import { CartDrawer } from './components/CartDrawer';
import { StorySection } from './components/StorySection';
import { MapSection } from './components/MapSection';
import { ReviewsSection } from './components/ReviewsSection';
import { FaqSeoSection } from './components/FaqSeoSection';
import { Footer } from './components/Footer';
import { MobileQuickBar } from './components/MobileQuickBar';
import { Toast } from './components/Toast';
import { Product, CartItem } from './types';
import { getSafeStoredCart, setSafeStoredCart } from './utils/security';

export default function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>(() =>
    getSafeStoredCart<CartItem[]>('gamagedara_cart_items', [])
  );
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Sync cart to local storage safely
  useEffect(() => {
    setSafeStoredCart('gamagedara_cart_items', cartItems);
  }, [cartItems]);

  const handleAddToCart = (product: Product, quantity = 1) => {
    setCartItems((prevItems) => {
      const existing = prevItems.find((item) => item.product.id === product.id);
      if (existing) {
        return prevItems.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prevItems, { product, quantity }];
    });

    setToastMessage(`${product.name} (${quantity}ක්)`);
    setTimeout(() => {
      setToastMessage(null);
    }, 2800);
  };

  const handleUpdateQuantity = (productId: number, delta: number) => {
    setCartItems((prevItems) =>
      prevItems
        .map((item) => {
          if (item.product.id === productId) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter((item): item is CartItem => item !== null)
    );
  };

  const handleRemoveItem = (productId: number) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.product.id !== productId)
    );
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const totalCartCount = cartItems.reduce(
    (count, item) => count + item.quantity,
    0
  );

  return (
    <div className="min-h-screen bg-[#0a0806] text-gray-100 font-sinhala selection:bg-amber-500 selection:text-black">
      {/* Fixed Sticky Header with Logo & Cart */}
      <Header
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
      />

      {/* Main Content Sections */}
      <main id="main-content">
        {/* Hero Slideshow & Headlines */}
        <Hero />

        {/* 100% Organic & Quality Trust Assurances */}
        <TrustBadges />

        {/* Products Grid with Categorization & Search */}
        <ProductSection
          onQuickView={(p) => setSelectedProduct(p)}
          onAddToCart={(p) => handleAddToCart(p, 1)}
        />

        {/* Heritage Village Story (Horana Tradition) */}
        <StorySection />

        {/* Professional Google Maps Integration (Kulupana, Horana 12400) */}
        <MapSection />

        {/* Customer Reviews and Social Proof */}
        <ReviewsSection />

        {/* High-Authority SEO FAQs & Knowledge Highlights */}
        <FaqSeoSection />
      </main>

      {/* Footer with exact credentials and contact form */}
      <Footer />

      {/* Responsive Mobile Bottom Action Bar */}
      <MobileQuickBar
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
      />

      {/* Interactive Quick View Modal */}
      <QuickViewModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={handleAddToCart}
      />

      {/* Sliding Cart Drawer with WhatsApp Order Integration */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      {/* Feedback Toast Notification */}
      <Toast
        message={toastMessage}
        onClose={() => setToastMessage(null)}
      />
    </div>
  );
}

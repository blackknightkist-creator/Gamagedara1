import React, { useState } from 'react';
import { X, Trash2, ShoppingBag, ArrowRight, User, Phone, MapPin, Building, AlertCircle, FileText } from 'lucide-react';
import { CartItem } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (productId: number, delta: number) => void;
  onRemoveItem: (productId: number) => void;
  onClearCart: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
}) => {
  const [customerName, setCustomerName] = useState(() => {
    try {
      return localStorage.getItem('gamagedara_customer_name') || '';
    } catch {
      return '';
    }
  });

  const [customerPhone, setCustomerPhone] = useState(() => {
    try {
      return localStorage.getItem('gamagedara_customer_phone') || '';
    } catch {
      return '';
    }
  });

  const [deliveryAddress, setDeliveryAddress] = useState(() => {
    try {
      return localStorage.getItem('gamagedara_delivery_address') || '';
    } catch {
      return '';
    }
  });

  const [deliveryCity, setDeliveryCity] = useState(() => {
    try {
      return localStorage.getItem('gamagedara_delivery_city') || '';
    } catch {
      return '';
    }
  });

  const [orderNotes, setOrderNotes] = useState('');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  if (!isOpen) return null;

  const totalAmount = items.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  const totalQuantity = items.reduce((sum, item) => sum + item.quantity, 0);

  const handleWhatsAppCheckout = () => {
    if (items.length === 0) return;

    if (!customerName.trim() || !customerPhone.trim()) {
      setErrorMessage('කරුණාකර ඔබගේ නම සහ දුරකථන අංකය ඇතුළත් කරන්න (Please enter Name & Phone).');
      return;
    }

    setErrorMessage(null);

    // Save details to localStorage for future orders
    try {
      localStorage.setItem('gamagedara_customer_name', customerName.trim());
      localStorage.setItem('gamagedara_customer_phone', customerPhone.trim());
      localStorage.setItem('gamagedara_delivery_address', deliveryAddress.trim());
      localStorage.setItem('gamagedara_delivery_city', deliveryCity.trim());
    } catch {
      // ignore storage errors
    }

    // Build structured, clean pre-filled WhatsApp message
    let message = '🌿 *ගමගෙදර - නව ඇණවුමයි (NEW ORDER)*\n';
    message += '━━━━━━━━━━━━━━━━━━━━━\n';
    message += '👤 *පාරිභෝගික තොරතුරු (Customer Details):*\n';
    message += `• නම (Name): ${customerName.trim()}\n`;
    message += `• දුරකථන (Phone): ${customerPhone.trim()}\n`;
    message += `• ලිපිනය (Address): ${deliveryAddress.trim() || 'WhatsApp මගින් දන්වනු ලැබේ'}\n`;
    message += `• ළඟම නගරය (City): ${deliveryCity.trim() || 'හොරණ'}\n`;
    if (orderNotes.trim()) {
      message += `• සටහන් (Notes): ${orderNotes.trim()}\n`;
    }

    message += '━━━━━━━━━━━━━━━━━━━━━\n';
    message += '📦 *ඇණවුම් කළ නිෂ්පාදන (Ordered Items):*\n';
    items.forEach((item, idx) => {
      const lineTotal = item.product.price * item.quantity;
      message += `${idx + 1}. *${item.product.name}* (${item.product.volumeOrWeight})\n   ප්‍රමාණය: ${item.quantity} x රු. ${item.product.price.toLocaleString()} = රු. ${lineTotal.toLocaleString()}\n`;
    });

    message += '━━━━━━━━━━━━━━━━━━━━━\n';
    message += `💰 *අයිතම එකතුව (Subtotal):* රු. ${totalAmount.toLocaleString()}\n`;
    message += '🚚 *බෙදාහැරීම (Delivery):* හොරණ නොමිලේ / දිවයින පුරා Courier\n';
    message += `✨ *මුළු එකතුව (Grand Total):* *රු. ${totalAmount.toLocaleString()}*\n`;
    message += '━━━━━━━━━━━━━━━━━━━━━\n';
    message += 'කරුණාකර මගේ ඇණවුම තහවුරු කර බෙදාහරින දිනය දැනුම් දෙන්න. ස්තූතියි!';

    const encoded = encodeURIComponent(message);
    const safeLink = document.createElement('a');
    safeLink.href = `https://wa.me/94711650300?text=${encoded}`;
    safeLink.target = '_blank';
    safeLink.rel = 'noopener noreferrer';
    document.body.appendChild(safeLink);
    safeLink.click();
    document.body.removeChild(safeLink);
  };

  return (
    <div
      id="cart-drawer-container"
      className="fixed inset-0 z-50 overflow-hidden"
      role="dialog"
      aria-modal="true"
      aria-labelledby="cart-drawer-heading"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-6 sm:pl-10">
        <div className="w-screen max-w-md bg-[#100c08] border-l border-amber-500/30 flex flex-col justify-between shadow-2xl z-10">
          
          {/* Header */}
          <div className="p-5 pb-4 border-b border-stone-800 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <div>
                <h3
                  id="cart-drawer-heading"
                  className="text-lg font-bold text-white font-sinhala leading-tight"
                >
                  ඔබගේ ඇණවුම් Cart එක
                </h3>
                <span className="text-xs text-gray-400 font-sinhala">
                  අයිතම {totalQuantity} ක් තෝරාගෙන ඇත
                </span>
              </div>
            </div>

            <button
              id="cart-drawer-close-btn"
              onClick={onClose}
              className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-stone-800 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-400"
              aria-label="Cart එක වසන්න"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Scrollable Body: Items & User Details Form */}
          <div
            id="cart-drawer-scrollable-body"
            className="flex-1 overflow-y-auto p-5 space-y-6"
          >
            {items.length === 0 ? (
              <div className="text-center py-16 space-y-4">
                <div className="w-16 h-16 rounded-full bg-stone-900 border border-stone-800 flex items-center justify-center mx-auto text-stone-600">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <p className="text-gray-400 text-sm font-sinhala">
                  ඔබගේ Cart එකේ දැනට කිසිවක් නොමැත.
                </p>
                <button
                  onClick={onClose}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl glow-btn text-black font-extrabold text-xs font-sinhala"
                >
                  <span>නිෂ්පාදන තෝරන්න</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            ) : (
              <>
                {/* Cart Items List */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs font-bold text-gray-400 uppercase tracking-wider font-sinhala">
                    <span>තෝරාගත් භාණ්ඩ</span>
                    <span className="text-amber-400">({items.length} වර්ගයක්)</span>
                  </div>

                  {items.map((item) => (
                    <div
                      key={item.product.id}
                      className="flex items-center gap-3 bg-stone-900/90 p-3 rounded-2xl border border-stone-800 hover:border-amber-500/30 transition-all"
                    >
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        className="w-14 h-14 rounded-xl object-cover border border-amber-500/20 flex-shrink-0"
                        referrerPolicy="no-referrer"
                      />

                      <div className="flex-1 min-w-0">
                        <h4 className="text-white font-bold text-xs font-sinhala truncate">
                          {item.product.name}
                        </h4>
                        <span className="text-[10px] text-gray-400 block mb-1">
                          {item.product.volumeOrWeight}
                        </span>
                        <span className="text-amber-400 font-black text-xs">
                          රු. {(item.product.price * item.quantity).toLocaleString()}
                        </span>

                        {/* Quantity Controls */}
                        <div className="flex items-center gap-2 mt-1.5">
                          <button
                            onClick={() => onUpdateQuantity(item.product.id, -1)}
                            className="w-5 h-5 rounded bg-stone-800 hover:bg-amber-500 hover:text-black text-white text-xs font-bold transition-colors flex items-center justify-center"
                            aria-label="එකකින් අඩු කරන්න"
                          >
                            -
                          </button>
                          <span className="text-xs text-white font-bold min-w-[14px] text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => onUpdateQuantity(item.product.id, 1)}
                            className="w-5 h-5 rounded bg-stone-800 hover:bg-amber-500 hover:text-black text-white text-xs font-bold transition-colors flex items-center justify-center"
                            aria-label="එකකින් වැඩි කරන්න"
                          >
                            +
                          </button>
                        </div>
                      </div>

                      <button
                        onClick={() => onRemoveItem(item.product.id)}
                        className="p-2 text-stone-500 hover:text-red-500 hover:bg-red-950/30 rounded-lg transition-colors"
                        aria-label={`${item.product.name} ඉවත් කරන්න`}
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>

                {/* Customer Details Form */}
                <div className="pt-4 border-t border-stone-800/80">
                  <div className="flex items-center gap-2 mb-3">
                    <User className="w-4 h-4 text-amber-400" />
                    <h4 className="text-sm font-bold text-white font-sinhala">
                      ඔබගේ විස්තර (Customer Details)
                    </h4>
                  </div>
                  <p className="text-[11px] text-gray-400 font-sinhala mb-3">
                    WhatsApp පණිවිඩය සකස් වීම සඳහා පහත තොරතුරු පුරවන්න:
                  </p>

                  {errorMessage && (
                    <div className="p-2.5 mb-3 rounded-xl bg-red-950/40 border border-red-500/40 flex items-center gap-2 text-xs text-red-300 font-sinhala">
                      <AlertCircle className="w-4 h-4 text-red-400 flex-shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <div className="space-y-2.5">
                    {/* Customer Name */}
                    <div>
                      <label className="block text-[11px] font-semibold text-gray-300 mb-1 font-sinhala flex items-center gap-1.5">
                        <User className="w-3 h-3 text-amber-400" />
                        <span>ඔබගේ නම (Full Name) *</span>
                      </label>
                      <input
                        id="cart-customer-name-input"
                        type="text"
                        value={customerName}
                        onChange={(e) => {
                          setCustomerName(e.target.value);
                          if (errorMessage) setErrorMessage(null);
                        }}
                        placeholder="උදා: කසුන් පෙරේරා"
                        className="w-full px-3.5 py-2 rounded-xl bg-stone-900 border border-stone-700 focus:border-amber-400 text-white text-xs placeholder-stone-500 outline-none transition-colors font-sinhala"
                      />
                    </div>

                    {/* Customer Phone */}
                    <div>
                      <label className="block text-[11px] font-semibold text-gray-300 mb-1 font-sinhala flex items-center gap-1.5">
                        <Phone className="w-3 h-3 text-amber-400" />
                        <span>දුරකථන අංකය (Phone Number) *</span>
                      </label>
                      <input
                        id="cart-customer-phone-input"
                        type="tel"
                        value={customerPhone}
                        onChange={(e) => {
                          setCustomerPhone(e.target.value);
                          if (errorMessage) setErrorMessage(null);
                        }}
                        placeholder="උදා: 071 165 0300"
                        className="w-full px-3.5 py-2 rounded-xl bg-stone-900 border border-stone-700 focus:border-amber-400 text-white text-xs placeholder-stone-500 outline-none transition-colors font-sans"
                      />
                    </div>

                    {/* Delivery Address */}
                    <div>
                      <label className="block text-[11px] font-semibold text-gray-300 mb-1 font-sinhala flex items-center gap-1.5">
                        <MapPin className="w-3 h-3 text-amber-400" />
                        <span>බෙදාහැරීමේ ලිපිනය (Delivery Address)</span>
                      </label>
                      <input
                        id="cart-customer-address-input"
                        type="text"
                        value={deliveryAddress}
                        onChange={(e) => setDeliveryAddress(e.target.value)}
                        placeholder="උදා: අංක 12, කුළුපන, හොරණ"
                        className="w-full px-3.5 py-2 rounded-xl bg-stone-900 border border-stone-700 focus:border-amber-400 text-white text-xs placeholder-stone-500 outline-none transition-colors font-sinhala"
                      />
                    </div>

                    {/* Nearest Town / City */}
                    <div>
                      <label className="block text-[11px] font-semibold text-gray-300 mb-1 font-sinhala flex items-center gap-1.5">
                        <Building className="w-3 h-3 text-amber-400" />
                        <span>ළඟම නගරය (Nearest Town / City)</span>
                      </label>
                      <input
                        id="cart-customer-city-input"
                        type="text"
                        value={deliveryCity}
                        onChange={(e) => setDeliveryCity(e.target.value)}
                        placeholder="උදා: හොරණ / පානදුර / කොළඹ"
                        className="w-full px-3.5 py-2 rounded-xl bg-stone-900 border border-stone-700 focus:border-amber-400 text-white text-xs placeholder-stone-500 outline-none transition-colors font-sinhala"
                      />
                    </div>

                    {/* Special Notes (Optional) */}
                    <div>
                      <label className="block text-[11px] font-semibold text-gray-300 mb-1 font-sinhala flex items-center gap-1.5">
                        <FileText className="w-3 h-3 text-amber-400" />
                        <span>අමතර සටහන් (Optional Notes)</span>
                      </label>
                      <input
                        id="cart-customer-notes-input"
                        type="text"
                        value={orderNotes}
                        onChange={(e) => setOrderNotes(e.target.value)}
                        placeholder="විශේෂ උපදෙස් ඇත්නම් මෙහි සටහන් කරන්න"
                        className="w-full px-3.5 py-2 rounded-xl bg-stone-900 border border-stone-700 focus:border-amber-400 text-white text-xs placeholder-stone-500 outline-none transition-colors font-sinhala"
                      />
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Footer Total & Place Order Button */}
          {items.length > 0 && (
            <div className="p-5 border-t border-stone-800 bg-[#0c0906] space-y-3.5">
              <div className="space-y-1 text-xs text-gray-400">
                <div className="flex justify-between">
                  <span>අයිතම එකතුව (Subtotal):</span>
                  <span className="text-white font-medium">රු. {totalAmount.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span>බෙදාහැරීම (Delivery):</span>
                  <span className="text-amber-300 font-medium">හොරණ නගර සීමාවේ නොමිලේ</span>
                </div>
              </div>

              <div className="flex items-center justify-between text-base font-bold text-white pt-2 border-t border-stone-900">
                <span className="font-sinhala">මුළු එකතුව (Total):</span>
                <span id="cart-drawer-total" className="text-2xl font-black text-amber-400 font-sans">
                  රු. {totalAmount.toLocaleString()}
                </span>
              </div>

              {/* Place Order Button */}
              <button
                id="cart-drawer-place-order-btn"
                onClick={handleWhatsAppCheckout}
                className="w-full py-3.5 rounded-full glow-btn text-black font-extrabold text-sm font-sinhala flex items-center justify-center gap-2 shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <span>ඇණවුම තහවුරු කරන්න (Place Order)</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <p className="text-[10px] text-gray-500 text-center font-sinhala leading-tight">
                🔒 ක්ෂණික WhatsApp ඇණවුම් සේවාව | භාණ්ඩ ලැබුණු පසු මුදල් ගෙවීම (COD)
              </p>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};


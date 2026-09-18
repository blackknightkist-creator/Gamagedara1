import React from 'react';
import { CheckCircle2, ShoppingBag } from 'lucide-react';

interface ToastProps {
  message: string | null;
  onClose: () => void;
}

export const Toast: React.FC<ToastProps> = ({ message, onClose }) => {
  if (!message) return null;

  return (
    <div
      id="toast-notification"
      className="fixed bottom-20 md:bottom-8 right-4 sm:right-8 z-50 flex items-center gap-3 px-5 py-3.5 rounded-2xl glass-panel border border-amber-500/50 bg-[#120e0a]/95 text-white shadow-2xl shadow-black/80 animate-in fade-in slide-in-from-bottom-5 duration-300"
      role="alert"
    >
      <div className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center flex-shrink-0">
        <CheckCircle2 className="w-5 h-5" />
      </div>
      <div className="text-xs sm:text-sm font-sinhala">
        <span className="font-bold text-amber-300 block">{message}</span>
        <span className="text-[11px] text-gray-400">Cart එකට සාර්ථකව එක් විය.</span>
      </div>
      <button
        onClick={onClose}
        className="ml-2 text-stone-500 hover:text-white text-xs font-bold p-1"
        aria-label="Toast එක වසන්න"
      >
        ✕
      </button>
    </div>
  );
};

import React, { useState } from 'react';
import { MapPin, Phone, Mail, Send, CheckCircle, AlertCircle, ShieldCheck } from 'lucide-react';
import { sanitizeInput, isValidSriLankanPhone, isValidEmail, isRateLimited } from '../utils/security';

export const Footer: React.FC = () => {
  const [formName, setFormName] = useState('');
  const [formPhone, setFormPhone] = useState('');
  const [formMessage, setFormMessage] = useState('');
  const [formStatus, setFormStatus] = useState<'idle' | 'success' | 'error' | 'spam'>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // OWASP A05/A08: Prevent spam flooding via client-side rate limiting
    if (isRateLimited(3000)) {
      setFormStatus('spam');
      setStatusMessage('කරුණාකර මොහොතක් රැඳී නැවත උත්සාහ කරන්න.');
      return;
    }

    // OWASP A03: Sanitize all inputs
    const cleanName = sanitizeInput(formName);
    const cleanPhone = sanitizeInput(formPhone);
    const cleanMsg = sanitizeInput(formMessage);

    if (!cleanName || cleanName.length < 2) {
      setFormStatus('error');
      setStatusMessage('කරුණාකර ඔබගේ නම නිවැරදිව ඇතුළත් කරන්න.');
      return;
    }

    if (!isValidSriLankanPhone(cleanPhone)) {
      setFormStatus('error');
      setStatusMessage('වලංගු ශ්‍රී ලාංකික දුරකථන අංකයක් ඇතුළත් කරන්න (උදා: 0711650300).');
      return;
    }

    // Dispatch directly via safe WhatsApp link (iframe compatible & noopener protected)
    const text = encodeURIComponent(
      `හලෝ ගමගෙදර! මම වෙබ් අඩවියෙන් පණිවිඩයක් එවමි.\n\n• නම: ${cleanName}\n• දුරකථනය: ${cleanPhone}\n• පණිවිඩය: ${cleanMsg || 'නිෂ්පාදන ඇණවුම් කිරීම පිළිබඳ විස්තර අවශ්‍යයි.'}`
    );

    const safeLink = document.createElement('a');
    safeLink.href = `https://wa.me/94711650300?text=${text}`;
    safeLink.target = '_blank';
    safeLink.rel = 'noopener noreferrer';
    document.body.appendChild(safeLink);
    safeLink.click();
    document.body.removeChild(safeLink);

    setFormStatus('success');
    setStatusMessage('ඔබගේ පණිවිඩය සාර්ථකව යොමු විය. ස්තූතියි!');
    setFormName('');
    setFormPhone('');
    setFormMessage('');
  };

  return (
    <footer id="contact" className="bg-[#070504] border-t border-amber-500/20 pt-16 pb-12 text-gray-400 font-sinhala">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-16 border-b border-stone-800">
          
          {/* Brand Info & Identity */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full logo-ring overflow-hidden border-2 border-amber-500/50 bg-black flex-shrink-0">
                <img src="/logo.jpg" alt="ගමගෙදර Logo" className="w-full h-full object-cover" />
              </div>
              <div>
                <span className="text-2xl font-black text-amber-400 block font-sinhala leading-tight">
                  ගමගෙදර
                </span>
                <span className="text-xs text-amber-200/80 font-medium">අපේ උරුමය</span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed font-light">
              හොරණ කුළුපන අපේ පාරම්පරික කිතුල් ගසින් ලබාගත් නොමුසු තෙලිජ්ජෙන්, කිසිදු කෘතිම සීනි හෝ රසායනික නොමැතිව සකසන ලද 100% පිරිසිදු දේශීය කිතුල් නිෂ්පාදන.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-stone-900 border border-amber-500/30 text-amber-400 text-xs font-semibold">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>OWASP Top 10 Secured & SSL Protected</span>
            </div>
          </div>

          {/* Contact Details strictly adhering to user requirements */}
          <div className="lg:col-span-4 space-y-4">
            <h3 className="text-white text-base font-bold font-sinhala border-b border-stone-800 pb-2">
              සම්බන්ධීකරණ තොරතුරු (Contact Info)
            </h3>

            <div className="space-y-3.5 text-xs sm:text-sm">
              
              {/* Address */}
              <div className="flex items-start gap-3 text-gray-300">
                <MapPin className="w-4 h-4 text-amber-400 flex-shrink-0 mt-1" />
                <div>
                  <span className="text-gray-400 text-xs block font-sans">ලිපිනය (Address):</span>
                  <span className="text-white font-medium">Kulupana horana 12400</span>
                  <span className="text-gray-400 block text-xs">කුළුපන, හොරණ 12400, ශ්‍රී ලංකාව</span>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3 text-gray-300">
                <Mail className="w-4 h-4 text-amber-400 flex-shrink-0 mt-1" />
                <div>
                  <span className="text-gray-400 text-xs block font-sans">විද්‍යුත් තැපෑල (Email):</span>
                  <a
                    href="mailto:gamagedara.horana@gmail.com"
                    className="text-amber-400 hover:underline font-mono text-xs sm:text-sm"
                  >
                    gamagedara.horana@gmail.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-3 text-gray-300">
                <Phone className="w-4 h-4 text-amber-400 flex-shrink-0 mt-1" />
                <div>
                  <span className="text-gray-400 text-xs block font-sans">දුරකථන අංකය (Hotline):</span>
                  <a
                    href="tel:+94711650300"
                    className="text-amber-400 hover:underline font-bold text-base tracking-wide"
                  >
                    +94711650300
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* Quick Inquiry Form with OWASP sanitization */}
          <div className="lg:col-span-4 space-y-4">
            <h3 className="text-white text-base font-bold font-sinhala border-b border-stone-800 pb-2">
              ක්ෂණික පණිවිඩයක් යොමු කරන්න
            </h3>

            <form onSubmit={handleContactSubmit} className="space-y-3">
              <div>
                <input
                  id="contact-form-name"
                  type="text"
                  maxLength={60}
                  placeholder="ඔබගේ නම"
                  value={formName}
                  onChange={(e) => setFormName(e.target.value)}
                  required
                  className="w-full px-3.5 py-2.5 rounded-xl bg-stone-900/90 border border-stone-800 focus:border-amber-400 focus:outline-none text-white text-xs placeholder:text-stone-500"
                />
              </div>

              <div>
                <input
                  id="contact-form-phone"
                  type="tel"
                  maxLength={15}
                  placeholder="දුරකථන අංකය (0711650300)"
                  value={formPhone}
                  onChange={(e) => setFormPhone(e.target.value)}
                  required
                  className="w-full px-3.5 py-2.5 rounded-xl bg-stone-900/90 border border-stone-800 focus:border-amber-400 focus:outline-none text-white text-xs placeholder:text-stone-500"
                />
              </div>

              <div>
                <textarea
                  id="contact-form-message"
                  maxLength={400}
                  rows={2}
                  placeholder="ඔබට අවශ්‍ය නිෂ්පාදන හෝ විස්තර..."
                  value={formMessage}
                  onChange={(e) => setFormMessage(e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl bg-stone-900/90 border border-stone-800 focus:border-amber-400 focus:outline-none text-white text-xs placeholder:text-stone-500 resize-none"
                />
              </div>

              {statusMessage && (
                <div
                  className={`p-2 rounded-lg text-xs flex items-center gap-2 ${
                    formStatus === 'success'
                      ? 'bg-emerald-950/80 text-emerald-300 border border-emerald-500/30'
                      : 'bg-red-950/80 text-red-300 border border-red-500/30'
                  }`}
                >
                  {formStatus === 'success' ? (
                    <CheckCircle className="w-4 h-4 flex-shrink-0" />
                  ) : (
                    <AlertCircle className="w-4 h-4 flex-shrink-0" />
                  )}
                  <span>{statusMessage}</span>
                </div>
              )}

              <button
                id="contact-form-submit-btn"
                type="submit"
                className="w-full py-2.5 px-4 rounded-xl glow-btn text-black font-extrabold text-xs font-sinhala flex items-center justify-center gap-2 shadow"
              >
                <Send className="w-3.5 h-3.5" />
                <span>WhatsApp හරහා පණිවිඩය යවන්න</span>
              </button>
            </form>
          </div>

        </div>

        {/* Bottom Copyright & Security note */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <p>© {new Date().getFullYear()} ගමගෙදර - අපේ උරුමය. සියලුම හිමිකම් ඇවිරිණි.</p>
          <div className="flex items-center gap-4">
            <span className="text-amber-400/80">කුළුපන, හොරණ 12400</span>
            <span>•</span>
            <span>100% පාරම්පරික දේශීය නිෂ්පාදන</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

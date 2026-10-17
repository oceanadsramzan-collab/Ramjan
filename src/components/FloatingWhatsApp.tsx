import React, { useState } from 'react';

interface FloatingContactBarProps {
  whatsappNumber?: string;
  phoneNumber?: string;
  defaultMessage?: string;
}

export const FloatingWhatsApp: React.FC<FloatingContactBarProps> = ({
  whatsappNumber = '918936877362',
  phoneNumber = '+919835697455',
  defaultMessage = 'Hello RJ India Traveller Guide! I would like to plan a trip.',
}) => {
  const [hoveredButton, setHoveredButton] = useState<'phone' | 'whatsapp' | null>(null);

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(defaultMessage)}`;

  return (
    <aside
      aria-label="Direct contact & WhatsApp assistance"
      className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 select-none"
    >
      {/* 1. Floating Phone Call Button */}
      <div className="flex items-center gap-2.5">
        <div
          className={`hidden sm:flex items-center gap-2 bg-surface-container-lowest text-on-surface px-3 py-1.5 rounded-xl shadow-lg border border-outline-variant/30 text-xs font-semibold transition-all duration-300 ${
            hoveredButton === 'phone' ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2 pointer-events-none'
          }`}
        >
          <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
          <span>Call Helpline: <strong className="text-secondary font-bold">+91 9835697455</strong></span>
        </div>

        <a
          href={`tel:${phoneNumber}`}
          onMouseEnter={() => setHoveredButton('phone')}
          onMouseLeave={() => setHoveredButton(null)}
          className="group relative flex items-center justify-center w-12 h-12 rounded-full bg-secondary text-on-secondary shadow-[0_4px_16px_rgba(167,58,0,0.35)] hover:shadow-[0_6px_22px_rgba(167,58,0,0.55)] hover:scale-110 active:scale-95 transition-all duration-200 cursor-pointer"
          aria-label="Call RJ Traveller Guide at +91 9835697455"
          title="Call Now (+91 9835697455)"
        >
          <span className="material-symbols-outlined text-[22px] transition-transform duration-200 group-hover:rotate-12">
            call
          </span>
        </a>
      </div>

      {/* 2. Floating WhatsApp Action Button */}
      <div className="flex items-center gap-2.5">
        <div
          className={`hidden sm:flex items-center gap-2 bg-surface-container-lowest text-on-surface px-3 py-1.5 rounded-xl shadow-lg border border-outline-variant/30 text-xs font-semibold transition-all duration-300 ${
            hoveredButton === 'whatsapp' ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2 pointer-events-none'
          }`}
        >
          <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse"></span>
          <span>WhatsApp Chat: <strong className="text-emerald-700 font-bold">+91 8936877362</strong></span>
        </div>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setHoveredButton('whatsapp')}
          onMouseLeave={() => setHoveredButton(null)}
          className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-[0_4px_20px_rgba(37,211,102,0.4)] hover:shadow-[0_6px_25px_rgba(37,211,102,0.6)] hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer"
          aria-label="Chat with RJ Traveller Guide on WhatsApp (+91 8936877362)"
          title="Chat on WhatsApp (+91 8936877362)"
        >
          {/* Subtle ripple effect */}
          <span className="absolute -inset-1 rounded-full bg-[#25D366]/30 animate-ping pointer-events-none group-hover:hidden"></span>

          {/* WhatsApp Official SVG Logo */}
          <svg
            className="w-7 h-7 fill-current transition-transform duration-200 group-hover:scale-110"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.82 11.82 0 00-3.48-8.413z" />
          </svg>

          {/* Active status indicator */}
          <span className="absolute top-1 right-1 w-3.5 h-3.5 rounded-full bg-emerald-200 border-2 border-white"></span>
        </a>
      </div>
    </aside>
  );
};

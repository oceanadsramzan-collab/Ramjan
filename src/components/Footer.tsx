import React from 'react';

interface FooterProps {
  onSelectDestination: (id: string) => void;
  onNavigateToGuides: () => void;
  onOpenConcierge: () => void;
  onNavigateHomeSection: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({
  onSelectDestination,
  onNavigateToGuides,
  onOpenConcierge,
  onNavigateHomeSection,
}) => {
  return (
    <footer className="w-full bg-primary-container text-inverse-on-surface border-t border-surface-container-high/15">
      <div className="max-w-[1320px] mx-auto px-margin md:px-margin-md lg:px-margin-lg pt-space-2xl pb-space-xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-gutter-lg pb-space-2xl border-b border-surface-container-high/15">
          
          {/* Brand & Accreditations (2 Cols) */}
          <div className="lg:col-span-2 flex flex-col gap-space-md">
            <div className="flex items-center gap-space-sm">
              <span className="font-headline-md text-headline-md text-on-primary tracking-tight uppercase font-bold">
                RJ India
              </span>
              <span className="font-label-eyebrow text-label-eyebrow text-tertiary-fixed tracking-widest uppercase">
                Editorial Folio
              </span>
            </div>
            <p className="font-body-sm text-body-sm text-on-primary-container max-w-sm leading-relaxed">
              Curated travel journalism and architectural itineraries across the Indian subcontinent. Built for discerning explorers seeking genuine heritage, remote serenity, and refined cultural luxury.
            </p>
            <div className="flex flex-wrap items-center gap-space-xs pt-space-sm">
              <span className="font-caption text-caption bg-inverse-surface text-inverse-on-surface px-space-sm py-1 rounded">
                Govt. Registered Guide
              </span>
              <span className="font-caption text-caption bg-inverse-surface text-inverse-on-surface px-space-sm py-1 rounded">
                IATO Accredited
              </span>
              <span className="font-caption text-caption bg-inverse-surface text-inverse-on-surface px-space-sm py-1 rounded">
                Sustainable Tourism
              </span>
            </div>
          </div>

          {/* Destinations Navigation */}
          <div className="flex flex-col gap-space-sm">
            <span className="font-label-eyebrow text-label-eyebrow text-tertiary-fixed uppercase tracking-wider font-bold">
              Destinations
            </span>
            <div className="flex flex-col gap-2 font-body-sm text-body-sm text-on-primary-container">
              {[
                { id: 'jaipur', name: 'Jaipur & Shekhawati' },
                { id: 'goa', name: 'Goa Heritage' },
                { id: 'kashmir', name: 'Kashmir Valley' },
                { id: 'kerala', name: 'Kerala Backwaters' },
                { id: 'udaipur', name: 'Udaipur & Mewar' },
                { id: 'varanasi', name: 'Varanasi Ghats' },
                { id: 'manali', name: 'Manali & Spiti' },
                { id: 'ladakh', name: 'Ladakh Plateau' },
                { id: 'andaman', name: 'Andaman Islands' },
                { id: 'rishikesh', name: 'Rishikesh & Garhwal' },
              ].map((dest) => (
                <button
                  key={dest.id}
                  onClick={() => onSelectDestination(dest.id)}
                  className="hover:text-on-primary transition-colors text-left cursor-pointer"
                >
                  {dest.name}
                </button>
              ))}
            </div>
          </div>

          {/* Travel Guides & Company */}
          <div className="flex flex-col gap-space-sm">
            <span className="font-label-eyebrow text-label-eyebrow text-tertiary-fixed uppercase tracking-wider font-bold">
              Travel Guides
            </span>
            <div className="flex flex-col gap-2 font-body-sm text-body-sm text-on-primary-container">
              <button onClick={onNavigateToGuides} className="hover:text-on-primary transition-colors text-left cursor-pointer">
                Heritage Circuits
              </button>
              <button onClick={onNavigateToGuides} className="hover:text-on-primary transition-colors text-left cursor-pointer">
                Himalayan Treks
              </button>
              <button onClick={onNavigateToGuides} className="hover:text-on-primary transition-colors text-left cursor-pointer">
                Coastal Escapes
              </button>
              <button onClick={onNavigateToGuides} className="hover:text-on-primary transition-colors text-left cursor-pointer">
                Spiritual Trails
              </button>
              <button onClick={onNavigateToGuides} className="hover:text-on-primary transition-colors text-left cursor-pointer">
                Luxury Trains & Odysseys
              </button>
            </div>

            <div className="pt-space-md">
              <span className="font-label-eyebrow text-label-eyebrow text-tertiary-fixed uppercase tracking-wider block mb-2 font-bold">
                Company
              </span>
              <div className="flex flex-col gap-2 font-body-sm text-body-sm text-on-primary-container">
                <button onClick={() => onNavigateHomeSection('about')} className="hover:text-on-primary transition-colors text-left cursor-pointer">
                  About Brand
                </button>
                <button onClick={() => onNavigateHomeSection('why-us')} className="hover:text-on-primary transition-colors text-left cursor-pointer">
                  Editorial Philosophy
                </button>
                <button onClick={onOpenConcierge} className="hover:text-on-primary transition-colors text-left cursor-pointer">
                  Travel Contributors
                </button>
                <button onClick={onOpenConcierge} className="hover:text-on-primary transition-colors text-left cursor-pointer">
                  Media & Press
                </button>
              </div>
            </div>
          </div>

          {/* Direct Contact */}
          <div className="flex flex-col gap-space-sm">
            <span className="font-label-eyebrow text-label-eyebrow text-tertiary-fixed uppercase tracking-wider font-bold">
              Direct Contact
            </span>
            <div className="flex flex-col gap-3 font-body-sm text-body-sm text-on-primary-container">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary-fixed text-base">call</span>
                <a className="hover:text-on-primary transition-colors font-medium" href="tel:+919835697455">
                  Call Helpline: +91 9835697455
                </a>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#25D366] text-base">chat</span>
                <a className="hover:text-on-primary transition-colors font-medium flex items-center gap-1.5" href="https://wa.me/918936877362?text=Hello%20RJ%20India%20Traveller%20Guide!%20I%20would%20like%20to%20plan%20a%20trip." target="_blank" rel="noopener noreferrer">
                  <span>WhatsApp: +91 8936877362</span>
                  <span className="text-[10px] bg-emerald-500/20 text-emerald-300 px-1.5 py-0.5 rounded">24/7 Live</span>
                </a>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary-fixed text-base">mail</span>
                <a className="hover:text-on-primary transition-colors font-medium" href="mailto:info@rjtravellerguide.in">
                  info@rjtravellerguide.in
                </a>
              </div>
              <div className="flex items-start gap-2 pt-space-xs text-xs text-on-primary-container/80">
                <span className="material-symbols-outlined text-secondary-fixed text-base shrink-0">support_agent</span>
                <span>24/7 Dedicated Concierge & Emergency Helpline across India</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-space-lg flex flex-col md:flex-row items-center justify-between gap-space-md">
          <div className="flex items-center gap-space-md text-xs font-medium text-on-primary-container">
            <span className="hover:text-on-primary cursor-pointer transition-colors">Instagram</span>
            <span className="hover:text-on-primary cursor-pointer transition-colors">YouTube</span>
            <span className="hover:text-on-primary cursor-pointer transition-colors">Facebook</span>
            <span className="hover:text-on-primary cursor-pointer transition-colors">Pinterest</span>
          </div>
          <div className="flex items-center gap-space-sm font-caption text-caption text-on-primary-container">
            <span>© 2025 RJ All India Traveller Guide. All Rights Reserved.</span>
            <span className="bg-inverse-surface text-secondary-fixed px-2 py-0.5 rounded-full uppercase tracking-wider font-label-eyebrow text-[10px]">
              All-India Discovery Creed
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

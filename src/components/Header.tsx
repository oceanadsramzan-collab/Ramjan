import React, { useState } from 'react';
import { DESTINATIONS } from '../data/travelData';

interface HeaderProps {
  activeScreen: 'home' | 'destinations' | 'guides' | 'planner';
  setActiveScreen: (screen: 'home' | 'destinations' | 'guides' | 'planner') => void;
  onOpenConcierge: () => void;
  onOpenSaved: () => void;
  savedCount: number;
  onSelectDestination: (destId: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeScreen,
  setActiveScreen,
  onOpenConcierge,
  onOpenSaved,
  savedCount,
  onSelectDestination
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [destDropdownOpen, setDestDropdownOpen] = useState(false);

  const handleNavClick = (screen: 'home' | 'destinations' | 'guides' | 'planner', hash?: string) => {
    setActiveScreen(screen);
    setMobileMenuOpen(false);
    setDestDropdownOpen(false);
    if (hash && screen === 'home') {
      setTimeout(() => {
        const el = document.getElementById(hash);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 50);
    }
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-surface/85 backdrop-blur-md shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
      <div className="h-20 max-w-[1320px] mx-auto px-margin md:px-margin-md lg:px-margin-lg flex items-center justify-between">
        
        {/* Brand Zone */}
        <div className="flex items-center gap-space-md">
          <button
            onClick={() => handleNavClick('home', 'hero')}
            className="flex items-center gap-space-sm text-left focus:outline-none"
          >
            <img
              alt="RJ All India Traveller Guide Logo"
              className="h-8 w-auto object-contain"
              src="https://lh3.googleusercontent.com/aida/AEtjO1Xst6x1_6UYiDUBvbE6Ks2ZkMfAzG6dsHLwNDJsFBob9f-CFAtZsSsFDWVjin8wx1ts344bhqozg2zQWumz2dpweViDZzFQ_OrhNc5CUyP4ws1LL4oWHQcLmmX-VIVNOCVfSgS4_3s2qQBTuNZI0ob0Ff4ZBH3V63wFRJckqHJAgD-my43A4Yoz9knzyRso29FFNQyviRt9Cob4_j45C4FxwI058JiMXU1XAGBTlovROPJNAiu9kumWQe0"
              onError={(e) => {
                // Graceful fallback if image blocked
                (e.target as HTMLElement).style.display = 'none';
              }}
            />
            <div className="flex flex-col">
              <span className="font-headline-sm text-headline-sm text-on-surface tracking-tight uppercase">
                RJ India
              </span>
              <span className="font-label-eyebrow text-label-eyebrow text-secondary tracking-widest uppercase">
                Traveller Guide
              </span>
            </div>
          </button>
        </div>

        {/* Nav Links */}
        <nav className="hidden lg:flex items-center gap-space-lg">
          <button
            onClick={() => handleNavClick('home', 'hero')}
            className={`font-label-button px-3 py-1.5 transition-colors rounded-lg cursor-pointer ${
              activeScreen === 'home'
                ? 'bg-primary-container text-on-primary-container'
                : 'text-on-surface-variant hover:text-on-surface'
            }`}
          >
            Home
          </button>

          <button
            onClick={() => handleNavClick('home', 'about')}
            className="font-label-button text-label-button text-on-surface-variant hover:text-on-surface py-space-xs transition-colors cursor-pointer"
          >
            About
          </button>

          {/* Destinations Hover Dropdown & Direct Switcher */}
          <div
            className="relative"
            onMouseEnter={() => setDestDropdownOpen(true)}
            onMouseLeave={() => setDestDropdownOpen(false)}
          >
            <button
              onClick={() => handleNavClick('destinations')}
              className={`font-label-button px-3 py-1.5 transition-colors rounded-lg flex items-center gap-1 cursor-pointer ${
                activeScreen === 'destinations'
                  ? 'bg-primary-container text-on-primary-container'
                  : 'text-on-surface-variant hover:text-on-surface'
              }`}
            >
              <span>Destinations</span>
              <span className="material-symbols-outlined text-sm">expand_more</span>
            </button>

            {/* Mega Dropdown */}
            {destDropdownOpen && (
              <div className="absolute -left-20 top-full pt-2 w-[680px] z-50 animate-in fade-in duration-200">
                <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-[0_12px_32px_-4px_rgba(11,25,44,0.12)] border border-outline-variant/30">
                  <div className="flex items-center justify-between pb-space-sm mb-space-md bg-surface-container-low px-space-md py-space-xs rounded-lg">
                    <span className="font-label-eyebrow text-label-eyebrow text-secondary uppercase">
                      Curated Iconic Regions
                    </span>
                    <button
                      onClick={() => handleNavClick('destinations')}
                      className="font-caption text-caption text-on-surface-variant hover:text-secondary font-medium cursor-pointer"
                    >
                      View All Destinations Explorer →
                    </button>
                  </div>
                  <div className="grid grid-cols-2 gap-space-md">
                    {DESTINATIONS.slice(0, 10).map((dest) => (
                      <button
                        key={dest.id}
                        onClick={() => {
                          onSelectDestination(dest.id);
                          setDestDropdownOpen(false);
                        }}
                        className="flex items-center justify-between p-space-sm rounded-lg hover:bg-surface-container-low transition-colors group/item text-left w-full cursor-pointer"
                      >
                        <div className="flex flex-col">
                          <span className="font-label-button text-label-button text-on-surface group-hover/item:text-secondary transition-colors">
                            {dest.name}
                          </span>
                          <span className="font-caption text-caption text-on-surface-variant">
                            {dest.tagline.slice(0, 32)}...
                          </span>
                        </div>
                        <span className="font-label-eyebrow text-[10px] text-secondary-container bg-secondary-fixed px-2 py-0.5 rounded-full">
                          {dest.badge}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          <button
            onClick={() => handleNavClick('guides')}
            className={`font-label-button px-3 py-1.5 transition-colors rounded-lg cursor-pointer ${
              activeScreen === 'guides'
                ? 'bg-primary-container text-on-primary-container'
                : 'text-on-surface-variant hover:text-on-surface'
            }`}
          >
            Travel Guides
          </button>

          <button
            onClick={() => handleNavClick('planner')}
            className={`font-label-button px-3 py-1.5 transition-colors rounded-lg cursor-pointer ${
              activeScreen === 'planner'
                ? 'bg-primary-container text-on-primary-container'
                : 'text-on-surface-variant hover:text-on-surface'
            }`}
          >
            Trip Planner
          </button>

          <button
            onClick={() => handleNavClick('home', 'why-us')}
            className="font-label-button text-label-button text-on-surface-variant hover:text-on-surface py-space-xs transition-colors cursor-pointer"
          >
            Why Us
          </button>

          <button
            onClick={onOpenConcierge}
            className="font-label-button text-label-button text-on-surface-variant hover:text-on-surface py-space-xs transition-colors cursor-pointer"
          >
            Contact
          </button>
        </nav>

        {/* Right CTA & Saved Wishlist Button */}
        <div className="flex items-center gap-space-md">
          {/* Saved Trips Trigger */}
          <button
            onClick={onOpenSaved}
            className="relative p-2 rounded-lg bg-surface-container hover:bg-surface-container-high transition-colors text-on-surface cursor-pointer flex items-center justify-center"
            title="View Saved Trips & Wishlist"
            aria-label="View Saved Trips"
          >
            <span className="material-symbols-outlined text-[20px]">bookmark</span>
            {savedCount > 0 && (
              <span className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-secondary text-on-secondary rounded-full text-[11px] font-bold flex items-center justify-center">
                {savedCount}
              </span>
            )}
          </button>

          {/* Direct Phone Call Action Link */}
          <a
            href="tel:+919835697455"
            className="hidden lg:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface border border-outline-variant/30 text-xs font-bold transition-colors shadow-xs"
            title="Call Helpline: +91 9835697455"
          >
            <span className="material-symbols-outlined text-secondary text-sm">call</span>
            <span>+91 9835697455</span>
          </a>

          {/* Direct WhatsApp Action Link */}
          <a
            href="https://wa.me/918936877362?text=Hello%20RJ%20India%20Traveller%20Guide!%20I%20would%20like%20to%20plan%20a%20trip."
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-200 text-xs font-bold transition-colors shadow-xs"
            title="Chat on WhatsApp: +91 8936877362"
          >
            <svg className="w-4 h-4 fill-[#25D366]" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.82 11.82 0 00-3.48-8.413z" />
            </svg>
            <span className="hidden xl:inline">WhatsApp</span>
          </a>

          {/* Primary CTA button */}
          <button
            onClick={() => handleNavClick('destinations')}
            className="hidden sm:inline-flex items-center justify-center px-6 py-2.5 rounded-lg bg-secondary text-on-secondary font-label-button text-label-button shadow-md hover:bg-secondary-container transition-all hover:shadow-[0_0_20px_rgba(253,101,30,0.4)] cursor-pointer"
          >
            Explore India
          </button>

          {/* Concierge Icon Button */}
          <button
            onClick={onOpenConcierge}
            className="w-8 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-secondary transition-colors cursor-pointer"
            title="Direct Concierge & Help (+91 8936877362)"
            aria-label="Concierge and Support"
          >
            <span className="material-symbols-outlined text-on-primary text-[18px]">support_agent</span>
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg bg-surface-container text-on-surface cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            <span className="material-symbols-outlined text-[22px]">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-surface-container-lowest border-b border-outline-variant/30 px-6 py-5 flex flex-col gap-3 shadow-xl">
          <button
            onClick={() => handleNavClick('home', 'hero')}
            className="text-left font-label-button text-on-surface py-2 hover:text-secondary cursor-pointer"
          >
            Home
          </button>
          <button
            onClick={() => handleNavClick('destinations')}
            className="text-left font-label-button text-on-surface py-2 hover:text-secondary cursor-pointer"
          >
            Destinations Explorer
          </button>
          <button
            onClick={() => handleNavClick('guides')}
            className="text-left font-label-button text-on-surface py-2 hover:text-secondary cursor-pointer"
          >
            Travel Guides
          </button>
          <button
            onClick={() => handleNavClick('planner')}
            className="text-left font-label-button text-on-surface py-2 hover:text-secondary cursor-pointer"
          >
            Trip Planner & Itinerary Builder
          </button>
          <button
            onClick={() => handleNavClick('home', 'about')}
            className="text-left font-label-button text-on-surface py-2 hover:text-secondary cursor-pointer"
          >
            About RJ Guide
          </button>
          <button
            onClick={() => handleNavClick('home', 'why-us')}
            className="text-left font-label-button text-on-surface py-2 hover:text-secondary cursor-pointer"
          >
            Why Choose Us
          </button>
          <div className="pt-2 border-t border-outline-variant/30 flex flex-col gap-2">
            <a
              href="tel:+919835697455"
              className="w-full text-center py-2.5 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface font-label-button text-label-button flex items-center justify-center gap-2 cursor-pointer shadow-xs border border-outline-variant/30"
            >
              <span className="material-symbols-outlined text-secondary text-lg">call</span>
              <span>Call Helpline: +91 9835697455</span>
            </a>
            <a
              href="https://wa.me/918936877362?text=Hello%20RJ%20India%20Traveller%20Guide!%20I%20would%20like%20to%20plan%20a%20trip."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center py-2.5 rounded-lg bg-[#25D366] text-white font-label-button text-label-button flex items-center justify-center gap-2 cursor-pointer shadow-sm hover:brightness-95"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.82 11.82 0 00-3.48-8.413z" />
              </svg>
              <span>Chat on WhatsApp: +91 8936877362</span>
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConcierge();
              }}
              className="w-full text-center py-2.5 rounded-lg bg-secondary text-on-secondary font-label-button text-label-button cursor-pointer"
            >
              Contact Concierge
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenSaved();
              }}
              className="w-full text-center py-2 rounded-lg bg-surface-container text-on-surface font-label-button text-label-button cursor-pointer"
            >
              Saved Trips ({savedCount})
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

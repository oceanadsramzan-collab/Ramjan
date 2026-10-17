import React, { useState } from 'react';
import { DESTINATIONS, TRAVEL_GUIDES, TESTIMONIALS, TravelGuide } from '../data/travelData';

interface HomeScreenProps {
  onSelectDestination: (destId: string) => void;
  onOpenGuideModal: (guide: TravelGuide) => void;
  onNavigateToDestinations: () => void;
  onNavigateToGuides: () => void;
  onOpenConcierge: () => void;
}

export const HomeScreen: React.FC<HomeScreenProps> = ({
  onSelectDestination,
  onOpenGuideModal,
  onNavigateToDestinations,
  onNavigateToGuides,
  onOpenConcierge,
}) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setNewsletterSubscribed(true);
      setNewsletterEmail('');
      setTimeout(() => setNewsletterSubscribed(false), 5000);
    }
  };

  return (
    <div className="flex flex-col w-full">
      
      {/* ========================================================================= */}
      {/* 1. HOMEPAGE HERO (Cinematic Full Viewport Bleed)                          */}
      {/* ========================================================================= */}
      <section className="relative -mt-20 min-h-[942px] lg:min-h-screen flex items-center justify-center overflow-hidden bg-primary-container text-on-primary" id="hero">
        {/* Cinematic Full-bleed Background */}
        <div
          className="absolute inset-0 z-0 bg-cover bg-center transition-transform duration-1000 ease-out scale-105"
          data-alt="Cinematic aerial panoramic view of Indian landscapes blending the golden sandstone ramparts of a Rajput fortress in Rajasthan with distant glowing snow-capped Himalayan peaks under a rich golden hour sunset"
          style={{
            backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuB25KKR-41fcJYd4Ca24bxpEMohCJDtx4R7Pys5OjYMnsuMkIsq4mRr9OjX1irhzTlZ7T8-ttlm5D381a5t2Fz3a84SseoSOuCMlT_UbDM9mBj930nyKiTNawiNdq8qfOk31GDI1NR9LVEZHUcogDnnbm_6sCkqpoGwSmufskt6RRAUcR3IDityug1I-wrljIJeLGNMV_nR1E-hReWNwmMDJgfkMY3QQstXdVN_chTI6gCFrlypwVCQ')`
          }}
        />
        {/* Gradient Overlay Scrim for Pristine Editorial Readability */}
        <div className="absolute inset-0 z-0 bg-gradient-to-t from-primary-container via-primary-container/60 to-primary-container/30"></div>
        <div className="absolute inset-0 z-0 bg-radial from-transparent via-primary-container/40 to-primary-container/90"></div>

        {/* Floating Ornamental Compass Watermark */}
        <div className="absolute right-12 top-1/4 pointer-events-none opacity-10 hidden xl:block animate-[spin_120s_linear_infinite]">
          <svg className="w-96 h-96 text-tertiary-fixed" fill="none" stroke="currentColor" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="48" strokeDasharray="2 2" strokeWidth="0.5"></circle>
            <circle cx="50" cy="50" r="38" strokeWidth="0.75"></circle>
            <line strokeWidth="0.5" x1="50" x2="50" y1="2" y2="98"></line>
            <line strokeWidth="0.5" x1="2" x2="98" y1="50" y2="50"></line>
            <polygon fill="currentColor" fillOpacity="0.15" points="50,15 54,46 85,50 54,54 50,85 46,54 15,50 46,46"></polygon>
          </svg>
        </div>

        {/* Hero Content Container */}
        <div className="relative z-10 max-w-[1320px] mx-auto px-margin md:px-margin-md lg:px-margin-lg pt-32 pb-20 w-full flex flex-col items-center text-center">
          {/* Micro-Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface-container-lowest/15 backdrop-blur-md shadow-sm mb-6 transition-all hover:bg-surface-container-lowest/25 cursor-default">
            <span className="text-tertiary-fixed font-headline-sm text-sm">✦</span>
            <span className="font-label-eyebrow text-label-eyebrow text-tertiary-fixed tracking-widest uppercase">
              Discover Incredible India
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="font-display-hero text-display-hero-mobile md:text-display-hero text-on-primary max-w-4xl tracking-tight leading-[1.08] mb-6">
            Explore India, One <span className="text-secondary-fixed">Unforgettable</span> Journey at a Time
          </h1>

          {/* Supporting Subhead */}
          <p className="font-body-lead text-body-lead text-surface-container-high/90 max-w-2xl mx-auto mb-10 font-normal">
            Discover remarkable destinations, practical travel guides, local experiences and inspiring places across the timeless subcontinent.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-space-md w-full sm:w-auto">
            <button
              onClick={onNavigateToDestinations}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-lg bg-secondary text-on-secondary font-label-button text-label-button shadow-xl hover:bg-secondary-container transition-all hover:scale-[1.02] cursor-pointer"
            >
              <span>Explore Destinations</span>
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </button>
            <button
              onClick={onNavigateToGuides}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-surface-container-lowest/10 backdrop-blur-md text-on-primary font-label-button text-label-button hover:bg-surface-container-lowest/20 transition-all cursor-pointer"
            >
              <span className="material-symbols-outlined text-[18px]">menu_book</span>
              <span>View Travel Guides</span>
            </button>
          </div>

          {/* Scroll Indicator Cue */}
          <div
            onClick={() => {
              const el = document.getElementById('about');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="pt-16 flex flex-col items-center gap-2 opacity-80 hover:opacity-100 transition-opacity cursor-pointer"
          >
            <span className="font-label-eyebrow text-[10px] tracking-widest uppercase text-surface-container-high">
              Scroll To Discover
            </span>
            <div className="w-6 h-10 rounded-full bg-surface-container-lowest/20 flex items-start justify-center p-1">
              <div className="w-1.5 h-3 rounded-full bg-secondary-fixed animate-bounce"></div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. SECTION 2 — ABOUT / INTRODUCTION (Split Asymmetric Layout)              */}
      {/* ========================================================================= */}
      <section className="w-full py-space-2xl bg-surface" id="about">
        <div className="max-w-[1320px] mx-auto px-margin md:px-margin-md lg:px-margin-lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-lg items-center">
            {/* Left: Image Composition with Traditional Jharokha Framing */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-xl bg-surface-container aspect-[4/5] group">
                <img
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  alt="Traditional Rajasthani sandstone jharokha carved arch window"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDoE5xUnc0N9DJu4c9cmp6cFtwe-fxnR3K4GQGagPvCradsQqp2d8vhuJEpZqU1RJSOP1cayWcOTeljKokk3uUX8zxWjhjJhtPS4gUesD4J-CQtpGSK9xsGjNcbA4fqU2pN1lgCcqBS7zJsibHeDe8i5mIxj5WGNAQjIuxRAN4DhWVD99AEoNnW2Vp_uveE3D6NhYkAWLLEY60sVzwhcNUK2DCid3JGvLoa9Upx5N7wdsq5DWWm9G2s"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-container/70 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-surface-container-lowest/90 backdrop-blur-md shadow-md flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-secondary text-xl">verified</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-label-eyebrow text-label-eyebrow text-secondary uppercase">
                      Authentic Field Work
                    </span>
                    <span className="font-headline-sm text-sm text-on-surface">
                      Curated by Native Travel Experts
                    </span>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-surface-container-high rounded-2xl -z-10 hidden sm:block"></div>
            </div>

            {/* Right: Editorial Narrative & Statistics Grid */}
            <div className="lg:col-span-7 flex flex-col justify-center lg:pl-6">
              <div className="inline-flex items-center gap-2 mb-3">
                <span className="w-6 h-[2px] bg-secondary"></span>
                <span className="font-label-eyebrow text-label-eyebrow text-secondary uppercase tracking-widest">
                  About RJ All India Traveller Guide
                </span>
              </div>
              <h2 className="font-headline-xl text-headline-xl-mobile md:text-headline-xl text-on-surface tracking-tight mb-6">
                Discover India Beyond the Usual Tourist Spots
              </h2>
              <p className="font-body-lead text-body-lead text-on-surface-variant mb-6 leading-relaxed">
                RJ All India Traveller Guide helps travellers discover remarkable destinations, famous attractions, local experiences and practical travel ideas across India.
              </p>
              <p className="font-body-default text-body-default text-on-surface-variant mb-10 leading-relaxed">
                From heritage cities and mountain escapes to sunlit beaches, spiritual ghats and scenic high-altitude passes, our goal is to eliminate logistical ambiguity and make authentic travel planning completely inspiring and effortless.
              </p>

              {/* Impact Metrics Grid */}
              <div className="grid grid-cols-3 gap-gutter bg-surface-container-lowest p-space-lg rounded-xl shadow-sm border border-outline-variant/20">
                <div className="flex flex-col">
                  <span className="font-headline-xl text-headline-xl text-secondary font-bold">10+</span>
                  <span className="font-label-button text-label-button text-on-surface mt-1">Featured Regions</span>
                  <span className="font-caption text-caption text-on-surface-variant">Iconic to secret states</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-headline-xl text-headline-xl text-primary font-bold">50+</span>
                  <span className="font-label-button text-label-button text-on-surface mt-1">Travel Experiences</span>
                  <span className="font-caption text-caption text-on-surface-variant">Vetted cultural routes</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-headline-xl text-headline-xl text-secondary font-bold">100%</span>
                  <span className="font-label-button text-label-button text-on-surface mt-1">Native Travel</span>
                  <span className="font-caption text-caption text-on-surface-variant">First-hand editorial</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. SECTION 3 — TRAVEL BENEFITS (Minimalist 4-Column Array)                 */}
      {/* ========================================================================= */}
      <section className="w-full py-space-xl bg-surface-container-low" id="why-us">
        <div className="max-w-[1320px] mx-auto px-margin md:px-margin-md lg:px-margin-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
            <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm hover:shadow-md transition-shadow group border border-outline-variant/20">
              <div className="w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-on-secondary transition-colors mb-6">
                <span className="material-symbols-outlined text-2xl">explore</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-on-surface mb-2 font-bold">Discover Places</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Curated regional insights and hidden heritage trails carefully documented away from mass bus excursions.
              </p>
            </div>

            <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm hover:shadow-md transition-shadow group border border-outline-variant/20">
              <div className="w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-on-secondary transition-colors mb-6">
                <span className="material-symbols-outlined text-2xl">calendar_month</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-on-surface mb-2 font-bold">Plan Better</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Optimized seasonal itineraries, punctual transport timings, internal permits, and hand-selected heritage stays.
              </p>
            </div>

            <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm hover:shadow-md transition-shadow group border border-outline-variant/20">
              <div className="w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-on-secondary transition-colors mb-6">
                <span className="material-symbols-outlined text-2xl">insights</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-on-surface mb-2 font-bold">Travel Smarter</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Real budget breakdowns, safety advisories, verified inner-line pass details, and monsoon preparedness.
              </p>
            </div>

            <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm hover:shadow-md transition-shadow group border border-outline-variant/20">
              <div className="w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-on-secondary transition-colors mb-6">
                <span className="material-symbols-outlined text-2xl">restaurant</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-on-surface mb-2 font-bold">Explore Local</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Authentic culinary spots, native storytellers, handloom weavers, and ancestral artisan workshops.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. SECTION 4 — FEATURED DESTINATIONS (Editorial Magazine Grid)           */}
      {/* ========================================================================= */}
      <section className="w-full py-space-2xl bg-surface" id="destinations">
        <div className="max-w-[1320px] mx-auto px-margin md:px-margin-md lg:px-margin-lg">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-space-xl gap-space-md">
            <div className="flex flex-col max-w-2xl">
              <div className="inline-flex items-center gap-2 mb-2">
                <span className="font-label-eyebrow text-label-eyebrow text-secondary uppercase tracking-widest">
                  Curated Editorial Portfolio
                </span>
              </div>
              <h2 className="font-headline-xl text-headline-xl-mobile md:text-headline-xl text-on-surface tracking-tight">
                Explore India’s Most Beautiful Destinations
              </h2>
              <p className="font-body-default text-body-default text-on-surface-variant mt-2">
                Handpicked sanctuaries, ancient ghats, and royal kingdoms waiting for your arrival.
              </p>
            </div>
            <button
              onClick={onNavigateToDestinations}
              className="flex items-center gap-2 text-secondary font-label-button text-xs font-semibold hover:underline cursor-pointer"
            >
              <span>View All 10 Destinations</span>
              <span className="material-symbols-outlined text-base">arrow_forward</span>
            </button>
          </div>

          {/* 8-Card Asymmetric Magazine Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-gutter">
            
            {/* 1. JAIPUR (Featured Tall Span - 8 Cols) */}
            <div
              onClick={() => onSelectDestination('jaipur')}
              className="lg:col-span-8 group relative rounded-2xl overflow-hidden shadow-md bg-primary-container text-on-primary min-h-[380px] lg:min-h-[460px] flex flex-col justify-end p-space-lg cursor-pointer"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{
                  backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuARjQd9ImPbRFfEXqYCwWEplcwmpx2NrCERZmFW-TmGlaAX2IQFn8gfWGwi2fArxxV8XHqowluPLcR9k7z8SFtpizSt4KaenWnKG3JJB8Kdt2TDM0Bj3bztL3WvNPdfE9hzWBJcmGttrOSZTZOfFNXnrDQnrD-W4CBZvCA2LQrP__djKOFPLuiy6FBqY44adfyAIM24vTQjw1b7z-DcC4dOcjIlS4_oSw4CNCJfVGYvvUhgf1DxIBfy')`
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-container via-primary-container/40 to-transparent"></div>
              <div className="relative z-10 flex flex-col max-w-xl">
                <span className="font-label-eyebrow text-label-eyebrow text-secondary-fixed tracking-widest uppercase mb-2">
                  Rajasthan • Palatial Heritage
                </span>
                <h3 className="font-headline-lg text-headline-lg text-on-primary mb-2 group-hover:text-secondary-fixed transition-colors">
                  Jaipur
                </h3>
                <p className="font-body-default text-body-default text-surface-container-high/90 mb-4 line-clamp-2">
                  The Pink City of palatial marvels, monumental Amer fortresses, and vibrant centuries-old artisan bazaars.
                </p>
                <div className="flex items-center gap-2 text-secondary-fixed font-label-button text-label-button group-hover:translate-x-1 transition-transform">
                  <span>Explore Jaipur Circuit</span>
                  <span className="material-symbols-outlined text-[18px]">chevron_right</span>
                </div>
              </div>
            </div>

            {/* 2. GOA (Standard Span - 4 Cols) */}
            <div
              onClick={() => onSelectDestination('goa')}
              className="lg:col-span-4 group relative rounded-2xl overflow-hidden shadow-md bg-primary-container text-on-primary min-h-[380px] lg:min-h-[460px] flex flex-col justify-end p-space-lg cursor-pointer"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{
                  backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuC1S8CCKSOMWpOmH5F66P7l55cBaz_pOuN5axZQHpoRBsRvDuehPrPFnL-WVhrKbtTCzsLng1IG7LjajJhgntTVl-b-aZJoyJIIyU-Fkyo-Ypvoqv7p4gOhxZN4iICpEdAzgb8OnedvMFvhbyH0CtHe0eVBxcv8fTQvD7FI4x9eos2yI_56DdJf-aXDMwuDE55HXcGazhz1ques2BwvGz5Rk1Lx5g2jOahU-PYCXBYXOqzyB89vRfge')`
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-container via-primary-container/40 to-transparent"></div>
              <div className="relative z-10 flex flex-col">
                <span className="font-label-eyebrow text-label-eyebrow text-secondary-fixed tracking-widest uppercase mb-2">
                  West Coast • Heritage & Shore
                </span>
                <h3 className="font-headline-md text-headline-md text-on-primary mb-2 group-hover:text-secondary-fixed transition-colors">
                  Goa
                </h3>
                <p className="font-body-sm text-body-sm text-surface-container-high/90 mb-4 line-clamp-2">
                  Sun-kissed Arabian shores, Portuguese baroque chapels, and organic spice plantations.
                </p>
                <div className="flex items-center gap-2 text-secondary-fixed font-label-button text-label-button group-hover:translate-x-1 transition-transform">
                  <span>Discover Goa</span>
                  <span className="material-symbols-outlined text-[18px]">chevron_right</span>
                </div>
              </div>
            </div>

            {/* 3. KASHMIR (4 Cols) */}
            <div
              onClick={() => onSelectDestination('kashmir')}
              className="lg:col-span-4 group relative rounded-2xl overflow-hidden shadow-md bg-primary-container text-on-primary min-h-[360px] flex flex-col justify-end p-space-lg cursor-pointer"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{
                  backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuCm0WR4RE0DkmqcDx8uXsdBlQ9YtkZ9DBmrj04a1QuAzpYUpoPXCtfMb7tWPdf3rpJK84jm7I32VxumLugFLCNfmWkWx5UhtdFu6wIvZ1NrJSERX1TboFZHeqHkV7OvpoLZGM43b8aCBvmwBqhKyTH3eLrjgdKYcwwLCVQh0EVi2V2Xr_UoYsWJ07qNAW5_IZiF1qGdQmNXV-MKvhStZt3k_l6GNLmjCsdJxSokNNAWEtne3D0u4MDK')`
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-container via-primary-container/50 to-transparent"></div>
              <div className="relative z-10 flex flex-col">
                <span className="font-label-eyebrow text-label-eyebrow text-secondary-fixed tracking-widest uppercase mb-2">
                  Himalayas • Alpine Serenity
                </span>
                <h3 className="font-headline-md text-headline-md text-on-primary mb-1 group-hover:text-secondary-fixed transition-colors">
                  Kashmir
                </h3>
                <p className="font-body-sm text-body-sm text-surface-container-high/90 mb-3 line-clamp-2">
                  Heaven on earth with emerald Dal Lake houseboats and snowline pine forests.
                </p>
                <div className="flex items-center gap-1 text-secondary-fixed font-label-button text-label-button group-hover:translate-x-1 transition-transform">
                  <span>View Itinerary</span>
                  <span className="material-symbols-outlined text-[18px]">chevron_right</span>
                </div>
              </div>
            </div>

            {/* 4. KERALA (4 Cols) */}
            <div
              onClick={() => onSelectDestination('kerala')}
              className="lg:col-span-4 group relative rounded-2xl overflow-hidden shadow-md bg-primary-container text-on-primary min-h-[360px] flex flex-col justify-end p-space-lg cursor-pointer"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{
                  backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuAoB9VKQPj7JGox7Y5TUdczOZODpCnBY1wuWji5Wvlh9LAOMiOJFmrGFJhoDrO7iaSgj6Glircu6tKVJmqlolTO7tOuektLoEa2yNN5DDYKpeAhcACBzOIX1NVoPOUWd7ZG0Ir1dn7ezlk7hgWmesgCRgri72nILzWairLtKXapoDSd-Q1UBKiZMnnz5fmeD92PY9lqUIHpQr5CJJuFDhG9uw6ErVxIViKb8h1Ry8-wgcj1M7JpMjw3')`
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-container via-primary-container/50 to-transparent"></div>
              <div className="relative z-10 flex flex-col">
                <span className="font-label-eyebrow text-label-eyebrow text-secondary-fixed tracking-widest uppercase mb-2">
                  South Coast • Backwaters
                </span>
                <h3 className="font-headline-md text-headline-md text-on-primary mb-1 group-hover:text-secondary-fixed transition-colors">
                  Kerala
                </h3>
                <p className="font-body-sm text-body-sm text-surface-container-high/90 mb-3 line-clamp-2">
                  Serene palm-fringed backwaters, ayurvedic hills, and tranquil tea estates.
                </p>
                <div className="flex items-center gap-1 text-secondary-fixed font-label-button text-label-button group-hover:translate-x-1 transition-transform">
                  <span>View Itinerary</span>
                  <span className="material-symbols-outlined text-[18px]">chevron_right</span>
                </div>
              </div>
            </div>

            {/* 5. UDAIPUR (4 Cols) */}
            <div
              onClick={() => onSelectDestination('udaipur')}
              className="lg:col-span-4 group relative rounded-2xl overflow-hidden shadow-md bg-primary-container text-on-primary min-h-[360px] flex flex-col justify-end p-space-lg cursor-pointer"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{
                  backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuAJnKGVvnaLC68bhSHzC1s1X-rgq52olNscjFHuwv1uIYiRLUTgJL1vTSpBrZnqo32tqRxbZGUSEFOtwDiZ1otnQBxmWRtTMTnYKhDoQCrtDk0EOei0vjCyBKpCSur7K5qk8RDVO7yNdYutPiUIZk6eXCg08zlSVfe6S3KT-aibr5ZlRnX1GMI88iwfJ1DQ2brCCnNM9vzgl35CdPsizsXmVLegbWqaHXz-76ly9qmfMzpYaQXmQDtE')`
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-container via-primary-container/50 to-transparent"></div>
              <div className="relative z-10 flex flex-col">
                <span className="font-label-eyebrow text-label-eyebrow text-secondary-fixed tracking-widest uppercase mb-2">
                  Mewar • Royal Lakes
                </span>
                <h3 className="font-headline-md text-headline-md text-on-primary mb-1 group-hover:text-secondary-fixed transition-colors">
                  Udaipur
                </h3>
                <p className="font-body-sm text-body-sm text-surface-container-high/90 mb-3 line-clamp-2">
                  City of shimmering lakes and romantic marble palaces rising above water.
                </p>
                <div className="flex items-center gap-1 text-secondary-fixed font-label-button text-label-button group-hover:translate-x-1 transition-transform">
                  <span>View Itinerary</span>
                  <span className="material-symbols-outlined text-[18px]">chevron_right</span>
                </div>
              </div>
            </div>

            {/* 6. VARANASI (4 Cols) */}
            <div
              onClick={() => onSelectDestination('varanasi')}
              className="lg:col-span-4 group relative rounded-2xl overflow-hidden shadow-md bg-primary-container text-on-primary min-h-[360px] flex flex-col justify-end p-space-lg cursor-pointer"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{
                  backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuBhsCSikJ-6d3qkL7rwOZrdkPXmgECnyat8DyPrSP2Hhm744h3ng_1FR1g9gVePtBbo_fPWIDkdOQsNIwE5SvICYBtw1QGgRjEhqsjQ5YE-28Y6Dok4pTFg0idTw0P7BzxC50dXipIHx6KQDtXtaKLVFaNvExROCfbBXlK8FP0cBq1UOg2BX0wmfp1OkzAHYF-izAFJex-ruQKs2RJ1AsOVGU17hdYciDv8r4pp7xZoU7BeoVI2nI_C')`
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-container via-primary-container/50 to-transparent"></div>
              <div className="relative z-10 flex flex-col">
                <span className="font-label-eyebrow text-label-eyebrow text-secondary-fixed tracking-widest uppercase mb-2">
                  Sacred Heartland • Ghats
                </span>
                <h3 className="font-headline-md text-headline-md text-on-primary mb-1 group-hover:text-secondary-fixed transition-colors">
                  Varanasi
                </h3>
                <p className="font-body-sm text-body-sm text-surface-container-high/90 mb-3 line-clamp-2">
                  Timeless spiritual awakening along the sacred evening Ganga aartis.
                </p>
                <div className="flex items-center gap-1 text-secondary-fixed font-label-button text-label-button group-hover:translate-x-1 transition-transform">
                  <span>View Itinerary</span>
                  <span className="material-symbols-outlined text-[18px]">chevron_right</span>
                </div>
              </div>
            </div>

            {/* 7. MANALI (4 Cols) */}
            <div
              onClick={() => onSelectDestination('manali')}
              className="lg:col-span-4 group relative rounded-2xl overflow-hidden shadow-md bg-primary-container text-on-primary min-h-[360px] flex flex-col justify-end p-space-lg cursor-pointer"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{
                  backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuBEscuEov1P7hCcx6qoMyuyHWdAVkxjEqt5v12uUTU03WiCqu28Uk_-sp_AVAj0Xm18gU67CWTsGLzcM39STl25jWbnuZhnQrc-mbDQRubTiYH9KgpIxAYhCIS6WB_dYLnG0aWlwZ-1nAt7tW6J9CTeQ5O21oyDWY9JiJfLWddCUNPHUqHTh0FYJiSfaL5q6GhVBtz_P7-uMbYfaN4fiH8Jsk5zWLd39uM8qPny8iysVgK_NW1mpf7B')`
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-container via-primary-container/50 to-transparent"></div>
              <div className="relative z-10 flex flex-col">
                <span className="font-label-eyebrow text-label-eyebrow text-secondary-fixed tracking-widest uppercase mb-2">
                  Himachal • Mountain Valley
                </span>
                <h3 className="font-headline-md text-headline-md text-on-primary mb-1 group-hover:text-secondary-fixed transition-colors">
                  Manali
                </h3>
                <p className="font-body-sm text-body-sm text-surface-container-high/90 mb-3 line-clamp-2">
                  Alpine cedar valleys, thrilling mountain passes, and roaring glacial rivers.
                </p>
                <div className="flex items-center gap-1 text-secondary-fixed font-label-button text-label-button group-hover:translate-x-1 transition-transform">
                  <span>View Itinerary</span>
                  <span className="material-symbols-outlined text-[18px]">chevron_right</span>
                </div>
              </div>
            </div>

            {/* 8. LADAKH (4 Cols) */}
            <div
              onClick={() => onSelectDestination('ladakh')}
              className="lg:col-span-4 group relative rounded-2xl overflow-hidden shadow-md bg-primary-container text-on-primary min-h-[360px] flex flex-col justify-end p-space-lg cursor-pointer"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{
                  backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuCsBy3bUKH1nkn_h1M083bFbPoJ0obgMFD3_IvKMJL4ypfRhA0ZUZadxj5LHBVSX8Lxou2Tp5PFf8cR58YYt9jXy4uuBuvPrvqIHkloK4kjhDRYsYYSmpH7ozrD9GrhemaGtkwj04xom6Yul98fG8aJTl_pjSYj8CoJ864wSoyOq-XUwYU38BphP_tHckVcy1pnLDmkbQEwLgsgjkWMDe3iLd0qmDinKaqYVQKSiSJCUA9EGMDGZAvH')`
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-container via-primary-container/50 to-transparent"></div>
              <div className="relative z-10 flex flex-col">
                <span className="font-label-eyebrow text-label-eyebrow text-secondary-fixed tracking-widest uppercase mb-2">
                  Trans-Himalayas • Monasteries
                </span>
                <h3 className="font-headline-md text-headline-md text-on-primary mb-1 group-hover:text-secondary-fixed transition-colors">
                  Ladakh
                </h3>
                <p className="font-body-sm text-body-sm text-surface-container-high/90 mb-3 line-clamp-2">
                  Dramatic high-altitude moonscapes, turquoise lakes, and ancient cliffside gompas.
                </p>
                <div className="flex items-center gap-1 text-secondary-fixed font-label-button text-label-button group-hover:translate-x-1 transition-transform">
                  <span>View Itinerary</span>
                  <span className="material-symbols-outlined text-[18px]">chevron_right</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. SECTION 5 — FEATURE DESTINATION STORY (Split Magazine Section)          */}
      {/* ========================================================================= */}
      <section className="w-full py-space-2xl bg-surface-container-lowest overflow-hidden">
        <div className="max-w-[1320px] mx-auto px-margin md:px-margin-md lg:px-margin-lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-lg items-center">
            {/* Left: Full Height Majestic Heritage Frame */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[16/11] lg:aspect-[4/5] w-full">
                <img
                  className="w-full h-full object-cover"
                  alt="Thar Desert Jaisalmer Golden Fort ramparts illuminated by oil lamps"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCSAyNDVBom3FpiBA4iVA_YRZz5hYQZWvw04hkTIlUOB41W91Eq2bfLit53oPx3R6P4qw2wGhP1CWXzMleOptqV5qLkTD_5zTC89-xQD6xWaCXKH2aA3MZO-O4yUx6ISB6Gfegf1_hJz3nxNa9UkpSM8G1Xth3tZqVKR0ndR9MlKmwJhnM8-OhOAnC-FBrbQhfmxxYtGPkf6J60vgJUAwSPRS_9jqegFuitE6iQfmaF77D9dT_-3yZp"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-container/80 via-transparent to-transparent"></div>
                <div className="absolute top-6 left-6 px-3 py-1.5 rounded-full bg-surface-container-lowest/80 backdrop-blur-md">
                  <span className="font-label-eyebrow text-label-eyebrow text-secondary uppercase font-bold">
                    Signature Story
                  </span>
                </div>
              </div>
              <div className="hidden sm:flex absolute -bottom-8 -right-8 p-space-md rounded-xl bg-surface-container-lowest shadow-xl max-w-xs items-center gap-space-sm border border-outline-variant/30">
                <span className="material-symbols-outlined text-secondary text-3xl">auto_stories</span>
                <div className="flex flex-col">
                  <span className="font-headline-sm text-xs font-bold uppercase text-on-surface">Folio Volume 04</span>
                  <span className="font-caption text-caption text-on-surface-variant">The Living Fortresses of Thar</span>
                </div>
              </div>
            </div>

            {/* Right: Editorial Content and Progress Indicators */}
            <div className="lg:col-span-6 flex flex-col lg:pl-8">
              <div className="inline-flex items-center gap-2 mb-3">
                <span className="w-6 h-[2px] bg-secondary"></span>
                <span className="font-label-eyebrow text-label-eyebrow text-secondary uppercase tracking-widest">
                  In-Depth Expedition Folio
                </span>
              </div>
              <h2 className="font-headline-xl text-headline-xl-mobile md:text-headline-xl text-on-surface tracking-tight mb-6">
                Journey Through India’s Most Iconic Places
              </h2>
              <p className="font-body-default text-body-default text-on-surface-variant mb-4 leading-relaxed">
                Our expeditions cross centuries of dynastic architecture, sacred spiritual lineages, and fragile ecosystems. We work directly with conservationists and indigenous families to map routes that respect local cadence while offering unparalleled depth.
              </p>
              <p className="font-body-default text-body-default text-on-surface-variant mb-8 leading-relaxed">
                From the remote trans-Himalayan monasteries of Zanskar to the ancestral spice plantations of the Malabar Coast, each story is experienced firsthand by our editorial team.
              </p>

              {/* 3 Data / Metric Progress Bars */}
              <div className="flex flex-col gap-5 mb-8">
                <div className="flex flex-col gap-1.5">
                  <div className="flex justify-between items-center font-label-button text-label-button text-on-surface">
                    <span>Heritage Experiences & Conservation</span>
                    <span className="text-secondary font-bold">98% Authenticity Score</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-surface-container-high overflow-hidden">
                    <div className="h-full bg-secondary rounded-full" style={{ width: '98%' }}></div>
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <div className="flex justify-between items-center font-label-button text-label-button text-on-surface">
                    <span>Nature & High-Altitude Trek Verification</span>
                    <span className="text-secondary font-bold">94% Route Verified</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-surface-container-high overflow-hidden">
                    <div className="h-full bg-secondary rounded-full" style={{ width: '94%' }}></div>
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <div className="flex justify-between items-center font-label-button text-label-button text-on-surface">
                    <span>Culture, Culinary & Native Communities</span>
                    <span className="text-secondary font-bold">96% Endorsed</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-surface-container-high overflow-hidden">
                    <div className="h-full bg-secondary rounded-full" style={{ width: '96%' }}></div>
                  </div>
                </div>
              </div>

              <button
                onClick={onNavigateToGuides}
                className="inline-flex items-center gap-3 self-start px-7 py-3.5 rounded-lg bg-primary text-on-primary font-label-button text-label-button hover:bg-secondary transition-all shadow-md cursor-pointer"
              >
                <span>Start Exploring</span>
                <span className="material-symbols-outlined text-[18px]">east</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. SECTION 6 — TOP TRAVEL GUIDES (6 Editorial Cards)                      */}
      {/* ========================================================================= */}
      <section className="w-full py-space-2xl bg-surface-container-low" id="guides">
        <div className="max-w-[1320px] mx-auto px-margin md:px-margin-md lg:px-margin-lg">
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-space-xl">
            <span className="font-label-eyebrow text-label-eyebrow text-secondary uppercase tracking-widest block mb-2">
              Curated Itineraries
            </span>
            <h2 className="font-headline-xl text-headline-xl-mobile md:text-headline-xl text-on-surface tracking-tight mb-3">
              Popular Travel Guides
            </h2>
            <p className="font-body-default text-body-default text-on-surface-variant">
              Deep-dive itineraries, transport logistics, and neighborhood walking trails crafted for curious wanderers.
            </p>
          </div>

          {/* 6 Travel Guides Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
            {TRAVEL_GUIDES.slice(0, 6).map((guide) => (
              <article
                key={guide.id}
                className="bg-surface-container-lowest rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group border border-outline-variant/20"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-primary-container">
                  <img
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    alt={guide.title}
                    src={guide.heroImage}
                  />
                  <span className="absolute top-4 left-4 font-label-eyebrow text-[10px] tracking-wider uppercase px-3 py-1 rounded-full bg-surface-container-lowest/90 backdrop-blur-md text-secondary font-bold">
                    {guide.tag}
                  </span>
                  <span className="absolute bottom-3 right-3 font-caption text-caption text-on-primary bg-primary-container/80 backdrop-blur-md px-2.5 py-0.5 rounded">
                    {guide.readTime}
                  </span>
                </div>
                <div className="p-space-lg flex flex-col flex-1 justify-between">
                  <div>
                    <h3 className="font-headline-sm text-headline-sm text-on-surface mb-2 group-hover:text-secondary transition-colors font-bold">
                      {guide.title}
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mb-6 line-clamp-3 leading-relaxed">
                      {guide.subtitle}
                    </p>
                  </div>
                  <div className="pt-4 border-t border-outline-variant/20 flex items-center justify-between text-secondary font-label-button text-label-button">
                    <button
                      onClick={() => onOpenGuideModal(guide)}
                      className="group-hover:underline flex items-center gap-1 cursor-pointer"
                    >
                      <span>Read Full Guide</span>
                      <span className="material-symbols-outlined text-base group-hover:translate-x-1 transition-transform">
                        arrow_forward
                      </span>
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7. SECTION 7 — WHY EXPLORE WITH US (Layered Photography & Feature List)    */}
      {/* ========================================================================= */}
      <section className="w-full py-space-2xl bg-surface">
        <div className="max-w-[1320px] mx-auto px-margin md:px-margin-md lg:px-margin-lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-lg items-center">
            {/* Left Side: Editorial Pitch and Bulletproof Checkmarks */}
            <div className="lg:col-span-6 flex flex-col">
              <div className="inline-flex items-center gap-2 mb-3">
                <span className="w-6 h-[2px] bg-secondary"></span>
                <span className="font-label-eyebrow text-label-eyebrow text-secondary uppercase tracking-widest">
                  Thoughtful Curation
                </span>
              </div>
              <h2 className="font-headline-xl text-headline-xl-mobile md:text-headline-xl text-on-surface tracking-tight mb-6">
                Travel Inspiration Made Simple
              </h2>
              <p className="font-body-lead text-body-lead text-on-surface-variant mb-8 leading-relaxed">
                We bring destination ideas, practical travel tips and local highlights together so travellers can plan better journeys across India with zero stress.
              </p>

              <div className="flex flex-col gap-5 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="material-symbols-outlined text-secondary text-lg">check_circle</span>
                  </div>
                  <div>
                    <h4 className="font-headline-sm text-base text-on-surface font-semibold">Carefully Selected Destinations</h4>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                      Every region is vetted for safety, rich cultural value, and sustainable local community impact.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="material-symbols-outlined text-secondary text-lg">check_circle</span>
                  </div>
                  <div>
                    <h4 className="font-headline-sm text-base text-on-surface font-semibold">Practical Travel Information</h4>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                      Precise train timings, taxi tariffs, permit regulations, dress etiquette, and seasonal weather alerts.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="material-symbols-outlined text-secondary text-lg">check_circle</span>
                  </div>
                  <div>
                    <h4 className="font-headline-sm text-base text-on-surface font-semibold">India-Focused Travel Guides</h4>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                      Built by native writers who know the nuance of every state, dialect, festival, and culinary tradition.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="material-symbols-outlined text-secondary text-lg">check_circle</span>
                  </div>
                  <div>
                    <h4 className="font-headline-sm text-base text-on-surface font-semibold">Easy Destination Discovery</h4>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                      Search and filter across alpine, coastal, spiritual, or royal circuits with instant clarity.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="tel:+919835697455"
                  className="inline-flex items-center gap-2 font-label-button text-label-button text-secondary hover:underline cursor-pointer"
                >
                  <span className="material-symbols-outlined text-lg">phone_in_talk</span>
                  <span>Call Specialist Helpline: +91 9835697455</span>
                </a>
                <a
                  href="https://wa.me/918936877362?text=Hello%20RJ%20India%20Traveller%20Guide!%20I%20would%20like%20to%20plan%20a%20trip."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-50 hover:bg-emerald-100 text-emerald-800 text-xs font-bold transition-colors border border-emerald-200"
                >
                  <svg className="w-4 h-4 fill-[#25D366]" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.82 11.82 0 00-3.48-8.413z" />
                  </svg>
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Right Side: Editorial Layered Stacks of Photography */}
            <div className="lg:col-span-6 relative mt-8 lg:mt-0">
              <div className="relative w-11/12 rounded-2xl overflow-hidden shadow-xl aspect-[4/3] bg-primary-container">
                <img
                  className="w-full h-full object-cover"
                  alt="Solo explorer on cliff overlook above Nubra Valley Ladakh"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBHboYpdv82J1otYGUyyKAuAKPgS1TXup86yYD797chHMlSizHxguZI3Wi4m0X2VliAEpYrftNn3Urs_jcmS1kdLxRxGh9263KkCW0KpTxz13pCh8WEv31eEg16wFSvQepmr4f4Y3_MZVwVFLHPDc_TonSf39QC9-gNpNZExQOEKbxDGrNlFfJpd9sPCsvaAi1LmrdIp-fK4t9FcEbQriKCoVZLQzX1VqL6k860BqAvHuasnkdP3bhn"
                />
              </div>
              <div className="absolute -bottom-10 -right-2 sm:right-4 w-7/12 rounded-2xl overflow-hidden shadow-2xl aspect-[3/4] p-1.5 bg-surface-container-lowest">
                <img
                  className="w-full h-full object-cover rounded-xl"
                  alt="Indian woman wearing rich Rajasthani traditional handwoven textiles"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCMMfPdR97K7Hnr79cDSaljwzlF7OI9Kwv72WThMCoAHiJmlekBweWov2mLdeqZjqHMXIg2f9EqhvPu0EAJ96U2MbMyOowv26umMJrVBs8nxmlPll4m-KRil8vY4JKIqjgoYiXzHQBw8g48ocAz5wtclCIrH7N0pbpyaw_leFeWn_TjXU0JSiyHzYhNH4fKpSP50QmB5Sk1s4rhEkTnuQCB_wky8IcsHj-VDQM1Ol7ZPpBEVnhg2z_B"
                />
              </div>

              {/* Floating Badge */}
              <div className="absolute top-8 right-2 sm:right-8 bg-surface-container-lowest/90 backdrop-blur-md p-3.5 rounded-xl shadow-lg flex items-center gap-3 border border-outline-variant/30">
                <div className="flex text-secondary">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>
                      star
                    </span>
                  ))}
                </div>
                <div className="flex flex-col">
                  <span className="font-headline-sm text-xs font-bold text-on-surface">4.9 / 5.0 Rating</span>
                  <span className="font-caption text-[11px] text-on-surface-variant">Over 1,200 Journeys</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 8. SECTION 8 — CINEMATIC FULL-WIDTH CTA (Twilight Mountain / Fortress)   */}
      {/* ========================================================================= */}
      <section className="relative w-full py-space-2xl bg-primary-container text-on-primary overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          data-alt="Moody cinematic twilight view of Himalayan mountain ridge"
          style={{
            backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuA86TeOlFoBq606KlePH-UYifzQuJi_DNbfXf_nl3latO-RoMGG6C8jknBrWSpajovlSyIQakh1NKgPvNuWyevgH7P6X_z_3qe91lg9-9u6y7t7s6n5SioZFAL61b48JJyHpfkedPZqqbsCMA1IPS3sRGdcK9Mr0KQT7VaBMeB7BPPmEBxNJKbDHwWPKgiPPIaqqGi3EGcpDd595LMgpLmV9VrD95aBLRXehGyJgc9VOpDYJv9mid44')`
          }}
        />
        <div className="absolute inset-0 bg-primary-container/80 backdrop-blur-xs"></div>
        <div className="relative z-10 max-w-[1320px] mx-auto px-margin md:px-margin-md lg:px-margin-lg flex justify-center">
          <div className="bg-surface-container-lowest text-on-surface max-w-3xl w-full p-8 md:p-14 rounded-2xl shadow-2xl text-center relative overflow-hidden border border-outline-variant/30">
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-secondary-container via-secondary to-secondary-container"></div>
            <span className="font-label-eyebrow text-label-eyebrow text-secondary uppercase tracking-widest block mb-3">
              Begin Your Voyage
            </span>
            <h2 className="font-headline-xl text-headline-xl-mobile md:text-headline-xl text-on-surface tracking-tight mb-4">
              Your Next Indian Adventure Starts Here
            </h2>
            <p className="font-body-lead text-body-lead text-on-surface-variant max-w-xl mx-auto mb-8 font-normal leading-relaxed">
              Explore destinations, discover hidden experiences and start planning your next journey across India with verified native guidance.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-space-md">
              <button
                onClick={onNavigateToDestinations}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-secondary text-on-secondary font-label-button text-label-button shadow-md hover:bg-secondary-container transition-all cursor-pointer"
              >
                <span>Explore Destinations</span>
                <span className="material-symbols-outlined text-[18px]">travel_explore</span>
              </button>
              <button
                onClick={onNavigateToGuides}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-surface-container text-on-surface font-label-button text-label-button hover:bg-surface-container-high transition-all cursor-pointer"
              >
                <span>Browse All 10 Guides</span>
                <span className="material-symbols-outlined text-[18px]">library_books</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 9. SECTION 9 — TESTIMONIALS / COMMUNITY (Stories From Travellers)         */}
      {/* ========================================================================= */}
      <section className="w-full py-space-2xl bg-surface">
        <div className="max-w-[1320px] mx-auto px-margin md:px-margin-md lg:px-margin-lg">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-space-xl gap-space-md">
            <div>
              <span className="font-label-eyebrow text-label-eyebrow text-secondary uppercase tracking-widest block mb-2">
                Real Voyager Accounts
              </span>
              <h2 className="font-headline-xl text-headline-xl-mobile md:text-headline-xl text-on-surface tracking-tight">
                Stories From Travellers
              </h2>
            </div>
            <p className="font-body-sm text-body-sm text-on-surface-variant max-w-md">
              Unfiltered feedback and field reflections from independent explorers following our curated Indian itineraries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            {TESTIMONIALS.map((t, idx) => (
              <div
                key={idx}
                className="bg-surface-container-lowest p-space-lg rounded-2xl shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow border border-outline-variant/20"
              >
                <div>
                  <div className="flex text-secondary mb-4">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>
                        star
                      </span>
                    ))}
                  </div>
                  <p className="font-body-default text-body-default text-on-surface-variant mb-6 italic leading-relaxed">
                    “{t.quote}”
                  </p>
                </div>
                <div className="flex items-center gap-3 pt-4 border-t-0 bg-surface-container-low/50 -mx-space-lg -mb-space-lg p-space-md rounded-b-2xl">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-headline-sm font-bold text-sm ${t.badgeClass}`}>
                    {t.initials}
                  </div>
                  <div className="flex flex-col">
                    <span className="font-label-button text-label-button text-on-surface font-semibold">{t.author}</span>
                    <span className="font-caption text-caption text-secondary">
                      {t.location} • {t.circuit}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 10. SECTION 10 — NEWSLETTER & CONCIERGE CTA (Deep Navy & Mandala Pattern) */}
      {/* ========================================================================= */}
      <section className="w-full py-space-2xl bg-surface-container-lowest" id="contact">
        <div className="max-w-[1320px] mx-auto px-margin md:px-margin-md lg:px-margin-lg">
          <div className="relative bg-primary-container text-on-primary rounded-3xl p-8 md:p-16 overflow-hidden shadow-2xl">
            <div className="absolute -right-20 -bottom-20 w-96 h-96 opacity-10 pointer-events-none">
              <svg className="w-full h-full text-secondary-fixed" fill="none" stroke="currentColor" viewBox="0 0 200 200">
                <circle cx="100" cy="100" r="90" strokeDasharray="4 4" strokeWidth="1.5"></circle>
                <circle cx="100" cy="100" r="70" strokeWidth="1"></circle>
                <circle cx="100" cy="100" r="50" strokeWidth="1.5"></circle>
                <circle cx="100" cy="100" r="30" strokeWidth="1"></circle>
                <path d="M100 0 L100 200 M0 100 L200 100" strokeWidth="0.5"></path>
                <path d="M29.29 29.29 L170.71 170.71 M29.29 170.71 L170.71 29.29" strokeWidth="0.5"></path>
              </svg>
            </div>

            <div className="relative z-10 max-w-2xl">
              <span className="font-label-eyebrow text-label-eyebrow text-tertiary-fixed uppercase tracking-widest block mb-3">
                Stay Connected
              </span>
              <h2 className="font-headline-xl text-headline-xl-mobile md:text-headline-xl text-on-primary tracking-tight mb-4">
                Get Inspired for Your Next Journey
              </h2>
              <p className="font-body-default text-body-default text-surface-container-high/90 mb-8 leading-relaxed">
                Receive curated seasonal itineraries, destination insights, festival schedules, and practical permits from across India straight to your inbox.
              </p>

              <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mb-4">
                <input
                  className="flex-1 px-5 py-4 rounded-xl bg-surface-container-lowest text-on-surface font-body-sm text-body-sm focus:outline-none focus:ring-2 focus:ring-secondary placeholder:text-outline shadow-inner"
                  placeholder="Enter your email address"
                  required
                  type="email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                />
                <button
                  className="px-8 py-4 rounded-xl bg-secondary text-on-secondary font-label-button text-label-button hover:bg-secondary-container transition-all shadow-md shrink-0 cursor-pointer"
                  type="submit"
                >
                  Subscribe
                </button>
              </form>

              {newsletterSubscribed && (
                <p className="text-secondary-fixed font-caption text-caption mb-3 animate-fade-in flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-sm">check_circle</span>
                  <span>Thank you! You are now subscribed to the RJ All India Dispatch.</span>
                </p>
              )}

              <div className="flex items-center gap-2 font-caption text-caption text-surface-container-high/60">
                <span className="material-symbols-outlined text-[14px]">lock</span>
                <span>No spam guaranteed. Unsubscribe at any time with one click.</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

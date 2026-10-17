import React, { useState } from 'react';
import { TravelGuide } from '../data/travelData';

interface GuideModalProps {
  guide: TravelGuide | null;
  onClose: () => void;
  onInquireConcierge: (guideTitle: string) => void;
}

export const GuideModal: React.FC<GuideModalProps> = ({
  guide,
  onClose,
  onInquireConcierge,
}) => {
  const [activeDay, setActiveDay] = useState(1);
  const [copied, setCopied] = useState(false);

  if (!guide) return null;

  const currentDayPlan = guide.itinerary.find((d) => d.day === activeDay) || guide.itinerary[0];

  const handleCopyItinerary = () => {
    const text = `${guide.title}\n${guide.subtitle}\n\n` +
      guide.itinerary.map(d => 
        `Day ${d.day}: ${d.title} (${d.theme})\n` +
        `• Morning: ${d.morning}\n` +
        `• Afternoon: ${d.afternoon}\n` +
        `• Evening: ${d.evening}\n` +
        `• Culinary Note: ${d.diningTip}\n`
      ).join('\n') +
      `\nTransit: ${guide.transitAdvice}\nBudget Advice: ${guide.budgetTips}`;

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-primary/75 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-4xl max-h-[92vh] bg-surface-container-lowest rounded-2xl shadow-2xl overflow-hidden flex flex-col border border-outline-variant/30"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-primary/70 hover:bg-primary text-on-primary flex items-center justify-center transition-colors cursor-pointer"
          aria-label="Close guide"
        >
          <span className="material-symbols-outlined text-xl">close</span>
        </button>

        {/* Scrollable Container */}
        <div className="overflow-y-auto flex-1">
          {/* Header Visual */}
          <div className="relative h-64 sm:h-80 w-full overflow-hidden bg-primary-container">
            <img
              src={guide.heroImage}
              alt={guide.title}
              className="w-full h-full object-cover"
              onError={(e) => {
                (e.target as HTMLElement).style.display = 'none';
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary-container via-primary-container/50 to-transparent"></div>

            <div className="absolute bottom-6 left-6 right-6 text-on-primary">
              <div className="flex items-center gap-2 mb-2">
                <span className="font-label-eyebrow text-xs tracking-widest text-secondary-fixed uppercase">
                  {guide.tag}
                </span>
                <span className="text-surface-container-high/60">·</span>
                <span className="font-caption text-xs text-surface-container-high/90">
                  {guide.readTime}
                </span>
                <span className="text-surface-container-high/60">·</span>
                <span className="font-caption text-xs text-surface-container-high/90">
                  {guide.itinerary.length} Days Mapped
                </span>
              </div>
              <h1 className="font-headline-lg text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight">
                {guide.title}
              </h1>
              <p className="font-body-default text-surface-container-high/90 text-sm mt-1 max-w-2xl">
                {guide.subtitle}
              </p>
            </div>
          </div>

          {/* Quick Action Strip */}
          <div className="px-6 py-3 bg-surface-container-low border-b border-outline-variant/20 flex flex-wrap items-center justify-between gap-3 text-xs">
            <span className="font-label-eyebrow text-secondary uppercase">
              Field-Vetted Itinerary Blueprint
            </span>
            <div className="flex items-center gap-2">
              <button
                onClick={handleCopyItinerary}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface-container-lowest border border-outline-variant/40 hover:bg-surface-container transition-colors text-on-surface cursor-pointer"
              >
                <span className="material-symbols-outlined text-sm">
                  {copied ? 'check' : 'content_copy'}
                </span>
                <span>{copied ? 'Copied Full Itinerary' : 'Copy Route'}</span>
              </button>
              <button
                onClick={() => window.print()}
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface-container-lowest border border-outline-variant/40 hover:bg-surface-container transition-colors text-on-surface cursor-pointer"
              >
                <span className="material-symbols-outlined text-sm">print</span>
                <span>Print Guide</span>
              </button>
            </div>
          </div>

          <div className="p-6 sm:p-8 space-y-8">
            {/* Overview Editorial */}
            <div className="p-5 rounded-xl bg-surface-container-low/60 border border-outline-variant/20">
              <span className="font-label-eyebrow text-secondary uppercase text-[10px] block mb-1">
                Editorial Premise
              </span>
              <p className="font-body-default text-sm text-on-surface-variant leading-relaxed">
                {guide.overview}
              </p>
            </div>

            {/* Day Selector Tabs */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="font-headline-sm text-base text-on-surface">
                  Day-by-Day Expedition Schedule
                </span>
                <span className="font-caption text-xs text-on-surface-variant">
                  Select a day to inspect daily timing
                </span>
              </div>
              <div className="flex items-center gap-2 overflow-x-auto pb-2">
                {guide.itinerary.map((d) => (
                  <button
                    key={d.day}
                    onClick={() => setActiveDay(d.day)}
                    className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                      activeDay === d.day
                        ? 'bg-secondary text-on-secondary shadow-md'
                        : 'bg-surface-container text-on-surface hover:bg-surface-container-high'
                    }`}
                  >
                    Day {d.day}: {d.title.slice(0, 18)}...
                  </button>
                ))}
              </div>
            </div>

            {/* Current Day Details Card */}
            {currentDayPlan && (
              <div className="p-6 rounded-2xl bg-surface-container-lowest border border-outline-variant/40 shadow-sm space-y-5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-outline-variant/20">
                  <div>
                    <span className="font-label-eyebrow text-secondary text-xs uppercase">
                      Day {currentDayPlan.day} Focus
                    </span>
                    <h3 className="font-headline-md text-xl font-bold text-on-surface">
                      {currentDayPlan.title}
                    </h3>
                  </div>
                  <span className="font-label-button text-xs px-3 py-1 rounded-full bg-secondary-fixed text-secondary w-fit">
                    {currentDayPlan.theme}
                  </span>
                </div>

                {/* Day breakdown: Morning, Afternoon, Evening */}
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-lg bg-amber-500/10 text-amber-600 flex items-center justify-center shrink-0 mt-0.5">
                      <span className="material-symbols-outlined text-lg">wb_sunny</span>
                    </div>
                    <div>
                      <span className="font-bold text-xs uppercase text-on-surface tracking-wider block">
                        Morning Program (08:00 – 12:30)
                      </span>
                      <p className="font-body-sm text-sm text-on-surface-variant mt-0.5 leading-relaxed">
                        {currentDayPlan.morning}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-lg bg-orange-500/10 text-orange-600 flex items-center justify-center shrink-0 mt-0.5">
                      <span className="material-symbols-outlined text-lg">light_mode</span>
                    </div>
                    <div>
                      <span className="font-bold text-xs uppercase text-on-surface tracking-wider block">
                        Afternoon Exploration (13:30 – 17:00)
                      </span>
                      <p className="font-body-sm text-sm text-on-surface-variant mt-0.5 leading-relaxed">
                        {currentDayPlan.afternoon}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-lg bg-indigo-500/10 text-indigo-600 flex items-center justify-center shrink-0 mt-0.5">
                      <span className="material-symbols-outlined text-lg">bedtime</span>
                    </div>
                    <div>
                      <span className="font-bold text-xs uppercase text-on-surface tracking-wider block">
                        Evening Golden Hour & Twilight
                      </span>
                      <p className="font-body-sm text-sm text-on-surface-variant mt-0.5 leading-relaxed">
                        {currentDayPlan.evening}
                      </p>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-surface-container-low border border-outline-variant/20 flex items-center gap-3">
                    <span className="material-symbols-outlined text-secondary text-lg">restaurant_menu</span>
                    <div className="text-xs">
                      <span className="font-bold text-on-surface">Curated Dining Pick: </span>
                      <span className="text-on-surface-variant">{currentDayPlan.diningTip}</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Transit Advice & Budget Tips */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-surface-container-low border border-outline-variant/20">
                <span className="font-headline-sm text-sm text-on-surface flex items-center gap-2 mb-2 font-semibold">
                  <span className="material-symbols-outlined text-secondary text-base">directions_bus</span>
                  <span>Internal Transportation Advice</span>
                </span>
                <p className="font-body-sm text-xs text-on-surface-variant leading-relaxed">
                  {guide.transitAdvice}
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-surface-container-low border border-outline-variant/20">
                <span className="font-headline-sm text-sm text-on-surface flex items-center gap-2 mb-2 font-semibold">
                  <span className="material-symbols-outlined text-secondary text-base">savings</span>
                  <span>Budget Optimization</span>
                </span>
                <p className="font-body-sm text-xs text-on-surface-variant leading-relaxed">
                  {guide.budgetTips}
                </p>
              </div>
            </div>

            {/* Packing Advice & Etiquette */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <span className="font-headline-sm text-sm text-on-surface block mb-3 font-semibold">
                  Essential Packing Checklist
                </span>
                <ul className="space-y-2">
                  {guide.packingList.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-on-surface-variant">
                      <span className="material-symbols-outlined text-secondary text-base mt-0.5">check_circle</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <span className="font-headline-sm text-sm text-on-surface block mb-3 font-semibold">
                  Local Cultural Nuance & Etiquette
                </span>
                <ul className="space-y-2">
                  {guide.etiquette.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-on-surface-variant">
                      <span className="material-symbols-outlined text-secondary text-base mt-0.5">gavel</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Guide Footer CTA */}
          <div className="p-6 bg-surface-container-lowest border-t border-outline-variant/30 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs text-on-surface-variant">
              <span className="material-symbols-outlined text-secondary text-base">help</span>
              <span>Need customized private transport or local native guides?</span>
            </div>
            <button
              onClick={() => onInquireConcierge(guide.title)}
              className="w-full sm:w-auto px-7 py-3 rounded-xl bg-secondary text-on-secondary font-label-button text-sm hover:bg-secondary-container transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Book Guide with Specialist Concierge</span>
              <span className="material-symbols-outlined text-base">send</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

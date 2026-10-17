import React from 'react';
import { Destination } from '../data/travelData';

interface DestinationModalProps {
  destination: Destination | null;
  onClose: () => void;
  isSaved: boolean;
  onToggleSave: (destId: string) => void;
  onOpenGuide: (destId: string) => void;
  onPlanTrip: (destId: string) => void;
}

export const DestinationModal: React.FC<DestinationModalProps> = ({
  destination,
  onClose,
  isSaved,
  onToggleSave,
  onOpenGuide,
  onPlanTrip,
}) => {
  if (!destination) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-primary/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-4xl max-h-[90vh] bg-surface-container-lowest rounded-2xl shadow-2xl overflow-hidden flex flex-col border border-outline-variant/30"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-primary/70 hover:bg-primary text-on-primary flex items-center justify-center transition-colors cursor-pointer"
          aria-label="Close details"
        >
          <span className="material-symbols-outlined text-xl">close</span>
        </button>

        {/* Scrollable Content Container */}
        <div className="overflow-y-auto flex-1">
          {/* Hero Banner Header */}
          <div className="relative h-72 sm:h-96 w-full overflow-hidden bg-primary-container">
            <img
              src={destination.heroImage}
              alt={destination.name}
              className="w-full h-full object-cover"
              onError={(e) => {
                (e.target as HTMLElement).style.display = 'none';
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary-container via-primary-container/40 to-transparent"></div>
            
            <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4 text-on-primary">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="font-label-eyebrow text-xs tracking-widest text-secondary-fixed uppercase">
                    {destination.state} • {destination.badge}
                  </span>
                  {destination.permitRequired && (
                    <span className="text-[11px] font-medium bg-amber-500/20 text-amber-200 border border-amber-500/30 px-2 py-0.5 rounded-full">
                      Permit Required
                    </span>
                  )}
                </div>
                <h2 className="font-headline-xl text-3xl sm:text-4xl font-bold tracking-tight">
                  {destination.name}
                </h2>
                <p className="font-body-default text-surface-container-high/90 mt-1 max-w-xl text-sm sm:text-base">
                  {destination.tagline}
                </p>
              </div>

              {/* Bookmark Toggle */}
              <button
                onClick={() => onToggleSave(destination.id)}
                className={`self-start sm:self-end flex items-center gap-2 px-4 py-2 rounded-xl font-label-button text-xs transition-colors cursor-pointer ${
                  isSaved
                    ? 'bg-secondary text-on-secondary shadow-md'
                    : 'bg-surface-container-lowest/20 backdrop-blur-md text-on-primary hover:bg-surface-container-lowest/30'
                }`}
              >
                <span className="material-symbols-outlined text-base">
                  {isSaved ? 'bookmark_added' : 'bookmark_add'}
                </span>
                <span>{isSaved ? 'Saved to Trip' : 'Save to Wishlist'}</span>
              </button>
            </div>
          </div>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-6 bg-surface-container-low border-b border-outline-variant/20">
            <div>
              <span className="font-caption text-on-surface-variant uppercase text-[11px] block">Best Time</span>
              <span className="font-headline-sm text-sm text-on-surface font-semibold">{destination.bestTime}</span>
            </div>
            <div>
              <span className="font-caption text-on-surface-variant uppercase text-[11px] block">Ideal Duration</span>
              <span className="font-headline-sm text-sm text-on-surface font-semibold">{destination.idealDuration}</span>
            </div>
            <div>
              <span className="font-caption text-on-surface-variant uppercase text-[11px] block">Daily Budget</span>
              <span className="font-headline-sm text-sm text-on-surface font-semibold">{destination.dailyBudget}</span>
            </div>
            <div>
              <span className="font-caption text-on-surface-variant uppercase text-[11px] block">Permit Regulations</span>
              <span className="font-headline-sm text-sm text-on-surface font-semibold">
                {destination.permitRequired ? 'Required (ILP)' : 'No Permit Needed'}
              </span>
            </div>
          </div>

          {/* Modal Main Body */}
          <div className="p-6 sm:p-8 space-y-8">
            {/* Overview */}
            <div>
              <h3 className="font-headline-sm text-lg text-on-surface mb-3 flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary text-xl">auto_stories</span>
                <span>Subcontinent Narrative</span>
              </h3>
              <p className="font-body-default text-on-surface-variant leading-relaxed">
                {destination.description}
              </p>
              {destination.permitNote && (
                <div className="mt-4 p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-sm flex items-start gap-3">
                  <span className="material-symbols-outlined text-amber-600 mt-0.5">info</span>
                  <div>
                    <span className="font-bold">Important Permit Advisory: </span>
                    {destination.permitNote}
                  </div>
                </div>
              )}
            </div>

            {/* Highlights Grid */}
            <div>
              <h3 className="font-headline-sm text-lg text-on-surface mb-3 flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary text-xl">verified</span>
                <span>Unmissable Experiences</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {destination.highlights.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-surface-container-low/70 border border-outline-variant/20">
                    <span className="w-5 h-5 rounded-full bg-secondary/15 text-secondary flex items-center justify-center text-xs shrink-0 mt-0.5 font-bold">
                      {idx + 1}
                    </span>
                    <span className="font-body-sm text-sm text-on-surface">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Local Culinary Specialties */}
            <div>
              <h3 className="font-headline-sm text-lg text-on-surface mb-3 flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary text-xl">restaurant</span>
                <span>Authentic Culinary Specialties</span>
              </h3>
              <div className="flex flex-wrap gap-2">
                {destination.culinarySpecialties.map((dish, idx) => (
                  <span
                    key={idx}
                    className="px-3.5 py-1.5 rounded-lg bg-surface-container text-on-surface font-body-sm text-xs border border-outline-variant/30 flex items-center gap-1.5"
                  >
                    <span className="text-secondary font-bold">✦</span>
                    {dish}
                  </span>
                ))}
              </div>
            </div>

            {/* Logistics & Transit */}
            <div className="p-5 rounded-2xl bg-surface-container-low border border-outline-variant/20">
              <h3 className="font-headline-sm text-base text-on-surface mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary text-xl">commute</span>
                <span>Arrival & Transport Logistics</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                <div>
                  <span className="font-bold text-on-surface uppercase block mb-1">By Air</span>
                  <p className="text-on-surface-variant leading-relaxed">{destination.howToReach.flight}</p>
                </div>
                <div>
                  <span className="font-bold text-on-surface uppercase block mb-1">By Rail</span>
                  <p className="text-on-surface-variant leading-relaxed">{destination.howToReach.train}</p>
                </div>
                <div>
                  <span className="font-bold text-on-surface uppercase block mb-1">By Road</span>
                  <p className="text-on-surface-variant leading-relaxed">{destination.howToReach.road}</p>
                </div>
              </div>
            </div>

            {/* Stay Types */}
            <div>
              <span className="font-caption text-xs uppercase tracking-wider text-on-surface-variant block mb-2">
                Curated Accommodations
              </span>
              <div className="flex flex-wrap gap-2">
                {destination.stayTypes.map((stay, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-md bg-secondary-fixed/50 text-secondary text-xs font-medium"
                  >
                    {stay}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Action Footer */}
          <div className="p-6 bg-surface-container-lowest border-t border-outline-variant/30 flex flex-col sm:flex-row items-center justify-between gap-4">
            <button
              onClick={() => onPlanTrip(destination.id)}
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-surface-container text-on-surface font-label-button text-sm hover:bg-surface-container-high transition-colors flex items-center justify-center gap-2 cursor-pointer"
            >
              <span className="material-symbols-outlined text-lg">calendar_month</span>
              <span>Build Custom {destination.name} Itinerary</span>
            </button>

            <button
              onClick={() => onOpenGuide(destination.id)}
              className="w-full sm:w-auto px-8 py-3 rounded-xl bg-secondary text-on-secondary font-label-button text-sm hover:bg-secondary-container transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Read Comprehensive Guide</span>
              <span className="material-symbols-outlined text-lg">arrow_forward</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

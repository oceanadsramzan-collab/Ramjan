import React, { useState } from 'react';
import { DESTINATIONS } from '../data/travelData';

interface TripPlannerViewProps {
  onOpenConciergeWithPlan: (planSummary: string) => void;
  onSaveTrip: (tripName: string, destIds: string[], days: number) => void;
  initialDestinationId?: string;
}

export const TripPlannerView: React.FC<TripPlannerViewProps> = ({
  onOpenConciergeWithPlan,
  onSaveTrip,
  initialDestinationId,
}) => {
  const [selectedDestinations, setSelectedDestinations] = useState<string[]>(
    initialDestinationId ? [initialDestinationId] : ['jaipur', 'udaipur']
  );
  const [durationDays, setDurationDays] = useState<number>(7);
  const [travelStyle, setTravelStyle] = useState<'heritage' | 'adventure' | 'wellness' | 'luxury'>('heritage');
  const [travelersCount, setTravelersCount] = useState<number>(2);
  const [savedSuccess, setSavedSuccess] = useState(false);
  const [copiedSuccess, setCopiedSuccess] = useState(false);

  const toggleDestination = (id: string) => {
    if (selectedDestinations.includes(id)) {
      if (selectedDestinations.length > 1) {
        setSelectedDestinations(selectedDestinations.filter(d => d !== id));
      }
    } else {
      setSelectedDestinations([...selectedDestinations, id]);
    }
  };

  // Cost estimation calculations
  const styleMultipliers = {
    heritage: 5500,
    adventure: 4800,
    wellness: 6200,
    luxury: 12500,
  };

  const costPerPersonPerDay = styleMultipliers[travelStyle];
  const totalCostINR = costPerPersonPerDay * durationDays * travelersCount;
  const totalCostUSD = Math.round(totalCostINR / 86);

  const selectedDestsData = DESTINATIONS.filter(d => selectedDestinations.includes(d.id));

  const planSummary = `RJ Traveller Plan: ${durationDays} Days Indian Expedition (${travelStyle.toUpperCase()}) for ${travelersCount} traveler(s). Destinations: ${selectedDestsData.map(d => d.name).join(', ')}. Estimated budget: ₹${totalCostINR.toLocaleString()} (~$${totalCostUSD} USD).`;

  const handleCopy = () => {
    navigator.clipboard.writeText(planSummary);
    setCopiedSuccess(true);
    setTimeout(() => setCopiedSuccess(false), 2500);
  };

  const handleSave = () => {
    onSaveTrip(
      `${selectedDestsData.map(d => d.name).join(' & ')} (${durationDays} Days)`,
      selectedDestinations,
      durationDays
    );
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 2500);
  };

  return (
    <div className="w-full py-space-xl bg-surface">
      <div className="max-w-[1320px] mx-auto px-margin md:px-margin-md lg:px-margin-lg">
        
        {/* Planner Header */}
        <div className="text-center max-w-2xl mx-auto mb-space-xl">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="w-6 h-[2px] bg-secondary"></span>
            <span className="font-label-eyebrow text-secondary uppercase tracking-widest text-xs">
              Interactive Subcontinent Engine
            </span>
            <span className="w-6 h-[2px] bg-secondary"></span>
          </div>
          <h1 className="font-headline-xl text-3xl md:text-5xl font-bold text-on-surface tracking-tight mb-3">
            Custom Itinerary Planner
          </h1>
          <p className="font-body-default text-on-surface-variant">
            Design your ideal journey across India with accurate regional transit timings, verified stay styles, and live budget forecasting.
          </p>
        </div>

        {/* 2-Column Split: Controls on Left, Live Schedule & Cost on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-lg items-start">
          
          {/* Controls Column (7 Cols) */}
          <div className="lg:col-span-7 space-y-8 bg-surface-container-lowest p-6 sm:p-8 rounded-2xl shadow-sm border border-outline-variant/30">
            
            {/* Step 1: Select Destinations */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="font-headline-sm text-base text-on-surface font-semibold flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-secondary text-on-secondary text-xs flex items-center justify-center font-bold">1</span>
                  <span>Select Regions & Destinations</span>
                </span>
                <span className="text-xs text-on-surface-variant">
                  {selectedDestinations.length} Selected
                </span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {DESTINATIONS.map((d) => {
                  const isSelected = selectedDestinations.includes(d.id);
                  return (
                    <button
                      key={d.id}
                      onClick={() => toggleDestination(d.id)}
                      className={`p-3 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between min-h-[74px] ${
                        isSelected
                          ? 'bg-secondary-fixed/40 border-secondary text-secondary shadow-sm'
                          : 'bg-surface-container-low border-outline-variant/30 text-on-surface hover:bg-surface-container'
                      }`}
                    >
                      <div className="flex items-center justify-between w-full">
                        <span className="font-headline-sm text-sm font-semibold">{d.name}</span>
                        <span className="material-symbols-outlined text-base">
                          {isSelected ? 'check_circle' : 'radio_button_unchecked'}
                        </span>
                      </div>
                      <span className="text-[11px] text-on-surface-variant">
                        {d.state}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Choose Travel Style */}
            <div>
              <span className="font-headline-sm text-base text-on-surface font-semibold flex items-center gap-2 mb-3">
                <span className="w-6 h-6 rounded-full bg-secondary text-on-secondary text-xs flex items-center justify-center font-bold">2</span>
                <span>Travel Style & Pace</span>
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {[
                  { id: 'heritage', label: 'Royal Heritage', icon: 'castle', desc: 'Havelis & Palaces' },
                  { id: 'adventure', label: 'Alpine Trek', icon: 'hiking', desc: 'Mountains & Passes' },
                  { id: 'wellness', label: 'Slow Wellness', icon: 'spa', desc: 'Backwaters & Tea' },
                  { id: 'luxury', label: 'Curated Luxury', icon: 'hotel_class', desc: 'Palatial 5-Star' },
                ].map((style) => (
                  <button
                    key={style.id}
                    onClick={() => setTravelStyle(style.id as any)}
                    className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                      travelStyle === style.id
                        ? 'bg-secondary text-on-secondary border-secondary shadow-sm'
                        : 'bg-surface-container-low border-outline-variant/30 text-on-surface hover:bg-surface-container'
                    }`}
                  >
                    <span className="material-symbols-outlined text-xl mb-1 block">
                      {style.icon}
                    </span>
                    <span className="font-label-button text-xs block font-bold">
                      {style.label}
                    </span>
                    <span className={`text-[10px] block ${travelStyle === style.id ? 'text-surface-container-high' : 'text-on-surface-variant'}`}>
                      {style.desc}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Duration & Travellers Count */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
              <div>
                <span className="font-headline-sm text-base text-on-surface font-semibold flex items-center gap-2 mb-3">
                  <span className="w-6 h-6 rounded-full bg-secondary text-on-secondary text-xs flex items-center justify-center font-bold">3</span>
                  <span>Trip Duration</span>
                </span>
                <div className="flex items-center gap-2">
                  {[3, 5, 7, 10, 14].map((days) => (
                    <button
                      key={days}
                      onClick={() => setDurationDays(days)}
                      className={`flex-1 py-2.5 rounded-lg text-xs font-bold transition-colors cursor-pointer ${
                        durationDays === days
                          ? 'bg-primary text-on-primary shadow-sm'
                          : 'bg-surface-container text-on-surface hover:bg-surface-container-high'
                      }`}
                    >
                      {days}D
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <span className="font-headline-sm text-base text-on-surface font-semibold flex items-center gap-2 mb-3">
                  <span className="w-6 h-6 rounded-full bg-secondary text-on-secondary text-xs flex items-center justify-center font-bold">4</span>
                  <span>Group Size</span>
                </span>
                <div className="flex items-center gap-2">
                  {[1, 2, 4, 6].map((count) => (
                    <button
                      key={count}
                      onClick={() => setTravelersCount(count)}
                      className={`flex-1 py-2.5 rounded-lg text-xs font-bold transition-colors cursor-pointer ${
                        travelersCount === count
                          ? 'bg-primary text-on-primary shadow-sm'
                          : 'bg-surface-container text-on-surface hover:bg-surface-container-high'
                      }`}
                    >
                      {count} {count === 1 ? 'Solo' : `${count} Guests`}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Live Route Breakdown & Budget Calculator (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Live Generated Plan Card */}
            <div className="bg-primary-container text-on-primary p-6 sm:p-8 rounded-2xl shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-secondary/10 rounded-full blur-2xl pointer-events-none"></div>

              <span className="font-label-eyebrow text-secondary-fixed text-xs tracking-widest uppercase block mb-1">
                Expedition Blueprint
              </span>
              <h3 className="font-headline-lg text-2xl font-bold tracking-tight mb-2">
                {selectedDestsData.map(d => d.name).join(' ➔ ')}
              </h3>
              <p className="font-body-sm text-xs text-surface-container-high/80 mb-6">
                Curated {durationDays}-Day itinerary tailored for {travelersCount} guest(s) with private chauffeur and boutique accommodations.
              </p>

              {/* Day Distribution Breakdown */}
              <div className="space-y-3 mb-6 pb-6 border-b border-surface-container-high/20">
                <span className="text-xs uppercase tracking-wider text-surface-container-high font-bold block">
                  Route Stays Allocation
                </span>
                {selectedDestsData.map((d, idx) => {
                  const daysAllocated = Math.max(1, Math.round(durationDays / selectedDestsData.length));
                  return (
                    <div key={d.id} className="flex items-center justify-between text-xs py-1">
                      <div className="flex items-center gap-2">
                        <span className="w-5 h-5 rounded-full bg-secondary-fixed text-secondary font-bold flex items-center justify-center text-[10px]">
                          {idx + 1}
                        </span>
                        <span>{d.name} ({d.state})</span>
                      </div>
                      <span className="text-secondary-fixed font-semibold">
                        ~{daysAllocated} Days · {d.bestTime}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* Budget Estimation */}
              <div className="bg-surface-container-lowest/10 backdrop-blur-md p-4 rounded-xl mb-6">
                <div className="flex items-baseline justify-between mb-1">
                  <span className="text-xs text-surface-container-high">Estimated Total Investment:</span>
                  <div className="text-right">
                    <span className="font-headline-xl text-2xl font-bold text-secondary-fixed">
                      ₹{totalCostINR.toLocaleString()}
                    </span>
                    <span className="text-xs text-surface-container-high block">
                      (~${totalCostUSD.toLocaleString()} USD)
                    </span>
                  </div>
                </div>
                <div className="pt-2 border-t border-surface-container-high/15 grid grid-cols-2 gap-2 text-[11px] text-surface-container-high/80">
                  <span>✓ Private AC Chauffeur transit</span>
                  <span>✓ Verified Heritage Stays</span>
                  <span>✓ Breakfast & native tours</span>
                  <span>✓ All monument entry tickets</span>
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-col gap-2.5">
                <button
                  onClick={() => onOpenConciergeWithPlan(planSummary)}
                  className="w-full py-3.5 rounded-xl bg-secondary text-on-secondary font-label-button text-sm hover:bg-secondary-container transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span className="material-symbols-outlined text-lg">send</span>
                  <span>Inquire with India Specialist</span>
                </button>

                <div className="flex gap-2">
                  <button
                    onClick={handleSave}
                    className="flex-1 py-2.5 rounded-lg bg-surface-container-lowest/15 hover:bg-surface-container-lowest/25 text-on-primary font-label-button text-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-base">
                      {savedSuccess ? 'check' : 'bookmark'}
                    </span>
                    <span>{savedSuccess ? 'Saved to Trips!' : 'Save Trip'}</span>
                  </button>

                  <button
                    onClick={handleCopy}
                    className="flex-1 py-2.5 rounded-lg bg-surface-container-lowest/15 hover:bg-surface-container-lowest/25 text-on-primary font-label-button text-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-base">
                      {copiedSuccess ? 'check' : 'content_copy'}
                    </span>
                    <span>{copiedSuccess ? 'Copied!' : 'Copy Summary'}</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Travel Advisory Note */}
            <div className="p-4 rounded-xl bg-surface-container-low border border-outline-variant/30 text-xs text-on-surface-variant flex items-start gap-3">
              <span className="material-symbols-outlined text-secondary text-lg mt-0.5 shrink-0">verified_user</span>
              <div>
                <span className="font-bold text-on-surface block">Govt. Certified Travel Assurance:</span>
                Every itinerary planned through RJ Traveller Guide is backed by licensed local drivers, verified haveli partners, and 24/7 on-ground emergency dispatch.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

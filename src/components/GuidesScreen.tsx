import React, { useState } from 'react';
import { TRAVEL_GUIDES, TravelGuide } from '../data/travelData';

interface GuidesScreenProps {
  onOpenGuideModal: (guide: TravelGuide) => void;
  onOpenConciergeWithGuide: (title: string) => void;
}

export const GuidesScreen: React.FC<GuidesScreenProps> = ({
  onOpenGuideModal,
  onOpenConciergeWithGuide,
}) => {
  const [selectedTag, setSelectedTag] = useState<string>('All');

  const tags = ['All', 'Heritage & Palaces', 'Coastal & Heritage', 'Alpine & Adventure', 'Backwaters & Wellness', 'High Altitude & Expedition', 'Spiritual & Culture'];

  const filteredGuides = selectedTag === 'All'
    ? TRAVEL_GUIDES
    : TRAVEL_GUIDES.filter(g => g.tag === selectedTag);

  return (
    <div className="w-full py-space-xl bg-surface-container-low min-h-screen">
      <div className="max-w-[1320px] mx-auto px-margin md:px-margin-md lg:px-margin-lg">
        
        {/* Screen Header */}
        <div className="text-center max-w-2xl mx-auto mb-space-xl">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="w-6 h-[2px] bg-secondary"></span>
            <span className="font-label-eyebrow text-secondary uppercase tracking-widest text-xs">
              Curated Field Reports
            </span>
            <span className="w-6 h-[2px] bg-secondary"></span>
          </div>
          <h1 className="font-headline-xl text-3xl md:text-5xl font-bold text-on-surface tracking-tight mb-3">
            In-Depth Travel Guides
          </h1>
          <p className="font-body-default text-on-surface-variant">
            Exhaustive, field-vetted day-by-day itineraries, transit connections, culinary recommendations, and cultural etiquette mapped across India.
          </p>
        </div>

        {/* Filter Tags */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8">
          {tags.map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                selectedTag === tag
                  ? 'bg-secondary text-on-secondary shadow-sm'
                  : 'bg-surface-container-lowest text-on-surface hover:bg-surface-container'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Guides Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
          {filteredGuides.map((guide) => (
            <article
              key={guide.id}
              className="bg-surface-container-lowest rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group border border-outline-variant/20"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-primary-container">
                <img
                  src={guide.heroImage}
                  alt={guide.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    (e.target as HTMLElement).style.display = 'none';
                  }}
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
                  <h3 className="font-headline-sm text-lg text-on-surface mb-2 group-hover:text-secondary transition-colors font-bold">
                    {guide.title}
                  </h3>
                  <p className="font-body-sm text-xs text-on-surface-variant mb-6 line-clamp-3 leading-relaxed">
                    {guide.subtitle}
                  </p>
                </div>

                <div className="pt-4 border-t border-outline-variant/20 flex items-center justify-between">
                  <button
                    onClick={() => onOpenGuideModal(guide)}
                    className="flex items-center gap-1.5 text-secondary font-label-button text-xs font-bold hover:underline cursor-pointer"
                  >
                    <span>Read Full Guide</span>
                    <span className="material-symbols-outlined text-base group-hover:translate-x-1 transition-transform">
                      arrow_forward
                    </span>
                  </button>

                  <button
                    onClick={() => onOpenConciergeWithGuide(guide.title)}
                    className="text-xs text-on-surface-variant hover:text-on-surface flex items-center gap-1 cursor-pointer"
                    title="Inquire about booking this circuit"
                  >
                    <span className="material-symbols-outlined text-sm">support_agent</span>
                    <span>Book Route</span>
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

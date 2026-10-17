import React, { useState, useMemo } from 'react';
import { DESTINATIONS, Destination } from '../data/travelData';

interface DestinationsScreenProps {
  onSelectDestination: (destId: string) => void;
  savedDestIds: string[];
  onToggleSave: (destId: string) => void;
  onOpenPlanner: (destId: string) => void;
}

export const DestinationsScreen: React.FC<DestinationsScreenProps> = ({
  onSelectDestination,
  savedDestIds,
  onToggleSave,
  onOpenPlanner,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [permitFilter, setPermitFilter] = useState<boolean | null>(null);

  const categories = [
    'All',
    'Royal',
    'Coast',
    'Alpine',
    'Wellness',
    'Lakes',
    'Sacred',
    'Adventure',
    'Highlands',
    'Island',
    'Spiritual'
  ];

  const filteredDestinations = useMemo(() => {
    return DESTINATIONS.filter((dest) => {
      const matchesSearch =
        dest.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        dest.state.toLowerCase().includes(searchQuery.toLowerCase()) ||
        dest.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
        dest.highlights.some(h => h.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesCat =
        selectedCategory === 'All' || dest.category === selectedCategory;

      const matchesPermit =
        permitFilter === null || dest.permitRequired === permitFilter;

      return matchesSearch && matchesCat && matchesPermit;
    });
  }, [searchQuery, selectedCategory, permitFilter]);

  return (
    <div className="w-full py-space-xl bg-surface">
      <div className="max-w-[1320px] mx-auto px-margin md:px-margin-md lg:px-margin-lg">
        
        {/* Screen Header */}
        <div className="text-center max-w-3xl mx-auto mb-space-xl">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="w-6 h-[2px] bg-secondary"></span>
            <span className="font-label-eyebrow text-secondary uppercase tracking-widest text-xs">
              28 States & Union Territories
            </span>
            <span className="w-6 h-[2px] bg-secondary"></span>
          </div>
          <h1 className="font-headline-xl text-3xl md:text-5xl font-bold text-on-surface tracking-tight mb-3">
            Explore All India Destinations
          </h1>
          <p className="font-body-default text-on-surface-variant">
            From imperial Rajput fortresses to trans-Himalayan monasteries and emerald backwaters, find your ideal Indian sanctuary.
          </p>
        </div>

        {/* Filter Controls Bar */}
        <div className="bg-surface-container-lowest p-6 rounded-2xl shadow-sm border border-outline-variant/30 mb-8 space-y-4">
          
          {/* Search Input Row */}
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <div className="relative flex-1 w-full">
              <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline">
                search
              </span>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by city, state, experience (e.g. 'Jaipur', 'temple', 'tea', 'snow')..."
                className="w-full pl-11 pr-4 py-3 rounded-xl bg-surface-container-low text-on-surface text-sm focus:outline-none focus:ring-2 focus:ring-secondary border border-outline-variant/30"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-outline hover:text-on-surface"
                >
                  <span className="material-symbols-outlined text-sm">close</span>
                </button>
              )}
            </div>

            {/* Quick Permit Filter Toggle */}
            <div className="flex items-center gap-2 self-start sm:self-auto shrink-0 text-xs">
              <button
                onClick={() => setPermitFilter(permitFilter === null ? false : null)}
                className={`px-3 py-2.5 rounded-xl border transition-colors cursor-pointer ${
                  permitFilter === false
                    ? 'bg-secondary-fixed text-secondary border-secondary'
                    : 'bg-surface-container-low border-outline-variant/30 text-on-surface hover:bg-surface-container'
                }`}
              >
                No Permits Only
              </button>
              <button
                onClick={() => setPermitFilter(permitFilter === true ? null : true)}
                className={`px-3 py-2.5 rounded-xl border transition-colors cursor-pointer ${
                  permitFilter === true
                    ? 'bg-amber-100 text-amber-900 border-amber-400'
                    : 'bg-surface-container-low border-outline-variant/30 text-on-surface hover:bg-surface-container'
                }`}
              >
                Passes & Permits (ILP)
              </button>
            </div>
          </div>

          {/* Category Filter Buttons */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 pt-1">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-secondary text-on-secondary shadow-sm'
                    : 'bg-surface-container-low text-on-surface hover:bg-surface-container'
                }`}
              >
                {cat === 'All' ? 'All Regions' : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Results Counter */}
        <div className="flex items-center justify-between mb-6 text-xs text-on-surface-variant">
          <span>Showing {filteredDestinations.length} curated destinations</span>
          {(selectedCategory !== 'All' || searchQuery || permitFilter !== null) && (
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
                setPermitFilter(null);
              }}
              className="text-secondary hover:underline font-semibold cursor-pointer"
            >
              Reset Filters
            </button>
          )}
        </div>

        {/* Destinations Grid */}
        {filteredDestinations.length === 0 ? (
          <div className="text-center py-16 bg-surface-container-low rounded-2xl p-8 border border-outline-variant/30">
            <span className="material-symbols-outlined text-4xl text-outline mb-2">travel_explore</span>
            <h3 className="font-headline-sm text-lg text-on-surface font-semibold mb-1">
              No matching destinations found
            </h3>
            <p className="text-sm text-on-surface-variant max-w-sm mx-auto mb-4">
              Try searching with another keyword or resetting the category filter.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
                setPermitFilter(null);
              }}
              className="px-5 py-2 rounded-lg bg-secondary text-on-secondary text-xs font-semibold cursor-pointer"
            >
              View All Destinations
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
            {filteredDestinations.map((dest) => {
              const isSaved = savedDestIds.includes(dest.id);
              return (
                <div
                  key={dest.id}
                  className="bg-surface-container-lowest rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-outline-variant/20 flex flex-col group"
                >
                  {/* Card Visual Header */}
                  <div className="relative aspect-[16/11] overflow-hidden bg-primary-container">
                    <img
                      src={dest.heroImage}
                      alt={dest.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      onError={(e) => {
                        (e.target as HTMLElement).style.display = 'none';
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary-container/80 via-primary-container/20 to-transparent"></div>

                    {/* Badge top-left */}
                    <span className="absolute top-4 left-4 font-label-eyebrow text-[10px] tracking-wider uppercase px-2.5 py-1 rounded-full bg-surface-container-lowest/90 backdrop-blur-md text-secondary font-bold">
                      {dest.badge}
                    </span>

                    {/* Bookmark Toggle top-right */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onToggleSave(dest.id);
                      }}
                      className="absolute top-4 right-4 w-9 h-9 rounded-full bg-surface-container-lowest/80 backdrop-blur-md hover:bg-surface-container-lowest text-on-surface flex items-center justify-center transition-colors cursor-pointer"
                      title={isSaved ? 'Remove from wishlist' : 'Save to wishlist'}
                    >
                      <span className={`material-symbols-outlined text-lg ${isSaved ? 'text-secondary' : 'text-on-surface'}`}>
                        {isSaved ? 'bookmark_added' : 'bookmark_add'}
                      </span>
                    </button>

                    {/* Bottom Title on Image */}
                    <div className="absolute bottom-4 left-4 right-4 text-on-primary">
                      <span className="text-[11px] uppercase tracking-wider text-secondary-fixed block">
                        {dest.state}
                      </span>
                      <h3 className="font-headline-lg text-2xl font-bold tracking-tight">
                        {dest.name}
                      </h3>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-space-lg flex flex-col flex-1 justify-between">
                    <div>
                      <p className="font-body-sm text-sm text-on-surface-variant line-clamp-2 mb-4">
                        {dest.tagline}
                      </p>

                      <div className="grid grid-cols-2 gap-2 pt-2 pb-3 border-t border-outline-variant/20 text-xs">
                        <div>
                          <span className="text-on-surface-variant block text-[10px] uppercase font-bold">Best Season</span>
                          <span className="font-semibold text-on-surface">{dest.bestTime}</span>
                        </div>
                        <div>
                          <span className="text-on-surface-variant block text-[10px] uppercase font-bold">Duration</span>
                          <span className="font-semibold text-on-surface">{dest.idealDuration}</span>
                        </div>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="pt-4 border-t border-outline-variant/20 flex items-center gap-2">
                      <button
                        onClick={() => onSelectDestination(dest.id)}
                        className="flex-1 py-2.5 rounded-lg bg-secondary text-on-secondary font-label-button text-xs font-semibold hover:bg-secondary-container transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                      >
                        <span>Inspect Region</span>
                        <span className="material-symbols-outlined text-sm">east</span>
                      </button>

                      <button
                        onClick={() => onOpenPlanner(dest.id)}
                        className="p-2.5 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface transition-colors cursor-pointer"
                        title="Plan Itinerary with this Destination"
                      >
                        <span className="material-symbols-outlined text-base">calendar_add_on</span>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

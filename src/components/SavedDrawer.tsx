import React from 'react';
import { DESTINATIONS } from '../data/travelData';

export interface SavedTrip {
  id: string;
  name: string;
  destIds: string[];
  days: number;
  date: string;
}

interface SavedDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  savedDestIds: string[];
  onRemoveSavedDest: (id: string) => void;
  onSelectDestination: (id: string) => void;
  savedTrips: SavedTrip[];
  onRemoveTrip: (id: string) => void;
  onOpenPlannerWithDests: (destIds: string[]) => void;
}

export const SavedDrawer: React.FC<SavedDrawerProps> = ({
  isOpen,
  onClose,
  savedDestIds,
  onRemoveSavedDest,
  onSelectDestination,
  savedTrips,
  onRemoveTrip,
  onOpenPlannerWithDests,
}) => {
  if (!isOpen) return null;

  const savedDests = DESTINATIONS.filter((d) => savedDestIds.includes(d.id));

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-primary/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-surface-container-lowest shadow-2xl flex flex-col border-l border-outline-variant/30">
          
          {/* Header */}
          <div className="p-6 border-b border-outline-variant/20 flex items-center justify-between bg-surface-container-low">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-secondary text-2xl">bookmark</span>
              <div>
                <h2 className="font-headline-sm text-base text-on-surface font-bold">
                  Saved Trips & Wishlist
                </h2>
                <span className="text-xs text-on-surface-variant">
                  {savedDestIds.length} places · {savedTrips.length} custom circuits
                </span>
              </div>
            </div>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-surface-container hover:bg-surface-container-high flex items-center justify-center text-on-surface transition-colors cursor-pointer"
            >
              <span className="material-symbols-outlined text-lg">close</span>
            </button>
          </div>

          {/* Drawer Body */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            
            {/* Custom Saved Trips Section */}
            {savedTrips.length > 0 && (
              <div>
                <span className="font-label-eyebrow text-secondary uppercase text-xs block mb-3">
                  Custom Saved Expeditions
                </span>
                <div className="space-y-3">
                  {savedTrips.map((trip) => (
                    <div
                      key={trip.id}
                      className="p-4 rounded-xl bg-surface-container-low border border-outline-variant/30 flex flex-col justify-between"
                    >
                      <div className="flex items-start justify-between">
                        <div>
                          <span className="font-bold text-sm text-on-surface block">{trip.name}</span>
                          <span className="text-xs text-on-surface-variant">
                            {trip.days} Days · Saved on {trip.date}
                          </span>
                        </div>
                        <button
                          onClick={() => onRemoveTrip(trip.id)}
                          className="text-outline hover:text-error transition-colors p-1"
                          title="Remove trip"
                        >
                          <span className="material-symbols-outlined text-base">delete</span>
                        </button>
                      </div>
                      <div className="mt-3 pt-2 border-t border-outline-variant/20 flex items-center justify-end">
                        <button
                          onClick={() => {
                            onClose();
                            onOpenPlannerWithDests(trip.destIds);
                          }}
                          className="text-xs font-bold text-secondary hover:underline flex items-center gap-1 cursor-pointer"
                        >
                          <span>Open in Planner</span>
                          <span className="material-symbols-outlined text-xs">arrow_forward</span>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Bookmarked Destinations */}
            <div>
              <span className="font-label-eyebrow text-secondary uppercase text-xs block mb-3">
                Saved Destinations ({savedDests.length})
              </span>

              {savedDests.length === 0 ? (
                <div className="text-center py-10 bg-surface-container-low rounded-xl p-4 border border-outline-variant/20">
                  <span className="material-symbols-outlined text-3xl text-outline mb-1">bookmarks</span>
                  <p className="text-xs text-on-surface-variant">
                    No destinations bookmarked yet. Click the bookmark icon on any card to save your favorites!
                  </p>
                </div>
              ) : (
                <div className="space-y-3">
                  {savedDests.map((dest) => (
                    <div
                      key={dest.id}
                      className="flex items-center gap-3 p-3 rounded-xl bg-surface-container-low border border-outline-variant/20 hover:border-secondary transition-colors"
                    >
                      <img
                        src={dest.heroImage}
                        alt={dest.name}
                        className="w-16 h-16 rounded-lg object-cover shrink-0 bg-primary-container"
                        onError={(e) => {
                          (e.target as HTMLElement).style.display = 'none';
                        }}
                      />
                      <div className="flex-1 min-w-0">
                        <span className="text-[10px] text-secondary font-bold uppercase tracking-wide block">
                          {dest.badge}
                        </span>
                        <h4 className="font-headline-sm text-sm font-bold text-on-surface truncate">
                          {dest.name}
                        </h4>
                        <span className="text-xs text-on-surface-variant truncate block">
                          {dest.state} · {dest.idealDuration}
                        </span>
                      </div>
                      <div className="flex flex-col gap-1 items-end">
                        <button
                          onClick={() => {
                            onClose();
                            onSelectDestination(dest.id);
                          }}
                          className="p-1.5 rounded-lg bg-surface-container hover:bg-secondary hover:text-on-secondary transition-colors text-on-surface cursor-pointer"
                          title="View Details"
                        >
                          <span className="material-symbols-outlined text-sm">visibility</span>
                        </button>
                        <button
                          onClick={() => onRemoveSavedDest(dest.id)}
                          className="p-1.5 rounded-lg hover:text-error text-outline transition-colors cursor-pointer"
                          title="Remove from saved"
                        >
                          <span className="material-symbols-outlined text-sm">close</span>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Drawer Footer Actions */}
          {savedDests.length > 0 && (
            <div className="p-6 bg-surface-container-low border-t border-outline-variant/20">
              <button
                onClick={() => {
                  onClose();
                  onOpenPlannerWithDests(savedDestIds);
                }}
                className="w-full py-3 rounded-xl bg-secondary text-on-secondary font-label-button text-xs font-bold hover:bg-secondary-container transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
              >
                <span className="material-symbols-outlined text-base">route</span>
                <span>Build Combined Itinerary with Saved</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

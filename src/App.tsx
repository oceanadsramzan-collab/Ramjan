import { useState, useEffect } from 'react';
import { DESTINATIONS, TRAVEL_GUIDES, Destination, TravelGuide } from './data/travelData';
import { Header } from './components/Header';
import { HomeScreen } from './components/HomeScreen';
import { DestinationsScreen } from './components/DestinationsScreen';
import { GuidesScreen } from './components/GuidesScreen';
import { TripPlannerView } from './components/TripPlannerView';
import { DestinationModal } from './components/DestinationModal';
import { GuideModal } from './components/GuideModal';
import { SavedDrawer, SavedTrip } from './components/SavedDrawer';
import { ConciergeModal } from './components/ConciergeModal';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { Footer } from './components/Footer';

export default function App() {
  const [activeScreen, setActiveScreen] = useState<'home' | 'destinations' | 'guides' | 'planner'>('home');
  const [activeDestModalId, setActiveDestModalId] = useState<string | null>(null);
  const [activeGuideModal, setActiveGuideModal] = useState<TravelGuide | null>(null);
  const [conciergeOpen, setConciergeOpen] = useState(false);
  const [conciergeTopic, setConciergeTopic] = useState('');
  const [savedDrawerOpen, setSavedDrawerOpen] = useState(false);
  const [plannerPrefillDest, setPlannerPrefillDest] = useState<string | undefined>(undefined);

  // LocalStorage persistence for saved destinations
  const [savedDestIds, setSavedDestIds] = useState<string[]>(() => {
    try {
      const stored = localStorage.getItem('rj_saved_destinations');
      return stored ? JSON.parse(stored) : ['jaipur', 'kerala'];
    } catch {
      return ['jaipur', 'kerala'];
    }
  });

  // LocalStorage persistence for custom saved trips
  const [savedTrips, setSavedTrips] = useState<SavedTrip[]>(() => {
    try {
      const stored = localStorage.getItem('rj_saved_trips');
      return stored ? JSON.parse(stored) : [
        {
          id: 'sample-trip-1',
          name: 'Golden Triangle & Royal Havelis',
          destIds: ['jaipur', 'udaipur'],
          days: 7,
          date: 'Oct 2025'
        }
      ];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('rj_saved_destinations', JSON.stringify(savedDestIds));
    } catch {
      // Ignore storage errors in sandbox
    }
  }, [savedDestIds]);

  useEffect(() => {
    try {
      localStorage.setItem('rj_saved_trips', JSON.stringify(savedTrips));
    } catch {
      // Ignore storage errors in sandbox
    }
  }, [savedTrips]);

  const handleToggleSaveDest = (destId: string) => {
    setSavedDestIds((prev) =>
      prev.includes(destId) ? prev.filter((id) => id !== destId) : [...prev, destId]
    );
  };

  const handleSaveTrip = (name: string, destIds: string[], days: number) => {
    const newTrip: SavedTrip = {
      id: `trip-${Date.now()}`,
      name,
      destIds,
      days,
      date: new Date().toLocaleDateString('en-US', { month: 'short', year: 'numeric' }),
    };
    setSavedTrips((prev) => [newTrip, ...prev]);
  };

  const handleRemoveTrip = (tripId: string) => {
    setSavedTrips((prev) => prev.filter((t) => t.id !== tripId));
  };

  const handleOpenDestination = (destId: string) => {
    setActiveDestModalId(destId);
  };

  const handlePlanTripWithDest = (destId: string) => {
    setActiveDestModalId(null);
    setPlannerPrefillDest(destId);
    setActiveScreen('planner');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenGuideFromDest = (destId: string) => {
    setActiveDestModalId(null);
    const matchingGuide = TRAVEL_GUIDES.find((g) => g.destinationId === destId) || TRAVEL_GUIDES[0];
    setActiveGuideModal(matchingGuide);
  };

  const handleOpenConcierge = (topic = '') => {
    setConciergeTopic(topic);
    setConciergeOpen(true);
  };

  const currentDestination = DESTINATIONS.find((d) => d.id === activeDestModalId) || null;

  return (
    <div className="min-h-screen bg-background font-body-default text-body-default text-on-surface antialiased flex flex-col selection:bg-secondary-fixed selection:text-secondary">
      {/* Top Navigation */}
      <Header
        activeScreen={activeScreen}
        setActiveScreen={(screen) => {
          setActiveScreen(screen);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onOpenConcierge={() => handleOpenConcierge()}
        onOpenSaved={() => setSavedDrawerOpen(true)}
        savedCount={savedDestIds.length + savedTrips.length}
        onSelectDestination={handleOpenDestination}
      />

      {/* Main Content Area */}
      <main className="w-full pt-20 bg-background flex-1">
        {activeScreen === 'home' && (
          <HomeScreen
            onSelectDestination={handleOpenDestination}
            onOpenGuideModal={(guide) => setActiveGuideModal(guide)}
            onNavigateToDestinations={() => {
              setActiveScreen('destinations');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onNavigateToGuides={() => {
              setActiveScreen('guides');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onOpenConcierge={() => handleOpenConcierge('India Subcontinent Tour')}
          />
        )}

        {activeScreen === 'destinations' && (
          <DestinationsScreen
            onSelectDestination={handleOpenDestination}
            savedDestIds={savedDestIds}
            onToggleSave={handleToggleSaveDest}
            onOpenPlanner={handlePlanTripWithDest}
          />
        )}

        {activeScreen === 'guides' && (
          <GuidesScreen
            onOpenGuideModal={(guide) => setActiveGuideModal(guide)}
            onOpenConciergeWithGuide={(title) => handleOpenConcierge(title)}
          />
        )}

        {activeScreen === 'planner' && (
          <TripPlannerView
            initialDestinationId={plannerPrefillDest}
            onOpenConciergeWithPlan={(plan) => handleOpenConcierge(plan)}
            onSaveTrip={handleSaveTrip}
          />
        )}
      </main>

      {/* Global Footer */}
      <Footer
        onSelectDestination={handleOpenDestination}
        onNavigateToGuides={() => {
          setActiveScreen('guides');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onOpenConcierge={() => handleOpenConcierge()}
        onNavigateHomeSection={(sectionId) => {
          setActiveScreen('home');
          setTimeout(() => {
            const el = document.getElementById(sectionId);
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }, 50);
        }}
      />

      {/* Destination Detail Modal */}
      <DestinationModal
        destination={currentDestination}
        onClose={() => setActiveDestModalId(null)}
        isSaved={currentDestination ? savedDestIds.includes(currentDestination.id) : false}
        onToggleSave={handleToggleSaveDest}
        onOpenGuide={handleOpenGuideFromDest}
        onPlanTrip={handlePlanTripWithDest}
      />

      {/* Full Travel Guide Modal Reader */}
      <GuideModal
        guide={activeGuideModal}
        onClose={() => setActiveGuideModal(null)}
        onInquireConcierge={(title) => {
          setActiveGuideModal(null);
          handleOpenConcierge(title);
        }}
      />

      {/* Saved Trips & Wishlist Drawer */}
      <SavedDrawer
        isOpen={savedDrawerOpen}
        onClose={() => setSavedDrawerOpen(false)}
        savedDestIds={savedDestIds}
        onRemoveSavedDest={handleToggleSaveDest}
        onSelectDestination={handleOpenDestination}
        savedTrips={savedTrips}
        onRemoveTrip={handleRemoveTrip}
        onOpenPlannerWithDests={(destIds) => {
          setPlannerPrefillDest(destIds[0]);
          setActiveScreen('planner');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />

      {/* Concierge Inquiry & Help Modal */}
      <ConciergeModal
        isOpen={conciergeOpen}
        onClose={() => setConciergeOpen(false)}
        initialTopic={conciergeTopic}
      />

      {/* Floating Action Bar (Phone Call: 9835697455 & WhatsApp: 8936877362) */}
      <FloatingWhatsApp whatsappNumber="918936877362" phoneNumber="+919835697455" />
    </div>
  );
}

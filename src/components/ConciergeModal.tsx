import React, { useState } from 'react';
import { DESTINATIONS } from '../data/travelData';

interface ConciergeModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTopic?: string;
}

export const ConciergeModal: React.FC<ConciergeModalProps> = ({
  isOpen,
  onClose,
  initialTopic,
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [selectedDest, setSelectedDest] = useState(initialTopic || 'Jaipur');
  const [travelers, setTravelers] = useState('2');
  const [dates, setDates] = useState('');
  const [notes, setNotes] = useState(initialTopic ? `Inquiring regarding: ${initialTopic}` : '');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const whatsappMessage = encodeURIComponent(
    `Hello RJ Traveller Guide! I would like to consult with a regional specialist. Name: ${name || 'Traveller'}, Destination: ${selectedDest}, Guests: ${travelers}, Dates: ${dates || 'Flexible'}.`
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-primary/75 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-xl bg-surface-container-lowest rounded-2xl shadow-2xl overflow-hidden border border-outline-variant/30 flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 bg-primary-container text-on-primary flex items-start justify-between relative overflow-hidden">
          <div className="relative z-10">
            <span className="font-label-eyebrow text-secondary-fixed text-xs tracking-widest uppercase block mb-1">
              Govt. Registered Specialist Concierge
            </span>
            <h2 className="font-headline-lg text-2xl font-bold tracking-tight">
              Connect with RJ Traveller Guide
            </h2>
            <p className="font-body-sm text-xs text-surface-container-high/80 mt-1">
              Speak directly with native itinerary curators for bespoke permits, royal haveli reservations, and private chauffeurs.
            </p>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-surface-container-lowest/15 hover:bg-surface-container-lowest/25 text-on-primary flex items-center justify-center transition-colors cursor-pointer shrink-0 ml-4 z-20"
          >
            <span className="material-symbols-outlined text-lg">close</span>
          </button>
        </div>

        {/* Quick Contact Ribbon */}
        <div className="px-6 py-3 bg-surface-container-low border-b border-outline-variant/20 flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-secondary text-base">call</span>
            <a href="tel:+919835697455" className="font-bold text-on-surface hover:text-secondary">
              +91 9835697455
            </a>
          </div>
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-secondary text-base">mail</span>
            <a href="mailto:info@rjtravellerguide.in" className="font-bold text-on-surface hover:text-secondary">
              info@rjtravellerguide.in
            </a>
          </div>
          <a
            href={`https://wa.me/918936877362?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-emerald-800 bg-emerald-100 hover:bg-emerald-200 px-3 py-1.5 rounded-lg font-bold transition-colors shadow-xs"
          >
            <span className="material-symbols-outlined text-sm text-[#25D366]">chat</span>
            <span>WhatsApp (+91 8936877362)</span>
          </a>
        </div>

        {/* Form Body */}
        <div className="p-6 overflow-y-auto max-h-[70vh]">
          {submitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                <span className="material-symbols-outlined text-3xl">check_circle</span>
              </div>
              <h3 className="font-headline-md text-xl font-bold text-on-surface">
                Expedition Request Received!
              </h3>
              <p className="font-body-sm text-sm text-on-surface-variant max-w-sm mx-auto leading-relaxed">
                Thank you, <span className="font-bold text-on-surface">{name || 'Traveller'}</span>. An RJ India native route specialist will contact you within 2 hours at <span className="font-bold text-on-surface">{email}</span>.
              </p>
              <div className="p-4 rounded-xl bg-surface-container-low text-xs text-on-surface-variant max-w-md mx-auto">
                For immediate dispatch, you can also connect instantly on WhatsApp at <a href="https://wa.me/918936877362" target="_blank" rel="noopener noreferrer" className="font-bold text-emerald-700 hover:underline">+91 8936877362</a>.
              </div>
              <button
                onClick={onClose}
                className="px-6 py-2.5 rounded-lg bg-secondary text-on-secondary font-label-button text-xs font-bold hover:bg-secondary-container transition-colors cursor-pointer"
              >
                Close Window
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-on-surface uppercase mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Vikramaditya Rathore"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-surface-container-low text-on-surface text-sm border border-outline-variant/30 focus:outline-none focus:ring-2 focus:ring-secondary"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-on-surface uppercase mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@domain.com"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-surface-container-low text-on-surface text-sm border border-outline-variant/30 focus:outline-none focus:ring-2 focus:ring-secondary"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-on-surface uppercase mb-1">
                    Phone / WhatsApp Number
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 or International with country code"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-surface-container-low text-on-surface text-sm border border-outline-variant/30 focus:outline-none focus:ring-2 focus:ring-secondary"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-on-surface uppercase mb-1">
                    Primary Region of Interest
                  </label>
                  <select
                    value={selectedDest}
                    onChange={(e) => setSelectedDest(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-surface-container-low text-on-surface text-sm border border-outline-variant/30 focus:outline-none focus:ring-2 focus:ring-secondary cursor-pointer"
                  >
                    {DESTINATIONS.map((d) => (
                      <option key={d.id} value={d.name}>
                        {d.name} ({d.state})
                      </option>
                    ))}
                    <option value="Pan-India Custom">Multi-State Custom Circuit</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-on-surface uppercase mb-1">
                    Estimated Travel Month / Dates
                  </label>
                  <input
                    type="text"
                    value={dates}
                    onChange={(e) => setDates(e.target.value)}
                    placeholder="e.g. November 2025 (2 weeks)"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-surface-container-low text-on-surface text-sm border border-outline-variant/30 focus:outline-none focus:ring-2 focus:ring-secondary"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-on-surface uppercase mb-1">
                    Number of Travellers
                  </label>
                  <select
                    value={travelers}
                    onChange={(e) => setTravelers(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-surface-container-low text-on-surface text-sm border border-outline-variant/30 focus:outline-none focus:ring-2 focus:ring-secondary cursor-pointer"
                  >
                    <option value="1">Solo Explorer (1)</option>
                    <option value="2">Couple / Pair (2)</option>
                    <option value="3-4">Small Family (3-4)</option>
                    <option value="5+">Group Expedition (5+)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-on-surface uppercase mb-1">
                  Specific Requirements & Questions
                </label>
                <textarea
                  rows={3}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Tell us about your travel pace, stay preferences (royal havelis, luxury houseboats), permit assistance, or dietary requirements..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-surface-container-low text-on-surface text-sm border border-outline-variant/30 focus:outline-none focus:ring-2 focus:ring-secondary"
                ></textarea>
              </div>

              <div className="pt-2 flex items-center justify-between">
                <span className="text-[11px] text-on-surface-variant flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm text-secondary">lock</span>
                  <span>Zero spam guaranteed. Confidential advisory.</span>
                </span>
                <button
                  type="submit"
                  className="px-7 py-3 rounded-xl bg-secondary text-on-secondary font-label-button text-xs font-bold hover:bg-secondary-container transition-all shadow-md cursor-pointer"
                >
                  Request Itinerary Consultation
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

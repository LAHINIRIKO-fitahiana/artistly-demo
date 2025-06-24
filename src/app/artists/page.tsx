// src/app/artists/page.tsx
'use client';

import { useArtistContext } from '@/context/ArtistContext';
import { useState, useMemo } from 'react';
import ArtistCard from '@/components/ArtistCard';

export default function ArtistListPage() {
  const { artists } = useArtistContext();

  // Dynamic categories and locations
  const categories = useMemo(
    () => Array.from(new Set(artists.map((a) => a.category))),
    [artists]
  );
  const locations = useMemo(
    () => Array.from(new Set(artists.map((a) => a.location))),
    [artists]
  );

  const [category, setCategory] = useState('');
  const [location, setLocation] = useState('');

  // Filtering
  const filtered = artists.filter((artist) =>
    (category === '' || artist.category === category) &&
    (location === '' || artist.location === location)
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-800 via-pink-600 to-pink-400 py-10">
      <div className="max-w-6xl mx-auto bg-white/90 rounded-2xl shadow-2xl p-8">
        <h1 className="text-3xl font-bold mb-8 text-pink-700 text-center">Artist List</h1>
        <div className="flex flex-wrap gap-4 mb-10 justify-center">
          <select
            className="border border-pink-300 bg-white rounded-full px-4 py-2 shadow focus:outline-none focus:ring-2 focus:ring-pink-500"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">All Categories</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
          <select
            className="border border-pink-300 bg-white rounded-full px-4 py-2 shadow focus:outline-none focus:ring-2 focus:ring-pink-500"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          >
            <option value="">All Cities</option>
            {locations.map((loc) => (
              <option key={loc} value={loc}>{loc}</option>
            ))}
          </select>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {filtered.length === 0 ? (
            <div className="col-span-full text-center text-gray-500 text-lg">
              No artist found for this filter.
            </div>
          ) : (
            filtered.map((artist) => (
              <ArtistCard key={artist.id} artist={artist} />
            ))
          )}
        </div>
      </div>
    </div>
  );
}

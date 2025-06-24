// src/context/ArtistContext.tsx
'use client';
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type Artist = {
  id: number;
  name: string;
  category: string;
  location: string;
  price: number;
  image?: string;
};

type ArtistContextType = {
  artists: Artist[];
  addArtist: (artist: Artist) => void;
};

const ArtistContext = createContext<ArtistContextType | undefined>(undefined);

const STORAGE_KEY = 'artistly-artists';

export function ArtistProvider({ children }: { children: ReactNode }) {
  const [artists, setArtists] = useState<Artist[]>([]);

  // Load from localStorage or JSON mock
  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      setArtists(JSON.parse(stored));
    } else {
      import('@/data/artists.json').then((module) => {
        setArtists(module.default);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(module.default));
      });
    }
  }, []);

  // Save to localStorage on change
  useEffect(() => {
    if (artists.length > 0) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(artists));
    }
  }, [artists]);

  const addArtist = (artist: Artist) => {
    setArtists((prev) => [...prev, artist]);
  };

  return (
    <ArtistContext.Provider value={{ artists, addArtist }}>
      {children}
    </ArtistContext.Provider>
  );
}

export function useArtistContext() {
  const context = useContext(ArtistContext);
  if (!context) {
    throw new Error('useArtistContext must be used within an ArtistProvider');
  }
  return context;
}

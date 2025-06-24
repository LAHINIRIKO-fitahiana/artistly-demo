'use client';
import React from "react";
import { useArtistContext } from '@/context/ArtistContext';
import Table from '@/components/Table';

export default function Dashboard() {
  const { artists } = useArtistContext();

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-800 via-pink-600 to-pink-400 flex items-center justify-center py-10">
      <div className="w-full max-w-5xl bg-white/90 rounded-2xl shadow-2xl p-8">
        <h1 className="text-3xl font-bold mb-4 text-pink-700 text-center">Dashboard</h1>
        <p className="mb-6 text-center text-gray-700">Welcome to the artist management dashboard.</p>
        <h2 className="text-xl font-semibold mb-2 text-purple-700">Manage Artists</h2>
        <p className="mb-6 text-gray-600">You can view artist profiles from here.</p>
        <div className="overflow-x-auto">
          <Table data={artists} />
        </div>
        {/* Additional dashboard functionalities can be added here */}
      </div>
    </div>
  );
}
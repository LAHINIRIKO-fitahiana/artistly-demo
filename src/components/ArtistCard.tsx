import { Artist } from '@/context/ArtistContext';

export default function ArtistCard({ artist }: { artist: Artist }) {
  return (
    <div className="border rounded-lg p-4 shadow hover:shadow-md transition">
      {artist.image && (
        <img
          src={artist.image}
          alt={artist.name}
          className="w-full h-48 object-cover mb-2 rounded"
        />
      )}
      <h2 className="text-xl font-semibold">{artist.name}</h2>
      <p className="text-sm text-gray-500">{artist.category}</p>
      <p className="text-sm text-gray-500">{artist.location}</p>
      <p className="text-sm text-gray-700 mt-2">Fee: €{artist.price}</p>
    </div>
  );
}
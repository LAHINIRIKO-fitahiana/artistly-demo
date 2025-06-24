import { Artist } from '@/context/ArtistContext';

export default function Table({ data }: { data: Artist[] }) {
  return (
    <table className="w-full border">
      <thead>
        <tr>
          <th className="border px-2 py-1">Nom</th>
          <th className="border px-2 py-1">Catégorie</th>
          <th className="border px-2 py-1">Ville</th>
          <th className="border px-2 py-1">Tarif (€)</th>
        </tr>
      </thead>
      <tbody>
        {data.map((artist) => (
          <tr key={artist.id}>
            <td className="border px-2 py-1">{artist.name}</td>
            <td className="border px-2 py-1">{artist.category}</td>
            <td className="border px-2 py-1">{artist.location}</td>
            <td className="border px-2 py-1">{artist.price}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
type Props = {
  categories: string[];
  locations: string[];
  category: string;
  setCategory: (cat: string) => void;
  location: string;
  setLocation: (loc: string) => void;
};

export default function FilterBlock({
  categories,
  locations,
  category,
  setCategory,
  location,
  setLocation,
}: Props) {
  return (
    <div className="flex flex-wrap gap-4 mb-6">
      <select
        className="border p-2 rounded"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="">Toutes catégories</option>
        {categories.map((cat) => (
          <option key={cat} value={cat}>{cat}</option>
        ))}
      </select>
      <select
        className="border p-2 rounded"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      >
        <option value="">Toutes villes</option>
        {locations.map((loc) => (
          <option key={loc} value={loc}>{loc}</option>
        ))}
      </select>
    </div>
  );
}
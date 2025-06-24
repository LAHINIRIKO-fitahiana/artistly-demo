import { UseFormRegister, FieldErrors } from 'react-hook-form';

type Props = {
  register: UseFormRegister<any>;
  errors: FieldErrors<any>;
  categories: string[];
  languages: string[];
};

export default function FormSections({ register, errors, categories, languages }: Props) {
  return (
    <>
      <div>
        <label className="block mb-1 font-medium">Name</label>
        <input {...register('name')} className="border p-2 rounded w-full" />
        {typeof errors.name?.message === 'string' && (
          <p className="text-red-500 text-sm">{errors.name.message}</p>
        )}
      </div>
      <div>
        <label className="block mb-1 font-medium">Bio</label>
        <textarea {...register('bio')} className="border p-2 rounded w-full" />
        {typeof errors.bio?.message === 'string' && (
          <p className="text-red-500 text-sm">{errors.bio.message}</p>
        )}
      </div>
      <div>
        <label className="block mb-1 font-medium">Category</label>
        {categories.map((cat) => (
          <label key={cat} className="block text-sm">
            <input
              type="checkbox"
              value={cat}
              {...register('category')}
              className="mr-2"
            />
            {cat}
          </label>
        ))}
        {typeof errors.category?.message === 'string' && (
          <p className="text-red-500 text-sm">{errors.category.message}</p>
        )}
      </div>
      <div>
        <label className="block mb-1 font-medium">Languages Spoken</label>
        {languages.map((lang) => (
          <label key={lang} className="block text-sm">
            <input
              type="checkbox"
              value={lang}
              {...register('languages')}
              className="mr-2"
            />
            {lang}
          </label>
        ))}
        {typeof errors.languages?.message === 'string' && (
          <p className="text-red-500 text-sm">{errors.languages.message}</p>
        )}
      </div>
      <div>
        <label className="block mb-1 font-medium">Fee Range (€)</label>
        <select {...register('fee')} className="border p-2 rounded w-full">
          <option value="">Select...</option>
          <option value="0-100">0 - 100 €</option>
          <option value="101-200">101 - 200 €</option>
          <option value="201-300">201 - 300 €</option>
          <option value="300+">300 € and above</option>
        </select>
        {typeof errors.fee?.message === 'string' && (
          <p className="text-red-500 text-sm">{errors.fee.message}</p>
        )}
      </div>
      <div>
        <label className="block mb-1 font-medium">Location</label>
        <input {...register('location')} className="border p-2 rounded w-full" />
        {typeof errors.location?.message === 'string' && (
          <p className="text-red-500 text-sm">{errors.location.message}</p>
        )}
      </div>
      <div>
        <label className="block mb-1 font-medium">Profile Image (optional)</label>
        <input type="file" {...register('profileImage')} />
      </div>
    </>
  );
}
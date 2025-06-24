'use client';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { artistSchema } from '@/utils/formValidation';
import { useArtistContext } from '@/context/ArtistContext';
import FormSections from '@/components/FormSections';

const categories = ['DJ', 'Singer', 'Dancer', 'Comedian'];
const languages = ['English', 'French', 'Malagasy'];

export default function ArtistOnboardingPage() {
  const { addArtist } = useArtistContext();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({
    resolver: yupResolver(artistSchema),
  });

  const parseFeeToNumber = (fee: string) => {
    if (fee === '0-100') return 100;
    if (fee === '101-200') return 200;
    if (fee === '201-300') return 300;
    if (fee === '300+') return 350;
    return 0;
  };

  const onSubmit = async (data: any) => {
    const imageFile = data.profileImage?.[0];
    const imageBase64 = imageFile ? await toBase64(imageFile) : undefined;

    const newArtist = {
      id: Date.now(),
      name: data.name,
      category: data.category[0],
      location: data.location,
      price: parseFeeToNumber(data.fee),
      image: imageBase64,
    };

    addArtist(newArtist);
    alert('Artist added to the list ✅');
    reset();
  };

  const toBase64 = (file: File): Promise<string> =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = reject;
    });

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-800 via-pink-600 to-pink-400">
      <div className="bg-white/90 rounded-2xl shadow-2xl p-8 w-full max-w-2xl">
        <h1 className="text-3xl font-bold mb-6 text-pink-700 text-center">Artist Registration</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <FormSections
            register={register}
            errors={errors}
            categories={categories}
            languages={languages}
          />
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-pink-600 to-purple-600 text-white font-semibold px-6 py-3 rounded-full shadow hover:from-pink-700 hover:to-purple-700 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

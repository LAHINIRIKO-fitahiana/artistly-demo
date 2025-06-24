// src/app/layout.tsx
import { ArtistProvider } from '@/context/ArtistContext';
import './globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>
        <ArtistProvider>
          <nav className="bg-gray-900 text-white px-6 py-4 flex gap-6">
            <a href="/">Accueil</a>
            <a href="/artists">Artistes</a>
            <a href="/onboard">Inscrire un artiste</a>
            <a href="/dashboard">Dashboard</a>
          </nav>
          <main>{children}</main>
          <footer className="bg-gray-100 text-center py-4 mt-10 text-gray-500">
            © {new Date().getFullYear()} Artistly Demo
          </footer>
        </ArtistProvider>
      </body>
    </html>
  );
}

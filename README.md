# Artistly Demo

## Description
Artistly Demo est une application Next.js qui permet aux utilisateurs de gérer des artistes. L'application comprend une page d'accueil, une page de liste des artistes, un formulaire d'inscription pour les artistes, et un tableau de bord de gestion.

## Structure du projet
```
artistly-demo
├── src
│   ├── app
│   │   ├── favicon.ico
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── artists
│   │   │   └── page.tsx
│   │   ├── onboard
│   │   │   └── page.tsx
│   │   └── dashboard
│   │       └── page.tsx
├── package.json
├── tsconfig.json
└── README.md
```

## Pages
- **Page d'accueil (`src/app/page.tsx`)**: Affiche le contenu principal de l'application, y compris un logo et des liens vers la documentation et le déploiement.
  
- **Liste des artistes (`src/app/artists/page.tsx`)**: Affiche une liste d'artistes, potentiellement sous forme de cartes ou de liste.

- **Formulaire d'inscription d'artiste (`src/app/onboard/page.tsx`)**: Permet aux artistes de s'inscrire via un formulaire avec des champs pour le nom, l'email, et d'autres informations pertinentes.

- **Dashboard de gestion (`src/app/dashboard/page.tsx`)**: Fournit une interface pour gérer les artistes et d'autres fonctionnalités administratives.

## Installation
1. Clonez le dépôt:
   ```
   git clone <url-du-dépôt>
   ```
2. Accédez au répertoire du projet:
   ```
   cd artistly-demo
   ```
3. Installez les dépendances:
   ```
   npm install
   ```

## Démarrage
Pour démarrer l'application en mode développement, exécutez:
```
npm run dev
```
L'application sera accessible à l'adresse `http://localhost:3000`.

## Contribuer
Les contributions sont les bienvenues! Veuillez soumettre une demande de tirage pour toute amélioration ou correction de bogue.

## License
Ce projet est sous licence MIT.
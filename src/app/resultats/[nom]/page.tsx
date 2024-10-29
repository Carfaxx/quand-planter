"use client";

import { useParams, useRouter } from 'next/navigation';
import { detailsDesPlantes } from '../../data/plantes'; // Chemin relatif vers plantes.ts

export default function Plante() {
  const router = useRouter();
  const { nom } = useParams(); // Utilisation de useParams pour obtenir le nom de la plante

  // Forcer TypeScript à traiter `nomPlante` comme une chaîne de caractères
  const nomPlante = (typeof nom === 'string' ? nom.toLowerCase() : '') as string;

  const planteDetails = detailsDesPlantes[nomPlante as keyof typeof detailsDesPlantes];

  if (!planteDetails) {
    return <div>Plante non trouvée.</div>;
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold">
        {nomPlante.charAt(0).toUpperCase() + nomPlante.slice(1)}
      </h1>
      <p>{planteDetails.description}</p>
      <h2 className="mt-4 font-semibold">Conditions de culture :</h2>
      <p>{planteDetails.conditions}</p>
      <h2 className="mt-4 font-semibold">Période :</h2>
      <p>{planteDetails.periode}</p>
      <button onClick={() => router.push('/resultats')} className="bg-blue-500 text-white p-2 rounded mt-4">
        Revenir aux résultats
      </button>
    </div>
  );
}

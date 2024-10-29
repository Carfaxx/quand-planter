"use client"; // Ajoute cette ligne pour indiquer que ce composant est un Client Component

import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

const plantesParMois = {
  janvier: ['Carotte', 'Navet', 'Chou'],
  fevrier: ['Oignon', 'Ail', 'Épinard'],
  mars: ['Tomate', 'Pomme de terre', 'Laitue'],
  avril: ['Radis', 'Épinard', 'Chou-fleur'],
  mai: ['Basilic', 'Courgette', 'Melon'],
  juin: ['Concombre', 'Haricot', 'Tomate'],
  juillet: ['Aubergine', 'Poivron', 'Melon'],
  aout: ['Basilic', 'Persil', 'Tomate'],
  septembre: ['Chou', 'Radis', 'Carotte'],
  octobre: ['Ail', 'Oignon', 'Épinard'],
  novembre: ['Choux', 'Épinard'],
  decembre: ['Ail', 'Épinard'],
};

export default function Resultats() {
  const searchParams = useSearchParams();
  const mois = searchParams.get('mois');

  if (!mois || typeof mois !== 'string') {
    return <div>Aucun mois sélectionné.</div>;
  }

  const plantes = plantesParMois[mois.toLowerCase() as keyof typeof plantesParMois] || [];

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold">Plantes à planter en {mois.charAt(0).toUpperCase() + mois.slice(1)}</h1>
      <ul className="mt-4">
        {plantes.map((plante) => (
          <li key={plante} className="list-disc">
            <Link href={`/resultats/${plante.toLowerCase()}`}>
            {plante}
            </Link>
            </li>
        ))}
      </ul>
      <button onClick={() => window.location.href = '/'} 
      className="bg-blue-500 text-white p-2 rounded mt-4">
        Revenir à la sélection</button>
    </div>
  );
}
import { useRouter } from 'next/router';

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
  const router = useRouter();
  const { mois } = router.query;

  if (!mois || typeof mois !== 'string') {
    return <div>Aucun mois sélectionné.</div>;
  }

  const plantes = plantesParMois[mois as keyof typeof plantesParMois] || [];

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold">Plantes à planter en {mois.charAt(0).toUpperCase() + mois.slice(1)}</h1>
      <ul className="mt-4">
        {plantes.map((plante) => (
          <li key={plante} className="list-disc">{plante}</li>
        ))}
      </ul>
      <button onClick={() => router.push('/')} className="bg-blue-500 text-white p-2 rounded mt-4">Revenir à la sélection</button>
    </div>
  );
}
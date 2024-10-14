"use client";

import { useState } from 'react';
import Link from 'next/link';

export default function Home() {
  const [selectedMonth, setSelectedMonth] = useState('');

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedMonth(e.target.value);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-background text-foreground">
      <h1 className="text-4xl font-bold">Quand planter ?</h1>
      <p className="mt-4">Sélectionnez un mois pour voir quelles plantes peuvent être plantées.</p>
      <select value={selectedMonth} onChange={handleSelectChange} className="mt-4 border p-2">
        <option value="">Choisissez un mois</option>
        <option value="janvier">Janvier</option>
        <option value="fevrier">Février</option>
        <option value="mars">Mars</option>
        <option value="avril">Avril</option>
        <option value="mai">Mai</option>
        <option value="juin">Juin</option>
        <option value="juillet">Juillet</option>
        <option value="aout">Août</option>
        <option value="septembre">Septembre</option>
        <option value="octobre">Octobre</option>
        <option value="novembre">Novembre</option>
        <option value="decembre">Décembre</option>
      </select>

      {selectedMonth && (
        <div className="mt-4">
          <Link href={`/resultats?mois=${selectedMonth}`}>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold p-2 rounded transition">
              Voir les plantes pour {selectedMonth}
              </button>
          </Link>
        </div>
      )}
    </div>
  );
}
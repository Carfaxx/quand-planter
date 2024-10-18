"use client";

import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'; // Assure-toi d'importer le style par défaut
import Link from 'next/link';

export default function Home() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const handleMonthChange = (date: Date | null) => {
    setSelectedDate(date);// Met à jour la date sélectionnée
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-background text-foreground">
      <h1 className="text-4xl font-bold">Quand planter ?</h1>
      <p className="mt-4">Sélectionnez une date sur le calendrier pour voir quelles plantes peuvent être plantées ce mois-là.</p>

      {/* Utilisation de react-datepicker avec la vue "month" */}
      <DatePicker
        selected={selectedDate}
        onChange={handleMonthChange}
        dateFormat="MM/yyyy" // Formate l'affichage pour n'avoir que le mois et l'année
        showMonthYearPicker // Active le mode "Mois et Année" uniquement
        className="mt-4 border p-2"
      />

      {/* Affiche le bouton pour rediriger après sélection du mois */}
      {selectedDate && (
        <div className="mt-4">
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold p-2 rounded transition">
              Voir les plantes pour {selectedDate.toLocaleString('default', { month: 'long' })}
              </button>
        </div>
      )}
    </div>
  );
}
// src/components/CarSection.jsx
import React from "react";

const voitures = [
  {
    id: 1,
    marque: "Mercedes",
    type: "Berline",
    image: "/assets/mercedes.jpg",
    prix: "800 MAD / jour",
  },
  {
    id: 2,
    marque: "Range Rover",
    type: "SUV",
    image: "/assets/range.jpg",
    prix: "1200 MAD / jour",
  },
  {
    id: 3,
    marque: "Golf 7",
    type: "Sportive",
    image: "/assets/golf.jpg",
    prix: "700 MAD / jour",
  },
];

export default function CarSection() {
  return (
    <section id="voitures" className="bg-gray-100 py-16 px-4">
      <h2 className="text-3xl font-bold text-center mb-10 text-violet-600">
        Nos véhicules
      </h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {voitures.map((car) => (
          <div
            key={car.id}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition"
          >
            <img
              src={car.image}
              alt={car.marque}
              className="w-full h-52 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-1">{car.marque}</h3>
              <p className="text-sm text-gray-500 mb-2">{car.type}</p>
              <p className="text-lg font-bold text-violet-600">{car.prix}</p>
              <button className="mt-4 w-full bg-violet-600 text-white py-2 rounded hover:bg-violet-700 transition">
                Réserver
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

'use client';

import { useState } from 'react';

export default function SearchBar() {
  const [searchCriteria, setSearchCriteria] = useState({
    propertyType: '',
    locality: '',
    maxBudget: '',
    minSurface: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setSearchCriteria(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleAddCriteria = () => {
    // Fonksiyon ekleme işlevi burada olacak
    console.log('Yeni kriter eklendi');
  };

  const handleSearch = () => {
    // Arama işlevi burada olacak
    console.log('Arama yapılıyor:', searchCriteria);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <div className="flex flex-col lg:flex-row gap-4 items-center">
        {/* Type de bien */}
        <div className="w-full lg:w-auto">
          <input
            type="text"
            placeholder="Type de bien"
            value={searchCriteria.propertyType}
            onChange={(e) => handleInputChange('propertyType', e.target.value)}
            className="w-full lg:w-48 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 placeholder-gray-600"
          />
        </div>

        {/* Localité */}
        <div className="w-full lg:w-auto">
          <input
            type="text"
            placeholder="Localité"
            value={searchCriteria.locality}
            onChange={(e) => handleInputChange('locality', e.target.value)}
            className="w-full lg:w-48 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 placeholder-gray-600"
          />
        </div>

        {/* Budget max */}
        <div className="w-full lg:w-auto">
          <input
            type="text"
            placeholder="Budget max (CHF)"
            value={searchCriteria.maxBudget}
            onChange={(e) => handleInputChange('maxBudget', e.target.value)}
            className="w-full lg:w-48 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 placeholder-gray-600"
          />
        </div>

        {/* Surface min */}
        <div className="w-full lg:w-auto">
          <input
            type="text"
            placeholder="Surface min (m²)"
            value={searchCriteria.minSurface}
            onChange={(e) => handleInputChange('minSurface', e.target.value)}
            className="w-full lg:w-48 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 placeholder-gray-600"
          />
        </div>

        {/* Add Button */}
        <button
          onClick={handleAddCriteria}
          className="w-12 h-12 bg-black text-white rounded-lg flex items-center justify-center hover:bg-gray-800 transition-colors"
        >
          <span className="text-xl font-bold">+</span>
        </button>

        {/* Search Button */}
        <button
          onClick={handleSearch}
          className="w-full lg:w-auto px-8 py-3 bg-red-600 text-white rounded-lg font-medium hover:bg-red-700 transition-colors"
        >
          Rechercher
        </button>
      </div>
    </div>
  );
}

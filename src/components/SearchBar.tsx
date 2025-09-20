'use client';

import { useState } from 'react';

export default function SearchBar() {
  const [showAdvancedFilters, setShowAdvancedFilters] = useState(false);
  const [searchCriteria, setSearchCriteria] = useState({
    propertyType: 'Appartement',
    locality: '',
    maxBudget: '',
    minSurface: '',
    reference: '',
    minRooms: '',
    minBedrooms: '',
    minBathrooms: '',
    balcony: false,
    elevator: false,
    parking: false,
    pmrCompliant: false,
    swimmingPool: false
  });

  const handleInputChange = (field: string, value: string | boolean) => {
    setSearchCriteria(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const toggleAdvancedFilters = () => {
    setShowAdvancedFilters(!showAdvancedFilters);
  };

  const handleSearch = () => {
    console.log('Arama yapılıyor:', searchCriteria);
  };

  return (
    <div className="bg-white/90 backdrop-blur-sm p-4 sm:p-6 rounded-2xl shadow-xl border border-white/20 mx-2 sm:mx-0">
      {/* Top Row - Main Filters with Action Buttons */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-3 sm:gap-4 items-end mb-4">
        {/* Type de bien */}
        <div className="sm:col-span-1">
          <label htmlFor="propertyType" className="block text-sm font-medium text-gray-700 mb-1 sm:hidden">
            Type de bien
          </label>
          <select
            id="propertyType"
            value={searchCriteria.propertyType}
            onChange={(e) => handleInputChange('propertyType', e.target.value)}
            className="w-full px-3 sm:px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 bg-white text-sm sm:text-base"
          >
            <option value="Appartement">Appartement</option>
            <option value="Maison">Maison</option>
            <option value="Studio">Studio</option>
            <option value="Loft">Loft</option>
          </select>
        </div>

        {/* Localisation */}
        <div className="sm:col-span-1">
          <label htmlFor="locality" className="block text-sm font-medium text-gray-700 mb-1 sm:hidden">
            Localisation
          </label>
          <input
            id="locality"
            type="text"
            placeholder="Localisation"
            value={searchCriteria.locality}
            onChange={(e) => handleInputChange('locality', e.target.value)}
            className="w-full px-3 sm:px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 placeholder-gray-600 text-sm sm:text-base"
          />
        </div>

        {/* Budget max */}
        <div className="sm:col-span-1">
          <label htmlFor="maxBudget" className="block text-sm font-medium text-gray-700 mb-1 sm:hidden">
            Budget max (CHF)
          </label>
          <input
            id="maxBudget"
            type="text"
            placeholder="Budget max (CHF)"
            value={searchCriteria.maxBudget}
            onChange={(e) => handleInputChange('maxBudget', e.target.value)}
            className="w-full px-3 sm:px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 placeholder-gray-600 text-sm sm:text-base"
          />
        </div>

        {/* Surface min */}
        <div className="sm:col-span-1">
          <label htmlFor="minSurface" className="block text-sm font-medium text-gray-700 mb-1 sm:hidden">
            Surface min (m²)
          </label>
          <input
            id="minSurface"
            type="text"
            placeholder="Surface min (m²)"
            value={searchCriteria.minSurface}
            onChange={(e) => handleInputChange('minSurface', e.target.value)}
            className="w-full px-3 sm:px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 placeholder-gray-600 text-sm sm:text-base"
          />
        </div>

        {/* Toggle Advanced Filters Button */}
        <div className="sm:col-span-1 flex justify-center sm:justify-start">
          <button
            onClick={toggleAdvancedFilters}
            className={`w-12 h-12 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center transition-all duration-200 ${
              showAdvancedFilters 
                ? 'bg-blue-600 text-white hover:bg-blue-700' 
                : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
            }`}
            aria-label={showAdvancedFilters ? 'Masquer les filtres avancés' : 'Afficher les filtres avancés'}
          >
            <span className="text-lg font-bold">
              {showAdvancedFilters ? '−' : '+'}
            </span>
          </button>
        </div>

        {/* Search Button */}
        <div className="sm:col-span-1">
          <button
            onClick={handleSearch}
            className="w-full px-4 sm:px-8 py-3 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2 text-sm sm:text-base"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <span className="hidden sm:inline">Rechercher</span>
            <span className="sm:hidden">Recherche</span>
          </button>
        </div>
      </div>

      {/* Bottom Row - Advanced Filters (Image 2) */}
      {showAdvancedFilters && (
        <div className="space-y-4">
          {/* Advanced Input Fields */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {/* Référence */}
            <div>
              <label htmlFor="reference" className="block text-sm font-medium text-gray-700 mb-1 sm:hidden">
                Référence
              </label>
              <input
                id="reference"
                type="text"
                placeholder="Référence"
                value={searchCriteria.reference}
                onChange={(e) => handleInputChange('reference', e.target.value)}
                className="w-full px-3 sm:px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 placeholder-gray-600 text-sm sm:text-base"
              />
            </div>

            {/* Pièces min */}
            <div>
              <label htmlFor="minRooms" className="block text-sm font-medium text-gray-700 mb-1 sm:hidden">
                Pièces min
              </label>
              <input
                id="minRooms"
                type="text"
                placeholder="Pièces min"
                value={searchCriteria.minRooms}
                onChange={(e) => handleInputChange('minRooms', e.target.value)}
                className="w-full px-3 sm:px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 placeholder-gray-600 text-sm sm:text-base"
              />
            </div>

            {/* Chambres min */}
            <div>
              <label htmlFor="minBedrooms" className="block text-sm font-medium text-gray-700 mb-1 sm:hidden">
                Chambres min
              </label>
              <input
                id="minBedrooms"
                type="text"
                placeholder="Chambres min"
                value={searchCriteria.minBedrooms}
                onChange={(e) => handleInputChange('minBedrooms', e.target.value)}
                className="w-full px-3 sm:px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 placeholder-gray-600 text-sm sm:text-base"
              />
            </div>

            {/* Salle de bain min */}
            <div>
              <label htmlFor="minBathrooms" className="block text-sm font-medium text-gray-700 mb-1 sm:hidden">
                Salle de bain min
              </label>
              <input
                id="minBathrooms"
                type="text"
                placeholder="Salle de bain min"
                value={searchCriteria.minBathrooms}
                onChange={(e) => handleInputChange('minBathrooms', e.target.value)}
                className="w-full px-3 sm:px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 placeholder-gray-600 text-sm sm:text-base"
              />
            </div>
          </div>

          {/* Checkboxes */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3 sm:gap-4">
            <label className="flex items-center space-x-2 cursor-pointer p-2 rounded-lg hover:bg-gray-50 transition-colors">
              <input
                type="checkbox"
                checked={searchCriteria.balcony}
                onChange={(e) => handleInputChange('balcony', e.target.checked)}
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <span className="text-gray-700 text-sm sm:text-base">Balcon/Terrasse</span>
            </label>

            <label className="flex items-center space-x-2 cursor-pointer p-2 rounded-lg hover:bg-gray-50 transition-colors">
              <input
                type="checkbox"
                checked={searchCriteria.elevator}
                onChange={(e) => handleInputChange('elevator', e.target.checked)}
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <span className="text-gray-700 text-sm sm:text-base">Ascenseur</span>
            </label>

            <label className="flex items-center space-x-2 cursor-pointer p-2 rounded-lg hover:bg-gray-50 transition-colors">
              <input
                type="checkbox"
                checked={searchCriteria.parking}
                onChange={(e) => handleInputChange('parking', e.target.checked)}
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <span className="text-gray-700 text-sm sm:text-base">Stationnement</span>
            </label>

            <label className="flex items-center space-x-2 cursor-pointer p-2 rounded-lg hover:bg-gray-50 transition-colors">
              <input
                type="checkbox"
                checked={searchCriteria.pmrCompliant}
                onChange={(e) => handleInputChange('pmrCompliant', e.target.checked)}
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <span className="text-gray-700 text-sm sm:text-base">Conforme PMR</span>
            </label>

            <label className="flex items-center space-x-2 cursor-pointer p-2 rounded-lg hover:bg-gray-50 transition-colors">
              <input
                type="checkbox"
                checked={searchCriteria.swimmingPool}
                onChange={(e) => handleInputChange('swimmingPool', e.target.checked)}
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <span className="text-gray-700 text-sm sm:text-base">Piscine</span>
            </label>
          </div>
        </div>
      )}
    </div>
  );
}

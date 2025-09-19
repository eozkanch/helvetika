'use client';

import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('FR');

  const navigationItems = [
    'Appartement à louer Genève',
    'Qui sommes-nous ?',
    'Je suis propriétaire',
    'Reprise de bail',
    'Résiliation anticipée',
    'Contact'
  ];


  return (
    <nav className="bg-gray-100 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-black">
              Helvetika
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-4 flex items-center space-x-3">
              {navigationItems.map((item, index) => {
                const getHref = (item: string) => {
                  switch (item) {
                    case 'Appartement à louer Genève':
                      return '/main';
                    case 'Qui sommes-nous ?':
                      return '/main/qui-sommes-nous';
                    case 'Je suis propriétaire':
                      return '/main/je-suis-proprietaire';
                    case 'Reprise de bail':
                      return '/main/reprise-de-bail';
                    case 'Résiliation anticipée':
                      return '/main/resiliation-anticipee';
                    case 'Contact':
                      return '/main/contact';
                    default:
                      return '#';
                  }
                };
                
                return (
                  <a
                    key={index}
                    href={getHref(item)}
                    className="text-black hover:text-gray-600 px-1 py-1 text-xs font-medium transition-colors whitespace-nowrap"
                  >
                    {item}
                  </a>
                );
              })}
            </div>
          </div>

          {/* Right side - Heart icon, User icon and Language selector */}
          <div className="flex items-center space-x-4">
            {/* Heart icon */}
            <button className="text-black hover:text-red-500 transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </button>

            {/* User icon */}
            <button 
              onClick={() => window.location.href = '/auth/login'}
              className="text-black hover:text-gray-600 transition-colors"
              title="Se connecter"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </button>

            {/* Language selector */}
            <div className="relative">
              <button
                onClick={() => setSelectedLanguage(selectedLanguage === 'FR' ? 'EN' : selectedLanguage === 'EN' ? 'DE' : 'FR')}
                className="text-black hover:text-gray-600 px-2 py-1 text-sm font-medium transition-colors"
              >
                {selectedLanguage}
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-black hover:text-gray-600 focus:outline-none focus:text-gray-600"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navigationItems.map((item, index) => {
                const getHref = (item: string) => {
                  switch (item) {
                    case 'Appartement à louer Genève':
                      return '/main';
                    case 'Qui sommes-nous ?':
                      return '/main/qui-sommes-nous';
                    case 'Je suis propriétaire':
                      return '/main/je-suis-proprietaire';
                    case 'Reprise de bail':
                      return '/main/reprise-de-bail';
                    case 'Résiliation anticipée':
                      return '/main/resiliation-anticipee';
                    case 'Contact':
                      return '/main/contact';
                    default:
                      return '#';
                  }
                };
                
                return (
                  <a
                    key={index}
                    href={getHref(item)}
                    className="text-black hover:text-gray-600 block px-3 py-2 text-base font-medium"
                  >
                    {item}
                  </a>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
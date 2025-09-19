'use client';

import { useState, useEffect } from 'react';

export default function AdminDashboard() {
  const [stats, setStats] = useState({
    totalAnnonces: 0,
    annoncesActives: 0,
    totalMessages: 0,
    messagesNonLus: 0
  });

  useEffect(() => {
    // Simulate loading stats
    setStats({
      totalAnnonces: 24,
      annoncesActives: 18,
      totalMessages: 156,
      messagesNonLus: 12
    });
  }, []);

  const statCards = [
    {
      title: 'Nombre total d\'annonces',
      value: stats.totalAnnonces,
      icon: (
        <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      bgColor: 'bg-blue-50',
      textColor: 'text-blue-600',
      borderColor: 'border-blue-200'
    },
    {
      title: 'Annonces actives',
      value: stats.annoncesActives,
      icon: (
        <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      bgColor: 'bg-green-50',
      textColor: 'text-green-600',
      borderColor: 'border-green-200'
    },
    {
      title: 'Nombre total de messages',
      value: stats.totalMessages,
      icon: (
        <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
      bgColor: 'bg-purple-50',
      textColor: 'text-purple-600',
      borderColor: 'border-purple-200'
    },
    {
      title: 'Messages non lus',
      value: stats.messagesNonLus,
      icon: (
        <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
        </svg>
      ),
      bgColor: 'bg-orange-50',
      textColor: 'text-orange-600',
      borderColor: 'border-orange-200'
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Panel Administrateur</h1>
            <p className="text-gray-600">Système de gestion Helvetika Immobilier</p>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statCards.map((card, index) => (
          <div
            key={index}
            className={`${card.bgColor} ${card.borderColor} border rounded-xl p-6 hover:shadow-lg transition-all duration-200 transform hover:scale-105`}
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 mb-1">{card.title}</p>
                <p className={`text-3xl font-bold ${card.textColor}`}>{card.value}</p>
              </div>
              <div className={`${card.bgColor} p-3 rounded-lg`}>
                {card.icon}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent İlanlar */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-gray-900">Dernières annonces ajoutées</h2>
            <a href="/admin/ilanlar" className="text-blue-600 hover:text-blue-700 text-sm font-medium">
              Voir tout
            </a>
          </div>
          <div className="space-y-3">
            {[
              { title: '3 pièces - Eaux-Vives', price: 'CHF 2,600', status: 'Actif' },
              { title: 'Studio - Plainpalais', price: 'CHF 1,450', status: 'Actif' },
              { title: '4 pièces - Carouge', price: 'CHF 3,200', status: 'En attente' }
            ].map((ilan, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium text-gray-900">{ilan.title}</p>
                  <p className="text-sm text-gray-600">{ilan.price}</p>
                </div>
                <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                  ilan.status === 'Actif' 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-yellow-100 text-yellow-800'
                }`}>
                  {ilan.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Mesajlar */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-gray-900">Derniers messages</h2>
            <a href="/admin/mesajlar" className="text-blue-600 hover:text-blue-700 text-sm font-medium">
              Voir tout
            </a>
          </div>
          <div className="space-y-3">
            {[
              { name: 'Jean Dupont', message: 'Je cherche un appartement de 3 pièces dans le quartier d\'Eaux-Vives...', time: 'il y a 2 heures', read: false },
              { name: 'Marie Martin', message: 'Je souhaite obtenir des informations sur le studio à Plainpalais', time: 'il y a 4 heures', read: true },
              { name: 'Pierre Dubois', message: 'Je souhaite acheter une maison à Carouge', time: 'il y a 1 jour', read: false }
            ].map((mesaj, index) => (
              <div key={index} className={`p-3 rounded-lg ${mesaj.read ? 'bg-gray-50' : 'bg-blue-50'}`}>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <p className="font-medium text-gray-900">{mesaj.name}</p>
                    <p className="text-sm text-gray-600 mt-1 line-clamp-2">{mesaj.message}</p>
                    <p className="text-xs text-gray-500 mt-2">{mesaj.time}</p>
                  </div>
                  {!mesaj.read && (
                    <div className="w-2 h-2 bg-blue-600 rounded-full ml-2 mt-1"></div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
}

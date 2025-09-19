'use client';

import { useState, useEffect } from 'react';
import messagesData from '@/data/messages.json';

interface Mesaj {
  id: number;
  nom: string;
  email: string;
  telephone: string;
  message: string;
  resume: string;
  date: string;
  lu: boolean;
  annonce_id: number | null;
}

export default function MesajlarPage() {
  const [mesajlar, setMesajlar] = useState<Mesaj[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedMesaj, setSelectedMesaj] = useState<Mesaj | null>(null);

  useEffect(() => {
    setMesajlar(messagesData);
  }, []);

  const handleViewMessage = (mesaj: Mesaj) => {
    setSelectedMesaj(mesaj);
    setShowModal(true);
    
    // Mark as read
    if (!mesaj.lu) {
      setMesajlar(mesajlar.map(m => 
        m.id === mesaj.id ? {...m, okundu: true} : m
      ));
    }
  };

  const handleMarkAsRead = (id: number) => {
    setMesajlar(mesajlar.map(mesaj => 
      mesaj.id === id ? {...mesaj, lu: true} : mesaj
    ));
  };

  const handleMarkAsUnread = (id: number) => {
    setMesajlar(mesajlar.map(mesaj => 
      mesaj.id === id ? {...mesaj, lu: false} : mesaj
    ));
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60));
    
    if (diffInHours < 1) return 'À l\'instant';
    if (diffInHours < 24) return `Il y a ${diffInHours} heures`;
    if (diffInHours < 48) return 'Hier';
    return date.toLocaleDateString('fr-FR');
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Gestion des messages</h1>
          <p className="text-gray-600 mt-1">Gérez tous les messages clients</p>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-lg border border-gray-200">
          <div className="text-2xl font-bold text-gray-900">{mesajlar.length}</div>
          <div className="text-sm text-gray-600">Total des messages</div>
        </div>
        <div className="bg-white p-4 rounded-lg border border-gray-200">
          <div className="text-2xl font-bold text-blue-600">
            {mesajlar.filter(m => !m.lu).length}
          </div>
          <div className="text-sm text-gray-600">Non lus</div>
        </div>
        <div className="bg-white p-4 rounded-lg border border-gray-200">
          <div className="text-2xl font-bold text-green-600">
            {mesajlar.filter(m => m.lu).length}
          </div>
          <div className="text-sm text-gray-600">Lus</div>
        </div>
        <div className="bg-white p-4 rounded-lg border border-gray-200">
          <div className="text-2xl font-bold text-purple-600">
            {mesajlar.filter(m => m.annonce_id !== null).length}
          </div>
          <div className="text-sm text-gray-600">Liés aux annonces</div>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white p-4 rounded-lg border border-gray-200">
        <div className="flex flex-wrap gap-4">
          <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors">
            Tous ({mesajlar.length})
          </button>
          <button className="px-4 py-2 text-sm font-medium text-blue-700 bg-blue-100 hover:bg-blue-200 rounded-lg transition-colors">
            Non lus ({mesajlar.filter(m => !m.lu).length})
          </button>
          <button className="px-4 py-2 text-sm font-medium text-green-700 bg-green-100 hover:bg-green-200 rounded-lg transition-colors">
            Lus ({mesajlar.filter(m => m.lu).length})
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Statut
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Nom
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Email
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Telefon
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Message
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {mesajlar.map((mesaj) => (
                <tr key={mesaj.id} className={`hover:bg-gray-50 ${!mesaj.lu ? 'bg-blue-50' : ''}`}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      {!mesaj.lu ? (
                        <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                      ) : (
                        <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{mesaj.nom}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{mesaj.email}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{mesaj.telephone}</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-gray-900 max-w-xs truncate">
                      {mesaj.resume}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{formatDate(mesaj.date)}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex space-x-2">
                      <button
                        onClick={() => handleViewMessage(mesaj)}
                        className="text-blue-600 hover:text-blue-900 transition-colors"
                      >
                        Détail
                      </button>
                      {mesaj.lu ? (
                        <button
                          onClick={() => handleMarkAsUnread(mesaj.id)}
                          className="text-yellow-600 hover:text-yellow-900 transition-colors"
                        >
                          Marquer non lu
                        </button>
                      ) : (
                        <button
                          onClick={() => handleMarkAsRead(mesaj.id)}
                          className="text-green-600 hover:text-green-900 transition-colors"
                        >
                          Marquer lu
                        </button>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Message Detail Modal */}
      {showModal && selectedMesaj && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
          <div className="relative top-20 mx-auto p-5 border w-full max-w-2xl shadow-lg rounded-md bg-white">
            <div className="mt-3">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-medium text-gray-900">Détail du message</h3>
                <button
                  onClick={() => setShowModal(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Nom complet</label>
                    <p className="mt-1 text-sm text-gray-900">{selectedMesaj.nom}</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Date</label>
                    <p className="mt-1 text-sm text-gray-900">{formatDate(selectedMesaj.date)}</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Email</label>
                    <p className="mt-1 text-sm text-gray-900">{selectedMesaj.email}</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Téléphone</label>
                    <p className="mt-1 text-sm text-gray-900">{selectedMesaj.telephone}</p>
                  </div>
                </div>

                {selectedMesaj.annonce_id && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Annonce concernée</label>
                    <p className="mt-1 text-sm text-blue-600">Annonce #{selectedMesaj.annonce_id}</p>
                  </div>
                )}

                <div>
                  <label className="block text-sm font-medium text-gray-700">Message</label>
                  <div className="mt-1 p-4 bg-gray-50 rounded-lg">
                    <p className="text-sm text-gray-900 whitespace-pre-wrap">{selectedMesaj.message}</p>
                  </div>
                </div>
              </div>

              <div className="flex justify-end space-x-3 mt-6">
                <button
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-200 hover:bg-gray-300 rounded-md transition-colors"
                >
                  Fermer
                </button>
                <a
                  href={`mailto:${selectedMesaj.email}`}
                  className="px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md transition-colors"
                >
                  Envoyer un email
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

'use client';

import { useState, useEffect } from 'react';
import ilanlarData from '@/data/ilanlar.json';

interface Ilan {
  id: number;
  baslik: string;
  fiyat: number;
  lokasyon: string;
  durum: string;
  aciklama: string;
  metrekare: number;
  oda_sayisi: number;
  kat: number;
  bina_yasi: number;
  tarih: string;
  resim_url: string | null;
}

export default function IlanlarPage() {
  const [ilanlar, setIlanlar] = useState<Ilan[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [editingIlan, setEditingIlan] = useState<Ilan | null>(null);
  const [showAddForm, setShowAddForm] = useState(false);
  const [newIlan, setNewIlan] = useState<Partial<Ilan>>({
    baslik: '',
    fiyat: 0,
    lokasyon: '',
    durum: 'Actif',
    aciklama: '',
    metrekare: 0,
    oda_sayisi: 1,
    kat: 1,
    bina_yasi: 0,
    tarih: new Date().toISOString().split('T')[0],
    resim_url: null
  });

  useEffect(() => {
    setIlanlar(ilanlarData);
  }, []);

  const handleEdit = (ilan: Ilan) => {
    setEditingIlan(ilan);
    setShowModal(true);
  };

  const handleDelete = (id: number) => {
    setIlanlar(ilanlar.filter(ilan => ilan.id !== id));
  };

  const handleSaveEdit = () => {
    if (editingIlan) {
      setIlanlar(ilanlar.map(ilan => 
        ilan.id === editingIlan.id ? editingIlan : ilan
      ));
    }
    setShowModal(false);
    setEditingIlan(null);
  };

  const handleAddNew = () => {
    if (newIlan.baslik && newIlan.fiyat && newIlan.lokasyon) {
      const id = Math.max(...ilanlar.map(i => i.id)) + 1;
      const ilan: Ilan = {
        id,
        baslik: newIlan.baslik!,
        fiyat: newIlan.fiyat!,
        lokasyon: newIlan.lokasyon!,
        durum: newIlan.durum || 'Actif',
        aciklama: newIlan.aciklama || '',
        metrekare: newIlan.metrekare || 0,
        oda_sayisi: newIlan.oda_sayisi || 1,
        kat: newIlan.kat || 1,
        bina_yasi: newIlan.bina_yasi || 0,
        tarih: newIlan.tarih || new Date().toISOString().split('T')[0],
        resim_url: newIlan.resim_url || null
      };
      setIlanlar([...ilanlar, ilan]);
      setShowAddForm(false);
      setNewIlan({
        baslik: '',
        fiyat: 0,
        lokasyon: '',
        durum: 'Actif',
        aciklama: '',
        metrekare: 0,
        oda_sayisi: 1,
        kat: 1,
        bina_yasi: 0,
        tarih: new Date().toISOString().split('T')[0],
        resim_url: null
      });
    }
  };

  const getStatusColor = (durum: string) => {
    switch (durum) {
      case 'Actif': return 'bg-green-100 text-green-800';
      case 'En attente': return 'bg-yellow-100 text-yellow-800';
      case 'Inactif': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Gestion des annonces</h1>
          <p className="text-gray-600 mt-1">Gérez et modifiez toutes les annonces</p>
        </div>
        <button
          onClick={() => setShowAddForm(true)}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors flex items-center"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
          Ajouter une nouvelle annonce
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-lg border border-gray-200">
          <div className="text-2xl font-bold text-gray-900">{ilanlar.length}</div>
          <div className="text-sm text-gray-600">Total des annonces</div>
        </div>
        <div className="bg-white p-4 rounded-lg border border-gray-200">
          <div className="text-2xl font-bold text-green-600">
            {ilanlar.filter(i => i.durum === 'Actif').length}
          </div>
          <div className="text-sm text-gray-600">Annonces Actives</div>
        </div>
        <div className="bg-white p-4 rounded-lg border border-gray-200">
          <div className="text-2xl font-bold text-yellow-600">
            {ilanlar.filter(i => i.durum === 'En attente').length}
          </div>
          <div className="text-sm text-gray-600">En Attente</div>
        </div>
        <div className="bg-white p-4 rounded-lg border border-gray-200">
          <div className="text-2xl font-bold text-red-600">
            {ilanlar.filter(i => i.durum === 'Inactif').length}
          </div>
          <div className="text-sm text-gray-600">Annonces Inactives</div>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Titre
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Prix
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Localisation
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Statut
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
              {ilanlar.map((ilan) => (
                <tr key={ilan.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    #{ilan.id}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{ilan.baslik}</div>
                    <div className="text-sm text-gray-500">{ilan.metrekare}m² • {ilan.oda_sayisi} pièces</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    CHF {ilan.fiyat.toLocaleString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {ilan.lokasyon}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(ilan.durum)}`}>
                      {ilan.durum}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {new Date(ilan.tarih).toLocaleDateString('fr-FR')}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex space-x-2">
                      <button
                        onClick={() => handleEdit(ilan)}
                        className="text-blue-600 hover:text-blue-900 transition-colors"
                      >
                        Modifier
                      </button>
                      <button
                        onClick={() => handleDelete(ilan.id)}
                        className="text-red-600 hover:text-red-900 transition-colors"
                      >
                        Supprimer
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Edit Modal */}
      {showModal && editingIlan && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
          <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
            <div className="mt-3">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Modifier l'annonce</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Titre</label>
                  <input
                    type="text"
                    value={editingIlan.baslik}
                    onChange={(e) => setEditingIlan({...editingIlan, baslik: e.target.value})}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Prix (CHF)</label>
                  <input
                    type="number"
                    value={editingIlan.fiyat}
                    onChange={(e) => setEditingIlan({...editingIlan, fiyat: parseInt(e.target.value)})}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Localisation</label>
                  <input
                    type="text"
                    value={editingIlan.lokasyon}
                    onChange={(e) => setEditingIlan({...editingIlan, lokasyon: e.target.value})}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Statut</label>
                  <select
                    value={editingIlan.durum}
                    onChange={(e) => setEditingIlan({...editingIlan, durum: e.target.value})}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="Actif">Actif</option>
                    <option value="En attente">En attente</option>
                    <option value="Inactif">Inactif</option>
                  </select>
                </div>
              </div>
              <div className="flex justify-end space-x-3 mt-6">
                <button
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-200 hover:bg-gray-300 rounded-md transition-colors"
                >
                  Annuler
                </button>
                <button
                  onClick={handleSaveEdit}
                  className="px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md transition-colors"
                >
                  Enregistrer
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Add Form Modal */}
      {showAddForm && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
          <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
            <div className="mt-3">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Ajouter une nouvelle annonce</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Titre</label>
                  <input
                    type="text"
                    value={newIlan.baslik || ''}
                    onChange={(e) => setNewIlan({...newIlan, baslik: e.target.value})}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Prix (CHF)</label>
                  <input
                    type="number"
                    value={newIlan.fiyat || ''}
                    onChange={(e) => setNewIlan({...newIlan, fiyat: parseInt(e.target.value)})}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Localisation</label>
                  <input
                    type="text"
                    value={newIlan.lokasyon || ''}
                    onChange={(e) => setNewIlan({...newIlan, lokasyon: e.target.value})}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Mètres carrés</label>
                  <input
                    type="number"
                    value={newIlan.metrekare || ''}
                    onChange={(e) => setNewIlan({...newIlan, metrekare: parseInt(e.target.value)})}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Nombre de pièces</label>
                  <input
                    type="number"
                    value={newIlan.oda_sayisi || ''}
                    onChange={(e) => setNewIlan({...newIlan, oda_sayisi: parseInt(e.target.value)})}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>
              <div className="flex justify-end space-x-3 mt-6">
                <button
                  onClick={() => setShowAddForm(false)}
                  className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-200 hover:bg-gray-300 rounded-md transition-colors"
                >
                  Annuler
                </button>
                <button
                  onClick={handleAddNew}
                  className="px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md transition-colors"
                >
                  Ajouter
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

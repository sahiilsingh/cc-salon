'use client';
import { useState } from 'react';

export default function AdminOffers() {
  const [globalOffers, setGlobalOffers] = useState(false);

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4">
        <h1 className="text-2xl font-medium">Offers & Promotions</h1>
        <div className="flex items-center gap-4">
          <label className="flex items-center cursor-pointer">
            <div className="relative">
              <input type="checkbox" className="sr-only" checked={globalOffers} onChange={() => setGlobalOffers(!globalOffers)} />
              <div className={`block w-10 h-6 rounded-full transition-colors ${globalOffers ? 'bg-success bg-green-500' : 'bg-gray-300'}`}></div>
              <div className={`dot absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-transform ${globalOffers ? 'transform translate-x-4' : ''}`}></div>
            </div>
            <div className="ml-3 text-sm font-medium">Global Offers (Active)</div>
          </label>
          <button className="btn btn-primary bg-espresso text-white px-4 py-2 rounded">Create Offer</button>
        </div>
      </div>

      <div className="card bg-white shadow-sm border border-black/5 rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-sand text-ink/60 uppercase border-b">
              <tr>
                <th className="px-4 py-3">Offer Name</th>
                <th className="px-4 py-3">Discount</th>
                <th className="px-4 py-3">Code</th>
                <th className="px-4 py-3">Validity</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {[
                { name: 'Monsoon Special', discount: '20% Off', code: 'MONSOON20', validity: '1 Aug - 31 Aug', status: 'Draft' },
                { name: 'First Visit', discount: '10% Off', code: 'WELCOME10', validity: 'Ongoing', status: 'Active' },
              ].map((row, i) => (
                <tr key={i} className="border-b hover:bg-sand/30">
                  <td className="px-4 py-3 font-medium">{row.name}</td>
                  <td className="px-4 py-3 text-terracotta font-medium">{row.discount}</td>
                  <td className="px-4 py-3 font-mono text-xs">{row.code}</td>
                  <td className="px-4 py-3">{row.validity}</td>
                  <td className="px-4 py-3">
                    <span className={`px-2 py-1 rounded text-xs font-medium ${row.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}>
                      {row.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-right space-x-2">
                    <button className="text-espresso hover:underline text-xs font-medium">Edit</button>
                    {row.status === 'Draft' ? (
                      <button className="text-success hover:underline text-xs font-medium text-green-600">Activate</button>
                    ) : (
                      <button className="text-warning text-yellow-600 hover:underline text-xs font-medium">Pause</button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

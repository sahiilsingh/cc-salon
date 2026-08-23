import Link from 'next/link';

export default function AdminDashboard() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-medium">Dashboard</h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {[
          { label: "Today's Appointments", value: '12', className: 'text-ink' },
          { label: 'Pending Payments', value: '3', className: 'text-warning' },
          { label: 'Active Offers', value: '1', className: 'text-success' },
          { label: 'Revenue Today', value: '₹0', className: 'text-terracotta' },
        ].map((stat) => (
          <div key={stat.label} className="card bg-white p-6 shadow-sm border border-black/5 rounded-lg">
            <p className="text-sm text-ink/60">{stat.label}</p>
            <p className={`mt-2 text-3xl font-medium ${stat.className}`}>{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="card bg-white p-6 shadow-sm border border-black/5 rounded-lg">
        <h2 className="text-lg font-medium mb-4">Quick Actions</h2>
        <div className="flex flex-wrap gap-3">
          <Link href="/admin/services" className="btn btn-primary bg-espresso text-white px-4 py-2 rounded">Add Service</Link>
          <Link href="/admin/offers" className="btn btn-secondary border border-espresso px-4 py-2 rounded text-espresso hover:bg-espresso/5">Create Offer</Link>
          <Link href="/admin/availability" className="btn btn-secondary border border-espresso px-4 py-2 rounded text-espresso hover:bg-espresso/5">Block Time</Link>
          <button className="btn btn-ghost px-4 py-2 text-ink/70 hover:text-ink">Export Bookings</button>
        </div>
      </div>

      {/* Recent Bookings */}
      <div className="card bg-white p-6 shadow-sm border border-black/5 rounded-lg">
        <h2 className="text-lg font-medium mb-4">Recent Bookings</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-sand text-ink/60 uppercase border-b">
              <tr>
                <th className="px-4 py-3">Reference</th>
                <th className="px-4 py-3">Customer</th>
                <th className="px-4 py-3">Service</th>
                <th className="px-4 py-3">Time</th>
                <th className="px-4 py-3">Status</th>
              </tr>
            </thead>
            <tbody>
              {[
                { ref: 'B-1021', name: 'Ayesha K.', service: 'Balayage Hair Color', time: '10:00 AM', status: 'Confirmed' },
                { ref: 'B-1022', name: 'Priya M.', service: 'Signature Facial', time: '11:30 AM', status: 'Pending' },
                { ref: 'B-1023', name: 'Riya S.', service: 'Keratin Treatment', time: '02:00 PM', status: 'Confirmed' },
              ].map((row) => (
                <tr key={row.ref} className="border-b hover:bg-sand/30">
                  <td className="px-4 py-3 font-medium">{row.ref}</td>
                  <td className="px-4 py-3">{row.name}</td>
                  <td className="px-4 py-3">{row.service}</td>
                  <td className="px-4 py-3">{row.time}</td>
                  <td className="px-4 py-3">
                    <span className={`px-2 py-1 rounded text-xs font-medium ${row.status === 'Confirmed' ? 'badge-success bg-green-100 text-green-800' : 'badge-warning bg-yellow-100 text-yellow-800'}`}>
                      {row.status}
                    </span>
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

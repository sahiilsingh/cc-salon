export default function AdminBookings() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4">
        <h1 className="text-2xl font-medium">Bookings</h1>
      </div>

      <div className="card bg-white p-4 shadow-sm border border-black/5 rounded-lg mb-6 flex flex-wrap gap-4 items-center">
        <div className="flex flex-col gap-1">
          <label className="text-xs font-medium text-ink/60">Date Range</label>
          <select className="input border rounded p-2 text-sm bg-white min-w-[150px]">
            <option>Today</option>
            <option>Tomorrow</option>
            <option>Next 7 Days</option>
            <option>All Time</option>
          </select>
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-xs font-medium text-ink/60">Service</label>
          <select className="input border rounded p-2 text-sm bg-white min-w-[150px]">
            <option>All Services</option>
            <option>Hair</option>
            <option>Face</option>
          </select>
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-xs font-medium text-ink/60">Status</label>
          <select className="input border rounded p-2 text-sm bg-white min-w-[150px]">
            <option>All Statuses</option>
            <option>Pending</option>
            <option>Confirmed</option>
            <option>Completed</option>
            <option>Cancelled</option>
          </select>
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-xs font-medium text-ink/60">Payment</label>
          <select className="input border rounded p-2 text-sm bg-white min-w-[150px]">
            <option>All</option>
            <option>Paid</option>
            <option>Pending</option>
          </select>
        </div>
      </div>

      <div className="card bg-white shadow-sm border border-black/5 rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-sand text-ink/60 uppercase border-b">
              <tr>
                <th className="px-4 py-3">Reference</th>
                <th className="px-4 py-3">Customer</th>
                <th className="px-4 py-3">Service</th>
                <th className="px-4 py-3">Date & Time</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3">Payment</th>
                <th className="px-4 py-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {[
                { ref: 'B-1021', name: 'Ayesha K.', service: 'Balayage Hair Color', datetime: '23 Aug 2026, 10:00 AM', status: 'Confirmed', payment: 'Paid' },
                { ref: 'B-1022', name: 'Priya M.', service: 'Signature Facial', datetime: '23 Aug 2026, 11:30 AM', status: 'Pending', payment: 'Pending' },
                { ref: 'B-1023', name: 'Riya S.', service: 'Keratin Treatment', datetime: '24 Aug 2026, 02:00 PM', status: 'Confirmed', payment: 'Paid' },
              ].map((row) => (
                <tr key={row.ref} className="border-b hover:bg-sand/30">
                  <td className="px-4 py-3 font-medium">{row.ref}</td>
                  <td className="px-4 py-3">{row.name}</td>
                  <td className="px-4 py-3">{row.service}</td>
                  <td className="px-4 py-3 whitespace-nowrap">{row.datetime}</td>
                  <td className="px-4 py-3">
                    <span className={`px-2 py-1 rounded text-xs font-medium ${row.status === 'Confirmed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                      {row.status}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <span className={`px-2 py-1 rounded text-xs font-medium ${row.payment === 'Paid' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                      {row.payment}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-right space-x-2 whitespace-nowrap">
                    <button className="text-espresso hover:underline text-xs font-medium">View</button>
                    <button className="text-success hover:underline text-xs font-medium text-green-600">Confirm</button>
                    <button className="text-danger text-red-600 hover:underline text-xs font-medium">Cancel</button>
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

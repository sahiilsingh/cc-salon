export default function AdminServices() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-medium">Services</h1>
        <button className="btn btn-primary bg-espresso text-white px-4 py-2 rounded">Add Service</button>
      </div>

      <div className="card bg-white shadow-sm border border-black/5 rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-sand text-ink/60 uppercase border-b">
              <tr>
                <th className="px-4 py-3">Name</th>
                <th className="px-4 py-3">Category</th>
                <th className="px-4 py-3">Duration</th>
                <th className="px-4 py-3">Price</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {[
                { name: 'Signature Haircut', cat: 'Hair', duration: '60 min', price: '₹1,500', status: 'Active' },
                { name: 'Balayage Hair Color', cat: 'Hair', duration: '180 min', price: '₹6,000', status: 'Active' },
                { name: 'Keratin Treatment', cat: 'Hair', duration: '150 min', price: '₹5,000', status: 'Active' },
                { name: 'Signature Facial', cat: 'Face', duration: '60 min', price: '₹2,500', status: 'Active' },
                { name: 'Bridal Makeup Preview', cat: 'Bridal', duration: '90 min', price: '₹3,000', status: 'Draft' },
              ].map((row, i) => (
                <tr key={i} className="border-b hover:bg-sand/30">
                  <td className="px-4 py-3 font-medium">{row.name}</td>
                  <td className="px-4 py-3">{row.cat}</td>
                  <td className="px-4 py-3">{row.duration}</td>
                  <td className="px-4 py-3">{row.price}</td>
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
                      <button className="text-warning text-yellow-600 hover:underline text-xs font-medium">Archive</button>
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

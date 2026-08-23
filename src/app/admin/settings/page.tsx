export default function AdminSettings() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-medium">General Settings</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="space-y-6">
          <div className="card bg-white p-6 shadow-sm border border-black/5 rounded-lg">
            <h2 className="text-lg font-medium mb-4 border-b pb-2">Business Information</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Salon Name</label>
                <input type="text" defaultValue="C&C Salon" className="border rounded p-2 w-full text-sm" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Address</label>
                <textarea defaultValue="Shop No 1, ABC Building, XYZ Street, Pune" className="border rounded p-2 w-full text-sm" rows={3} />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Phone Number(s)</label>
                <input type="text" defaultValue="+91 96070 23902" className="border rounded p-2 w-full text-sm" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Instagram URL</label>
                <input type="text" defaultValue="https://instagram.com/ccsalon" className="border rounded p-2 w-full text-sm" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Google Maps URL</label>
                <input type="text" defaultValue="" className="border rounded p-2 w-full text-sm" />
              </div>
            </div>
          </div>

          <div className="card bg-white p-6 shadow-sm border border-black/5 rounded-lg">
            <h2 className="text-lg font-medium mb-4 border-b pb-2">Landing Page Content</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Hero Headline</label>
                <input type="text" defaultValue="Elevate Your Style at C&C Salon" className="border rounded p-2 w-full text-sm" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Hero Subtext</label>
                <textarea defaultValue="Premium hair and beauty services tailored just for you." className="border rounded p-2 w-full text-sm" />
              </div>
              <div className="flex gap-4">
                <div className="flex-1">
                  <label className="block text-sm font-medium mb-1">Displayed Rating</label>
                  <input type="text" defaultValue="4.9" className="border rounded p-2 w-full text-sm" />
                </div>
                <div className="flex-1">
                  <label className="block text-sm font-medium mb-1">Review Count</label>
                  <input type="text" defaultValue="150+" className="border rounded p-2 w-full text-sm" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="card bg-white p-6 shadow-sm border border-black/5 rounded-lg">
            <h2 className="text-lg font-medium mb-4 border-b pb-2">Integrations</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Payment Mode</label>
                <select className="border rounded p-2 w-full text-sm bg-white">
                  <option value="mock">Mock (Testing)</option>
                  <option value="live">Live (Razorpay)</option>
                </select>
                <p className="text-xs text-ink/50 mt-1">Mock mode simulates successful payments.</p>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">WhatsApp Integration</label>
                <select className="border rounded p-2 w-full text-sm bg-white">
                  <option value="mock">Mock (Console Log)</option>
                  <option value="cloud">Live (Cloud API)</option>
                </select>
              </div>
            </div>
          </div>

          <div className="card bg-white p-6 shadow-sm border border-black/5 rounded-lg">
            <h2 className="text-lg font-medium mb-4 border-b pb-2">Policies</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Cancellation Policy</label>
                <textarea rows={4} defaultValue="Cancellations allowed up to 2 hours before the appointment. Late cancellations may incur a fee." className="border rounded p-2 w-full text-sm" />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="flex justify-end">
        <button className="btn bg-espresso text-white px-6 py-2 rounded font-medium">Save All Settings</button>
      </div>
    </div>
  );
}

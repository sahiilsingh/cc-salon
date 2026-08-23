export default function AdminAvailability() {
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-medium">Availability Settings</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Weekly Hours */}
        <div className="card bg-white p-6 shadow-sm border border-black/5 rounded-lg">
          <h2 className="text-lg font-medium mb-4 border-b pb-2">Weekly Hours</h2>
          <div className="space-y-4">
            {days.map((day) => (
              <div key={day} className="flex items-center justify-between">
                <div className="w-24 font-medium text-sm">{day}</div>
                <div className="flex-1 flex gap-2 items-center">
                  <select className="border rounded p-1 text-sm bg-white" defaultValue="10:00 AM">
                    <option>Closed</option>
                    <option>09:00 AM</option>
                    <option>10:00 AM</option>
                    <option>11:00 AM</option>
                  </select>
                  <span className="text-ink/50">to</span>
                  <select className="border rounded p-1 text-sm bg-white" defaultValue="08:00 PM">
                    <option>Closed</option>
                    <option>06:00 PM</option>
                    <option>07:00 PM</option>
                    <option>08:00 PM</option>
                  </select>
                </div>
              </div>
            ))}
          </div>
          <button className="mt-6 w-full btn bg-espresso text-white py-2 rounded text-sm font-medium">Save Hours</button>
        </div>

        <div className="space-y-6">
          {/* Booking Settings */}
          <div className="card bg-white p-6 shadow-sm border border-black/5 rounded-lg">
            <h2 className="text-lg font-medium mb-4 border-b pb-2">Booking Settings</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Slot Interval (minutes)</label>
                <select className="border rounded p-2 text-sm w-full bg-white" defaultValue="30">
                  <option>15</option>
                  <option>30</option>
                  <option>60</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Hold Duration (minutes)</label>
                <select className="border rounded p-2 text-sm w-full bg-white" defaultValue="10">
                  <option>5</option>
                  <option>10</option>
                  <option>15</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Minimum Notice</label>
                <select className="border rounded p-2 text-sm w-full bg-white" defaultValue="2 Hours">
                  <option>None</option>
                  <option>2 Hours</option>
                  <option>24 Hours</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Booking Horizon (days in advance)</label>
                <input type="number" defaultValue={30} className="border rounded p-2 text-sm w-full" />
              </div>
            </div>
            <button className="mt-4 w-full btn bg-espresso text-white py-2 rounded text-sm font-medium">Save Settings</button>
          </div>

          {/* Blackout Dates */}
          <div className="card bg-white p-6 shadow-sm border border-black/5 rounded-lg">
            <h2 className="text-lg font-medium mb-4 border-b pb-2">Holidays & Blackout Dates</h2>
            <div className="space-y-2 mb-4">
              <div className="flex justify-between text-sm bg-sand p-2 rounded">
                <span>Diwali (Closed)</span>
                <span>Nov 1, 2026</span>
              </div>
              <div className="flex justify-between text-sm bg-sand p-2 rounded">
                <span>Staff Training</span>
                <span>Dec 15, 2026</span>
              </div>
            </div>
            <button className="w-full border border-dashed border-espresso text-espresso py-2 rounded text-sm font-medium hover:bg-espresso/5">
              + Add Blackout Date
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

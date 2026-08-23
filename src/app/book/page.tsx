'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'

const SERVICES = [
  { id: '1', slug: 'ladies-haircut', name: "Ladies' Haircut", category: 'HAIR', durationMin: 45, priceType: 'CONSULTATION', priceInr: 0 },
  { id: '2', slug: 'hair-colour', name: 'Hair Colour', category: 'COLOUR_TREATMENTS', durationMin: 90, priceType: 'CONSULTATION', priceInr: 0 },
  { id: '3', slug: 'global-highlights', name: 'Global Highlights', category: 'COLOUR_TREATMENTS', durationMin: 120, priceType: 'CONSULTATION', priceInr: 0 },
  { id: '4', slug: 'keratin-treatment', name: 'Keratin Treatment', category: 'COLOUR_TREATMENTS', durationMin: 150, priceType: 'CONSULTATION', priceInr: 0 },
  { id: '5', slug: 'hair-spa', name: 'Hair Spa', category: 'HAIR', durationMin: 60, priceType: 'CONSULTATION', priceInr: 0 },
  { id: '6', slug: 'facial-cleanup', name: 'Facial & Cleanup', category: 'SKIN_BEAUTY', durationMin: 60, priceType: 'CONSULTATION', priceInr: 0 },
  { id: '7', slug: 'manicure-pedicure', name: 'Manicure & Pedicure', category: 'NAILS_MAKEUP', durationMin: 75, priceType: 'CONSULTATION', priceInr: 0 },
  { id: '8', slug: 'bridal-makeup', name: 'Bridal & Occasion Makeup', category: 'NAILS_MAKEUP', durationMin: 120, priceType: 'CONSULTATION', priceInr: 0 },
]

const TIME_SLOTS = [
  '09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
  '12:00 PM', '12:30 PM', '01:00 PM', '01:30 PM', '02:00 PM', '02:30 PM',
  '03:00 PM', '03:30 PM', '04:00 PM', '04:30 PM', '05:00 PM', '05:30 PM',
  '06:00 PM', '06:30 PM', '07:00 PM', '07:30 PM', '08:00 PM', '08:30 PM',
  '09:00 PM'
]

export default function BookPage() {
  const router = useRouter()
  const [step, setStep] = useState(1)
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedService, setSelectedService] = useState<any>(null)
  
  const [date, setDate] = useState<string>('')
  const [time, setTime] = useState<string>('')
  
  const [details, setDetails] = useState({
    name: '',
    phone: '',
    email: '',
    notes: '',
    consent: false
  })

  const filteredServices = SERVICES.filter(service => 
    service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    service.category.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const handleNext = () => setStep(prev => Math.min(prev + 1, 4))
  const handleBack = () => setStep(prev => Math.max(prev - 1, 1))

  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate payment process
    setTimeout(() => {
      router.push('/booking/CC-A1B2C3')
    }, 1500)
  }

  return (
    <main className="min-h-screen bg-sand py-12 font-body">
      <div className="container max-w-3xl mx-auto px-4">
        
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            {[1, 2, 3, 4].map(s => (
              <div 
                key={s} 
                className={`flex-1 h-2 mx-1 rounded-full ${s <= step ? 'bg-terracotta' : 'bg-blush'}`}
              />
            ))}
          </div>
          <div className="flex justify-between text-sm text-espresso px-2">
            <span className={step >= 1 ? 'font-bold' : ''}>Service</span>
            <span className={step >= 2 ? 'font-bold' : ''}>Time</span>
            <span className={step >= 3 ? 'font-bold' : ''}>Details</span>
            <span className={step >= 4 ? 'font-bold' : ''}>Payment</span>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6 md:p-8 card">
          
          {step === 1 && (
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl font-display text-ink mb-2">Select a Service</h1>
                <p className="text-espresso">Choose from our range of premium salon services.</p>
              </div>
              
              <input
                type="search"
                placeholder="Search services..."
                className="input w-full p-3 border rounded-lg focus:ring-terracotta focus:border-terracotta"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
              />

              <div className="grid gap-4 md:grid-cols-2 mt-6">
                {filteredServices.map(service => (
                  <button 
                    key={service.id}
                    type="button"
                    role="radio"
                    aria-checked={selectedService?.id === service.id}
                    data-selected={selectedService?.id === service.id}
                    onClick={() => setSelectedService(service)}
                    className={`p-4 border rounded-xl text-left cursor-pointer transition-all outline-none focus-visible:ring-2 focus-visible:ring-terracotta ${
                      selectedService?.id === service.id 
                        ? 'border-terracotta bg-blush/10 shadow-sm ring-1 ring-terracotta relative' 
                        : 'border-gray-200 hover:border-terracotta/50 bg-white'
                    }`}
                  >
                    {selectedService?.id === service.id && (
                      <span className="absolute top-4 right-4 text-terracotta">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </span>
                    )}
                    <div className="flex flex-col h-full">
                      <div className="mb-2 pr-8">
                        <h3 className="font-bold text-ink">{service.name}</h3>
                        <span className="inline-block mt-1 badge badge-blush text-xs px-2 py-0.5 rounded bg-blush/20 text-terracotta font-medium">
                          {service.category.replace('_', ' ')}
                        </span>
                      </div>
                      <div className="flex justify-between items-end text-sm text-espresso mt-auto pt-4">
                        <span className="flex items-center gap-1">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                          {service.durationMin} mins
                        </span>
                        <span className="font-semibold text-terracotta">
                          {service.priceType === 'CONSULTATION' ? 'Price on consultation' : `₹${service.priceInr}`}
                        </span>
                      </div>
                    </div>
                  </button>
                ))}
              </div>

              {filteredServices.length === 0 && (
                <p className="text-center text-espresso py-8">No services found matching "{searchQuery}"</p>
              )}

              <div className="mt-8 flex justify-end">
                <button 
                  onClick={handleNext} 
                  disabled={!selectedService}
                  className="btn btn-primary bg-terracotta text-white px-8 py-3 rounded-lg disabled:opacity-50"
                >
                  Continue
                </button>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl font-display text-ink mb-2">Select Date & Time</h1>
                <p className="text-espresso">All times are in IST (Asia/Kolkata).</p>
              </div>

              {selectedService && (
                <div className="bg-blush/10 p-4 rounded-lg border border-terracotta/20 flex justify-between items-center mb-6">
                  <div>
                    <span className="text-xs font-semibold text-terracotta uppercase tracking-wider block mb-1">Selected Service</span>
                    <span className="font-bold text-ink">{selectedService.name}</span>
                    <span className="text-espresso text-sm ml-2">({selectedService.durationMin} mins)</span>
                  </div>
                  <button onClick={() => setStep(1)} className="text-sm font-medium text-terracotta underline hover:text-espresso">
                    Change
                  </button>
                </div>
              )}

              <div className="space-y-4">
                <label className="label block font-medium text-ink">Choose Date</label>
                <input 
                  type="date" 
                  className="input w-full p-3 border rounded-lg focus:ring-terracotta focus:border-terracotta"
                  value={date}
                  min={new Date().toISOString().split('T')[0]}
                  onChange={e => setDate(e.target.value)}
                />
              </div>

              {date && (
                <div className="space-y-4 mt-8">
                  <label className="label block font-medium text-ink">Available Times</label>
                  <div className="grid grid-cols-3 md:grid-cols-4 gap-3">
                    {TIME_SLOTS.map(slot => (
                      <button
                        key={slot}
                        onClick={() => setTime(slot)}
                        className={`p-2 rounded-lg text-sm border transition-colors ${
                          time === slot
                            ? 'bg-espresso text-white border-espresso'
                            : 'bg-white text-ink border-gray-200 hover:border-espresso'
                        }`}
                      >
                        {slot}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <div className="mt-8 flex justify-between">
                <button onClick={handleBack} className="btn btn-ghost px-6 py-3 text-espresso hover:bg-sand rounded-lg">Back</button>
                <button 
                  onClick={handleNext} 
                  disabled={!date || !time}
                  className="btn btn-primary bg-terracotta text-white px-8 py-3 rounded-lg disabled:opacity-50"
                >
                  Continue
                </button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl font-display text-ink mb-2">Your Details</h1>
                <p className="text-espresso">Please provide your contact information.</p>
              </div>

              <form className="space-y-4">
                <div>
                  <label className="label block mb-1 text-sm font-medium text-ink">Full Name *</label>
                  <input 
                    type="text" 
                    required
                    className="input w-full p-3 border rounded-lg focus:ring-terracotta focus:border-terracotta"
                    value={details.name}
                    onChange={e => setDetails({...details, name: e.target.value})}
                  />
                </div>
                
                <div>
                  <label className="label block mb-1 text-sm font-medium text-ink">Phone Number *</label>
                  <input 
                    type="tel" 
                    required
                    className="input w-full p-3 border rounded-lg focus:ring-terracotta focus:border-terracotta"
                    value={details.phone}
                    onChange={e => setDetails({...details, phone: e.target.value})}
                  />
                </div>

                <div>
                  <label className="label block mb-1 text-sm font-medium text-ink">Email (Optional)</label>
                  <input 
                    type="email" 
                    className="input w-full p-3 border rounded-lg focus:ring-terracotta focus:border-terracotta"
                    value={details.email}
                    onChange={e => setDetails({...details, email: e.target.value})}
                  />
                </div>

                <div>
                  <label className="label block mb-1 text-sm font-medium text-ink">Special Notes</label>
                  <textarea 
                    rows={3}
                    className="input w-full p-3 border rounded-lg focus:ring-terracotta focus:border-terracotta"
                    value={details.notes}
                    onChange={e => setDetails({...details, notes: e.target.value})}
                  ></textarea>
                </div>

                <div className="flex items-start mt-4">
                  <input 
                    type="checkbox" 
                    id="consent"
                    className="mt-1 mr-3 h-4 w-4 text-terracotta border-gray-300 rounded focus:ring-terracotta"
                    checked={details.consent}
                    onChange={e => setDetails({...details, consent: e.target.checked})}
                  />
                  <label htmlFor="consent" className="text-sm text-espresso">
                    I agree to the Cancellation Policy and Terms of Service.
                  </label>
                </div>
              </form>

              <div className="mt-8 flex justify-between">
                <button onClick={handleBack} className="btn btn-ghost px-6 py-3 text-espresso hover:bg-sand rounded-lg">Back</button>
                <button 
                  onClick={handleNext} 
                  disabled={!details.name || !details.phone || !details.consent}
                  className="btn btn-primary bg-terracotta text-white px-8 py-3 rounded-lg disabled:opacity-50"
                >
                  Continue
                </button>
              </div>
            </div>
          )}

          {step === 4 && (
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl font-display text-ink mb-2">Review & Payment</h1>
                <p className="text-espresso">Review your booking details before confirming.</p>
              </div>

              <div className="bg-sand p-6 rounded-xl space-y-4">
                <h3 className="font-bold text-lg text-ink border-b pb-2">Order Summary</h3>
                
                <div className="flex justify-between py-2">
                  <span className="text-espresso">Service</span>
                  <span className="font-medium text-ink">{selectedService?.name}</span>
                </div>
                
                <div className="flex justify-between py-2">
                  <span className="text-espresso">Date</span>
                  <span className="font-medium text-ink">{date}</span>
                </div>
                
                <div className="flex justify-between py-2">
                  <span className="text-espresso">Time</span>
                  <span className="font-medium text-ink">{time} (IST)</span>
                </div>

                <div className="border-t pt-4 flex justify-between items-center mt-4">
                  <span className="font-bold text-ink">Total Due Now</span>
                  <span className="font-bold text-xl text-terracotta">
                    {selectedService?.priceType === 'CONSULTATION' ? 'To be confirmed' : `₹${selectedService?.priceInr}`}
                  </span>
                </div>
                {selectedService?.priceType === 'CONSULTATION' && (
                  <p className="text-xs text-espresso text-right mt-1">Final price will be discussed at salon</p>
                )}
              </div>

              <div className="mt-8 flex justify-between">
                <button onClick={handleBack} className="btn btn-ghost px-6 py-3 text-espresso hover:bg-sand rounded-lg">Back</button>
                <button 
                  onClick={handlePayment} 
                  className="btn btn-primary bg-terracotta text-white px-8 py-3 rounded-lg font-medium"
                >
                  Pay & Confirm
                </button>
              </div>
            </div>
          )}
          
        </div>
      </div>
    </main>
  )
}

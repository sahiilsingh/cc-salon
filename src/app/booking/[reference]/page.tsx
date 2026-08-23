import React from 'react'
import Link from 'next/link'

export default function BookingConfirmationPage({ params }: { params: { reference: string } }) {
  const reference = params.reference

  return (
    <main className="min-h-screen bg-sand py-12 font-body">
      <div className="container max-w-2xl mx-auto px-4">
        
        <div className="bg-white rounded-xl shadow-sm overflow-hidden card">
          <div className="bg-terracotta p-8 text-center text-white">
            <div className="inline-block bg-white/20 p-3 rounded-full mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <h1 className="text-3xl font-display mb-2">Booking Confirmed!</h1>
            <p className="opacity-90">Thank you for choosing C&C Salon.</p>
          </div>

          <div className="p-8 space-y-8">
            
            <div className="flex justify-between items-center border-b pb-6">
              <div>
                <p className="text-sm text-espresso uppercase tracking-wider mb-1">Booking Ref</p>
                <p className="text-2xl font-mono font-bold text-ink">{reference}</p>
              </div>
              <span className="badge badge-success bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                Confirmed
              </span>
            </div>

            <div className="space-y-4">
              <h3 className="font-bold text-lg text-ink">Appointment Details</h3>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-espresso mb-1">Service</p>
                  <p className="font-medium text-ink">Ladies' Haircut (Demo)</p>
                </div>
                <div>
                  <p className="text-sm text-espresso mb-1">Customer</p>
                  <p className="font-medium text-ink">Jane Doe</p>
                </div>
                <div>
                  <p className="text-sm text-espresso mb-1">Date</p>
                  <p className="font-medium text-ink">25 Aug 2026</p>
                </div>
                <div>
                  <p className="text-sm text-espresso mb-1">Time</p>
                  <p className="font-medium text-ink">11:30 AM (IST)</p>
                </div>
              </div>
            </div>

            <div className="bg-sand p-6 rounded-xl space-y-4 mt-6">
              <h3 className="font-bold text-lg text-ink">Location</h3>
              <p className="text-espresso">
                C&C Salon, 123 High Street, Mumbai, Maharashtra 400001
              </p>
              
              <div className="flex gap-4 pt-2">
                <button className="flex-1 bg-white border border-gray-200 text-ink py-2 px-4 rounded-lg text-sm font-medium hover:bg-gray-50 flex items-center justify-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                  Directions
                </button>
                <button className="flex-1 bg-[#25D366] text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-[#20b958] flex items-center justify-center gap-2 btn-whatsapp">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.099.824z"/>
                  </svg>
                  WhatsApp
                </button>
              </div>
            </div>

            <div className="flex gap-4 pt-4">
              <button className="w-full btn btn-ghost py-3 border border-gray-200 text-espresso rounded-lg font-medium hover:bg-gray-50">
                Cancel
              </button>
              <button className="w-full btn btn-secondary py-3 bg-espresso text-white rounded-lg font-medium hover:bg-ink">
                Reschedule
              </button>
            </div>

          </div>
        </div>
        
        <div className="mt-8 text-center">
          <Link href="/" className="text-terracotta hover:underline font-medium">
            ← Back to Home
          </Link>
        </div>
        
      </div>
    </main>
  )
}

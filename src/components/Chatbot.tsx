'use client';
import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';

type Message = {
  id: string;
  sender: 'user' | 'bot';
  text: string | React.ReactNode;
};

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      sender: 'bot',
      text: (
        <div className="space-y-3">
          <p>Welcome to C&C Salon! How can I help?</p>
          <div className="flex flex-col gap-2">
            <button onClick={() => handleQuickReply('Services')} className="text-sm bg-espresso/5 border border-espresso/20 text-espresso rounded p-2 text-left hover:bg-espresso/10">View Services</button>
            <button onClick={() => handleQuickReply('Hours')} className="text-sm bg-espresso/5 border border-espresso/20 text-espresso rounded p-2 text-left hover:bg-espresso/10">Today's Hours</button>
            <button onClick={() => handleQuickReply('Location')} className="text-sm bg-espresso/5 border border-espresso/20 text-espresso rounded p-2 text-left hover:bg-espresso/10">Location</button>
            <button onClick={() => handleQuickReply('Booking')} className="text-sm bg-espresso text-white rounded p-2 text-left hover:bg-espresso/90 text-center font-medium">Book Appointment</button>
            <button onClick={() => handleQuickReply('Help')} className="text-sm bg-espresso/5 border border-espresso/20 text-espresso rounded p-2 text-left hover:bg-espresso/10">Need Help?</button>
          </div>
        </div>
      )
    }
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const addMessage = (text: string | React.ReactNode, sender: 'user' | 'bot') => {
    setMessages(prev => [...prev, { id: Math.random().toString(), sender, text }]);
  };

  const handleQuickReply = (type: string) => {
    addMessage(type, 'user');
    
    setTimeout(() => {
      let response: React.ReactNode = '';
      
      switch (type) {
        case 'Services':
          response = (
            <div>
              <p className="mb-2">We offer a variety of services:</p>
              <ul className="list-disc pl-4 text-sm space-y-1">
                <li>Haircuts & Styling</li>
                <li>Coloring (Balayage, Highlights)</li>
                <li>Treatments (Keratin, Spa)</li>
                <li>Facials & Skin Care</li>
                <li>Bridal Makeup</li>
              </ul>
              <button onClick={() => handleQuickReply('Booking')} className="mt-3 text-sm bg-espresso text-white rounded p-2 w-full">Book Now</button>
            </div>
          );
          break;
        case 'Hours':
          response = 'Please confirm today\'s hours with the salon directly at +91 96070 23902.';
          break;
        case 'Location':
          response = (
            <div>
              <p>Shop No 1, ABC Building, XYZ Street, Pune.</p>
              <a href="#" className="text-terracotta underline text-sm mt-1 block">Get Directions</a>
            </div>
          );
          break;
        case 'Booking':
          response = (
            <div className="space-y-2">
              <p>Ready to book your appointment?</p>
              <Link href="/book" className="block text-sm bg-terracotta text-white rounded p-2 text-center w-full font-medium">Continue to Booking</Link>
            </div>
          );
          break;
        case 'Help':
          response = (
            <div>
              <p className="mb-2">You can reach us directly:</p>
              <div className="flex flex-col gap-2">
                <a href="tel:+919607023902" className="text-sm bg-espresso/5 border border-espresso/20 text-espresso rounded p-2 text-center block">Call Us</a>
                <a href="https://wa.me/919607023902" className="text-sm bg-green-50 border border-green-200 text-green-700 rounded p-2 text-center block">WhatsApp</a>
              </div>
            </div>
          );
          break;
        default:
          response = "I'm a demo assistant. Please select one of the options above or contact us directly.";
      }
      
      addMessage(response, 'bot');
    }, 500);
  };

  const resetChat = () => {
    setMessages([
      {
        id: '1',
        sender: 'bot',
        text: (
          <div className="space-y-3">
            <p>Welcome to C&C Salon! How can I help?</p>
            <div className="flex flex-col gap-2">
              <button onClick={() => handleQuickReply('Services')} className="text-sm bg-espresso/5 border border-espresso/20 text-espresso rounded p-2 text-left hover:bg-espresso/10">View Services</button>
              <button onClick={() => handleQuickReply('Hours')} className="text-sm bg-espresso/5 border border-espresso/20 text-espresso rounded p-2 text-left hover:bg-espresso/10">Today's Hours</button>
              <button onClick={() => handleQuickReply('Location')} className="text-sm bg-espresso/5 border border-espresso/20 text-espresso rounded p-2 text-left hover:bg-espresso/10">Location</button>
              <button onClick={() => handleQuickReply('Booking')} className="text-sm bg-espresso text-white rounded p-2 text-left hover:bg-espresso/90 text-center font-medium">Book Appointment</button>
              <button onClick={() => handleQuickReply('Help')} className="text-sm bg-espresso/5 border border-espresso/20 text-espresso rounded p-2 text-left hover:bg-espresso/10">Need Help?</button>
            </div>
          </div>
        )
      }
    ]);
  };

  return (
    <>
      {/* Floating Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-20 md:bottom-6 right-6 w-14 h-14 bg-espresso text-white rounded-full shadow-lg flex items-center justify-center hover:scale-105 transition-transform z-50"
          aria-label="Open Chat"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path></svg>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-20 md:bottom-24 right-4 md:right-6 w-80 sm:w-96 bg-white rounded-2xl shadow-2xl border border-black/10 flex flex-col z-50 overflow-hidden" style={{ maxHeight: 'calc(100vh - 120px)', height: '500px' }}>
          {/* Header */}
          <div className="bg-espresso text-white p-4 flex justify-between items-center">
            <div>
              <h3 className="font-medium">Demo Assistant</h3>
              <p className="text-xs text-white/70">C&C Salon</p>
            </div>
            <div className="flex gap-2">
              <button onClick={resetChat} className="p-1 hover:bg-white/10 rounded" title="Reset Chat">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg>
              </button>
              <button onClick={() => setIsOpen(false)} className="p-1 hover:bg-white/10 rounded" title="Close">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
              </button>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 bg-sand/30 space-y-4">
            {messages.map((msg) => (
              <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] rounded-2xl p-3 ${
                  msg.sender === 'user' 
                    ? 'bg-terracotta text-white rounded-br-none' 
                    : 'bg-white text-ink border border-black/5 rounded-tl-none shadow-sm'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area (Disabled for demo) */}
          <div className="p-3 bg-white border-t border-black/5">
            <div className="relative">
              <input 
                type="text" 
                placeholder="Select an option above..." 
                className="w-full bg-sand/50 border-none rounded-full py-2 pl-4 pr-10 text-sm outline-none text-ink/50"
                disabled
              />
              <button disabled className="absolute right-2 top-1/2 -translate-y-1/2 p-1 text-ink/30">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path></svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

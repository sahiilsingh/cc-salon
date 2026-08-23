export const COLORS = {
  ink: '#241F1C',
  espresso: '#3A2D29',
  ivory: '#FBF7F1',
  sand: '#EFE5D9',
  blush: '#D9A99B',
  terracotta: '#A96554',
  gold: '#B58A55',
  white: '#FFFFFF',
  success: '#2F6B4F',
  warning: '#9A6A1F',
  danger: '#A6403D',
};

export const SERVICE_CATEGORIES = {
  HAIR: {
    id: 'HAIR',
    displayName: 'Hair',
    description: 'Precision cutting, expert coloring, styling, and treatments.'
  },
  COLOUR_TREATMENTS: {
    id: 'COLOUR_TREATMENTS',
    displayName: 'Colour & Treatments',
    description: 'Premium color transformations and restorative hair treatments.'
  },
  SKIN_BEAUTY: {
    id: 'SKIN_BEAUTY',
    displayName: 'Skin & Beauty',
    description: 'Rejuvenating facials, skincare, and beauty services.'
  },
  NAILS_MAKEUP: {
    id: 'NAILS_MAKEUP',
    displayName: 'Nails & Makeup',
    description: 'Professional nail care, art, and makeup artistry.'
  }
};

export const BUSINESS_INFO = {
  name: 'The C&C House Of Hair & Beauty Salon',
  shortName: 'C&C Salon',
  address: 'Shop No. G-1, Utopia Apartment, near Cuts & Care Salon, Murida, Fatorda, Madgaon/Margao, Goa 403602, India',
  phone: '+91 96070 23902',
  additionalPhone: '+91 7030450463',
  instagramUrl: 'https://www.instagram.com/thecandcsalon/',
  googleMapsUrl: 'https://maps.app.goo.gl/placeholder', // Update with actual full Google Maps URL
  timezone: 'Asia/Kolkata',
};

export const BOOKING_STATES = {
  PENDING: 'PENDING',
  CONFIRMED: 'CONFIRMED',
  COMPLETED: 'COMPLETED',
  CANCELLED: 'CANCELLED',
  NO_SHOW: 'NO_SHOW',
};

export const PAYMENT_STATES = {
  PENDING: 'PENDING',
  PARTIAL: 'PARTIAL',
  PAID: 'PAID',
  REFUNDED: 'REFUNDED',
};

export const PRICE_TYPES = {
  FIXED: 'FIXED',
  STARTING_AT: 'STARTING_AT',
};

export const DISCOUNT_TYPES = {
  PERCENTAGE: 'PERCENTAGE',
  FIXED: 'FIXED',
};

export const HOLD_DURATION_MINUTES = 10;
export const AUTH_COOKIE_NAME = 'cc_salon_auth';

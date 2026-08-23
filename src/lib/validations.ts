import { z } from 'zod';

const phoneRegex = /^(\+91[\-\s]?)?[0]?(91)?[789]\d{9}$/;

export const customerDetailsSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  phone: z.string().regex(phoneRegex, 'Invalid Indian phone number'),
  email: z.string().email('Invalid email address').optional().or(z.literal('')),
  notes: z.string().optional(),
  consent: z.boolean().refine(val => val === true, 'You must agree to the terms'),
});

export const bookingSchema = z.object({
  serviceId: z.string().min(1, 'Service is required'),
  date: z.string().min(1, 'Date is required'),
  timeSlot: z.string().min(1, 'Time slot is required'),
  customerDetails: customerDetailsSchema,
});

export const serviceSchema = z.object({
  id: z.string().optional(),
  name: z.string().min(2, 'Name must be at least 2 characters'),
  description: z.string().optional(),
  categoryId: z.string().min(1, 'Category is required'),
  pricePaise: z.number().min(0, 'Price must be non-negative'),
  priceType: z.enum(['FIXED', 'STARTING_AT']),
  durationMinutes: z.number().min(5, 'Duration must be at least 5 minutes'),
  isActive: z.boolean().default(true),
});

export const offerSchema = z.object({
  id: z.string().optional(),
  title: z.string().min(2, 'Title must be at least 2 characters'),
  description: z.string().optional(),
  discountType: z.enum(['PERCENTAGE', 'FIXED']),
  discountValue: z.number().min(0, 'Discount value must be non-negative'),
  code: z.string().optional(),
  validFrom: z.string().optional(),
  validUntil: z.string().optional(),
  isActive: z.boolean().default(true),
});

export const loginSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
});

export const settingsSchema = z.object({
  salonName: z.string().min(2, 'Salon name is required'),
  phone: z.string().regex(phoneRegex, 'Invalid phone number'),
  address: z.string().min(5, 'Address is required'),
  advancePaymentPercentage: z.number().min(0).max(100),
  cancellationPolicy: z.string().optional(),
});

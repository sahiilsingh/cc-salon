export type BookingStatus =
  | 'DRAFT'
  | 'HOLD_CREATED'
  | 'PAYMENT_PENDING'
  | 'PAID'
  | 'CONFIRMED'
  | 'COMPLETED'
  | 'PAYMENT_FAILED'
  | 'HOLD_EXPIRED'
  | 'CANCELLED'
  | 'NO_SHOW'
  | 'REFUNDED'
  | 'MANUAL_REVIEW';

const VALID_TRANSITIONS: Record<BookingStatus, BookingStatus[]> = {
  DRAFT: ['HOLD_CREATED', 'CANCELLED'],
  HOLD_CREATED: ['PAYMENT_PENDING', 'HOLD_EXPIRED', 'CANCELLED'],
  PAYMENT_PENDING: ['PAID', 'PAYMENT_FAILED', 'HOLD_EXPIRED', 'CANCELLED'],
  PAID: ['CONFIRMED', 'REFUNDED', 'MANUAL_REVIEW'],
  CONFIRMED: ['COMPLETED', 'CANCELLED', 'NO_SHOW', 'REFUNDED'],
  COMPLETED: [],
  PAYMENT_FAILED: ['PAYMENT_PENDING', 'CANCELLED'],
  HOLD_EXPIRED: [],
  CANCELLED: [],
  NO_SHOW: [],
  REFUNDED: [],
  MANUAL_REVIEW: ['CONFIRMED', 'REFUNDED', 'CANCELLED'],
};

export function canTransition(currentStatus: BookingStatus, newStatus: BookingStatus): boolean {
  const allowedTransitions = VALID_TRANSITIONS[currentStatus];
  return allowedTransitions ? allowedTransitions.includes(newStatus) : false;
}

export function transitionBooking(currentStatus: BookingStatus, newStatus: BookingStatus): BookingStatus {
  if (!canTransition(currentStatus, newStatus)) {
    throw new Error(`Invalid booking transition from ${currentStatus} to ${newStatus}`);
  }
  return newStatus;
}

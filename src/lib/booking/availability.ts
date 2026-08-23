export interface TimeSlot {
  startTime: string; // ISO format or time format
  endTime: string;
  available: boolean;
}

export interface BusinessHours {
  open: string; // "09:00"
  close: string; // "17:00"
  breaks?: { start: string; end: string }[];
}

export interface GetSlotsOptions {
  date: Date;
  serviceId: string;
  durationMinutes: number;
  bufferMinutes: number;
  businessHours: BusinessHours;
  existingBookings: { startTime: Date; endTime: Date }[];
  blackoutDates?: Date[];
  slotIntervalMinutes?: number;
  minNoticeHours?: number;
  maxHorizonDays?: number;
}

export function getAvailableSlots(options: GetSlotsOptions): TimeSlot[] {
  const {
    date,
    durationMinutes,
    bufferMinutes,
    businessHours,
    existingBookings,
    blackoutDates = [],
    slotIntervalMinutes = 30,
    minNoticeHours = 2,
    maxHorizonDays = 30,
  } = options;

  // Basic validation for blackout dates
  const isBlackout = blackoutDates.some(
    d => d.toDateString() === date.toDateString()
  );
  const slots: TimeSlot[] = [];
  if (isBlackout) return slots;

  // Booking horizon validation
  const now = new Date();
  const maxDate = new Date(now.getTime() + maxHorizonDays * 24 * 60 * 60 * 1000);
  if (date > maxDate) return slots;

  // Min notice validation
  const minNoticeTime = new Date(now.getTime() + minNoticeHours * 60 * 60 * 1000);

  // Parse business hours
  const [openHour, openMin] = businessHours.open.split(':').map(Number);
  const [closeHour, closeMin] = businessHours.close.split(':').map(Number);

  const startOfDay = new Date(date);
  startOfDay.setHours(openHour, openMin, 0, 0);

  const endOfDay = new Date(date);
  endOfDay.setHours(closeHour, closeMin, 0, 0);

  let currentSlotStart = new Date(startOfDay);

  while (currentSlotStart < endOfDay) {
    const slotEnd = new Date(currentSlotStart.getTime() + durationMinutes * 60000);
    const slotWithBufferEnd = new Date(slotEnd.getTime() + bufferMinutes * 60000);

    if (slotWithBufferEnd > endOfDay) {
      break;
    }

    if (currentSlotStart < minNoticeTime) {
      currentSlotStart = new Date(currentSlotStart.getTime() + slotIntervalMinutes * 60000);
      continue;
    }

    // Check break periods
    let isInBreak = false;
    if (businessHours.breaks) {
      for (const b of businessHours.breaks) {
        const [bStartH, bStartM] = b.start.split(':').map(Number);
        const [bEndH, bEndM] = b.end.split(':').map(Number);
        
        const breakStart = new Date(date);
        breakStart.setHours(bStartH, bStartM, 0, 0);
        
        const breakEnd = new Date(date);
        breakEnd.setHours(bEndH, bEndM, 0, 0);

        // Conflict if slot overlaps with break
        if (currentSlotStart < breakEnd && slotWithBufferEnd > breakStart) {
          isInBreak = true;
          break;
        }
      }
    }

    // Check existing bookings
    let isBooked = false;
    for (const booking of existingBookings) {
      if (currentSlotStart < booking.endTime && slotWithBufferEnd > booking.startTime) {
        isBooked = true;
        break;
      }
    }

    slots.push({
      startTime: currentSlotStart.toISOString(),
      endTime: slotEnd.toISOString(),
      available: !isInBreak && !isBooked,
    });

    currentSlotStart = new Date(currentSlotStart.getTime() + slotIntervalMinutes * 60000);
  }

  return slots;
}

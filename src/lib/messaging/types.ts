export interface SendMessageOptions {
  to: string; // Phone number
  variables?: Record<string, string>;
}

export interface SendMessageResult {
  success: boolean;
  messageId?: string;
  error?: string;
}

export interface MessagingProvider {
  sendBookingConfirmation(opts: SendMessageOptions): Promise<SendMessageResult>;
  sendReminder(opts: SendMessageOptions): Promise<SendMessageResult>;
  sendCustomerMessage(message: string, opts: SendMessageOptions): Promise<SendMessageResult>;
}

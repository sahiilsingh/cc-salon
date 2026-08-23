import { MessagingProvider, SendMessageOptions, SendMessageResult } from './types';

export class MockMessagingProvider implements MessagingProvider {
  async sendBookingConfirmation(opts: SendMessageOptions): Promise<SendMessageResult> {
    console.log(`[MockMessagingProvider] Sending booking confirmation to ${opts.to} with variables`, opts.variables);
    return {
      success: true,
      messageId: `mock_msg_${Math.random().toString(36).substring(7)}`,
    };
  }

  async sendReminder(opts: SendMessageOptions): Promise<SendMessageResult> {
    console.log(`[MockMessagingProvider] Sending reminder to ${opts.to} with variables`, opts.variables);
    return {
      success: true,
      messageId: `mock_msg_${Math.random().toString(36).substring(7)}`,
    };
  }

  async sendCustomerMessage(message: string, opts: SendMessageOptions): Promise<SendMessageResult> {
    console.log(`[MockMessagingProvider] Sending custom message to ${opts.to}: ${message}`);
    console.log(`Open WhatsApp link: https://wa.me/${opts.to.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(message)}`);
    return {
      success: true,
      messageId: `mock_msg_${Math.random().toString(36).substring(7)}`,
    };
  }
}

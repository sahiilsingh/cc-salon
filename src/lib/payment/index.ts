import { PaymentProvider } from './types';
import { MockPaymentProvider } from './mock-provider';
import { RazorpayPaymentProvider } from './razorpay-provider';

export function getPaymentProvider(): PaymentProvider {
  const mode = process.env.PAYMENT_MODE;

  if (mode === 'live') {
    return new RazorpayPaymentProvider();
  }
  
  // Default to mock in development/testing if not explicitly 'live'
  return new MockPaymentProvider();
}

export * from './types';

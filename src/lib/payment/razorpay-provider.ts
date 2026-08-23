import crypto from 'crypto';
import {
  PaymentProvider,
  CreatePaymentOrderInput,
  CreatePaymentOrderResult,
  VerifyPaymentInput,
  VerifyPaymentResult,
  WebhookInput,
  WebhookResult,
  RefundInput,
  RefundResult,
} from './types';

export class RazorpayPaymentProvider implements PaymentProvider {
  private keyId: string;
  private keySecret: string;
  private webhookSecret: string;

  constructor() {
    this.keyId = process.env.RAZORPAY_KEY_ID || '';
    this.keySecret = process.env.RAZORPAY_KEY_SECRET || '';
    this.webhookSecret = process.env.RAZORPAY_WEBHOOK_SECRET || '';

    if (!this.keyId || !this.keySecret) {
      throw new Error('Razorpay credentials missing. Cannot initialize RazorpayPaymentProvider.');
    }
  }

  private getAuthHeader(): string {
    return `Basic ${Buffer.from(`${this.keyId}:${this.keySecret}`).toString('base64')}`;
  }

  async createOrder(input: CreatePaymentOrderInput): Promise<CreatePaymentOrderResult> {
    const response = await fetch('https://api.razorpay.com/v1/orders', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: this.getAuthHeader(),
      },
      body: JSON.stringify({
        amount: input.amountInr,
        currency: input.currency || 'INR',
        receipt: input.receipt,
        notes: input.notes,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`Failed to create Razorpay order: ${JSON.stringify(errorData)}`);
    }

    const data = await response.json();

    return {
      success: true,
      orderId: data.id,
      amount: data.amount,
      currency: data.currency,
      key: this.keyId,
    };
  }

  async verifyPayment(input: VerifyPaymentInput): Promise<VerifyPaymentResult> {
    const generatedSignature = crypto
      .createHmac('sha256', this.keySecret)
      .update(`${input.orderId}|${input.paymentId}`)
      .digest('hex');

    if (generatedSignature !== input.signature) {
      return {
        verified: false,
        status: 'failed',
        paymentId: input.paymentId,
      };
    }

    return {
      verified: true,
      status: 'captured',
      paymentId: input.paymentId,
    };
  }

  async handleWebhook(input: WebhookInput): Promise<WebhookResult> {
    if (!this.webhookSecret) {
      throw new Error('Webhook secret is not configured.');
    }

    const expectedSignature = crypto
      .createHmac('sha256', this.webhookSecret)
      .update(input.body)
      .digest('hex');

    if (expectedSignature !== input.signature) {
      throw new Error('Invalid webhook signature');
    }

    const event = JSON.parse(input.body);

    return {
      processed: true,
      eventType: event.event,
    };
  }

  async refund(input: RefundInput): Promise<RefundResult> {
    const response = await fetch(`https://api.razorpay.com/v1/payments/${input.paymentId}/refund`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: this.getAuthHeader(),
      },
      body: JSON.stringify({
        amount: input.amount,
        notes: {
          reason: input.reason || 'Requested by customer',
        },
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`Failed to process refund: ${JSON.stringify(errorData)}`);
    }

    const data = await response.json();

    return {
      success: true,
      refundId: data.id,
    };
  }
}

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

export class MockPaymentProvider implements PaymentProvider {
  private async delay(ms: number = 100): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async createOrder(input: CreatePaymentOrderInput): Promise<CreatePaymentOrderResult> {
    await this.delay();
    const mockOrderId = `mock_order_${Math.random().toString(36).substring(7)}`;
    return {
      success: true,
      orderId: mockOrderId,
      amount: input.amountInr,
      currency: input.currency,
      key: 'mock_key',
    };
  }

  async verifyPayment(input: VerifyPaymentInput): Promise<VerifyPaymentResult> {
    await this.delay();
    return {
      verified: true,
      status: 'captured',
      paymentId: input.paymentId || `mock_payment_${Math.random().toString(36).substring(7)}`,
    };
  }

  async handleWebhook(input: WebhookInput): Promise<WebhookResult> {
    await this.delay();
    return {
      processed: true,
      eventType: 'payment.captured',
    };
  }

  async refund(input: RefundInput): Promise<RefundResult> {
    await this.delay();
    return {
      success: true,
      refundId: `mock_refund_${Math.random().toString(36).substring(7)}`,
    };
  }
}

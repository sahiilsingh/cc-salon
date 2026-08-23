export interface CreatePaymentOrderInput {
  bookingId: string;
  amountInr: number; // in paise
  currency: string;
  receipt: string;
  notes?: Record<string, string>;
}

export interface CreatePaymentOrderResult {
  success: boolean;
  orderId: string;
  amount: number;
  currency: string;
  key?: string; // public key for client
}

export interface VerifyPaymentInput {
  orderId: string;
  paymentId: string;
  signature: string;
  bookingId: string;
}

export interface VerifyPaymentResult {
  verified: boolean;
  status: string;
  paymentId: string;
}

export interface WebhookInput {
  body: string;
  signature: string;
}

export interface WebhookResult {
  processed: boolean;
  eventType?: string;
}

export interface RefundInput {
  paymentId: string;
  amount?: number;
  reason?: string;
}

export interface RefundResult {
  success: boolean;
  refundId?: string;
}

export interface PaymentProvider {
  createOrder(input: CreatePaymentOrderInput): Promise<CreatePaymentOrderResult>;
  verifyPayment(input: VerifyPaymentInput): Promise<VerifyPaymentResult>;
  handleWebhook(input: WebhookInput): Promise<WebhookResult>;
  refund(input: RefundInput): Promise<RefundResult>;
}

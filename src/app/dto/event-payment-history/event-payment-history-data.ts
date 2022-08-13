export interface EventPaymentHistoryData {
  id?: string;
  eventPaymentHistoryCode?: string;
  userId?: string;
  email?: string;
  fullname?: string;
  paymentId?: string;
  title?: string;
  eventHeaderId?: string;
  price: number;
  fileId: string;
  eventCreator: string;
  trxNo?: string;
  isAprove?: boolean;
  isActive?: boolean;
  version?: number;
}
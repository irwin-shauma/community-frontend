export interface EventHeaderData {
  id: string;
  eventHeaderCode: string;
  title: string;
  eventTypeId: string;
  fileId: string;
  createdBy: string;
  fullName?: string;
  isActive: boolean;
  version: number;
  price: number;
  startDate: string;
  endDate: string;
  provider: string;
  location: string;
}

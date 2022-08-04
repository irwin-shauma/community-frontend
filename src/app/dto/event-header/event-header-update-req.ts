export interface EventHeaderUpdateReq {
  title?: string;
  eventTypeId?: string;
  fileName?: string;
  fileExtension?: string;
  starts: string;
  ends: string;
  provider: string;
  location: string;
  price: string;
}
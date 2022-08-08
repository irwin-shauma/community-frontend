export interface EventHeaderUpdateReq {
  id?: string;
  title?: string;
  fileName?: string;
  fileExtension?: string;
  fileId?: string;
  starts?: string;
  ends?: string;
  provider?: string;
  location?: string;
  price?: number;
}
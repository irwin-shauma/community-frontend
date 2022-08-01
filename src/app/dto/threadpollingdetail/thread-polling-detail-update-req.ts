export interface ThreadPollingDetailUpdateReq {
  id: string;
  threadHeaderPollingId: string;
  question: string;
  isActive: boolean;
  version: number;
}

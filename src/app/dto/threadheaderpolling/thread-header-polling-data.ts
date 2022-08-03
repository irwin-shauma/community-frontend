import { ThreadPollingDetailData } from '../threadpollingdetail/thread-polling-detail-data';

export interface ThreadHeaderPollingData {
  id: string;
  pollingQuestion: string;
  duration: string;
  titlePolling: string;
  contentPolling: string;
  isActive: boolean;
  version: number;
  threadDtlPolling: ThreadPollingDetailData[];
}

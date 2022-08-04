import { ThreadPollingDetailData } from './thread-polling-detail-data';

export interface ThreadHeaderPollingData {
  id: string;
  pollingQuestion: string;
  duration: string;
  titlePolling: string;
  contentPolling: string;
  isActive: boolean;
  isChoice: boolean;
  version: number;
  countAllAnswer: number;
  threadDtlPolling: ThreadPollingDetailData[];
}

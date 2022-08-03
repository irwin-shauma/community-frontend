import { ThreadPollingDetailInsertReq } from './thread-polling-detail-insert-req';

export interface ThreadHeaderPollingInsertReq {
  titlePolling: string;
  contentPolling: string;
  pollingQuestion: string;
  duration: string;
  threadPollingDetail: ThreadPollingDetailInsertReq[];
}

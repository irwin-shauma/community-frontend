import { ThreadPollingDetailData } from './thread-polling-detail-data';

export interface ThreadHeaderPollingData {
  id: string;
  pollingQuestion: string;
  duration: string;
  titlePolling: string;
  contentPolling: string;
  isActive: boolean;
  fullName: string;
  fileId: string;
  userId: string;
  userPhoto: string;
  createdAt: string;
  createdBy: string;
  isChoice: boolean;
  isLike: boolean;
  countLike: number;
  version: number;
  countAllAnswer: number;
  threadDtlPolling: ThreadPollingDetailData[];
}

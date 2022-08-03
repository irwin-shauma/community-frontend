import { ThreadDetailData } from './thread-detail-data';

export interface ThreadHeaderData {
  id: string;
  threadTypeId: string;
  threadType: string;
  userId: string;
  threadHeaderCode: string;
  title: string;
  fileId: string;
  contentThread: string;
  version: number;
  isActive: boolean;
  isLike: boolean;
  createdAt: string;
  createdBy: string;
  fullName: string;
  userPhoto: string;
  countLike: number;
  countComment: number;
  threadDetail: ThreadDetailData[];
}

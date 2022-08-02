import { ThreadDetailData } from './thread-detail-data';

export interface ThreadHeaderData {
  id: string;
  threadTypeId: string;
  threadHeaderCode: string;
  title: string;
  fileId: string;
  contentThread: string;
  version: number;
  isActive: boolean;
  createdAt: string;
  createdBy: string;
  fullName: string;
  countLike: number;
  countComment: number;
  threadDetail: ThreadDetailData[];
}

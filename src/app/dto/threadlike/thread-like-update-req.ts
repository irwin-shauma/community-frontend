export interface ThreadLikeUpdateReq {
  id: string;
  userId: string;
  threadId: string;
  isActive: boolean;
  version: number;
}

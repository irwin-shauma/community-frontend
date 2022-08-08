export interface ThreadHeaderUpdateReq {
  id: string;
  userId: string;
  title: string;
  contentThread: string;
  threadTypeId: string;
  fileId: string;
  fileName: string;
  fileExtension: string;
  isActive: boolean;
}

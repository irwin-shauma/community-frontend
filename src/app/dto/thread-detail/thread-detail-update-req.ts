export interface ThreadDetailUpdateReq{
    id?: string
    threadHeaderId?: string
    fileId?: string
    userId?: string
    commentThread?: string
    isActive?: boolean
    version?: number
}
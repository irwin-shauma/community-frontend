import { ThreadHeaderPollingData } from "./thread-header-polling-data"

export interface ThreadHeaderPollingInsertReq{
    titlePolling?: string
    contentPolling?: string
    threadHeaderPollings?: ThreadHeaderPollingData[]
    
}
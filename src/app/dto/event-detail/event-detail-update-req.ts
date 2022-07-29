export interface EventDetailUpdateReq{
    id?: string
    eventHeaderId?: string
    fileId?: string
    price?: number
    startDate?: string
    endDate?: string
    provider?: string
    locations?: string
    isActive?: boolean
}
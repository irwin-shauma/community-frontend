export interface PremiumPaymentHistoryData{
    id? : string,
    premiumPaymentHistoryCode? : string
    userId? : string
    premiumTypeId? : string

    fullname?: string
    price?: number
    duration?: number
    trxNo? : string
    isActive? : boolean
    version? : number
}
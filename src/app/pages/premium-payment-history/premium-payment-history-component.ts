import { Component, OnInit } from "@angular/core";
import { Router, Routes } from "@angular/router";
import { LazyLoadEvent } from "primeng/api";
import { Subscription } from "rxjs";
import { PremiumPaymentHistoryData } from "src/app/dto/premium-payment-history/premium-payment-history-data";
import { PremiumPaymentHistoryFindAll } from "src/app/dto/premium-payment-history/premium-payment-history-find-all";
import { PremiumPaymentHistoryService } from "src/app/service/premium-payment-history.service";
import { PremiumTypeService } from "src/app/service/premium-type.service";
import { UserService } from "src/app/service/user.service";


@Component({
    selector: 'app-premium-payment-history',
    templateUrl: './premium-payment-history-component.html'
})
export class PremiumPaymentHistoryComponent implements OnInit{
    premiumPaymentHistories: PremiumPaymentHistoryFindAll = {} as PremiumPaymentHistoryFindAll;
    premiumPaymentHistoryData!: PremiumPaymentHistoryData [];

    startPage: number = 0
    maxPage: number = 5
    totalData: number = 0
    loading: boolean = true
    premiumPaymentHistorySubscription? : Subscription

    constructor(
        private premiumPaymentHistoryService: PremiumPaymentHistoryService,
    ){}

    ngOnInit(): void{
        this.premiumPaymentHistories.data = [];
        this.initData();
    }

    loadData(event: LazyLoadEvent){
        this.getData
    }

    getData(startPage: number = this.startPage, maxPage: number = this.maxPage): void{
        this.loading = true;
        this.startPage = startPage
        this.maxPage = maxPage

        this.premiumPaymentHistorySubscription = this.premiumPaymentHistoryService.showAllPremiumPaymentHistory(startPage, maxPage).subscribe(
            result => {
                const resultData: any = result
                this.premiumPaymentHistoryData = resultData.data
                this.loading = false
                this.totalData = resultData.count

            }
        )

    }

    initData(): void{
        this.premiumPaymentHistoryService.showAllPremiumPaymentHistory(0,5).subscribe((result) => {
            this.premiumPaymentHistories = result;
            this.premiumPaymentHistoryData = result.data!;
        });
    }
}
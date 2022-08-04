import { Component, OnInit } from "@angular/core";
import { Router, Routes } from "@angular/router";
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

    constructor(
        private premiumPaymentHistoryService: PremiumPaymentHistoryService,
    ){}

    ngOnInit(): void{
        this.premiumPaymentHistories.data = [];
        this.initData();
    }

    initData(): void{
        this.premiumPaymentHistoryService.showAllPremiumPaymentHistory().subscribe((result) => {
            this.premiumPaymentHistories = result;
            this.premiumPaymentHistoryData = result.data!;
        });
    }
}
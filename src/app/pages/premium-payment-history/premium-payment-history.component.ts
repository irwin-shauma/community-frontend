import { Component, OnInit } from "@angular/core";
import { Router, Routes } from "@angular/router";
import { PremiumPaymentHistoryData } from "src/app/dto/premium-payment-history/premium-payment-history-data";
import { PremiumPaymentHistoryFindAll } from "src/app/dto/premium-payment-history/premium-payment-history-find-all";
import { PremiumPaymentHistoryService } from "src/app/service/premium-payment-history.service";
import { PremiumTypeService } from "src/app/service/premium-type.service";
import { UserService } from "src/app/service/user.service";


@Component({
    selector: 'app-premium-payment-history',
    templateUrl: './premium-payment-history.component.html'
})
export class PremiumPaymentHistoryComponent implements OnInit{
    premiumPaymentHistories: PremiumPaymentHistoryFindAll = {} as PremiumPaymentHistoryFindAll;
    premiumPaymentHistoryData!: PremiumPaymentHistoryData [];
    userId: string[] = []
    private premiumTypeId: string[] = []

    constructor(
        private premiumPaymentHistoryService: PremiumPaymentHistoryService,
        private userService: UserService,
        private premiumTypeService: PremiumTypeService,
        private router: Router
    ){}

    ngOnInit(): void{
        this.premiumPaymentHistories.data = [];
        this.initData();
    }

    initData(): void{
        this.premiumPaymentHistoryService.showAllPremiumPaymentHistory().subscribe((result) => {
            this.premiumPaymentHistories = result;
            this.premiumPaymentHistoryData = result.data!;
           
            for(let i = 0; i< this.premiumPaymentHistoryData.length; i++){
                this.userService.findById(String(this.premiumPaymentHistoryData[i].userId)).subscribe((result) => {
                    this.userId.push(String(result.data?.fullName!))
                    // console.log(result.data?.fullName!)
                })
            }
            console.log(this.userId)

            for(let j = 0; j< this.premiumPaymentHistoryData.length; j++){
                this.premiumTypeService.findById(String(this.premiumPaymentHistoryData[j].premiumTypeId)).subscribe((result) => {
                    this.premiumTypeId.push(String(result.data?.price))
                    this.premiumTypeId.push(String(result.data?.duration))

                })
            }
            
        });

    }
}
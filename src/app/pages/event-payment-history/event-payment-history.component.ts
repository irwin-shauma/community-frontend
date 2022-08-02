import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { EventPaymentHistoryData } from "src/app/dto/event-payment-history/event-payment-history-data";
import { EventPaymentHistoryFindAllRes } from "src/app/dto/event-payment-history/event-payment-history-find-all-res";
import { EventPaymentHistoryService } from "src/app/service/event-payment-history.service";

@Component({
    selector: 'app-event-payment-history',
    templateUrl: './event-payment-history.component.html'
})
export class EventPaymentHsitoryComponent implements OnInit{
    eventPaymentHistories: EventPaymentHistoryFindAllRes = {} as EventPaymentHistoryFindAllRes;
    eventPaymentHistoryData!: EventPaymentHistoryData[];

    constructor(
        private eventPaymentHistoryService: EventPaymentHistoryService,
        private router: Router
    ){}

    ngOnInit(): void {
        this.eventPaymentHistories.data = [];
        this.initData();
    }

    initData(): void{
        this.eventPaymentHistoryService.showAllEventPaymentHistory().subscribe((result) => {
            this.eventPaymentHistories = result;
            this.eventPaymentHistoryData = result.data!;
        })
    }
}

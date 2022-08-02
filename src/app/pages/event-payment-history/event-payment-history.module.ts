import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { ConfirmationService } from "primeng/api";
import { AvatarModule } from "primeng/avatar";
import { CardModule } from "primeng/card";
import { TableModule } from "primeng/table";
import { TabViewModule } from "primeng/tabview";
import { EventPaymentHsitoryComponent } from "./event-payment-history.component";
import { EventPaymentHistoryRouting } from "./event-payment-history.routing";

@NgModule({
    imports: [
        EventPaymentHistoryRouting,
        CardModule,
        TabViewModule,
        TableModule,
        AvatarModule,
        FormsModule,
        CommonModule
    ],
    declarations: [EventPaymentHsitoryComponent],
    exports: [EventPaymentHsitoryComponent],
    providers: [ConfirmationService]
})
export class EventPaymentHistoryModule{}
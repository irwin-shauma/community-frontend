import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { ConfirmationService } from "primeng/api";
import { AvatarModule } from "primeng/avatar";
import { CardModule } from "primeng/card";
import { ConfirmDialogModule } from "primeng/confirmdialog";
import { FileUploadModule } from "primeng/fileupload";
import { InputTextModule } from "primeng/inputtext";
import { InputTextareaModule } from "primeng/inputtextarea";
import { TableModule } from "primeng/table";
import { PremiumPaymentHistoryComponent } from "./premium-payment-history.component";
import { PremiumPaymentHistoryRouting } from "./premium-payment-history.routing";

@NgModule({
    imports: [
        PremiumPaymentHistoryRouting,
        CardModule,
        TableModule,
        ConfirmDialogModule,
        FileUploadModule,
        InputTextModule,
        AvatarModule,
        InputTextareaModule,
        FormsModule,
        CommonModule,
    ],
    declarations: [PremiumPaymentHistoryComponent],
    exports: [PremiumPaymentHistoryComponent],
    providers: [ConfirmationService]
})
export class PremiumPaymentHistoryModule{}
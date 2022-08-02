import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PremiumPaymentHistoryComponent } from "./premium-payment-history.component";

const routes: Routes = [
    {
        path: '',
        component: PremiumPaymentHistoryComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PremiumPaymentHistoryRouting{}
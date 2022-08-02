import { NgModule } from "@angular/core";
import { NgModel } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { EventPaymentHsitoryComponent } from "./event-payment-history.component";

const routes: Routes = [
    {
        path: '',
        component: EventPaymentHsitoryComponent
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class EventPaymentHistoryRouting{
}
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CreatePremiumTypeComponent } from "./create-premium-type/create-premium-type.component";
import { EditPremiumTypeComponent } from "./edit-premium-type/edit-premium-type.component";
import { ListPremiumTypeComponent } from "./list-premium-type/list-premium-type.component";

const routes: Routes = [
    {
        path: '',
        component: ListPremiumTypeComponent
    },
    {
        path: 'create',
        component: CreatePremiumTypeComponent
    },
    {
        path: ':id',
        component: EditPremiumTypeComponent
    }
]

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class PremiumTypeRouting{}
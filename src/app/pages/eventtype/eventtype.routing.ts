import { NgModule } from "@angular/core";
import { Router, RouterModule, Routes } from "@angular/router";
import { CreateEventTypeComponent } from "./createeventtype/create-eventtype.component";
import { EditEventTypeComponent } from "./editeventtype/edit-eventtype.component";
import { ListEventTypeComponent } from "./listeventtype/list-eventtype.component";

const routes: Routes = [
    {
        path: 'list',
        component: ListEventTypeComponent,
    },
    {
        path: 'create',
        component: CreateEventTypeComponent,
    },
    {
        path: 'edit',
        component: EditEventTypeComponent
    }
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EventTypeRouting{}
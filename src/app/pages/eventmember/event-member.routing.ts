import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { EventDetailCompoenent } from "./eventdetail/event-detail.component";
import { EventHeaderComponent } from "./eventheader/event-header.component";

const routes: Routes = [
  {
    path: '',
    component: EventHeaderComponent,
  },
  {
    path: 'details',
    component: EventDetailCompoenent,
  },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EventMemberrouting{}
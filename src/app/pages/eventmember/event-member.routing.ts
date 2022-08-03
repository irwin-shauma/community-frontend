import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { EventCreateComponent } from './eventcreate/event-create.component';
import { EventDetailCompoenent } from './eventdetail/event-detail.component';
import { EventHeaderComponent } from './eventheader/event-header.component';

const routes: Routes = [
  {
    path: '',
    component: EventHeaderComponent,
  },
  {
    path: 'details',
    component: EventDetailCompoenent,
  },
  {
    path: 'create',
    component: EventCreateComponent,
  },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EventMemberrouting{}
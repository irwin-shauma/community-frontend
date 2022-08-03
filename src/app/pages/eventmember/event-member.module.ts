import { NgModule } from "@angular/core";
import { AvatarModule } from "primeng/avatar";
import { ButtonModule } from "primeng/button";
import { CardModule } from "primeng/card";
import { DropdownModule } from 'primeng/dropdown';
import { FileUploadModule } from 'primeng/fileupload';
import { ImageModule } from 'primeng/image';
import { InputTextModule } from 'primeng/inputtext';
import { TabViewModule } from 'primeng/tabview';
import { EventMemberrouting } from './event-member.routing';
import { EventCreateComponent } from './eventcreate/event-create.component';
import { EventDetailCompoenent } from './eventdetail/event-detail.component';
import { EventHeaderComponent } from './eventheader/event-header.component';

@NgModule({
  imports: [
    CardModule,
    EventMemberrouting,
    TabViewModule,
    AvatarModule,
    InputTextModule,
    ButtonModule,
    ImageModule,
    DropdownModule,
    FileUploadModule,
  ],
  declarations: [
    EventHeaderComponent,
    EventDetailCompoenent,
    EventCreateComponent,
  ],
  exports: [EventHeaderComponent, EventDetailCompoenent, EventCreateComponent],
})
export class EventMemberModule {}
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { CardModule } from 'primeng/card';
import { DropdownModule } from 'primeng/dropdown';
import { FileUploadModule } from 'primeng/fileupload';
import { ImageModule } from 'primeng/image';
import { InputTextModule } from 'primeng/inputtext';
import { TabViewModule } from 'primeng/tabview';
import { EventMemberrouting } from './event-member.routing';
import { EventCreateComponent } from './eventcreate/event-create.component';
import { EventDetailCompoenent } from './eventdetail/event-detail.component';
import { EventHeaderComponent } from './eventheader/event-header.component';
import { DialogModule } from 'primeng/dialog';
import { InputNumberModule } from 'primeng/inputnumber';
import { EventEditComponent } from './eventedit/event-edit.component';
import { SharedPipeModule } from 'src/app/pipe/shared-pipe.module';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

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
    CalendarModule,
    CommonModule,
    FormsModule,
    DialogModule,
    InputNumberModule,
    SharedPipeModule,
    ProgressSpinnerModule
  ],
  declarations: [
    EventHeaderComponent,
    EventDetailCompoenent,
    EventCreateComponent,
    EventEditComponent,
  ],
  exports: [
    EventHeaderComponent,
    EventDetailCompoenent,
    EventCreateComponent,
    EventEditComponent,
  ],
})
export class EventMemberModule { }

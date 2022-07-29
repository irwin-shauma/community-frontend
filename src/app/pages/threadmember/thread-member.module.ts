import { NgModule } from '@angular/core';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { TabViewModule } from 'primeng/tabview';
import { ThreadMemberRouting } from './thread-member.routing';
import { ThreadMemberComponent } from './thread/thread.component';
import { BlockUIModule } from 'primeng/blockui';
import { PanelModule } from 'primeng/panel';
import { ThreadMemberDetailComponent } from './threaddetail/thread-detail.component';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { CalendarModule } from 'primeng/calendar';
import { FileUploadModule } from 'primeng/fileupload';
import { DropdownModule } from 'primeng/dropdown';
import { TimeAgoPipe } from 'src/app/pipe/time-ago.pipe';

@NgModule({
  imports: [
    ThreadMemberRouting,
    TabViewModule,
    AvatarModule,
    ButtonModule,
    BlockUIModule,
    PanelModule,
    InputTextareaModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextModule,
    CalendarModule,
    FileUploadModule,
    DropdownModule,
  ],
  declarations: [
    ThreadMemberComponent,
    ThreadMemberDetailComponent,
    TimeAgoPipe,
  ],
  exports: [ThreadMemberComponent, ThreadMemberDetailComponent],
})
export class ThreadMemberModule {}

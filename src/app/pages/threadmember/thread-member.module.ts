import { LOCALE_ID, NgModule } from '@angular/core';
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
import { BadgeModule } from 'primeng/badge';
import { DividerModule } from 'primeng/divider';
import { CheckboxModule } from 'primeng/checkbox';
import { ThreadEditComponent } from './threadedit/thread-edit.component';
import { SharedPipeModule } from 'src/app/pipe/shared-pipe.module';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import {SkeletonModule} from 'primeng/skeleton';

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
    BadgeModule,
    DividerModule,
    CheckboxModule,
    SharedPipeModule,
    ProgressSpinnerModule,
    SkeletonModule
  ],
  declarations: [
    ThreadMemberComponent,
    ThreadMemberDetailComponent,
    ThreadEditComponent,
  ],
  exports: [
    ThreadMemberComponent,
    ThreadMemberDetailComponent,
    ThreadEditComponent,
  ],

})
export class ThreadMemberModule { }

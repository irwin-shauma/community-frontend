import { NgModule } from '@angular/core';
import { ProfileRouting } from './profile.routing';
import { TabViewModule } from 'primeng/tabview';
import { AvatarModule } from 'primeng/avatar';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './editprofile/profile.component';
import { ProfileViewComponent } from './profileview/profile-view.component';
import { FileUploadModule } from 'primeng/fileupload';
import {PasswordModule} from 'primeng/password';
import { TableModule } from 'primeng/table';
import { SharedPipeModule } from 'src/app/pipe/shared-pipe.module';
import { CardModule } from 'primeng/card';
import { DialogModule } from 'primeng/dialog';
import { CalendarModule } from 'primeng/calendar';

@NgModule({
  imports: [
    ProfileRouting,
    TabViewModule,
    AvatarModule,
    InputTextModule,
    ButtonModule,
    FormsModule,
    CommonModule,
    FileUploadModule,
    PasswordModule,
    TableModule,
    SharedPipeModule,
    CardModule,
    DialogModule,
    CalendarModule,
  ],
  declarations: [ProfileComponent, ProfileViewComponent],
  exports: [ProfileComponent, ProfileViewComponent],
})
export class ProfileModule {}

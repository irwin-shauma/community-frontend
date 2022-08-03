import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CheckboxModule } from 'primeng/checkbox';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { FileUploadModule } from 'primeng/fileupload';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { TableModule } from 'primeng/table';
import { UserPremiumComponent } from './premium/user-premium.component';
import { UserRouting } from './user.routing';
import { UserComponent } from './user/user.component';

@NgModule({
  imports: [
    UserRouting, 
    TableModule, 
    CheckboxModule,
    TableModule,
    ConfirmDialogModule,
    FileUploadModule,
    InputTextModule,
    InputTextareaModule,
    FormsModule,
    CommonModule,
  ],
  declarations: [UserComponent, UserPremiumComponent],
  exports: [UserComponent, UserPremiumComponent],
})
export class UserModule {}

import { NgModule } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import { CheckboxModule } from 'primeng/checkbox';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { TableModule } from 'primeng/table';
import { RoleRouting } from './role.routing';
import { RoleCreateComponent } from './rolecreate/role-create.component';
import { RoleListComponent } from './rolelist/role.component';
import { FileUploadModule } from 'primeng/fileupload';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { RoleEditComponent } from './roleedit/role-edit.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    RoleRouting,
    CheckboxModule,
    TableModule,
    ConfirmDialogModule,
    FileUploadModule,
    InputTextModule,
    InputTextareaModule,
    FormsModule,
    CommonModule,
  ],
  declarations: [RoleListComponent, RoleCreateComponent, RoleEditComponent],
  exports: [RoleListComponent, RoleCreateComponent, RoleEditComponent],
  providers: [ConfirmationService],
})
export class RoleModule {}

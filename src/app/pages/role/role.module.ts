import { NgModule } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import { CheckboxModule } from 'primeng/checkbox';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { TableModule } from 'primeng/table';
import { RoleRouting } from './role.routing';
import { RoleCreateComponent } from './rolecreate/role-create.component';
import { RoleListComponent } from './rolelist/role.component';
import { FileUploadModule } from 'primeng/fileupload';

@NgModule({
  imports: [
    RoleRouting,
    CheckboxModule,
    TableModule,
    ConfirmDialogModule,
    FileUploadModule,
  ],
  declarations: [RoleListComponent, RoleCreateComponent],
  exports: [RoleListComponent, RoleCreateComponent],
  providers: [ConfirmationService],
})
export class RoleModule {}

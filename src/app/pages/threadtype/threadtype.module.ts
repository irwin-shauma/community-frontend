import { NgModule } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { CreateThreadTypeComponent } from './createthreadtype/create-threadtype.component';
import { EditThreadTypeComponent } from './editthreadtypes/edit-threadtype.component';
import { ListThreadTypeComponent } from './listthreadtype/list-threadtype.component';
import { ThreadTypeRouting } from './threadtype.routing';

@NgModule({
  imports: [
    ThreadTypeRouting,
    ButtonModule,
    TableModule,
    CheckboxModule,
    ConfirmDialogModule,
    CheckboxModule,
    InputTextModule,
  ],
  declarations: [
    ListThreadTypeComponent,
    CreateThreadTypeComponent,
    EditThreadTypeComponent,
  ],
  exports: [
    ListThreadTypeComponent,
    CreateThreadTypeComponent,
    EditThreadTypeComponent,
  ],
  providers: [ConfirmationService],
})
export class ThreadTypeModule {}

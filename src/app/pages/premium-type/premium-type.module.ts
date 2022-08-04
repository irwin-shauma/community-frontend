import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreatePremiumTypeComponent } from './create-premium-type/create-premium-type.component';
import { ListPremiumTypeComponent } from './list-premium-type/list-premium-type.component';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { FileUploadModule } from 'primeng/fileupload';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { RadioButtonModule } from 'primeng/radiobutton';
import { RatingModule } from 'primeng/rating';
import { RippleModule } from 'primeng/ripple';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';
import { ConfirmationService } from 'primeng/api';
import { PremiumTypeRouting } from './premium-type.routing';
import { EditPremiumTypeComponent } from './edit-premium-type/edit-premium-type.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    PremiumTypeRouting,
    ToolbarModule,
    ToastModule,
    FileUploadModule,
    TableModule,
    RatingModule,
    DialogModule,
    DropdownModule,
    RadioButtonModule,
    InputNumberModule,
    ButtonModule,
    RippleModule,
    ConfirmDialogModule,
    CheckboxModule,
    InputTextModule,
    InputTextareaModule,
    FormsModule,
    CommonModule,
  ],
  declarations: [
    ListPremiumTypeComponent,
    CreatePremiumTypeComponent,
    EditPremiumTypeComponent
  ],
  exports: [
    ListPremiumTypeComponent,
    CreatePremiumTypeComponent,
    EditPremiumTypeComponent
  ],
  providers: [
    ConfirmationService
  ],
})
export class PremiumTypeModule { }

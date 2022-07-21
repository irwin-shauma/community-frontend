import { NgModule } from '@angular/core';
import { ArticleRouting } from './article.routing';
import { ListArticleComponent } from './listarticle/list-article.component';
import { ToolbarModule } from 'primeng/toolbar';
import { ToastModule } from 'primeng/toast';
import { FileUploadModule } from 'primeng/fileupload';
import { TableModule } from 'primeng/table';
import { RatingModule } from 'primeng/rating';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { RadioButtonModule } from 'primeng/radiobutton';
import { InputNumberModule } from 'primeng/inputnumber';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';
import { CheckboxModule } from 'primeng/checkbox';
import { CreateArticleComponent } from './createarticle/create-article.component';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { EditArticleComponent } from './editarticle/edit-article.component';

@NgModule({
  imports: [
    ArticleRouting,
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
  ],
  declarations: [
    ListArticleComponent,
    CreateArticleComponent,
    EditArticleComponent,
  ],
  exports: [ListArticleComponent, CreateArticleComponent, EditArticleComponent],
  providers: [ConfirmationService],
})
export class ArticleModule {}

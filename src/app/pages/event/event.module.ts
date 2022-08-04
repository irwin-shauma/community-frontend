import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ConfirmationService } from 'primeng/api';
import { CheckboxModule } from 'primeng/checkbox';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { TableModule } from 'primeng/table';
import { CourseComponent } from './course/course.component';
import { EventRouting } from './event.routing';
import { EventComponent } from './event/event.component';

@NgModule({
  imports: [
    EventRouting,
     TableModule,
      CheckboxModule,
      ConfirmDialogModule,
      FormsModule,
      CommonModule
    ],
  declarations: [EventComponent, CourseComponent],
  exports: [EventComponent, CourseComponent],
  providers: [ConfirmationService],
})
export class EventModule {

}

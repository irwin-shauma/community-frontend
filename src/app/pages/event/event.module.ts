import { NgModule } from '@angular/core';
import { CheckboxModule } from 'primeng/checkbox';
import { TableModule } from 'primeng/table';
import { CourseComponent } from './course/course.component';
import { EventRouting } from './event.routing';
import { EventComponent } from './event/event.component';

@NgModule({
  imports: [EventRouting, TableModule, CheckboxModule],
  declarations: [EventComponent, CourseComponent],
  exports: [EventComponent, CourseComponent],
})
export class EventModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseComponent } from './course/course.component';
import { EventComponent } from './event/event.component';

const routes: Routes = [
  {
    path: '',
    component: EventComponent,
  },
  {
    path: 'course',
    component: CourseComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EventRouting {}

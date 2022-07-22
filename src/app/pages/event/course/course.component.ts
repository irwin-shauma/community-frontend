import { Component } from '@angular/core';

@Component({
  selector: 'app-course-list',
  templateUrl: './course.component.html',
})
export class CourseComponent {
  listCourse = [
    {
      code: '321312',
      title: 'check',
      price: '20000',
      dates: '2020-05-27 18:15',
      start: '19.00',
      end: '21.00',
      provider: 'LinovHR',
      location: 'Gd.Pakuwon',
      isActive: true,
    },
    {
      code: '321312',
      title: 'check',
      price: '20000',
      dates: '2020-05-27 18:15',
      start: '19.00',
      end: '21.00',
      provider: 'LinovHR',
      location: 'Gd.Pakuwon',
      isActive: true,
    },
    {
      code: '321312',
      title: 'check',
      price: '20000',
      dates: '2020-05-27 18:15',
      start: '19.00',
      end: '21.00',
      provider: 'LinovHR',
      location: 'Gd.Pakuwon',
      isActive: true,
    },
  ];
}

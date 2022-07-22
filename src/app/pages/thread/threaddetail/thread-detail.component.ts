import { Component } from '@angular/core';

@Component({
  selector: 'app-thread-detail',
  templateUrl: './thread-detail.component.html',
})
export class ThreadDetailComponent {
  listThreadDetail = [
    {
      code: '321',
      photo: 'check',
      user: 'salman',
    },
    {
      code: '31231',
      photo: 'check2',
      user: 'irfan',
    },
    {
      code: '3412',
      photo: 'check3',
      user: 'irwin',
    },
  ];
}

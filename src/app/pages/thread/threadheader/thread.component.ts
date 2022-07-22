import { Component } from '@angular/core';

@Component({
  selector: 'app-thread-list',
  templateUrl: 'thread.component.html',
})
export class ThreadComponent {
  listThread = [
    {
      code: '3123123',
      title: 'blablabla',
      type: 'polling',
    },
    {
      code: '31424',
      title: 'blablabla',
      type: 'regular',
    },
    {
      code: '3123123',
      title: 'blablabla',
      type: 'premium',
    },
  ];
}

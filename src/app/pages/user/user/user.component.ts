import { Component } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user.component.html',
})
export class UserComponent {
  listUser = [
    {
      usercode: '323123',
      email: 'salmanfarissiddiq@gmail.com',
      role: 'users',
      photo: 'zip',
      isActive: true,
    },
    {
      usercode: '43413',
      email: 'irfan@gmail.com',
      role: 'admin',
      photo: 'zip',
      isActive: true,
    },
  ];
}

import { Component } from '@angular/core';
import { ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-role-list',
  templateUrl: './role.component.html',
})
export class RoleListComponent {
  constructor(private confirmationService: ConfirmationService) {}

  listRole = [
    {
      code: '213213',
      name: 'Admin',
    },
    {
      code: '213213',
      name: 'Member',
    },
  ];

  confirm() {
    this.confirmationService.confirm({
      message: 'Are you sure that you want to perform this action?',
      accept: () => {},
    });
  }
}

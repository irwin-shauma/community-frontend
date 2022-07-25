import { Component } from '@angular/core';
import { ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-list-threadtype',
  templateUrl: './list-threadtype.component.html',
})
export class ListThreadTypeComponent {
  listThreadType = [
    {
      code: '312312',
      threadtype: 'regular',
    },
    {
      code: '41341',
      threadtype: 'polling',
    },
    {
      code: '421312',
      threadtype: 'premium',
    },
  ];

  constructor(private confirmationService: ConfirmationService) {}

  confirm() {
    this.confirmationService.confirm({
      message: 'Are you sure that you want to perform this action?',
      accept: () => {},
    });
  }
}

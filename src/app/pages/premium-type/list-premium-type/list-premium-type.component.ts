import { Component, OnInit } from '@angular/core';
import { ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-list-premium-type',
  templateUrl: './list-premium-type.component.html'
})
export class ListPremiumTypeComponent implements OnInit {

  constructor(private confirmationService: ConfirmationService) { }

  listPremium = [
    {
      code: "PT1234",
      price: "25000",
      duration: "1"
    },
    {
      code: "PT1235",
      price: "70000",
      duration: "3"
    },
    {
      code: "PT1236",
      price: "135000",
      duration: "6"
    },
  ]

  ngOnInit(): void {
  }

  confirm() {
    this.confirmationService.confirm({
      message: 'Are you sure that you want to perform this action?',
      accept: () => {},
    });
  }

}

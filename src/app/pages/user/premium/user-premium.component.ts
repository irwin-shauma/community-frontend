import { Component } from '@angular/core';

@Component({
  selector: 'app-user-premium',
  templateUrl: './user-premium.component.html',
})
export class UserPremiumComponent {
  listPremium = [
    {
      user: 'salman',
      duration: '6bulan',
      remainingduration: '5days',
    },
    {
      user: 'irfan',
      duration: '3bulan',
      remainingduration: '3days',
    },
    {
      user: 'irwin',
      duration: '1bulan',
      remainingduration: '1days',
    },
  ];
}

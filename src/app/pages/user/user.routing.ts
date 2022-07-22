import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserPremiumComponent } from './premium/user-premium.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {
    path: '',
    component: UserComponent,
  },
  {
    path: 'premium',
    component: UserPremiumComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRouting {}

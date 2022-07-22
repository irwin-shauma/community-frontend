import { NgModule } from '@angular/core';
import { CheckboxModule } from 'primeng/checkbox';
import { TableModule } from 'primeng/table';
import { UserPremiumComponent } from './premium/user-premium.component';
import { UserRouting } from './user.routing';
import { UserComponent } from './user/user.component';

@NgModule({
  imports: [UserRouting, TableModule, CheckboxModule],
  declarations: [UserComponent, UserPremiumComponent],
  exports: [UserComponent, UserPremiumComponent],
})
export class UserModule {}

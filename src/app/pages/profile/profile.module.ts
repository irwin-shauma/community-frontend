import { NgModule } from '@angular/core';
import { ProfileComponent } from './profile.component';
import { ProfileRouting } from './profile.routing';
import { TabViewModule } from 'primeng/tabview';
import { AvatarModule } from 'primeng/avatar';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';

@NgModule({
  imports: [
    ProfileRouting,
    TabViewModule,
    AvatarModule,
    InputTextModule,
    ButtonModule,
  ],
  declarations: [ProfileComponent],
  exports: [ProfileComponent],
})
export class ProfileModule {}

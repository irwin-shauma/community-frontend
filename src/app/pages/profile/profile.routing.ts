import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './editprofile/profile.component';
import { ProfileViewComponent } from './profileview/profile-view.component';

const routes: Routes = [
  {
    path: 'edit/:id',
    component: ProfileComponent,
  },
  {
    path: 'view/:id',
    component: ProfileViewComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileRouting {}
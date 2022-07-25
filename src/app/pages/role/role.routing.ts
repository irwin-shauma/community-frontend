import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoleCreateComponent } from './rolecreate/role-create.component';
import { RoleEditComponent } from './roleedit/role-edit.component';
import { RoleListComponent } from './rolelist/role.component';

const routes: Routes = [
  {
    path: '',
    component: RoleListComponent,
  },
  {
    path: 'create',
    component: RoleCreateComponent,
  },
  {
    path: 'edit',
    component: RoleEditComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RoleRouting {}

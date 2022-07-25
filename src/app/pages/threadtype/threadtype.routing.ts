import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateThreadTypeComponent } from './createthreadtype/create-threadtype.component';
import { EditThreadTypeComponent } from './editthreadtypes/edit-threadtype.component';
import { ListThreadTypeComponent } from './listthreadtype/list-threadtype.component';

const routes: Routes = [
  {
    path: '',
    component: ListThreadTypeComponent,
  },
  {
    path: 'create',
    component: CreateThreadTypeComponent,
  },
  {
    path: 'edit',
    component: EditThreadTypeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ThreadTypeRouting {}

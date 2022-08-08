import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ThreadMemberComponent } from './thread/thread.component';
import { ThreadMemberDetailComponent } from './threaddetail/thread-detail.component';
import { ThreadEditComponent } from './threadedit/thread-edit.component';

const routes: Routes = [
  {
    path: '',
    component: ThreadMemberComponent,
  },
  {
    path: ':id',
    component: ThreadMemberDetailComponent,
  },
  {
    path: 'edit/:id',
    component: ThreadEditComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ThreadMemberRouting {}

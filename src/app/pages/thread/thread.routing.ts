import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ThreadDetailComponent } from './threaddetail/thread-detail.component';
import { ThreadComponent } from './threadheader/thread.component';

const routes: Routes = [
  {
    path: '',
    component: ThreadComponent,
  },
  {
    path: 'detail',
    component: ThreadDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ThreadRouting {}

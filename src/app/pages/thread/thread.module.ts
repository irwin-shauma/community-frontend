import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { TableModule } from 'primeng/table';
import { ThreadRouting } from './thread.routing';
import { ThreadDetailComponent } from './threaddetail/thread-detail.component';
import { ThreadComponent } from './threadheader/thread.component';

@NgModule({
  imports: [
    ThreadRouting,
    TableModule,
    CheckboxModule,
    ButtonModule,
    FormsModule,
    CommonModule,
  ],

  declarations: [ThreadComponent, ThreadDetailComponent],
  exports: [ThreadComponent, ThreadDetailComponent],
})
export class ThreadModule {}

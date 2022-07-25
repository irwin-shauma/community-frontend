import { NgModule } from '@angular/core';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { TabViewModule } from 'primeng/tabview';
import { ThreadMemberRouting } from './thread-member.routing';
import { ThreadMemberComponent } from './thread/thread.component';
import { BlockUIModule } from 'primeng/blockui';
import { PanelModule } from 'primeng/panel';
import { ThreadMemberDetailComponent } from './threaddetail/thread-detail.component';
import { InputTextareaModule } from 'primeng/inputtextarea';

@NgModule({
  imports: [
    ThreadMemberRouting,
    TabViewModule,
    AvatarModule,
    ButtonModule,
    BlockUIModule,
    PanelModule,
    InputTextareaModule,
  ],
  declarations: [ThreadMemberComponent, ThreadMemberDetailComponent],
  exports: [ThreadMemberComponent, ThreadMemberDetailComponent],
})
export class ThreadMemberModule {}

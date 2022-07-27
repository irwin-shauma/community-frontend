import { NgModule } from '@angular/core';
import {CardModule} from 'primeng/card';
import { ArticleMemberRouting } from './article-member.routing';
import { ArticleHeaderComponent } from './articleheader/article-header.component';
import { TabViewModule } from 'primeng/tabview';
import { AvatarModule } from 'primeng/avatar';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import {ImageModule} from 'primeng/image';
import { ArticleDetailComponent } from './articledetail/article-detail.component';

@NgModule({
  imports: [
    ArticleMemberRouting,
    CardModule,
    TabViewModule,
    AvatarModule,
    InputTextModule,
    ButtonModule,
    ImageModule,
  ],
  declarations: [ArticleHeaderComponent, ArticleDetailComponent],
  exports: [ArticleHeaderComponent, ArticleDetailComponent],
})
export class ArticleMemberModule {}
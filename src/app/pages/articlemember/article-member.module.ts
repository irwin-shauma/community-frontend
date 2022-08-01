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
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import {ScrollTopModule} from 'primeng/scrolltop';

@NgModule({
  imports: [
    ArticleMemberRouting,
    CardModule,
    TabViewModule,
    AvatarModule,
    InputTextModule,
    ButtonModule,
    ImageModule,
    FormsModule,
    CommonModule,
    InfiniteScrollModule,
    ScrollTopModule
  ],
  declarations: [ArticleHeaderComponent, ArticleDetailComponent],
  exports: [ArticleHeaderComponent, ArticleDetailComponent],
})
export class ArticleMemberModule {}
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateArticleComponent } from './createarticle/create-article.component';
import { EditArticleComponent } from './editarticle/edit-article.component';
import { ListArticleComponent } from './listarticle/list-article.component';

const routes: Routes = [
  {
    path: 'list',
    component: ListArticleComponent,
  },
  {
    path: 'create',
    component: CreateArticleComponent,
  },
  {
    path: 'edit',
    component: EditArticleComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArticleRouting {}

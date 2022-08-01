import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ArticleDetailComponent } from "./articledetail/article-detail.component";
import { ArticleHeaderComponent } from "./articleheader/article-header.component";

const routes: Routes =[
    {
        path: '',
        component: ArticleHeaderComponent
    },
    {
        path: 'details/:id',
        component: ArticleDetailComponent
    }

] 

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ArticleMemberRouting{}
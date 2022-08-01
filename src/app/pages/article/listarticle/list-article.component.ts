import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService } from 'primeng/api';
import { Subscription } from 'rxjs';
import { ArticleHeaderData } from 'src/app/dto/article/article-data';
import { ArticleHeaderFindAll } from 'src/app/dto/article/article-find-all';
import { ArticleHeaderService } from 'src/app/service/article.service';

@Component({
  selector: 'app-list-article',
  templateUrl: './list-article.component.html',
})
export class ArticleHeaderListComponent implements OnInit{
  idDeleted!: number;
  articleHeaders: ArticleHeaderFindAll = {} as ArticleHeaderFindAll;
  articleHeaderData!: ArticleHeaderData[];
  deleteSubscription?: Subscription;

  constructor(
    private confirmationService: ConfirmationService,
    private articleHeaderService: ArticleHeaderService,
    private router: Router) {}

  ngOnInit(): void{
    this.articleHeaders.data = [];
    this.initData();
    
  }

  initData(): void{
    this.articleHeaderService.showAllArticle(0,5).subscribe((result)=>{
      this.articleHeaders = result;
      this.articleHeaderData = result.data!;
    });
  }

  ondelete(id: number): void{
    this.idDeleted = id;
  }

  delete(): void{
    this.deleteSubscription= this.articleHeaderService
    .deleteArticle(this.idDeleted)
    .subscribe((result) => {
      this.initData()
    });
  }

  confirm(id: number): void {
    this.idDeleted = id;
    this.confirmationService.confirm({
      message: 'Are you sure that you want to perform this action?',
      accept: () => {
        this.delete();
      },
    });
  }

  onUpdateById(id: number): void{
    this.router.navigateByUrl(`/article/${id}`);
   }
}

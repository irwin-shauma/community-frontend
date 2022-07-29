import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ArticleUpdateReq } from 'src/app/dto/article/article-update';
import { ArticleHeaderService } from 'src/app/service/article.service';

@Component({
  selector: 'edit-article',
  templateUrl: './edit-article.component.html',
  styleUrls: ['./../article.styles.css'],
})
export class EditArticleComponent implements OnDestroy, OnInit{

  idParam!: number;
  articleHeaderSubscription?: Subscription;
  data: ArticleUpdateReq = {} as ArticleUpdateReq;

  constructor(
    private articleHeaderService: ArticleHeaderService,
    private activateRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activateRoute.params.subscribe((result) => {
      const resultTemp: any = result;
      this.idParam = resultTemp.id;

      this.articleHeaderService.findById(this.idParam).subscribe((res) => {
        this.data.id = res.data?.id;
        this.data.title = res.data?.title;
        this.data.contents = res.data?.contents;
        this.data.fileId = res.data?.fileId;
        this.data.isActive = res.data?.isActive;
      });
    });
  }

  ngOnDestroy(): void {
    this.articleHeaderSubscription?.unsubscribe();
  }

  onSubmit(): void{
    this.articleHeaderService.editArticle(this.data).subscribe((result) => {
      this.router.navigateByUrl('/article');
    });
  }
}

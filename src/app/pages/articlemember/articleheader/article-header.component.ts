import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ArticleHeaderData } from 'src/app/dto/article/article-data';
import { ArticleHeaderFindAll } from 'src/app/dto/article/article-find-all';
import { ArticleHeaderService } from 'src/app/service/article.service';

@Component({
  selector: 'app-articleheader',
  templateUrl: './article-header.component.html',
  styleUrls: ['./../articlemember.styles.css'],
})
export class ArticleHeaderComponent implements OnInit {
  articleHeaders: ArticleHeaderFindAll = {} as ArticleHeaderFindAll;
  articleHeaderData!: ArticleHeaderData[];

  constructor(
    private articleHeaderService: ArticleHeaderService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.articleHeaders.data = [];
    this.initData();
  }

  initData(): void {
    this.articleHeaderService.showAllArticle().subscribe((result) => {
      this.articleHeaders = result;
      this.articleHeaderData = result.data!;
    });
  }
}

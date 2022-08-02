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

  // start page mulai dari 0, max page untuk maksimum querynya yang ingin ditampilkan.
  startPage: number = 0;
  maxPage: number = 5;

  sliceOptions = {
    start: 0,
    end: 200,
    default: 200,
  };

  constructor(
    private articleHeaderService: ArticleHeaderService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.articleHeaders.data = [];
    this.initData(this.startPage, this.maxPage);
  }

  onScroll(): void {
    this.initData(this.startPage, this.maxPage + 5);
    this.maxPage += this.maxPage;
  }

  initData(startPage: number, maxPage : number): void {
    this.articleHeaderService.showAllArticle(startPage,maxPage).subscribe((result) => {
      this.articleHeaders = result;
      this.articleHeaderData = result.data!;
    });
  }
}

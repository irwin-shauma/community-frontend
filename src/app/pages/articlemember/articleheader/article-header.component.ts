import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ArticleHeaderData } from 'src/app/dto/article/article-data';
import { ArticleHeaderFindAll } from 'src/app/dto/article/article-find-all';
import { BalanceFindById } from 'src/app/dto/balance/balance-find-by-id-res';
import { ArticleHeaderService } from 'src/app/service/article.service';
import { BalanceService } from 'src/app/service/balance.service';
import { LoginService } from 'src/app/service/login.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-articleheader',
  templateUrl: './article-header.component.html',
  styleUrls: ['./../articlemember.styles.css'],
})
export class ArticleHeaderComponent implements OnInit {
  articleHeaders: ArticleHeaderFindAll = {} as ArticleHeaderFindAll;
  articleHeaderData!: ArticleHeaderData[];
  username: string = '';
  position: string = '';
  file: string = '';
  balance: BalanceFindById = {} as BalanceFindById;
  showType: boolean = true;
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
    private router: Router,
    private userService: UserService,
    private loginService: LoginService,
    private balanceService: BalanceService
  ) {}

  ngOnInit(): void {
    this.articleHeaders.data = [];
    this.initData(this.startPage, this.maxPage);
  }

  onScroll(): void {
    this.initData(this.startPage, this.maxPage + 5);
    this.maxPage += this.maxPage;
  }

  initData(startPage: number, maxPage: number): void {
    this.articleHeaderService
      .showAllArticle(startPage, maxPage)
      .subscribe((result) => {
        this.articleHeaders = result;
        this.articleHeaderData = result.data!;
      });
    this.userService
      .findById(this.loginService.getData()?.data?.id!)
      .subscribe((result) => {
        this.username = result.data?.fullName!;
        this.file = result.data?.fileId!;
        this.position = result.data?.position!;
      });
    this.balanceService.findByUser().subscribe((result) => {
      this.balance = result;
    });
  }
}

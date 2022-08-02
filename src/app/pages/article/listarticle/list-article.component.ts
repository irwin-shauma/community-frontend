import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService } from 'primeng/api';
import { Subscription } from 'rxjs';
import { ArticleHeaderData } from 'src/app/dto/article/article-data';
import { ArticleHeaderFindAll } from 'src/app/dto/article/article-find-all';
import { LoginRes } from 'src/app/dto/user/login-res';
import { ArticleHeaderService } from 'src/app/service/article.service';
import { LoginService } from 'src/app/service/login.service';
import { UserService } from 'src/app/service/user.service';

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
    private userService : UserService,
    private loginService : LoginService,
    private router: Router) {}

    private loginRes : LoginRes = {} as LoginRes

  ngOnInit(): void{
    this.articleHeaders.data = [];
    this.initData();
    
  }

  initData(): void{
    this.articleHeaderService.showAllArticle(0,5).subscribe((result)=>{
      this.articleHeaders = result;
      this.articleHeaderData = result.data!;
    });

    console.log(this.loginService.getData()?.data?.id);
    
    

    this.userService.findById( String(this.loginService.getData()?.data?.id)).subscribe((result) => {
      console.log(result)
    })
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

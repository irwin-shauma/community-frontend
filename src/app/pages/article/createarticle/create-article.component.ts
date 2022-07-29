import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { ChangeEvent } from '@ckeditor/ckeditor5-angular';
import { Subscription } from 'rxjs';
import { ArticleInsertReq } from 'src/app/dto/article/article-insert';
import { ArticleHeaderService } from 'src/app/service/article.service';
import * as ClassicEditor from '../../../../ckeditor5/build/ckeditor';


@Component({
  selector: 'app-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./../article.styles.css'],
})
export class CreateArticleComponent implements OnDestroy{

  retrieveData : string = '';
  editor : any = ClassicEditor;

  public onChange({editor} : ChangeEvent){
    const data = editor.getData();
    this.retrieveData = data;
  }

  data : string = '';

  articleHeaderSubscription?: Subscription;
  insertArticleHeaderReq: ArticleInsertReq = {} as ArticleInsertReq;

  constructor(private articleHeaderService: ArticleHeaderService, private router: Router){}

  onsubmitarticle(): void{
    this.articleHeaderSubscription = this.articleHeaderService
    .addArticle(this.insertArticleHeaderReq)
    .subscribe((result)=> {

    });
  }

  ngOnDestroy(): void{
    this.articleHeaderSubscription?.unsubscribe();
  }
}

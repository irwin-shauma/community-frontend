import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { ChangeEvent } from '@ckeditor/ckeditor5-angular';
import { Subscription } from 'rxjs';
import { ArticleInsertReq } from 'src/app/dto/article/article-insert';
import { ArticleHeaderService } from 'src/app/service/article.service';
import * as ClassicEditor from '../../../../ckeditor5/build/ckeditor';
import { FileService } from 'src/app/service/file.service';


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

  constructor(private articleHeaderService: ArticleHeaderService, private router: Router, private fileService: FileService){}

  onsubmitarticle(): void{
    this.articleHeaderSubscription = this.articleHeaderService
    .addArticle(this.insertArticleHeaderReq)
    .subscribe((result)=> {

    });
  }

  onInsertFile(event: any): void{
    const file = event.files[0];
    this.fileService.uploadAsBase64(file).then((res) => {
      this.insertArticleHeaderReq.fileName = res[0];
      this.insertArticleHeaderReq.fileExtension = res[1];
    });
  }

  ngOnDestroy(): void{
    this.articleHeaderSubscription?.unsubscribe();
  }
}

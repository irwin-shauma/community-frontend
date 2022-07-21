import { Component, OnInit } from '@angular/core';
import { ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-list-article',
  templateUrl: './list-article.component.html',
})
export class ListArticleComponent {
  constructor(private confirmationService: ConfirmationService) {}

  listArticle = [
    {
      code: '2321312',
      title: 'example1',
      photo: 'test',
      isActive: 'true',
    },
    {
      code: '2321312',
      title: 'example2',
      photo: 'test2',
      isActive: 'true',
    },
    {
      code: '2321312',
      title: 'example3',
      photo: 'test3',
      isActive: 'true',
    },
    {
      code: '2321312',
      title: 'example4',
      photo: 'test4',
      isActive: 'true',
    },
    {
      code: '2324141',
      title: 'example5',
      photo: 'test5',
      isActive: 'true',
    },
  ];

  confirm() {
    this.confirmationService.confirm({
      message: 'Are you sure that you want to perform this action?',
      accept: () => {},
    });
  }
}

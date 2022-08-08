import { Component, OnInit } from '@angular/core';

import { Subscription } from 'rxjs';
import { TotalCountData } from 'src/app/dto/total-count-data';
import { UserData } from 'src/app/dto/user/user-data';
import { UserFindAllRes } from 'src/app/dto/user/user-find-all-res';
import { TotalService } from 'src/app/service/total.service';
import { UserService } from 'src/app/service/user.service';
=======

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {

  totalCountData!: TotalCountData;
  totalSubscription?: Subscription;
  totalUser: number = 0;
  totalEvent: number = 0;
  totalThread: number = 0;
  totalArticle: number = 0;

  constructor(private totalService: TotalService) {}

  ngOnInit(): void {
 
    this.initData();

  }

  initData(): void {
    this.totalService.showAllTotal().subscribe((result) => {
      this.totalUser = result.data!.totalUser;
      this.totalEvent = result.data!.totalEvent;
      this.totalThread = result.data!.totalThread;
      this.totalArticle = result.data!.totalArticle;

    })
  }




}

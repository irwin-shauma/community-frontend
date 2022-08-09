import { Component, OnInit } from '@angular/core';

import { Subscription } from 'rxjs';
import { TotalCountData } from 'src/app/dto/total-count-data';
import { TotalCountRes } from 'src/app/dto/total-count-res';
import { TotalService } from 'src/app/service/total.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {

  totalCountData!: TotalCountData;
  totalSubscription?: Subscription;
  totalCountRes : TotalCountRes = {} as TotalCountRes;


  constructor(private totalService: TotalService) {}

  ngOnInit(): void {
    this.initData();
  }

  initData(): void {
    this.totalService.showAllTotal().subscribe((result) => {
        this.totalCountRes = result;
    })
  }
}

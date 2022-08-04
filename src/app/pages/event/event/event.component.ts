import { Component, OnInit } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import { Subscription } from 'rxjs';
import { EventHeaderData } from 'src/app/dto/event-header/event-header-data';
import { EventHeaderFindAllRes } from 'src/app/dto/event-header/event-header-find-all-res';
import { EventHeaderService } from 'src/app/service/event-header.service';

@Component({
  selector: 'app-event-list',
  templateUrl: './event.component.html',
})
export class EventComponent implements OnInit {
  listEvent = [
    {
      code: '321312',
      title: 'check',
      price: '20000',
      dates: '2020-05-27 18:15',
      start: '19.00',
      end: '21.00',
      provider: 'LinovHR',
      location: 'Gd.Pakuwon',
      isActive: true,
    },
    {
      code: '321312',
      title: 'check',
      price: '20000',
      dates: '2020-05-27 18:15',
      start: '19.00',
      end: '21.00',
      provider: 'LinovHR',
      location: 'Gd.Pakuwon',
      isActive: true,
    },
    {
      code: '321312',
      title: 'check',
      price: '20000',
      dates: '2020-05-27 18:15',
      start: '19.00',
      end: '21.00',
      provider: 'LinovHR',
      location: 'Gd.Pakuwon',
      isActive: true,
    },
  ];


  idDeleted! : number;
  eventHeaders : EventHeaderFindAllRes = {} as EventHeaderFindAllRes;
  eventHeaderData! : EventHeaderData[];
  deleteSubscription? : Subscription;

  constructor(
    private confirmationService: ConfirmationService,
    private eventHeaderService : EventHeaderService
  ){}

  delete() : void {
    // this.deleteSubscription = this.ar
  }

  ngOnInit(): void {
    this.initData();
  }

  initData() : void {
    this.eventHeaderService.showAllEventHeader(0,5).subscribe((result) => {
      console.log(result)
      this.eventHeaders = result;
      this.eventHeaderData = result.data!;
    })
  }

  confirm(id:number) : void {
    this.idDeleted = id;
    this.confirmationService.confirm({
      message : 'Are you sure that you want to perform this action?',
      accept: () => {
        this.delete();
      }
    })

  }
}

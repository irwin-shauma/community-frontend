import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { EventHeaderData } from 'src/app/dto/event-header/event-header-data';
import { EventHeaderService } from 'src/app/service/event-header.service';

@Component({
  selector: 'app-eventheader',
  templateUrl: './event-header.component.html',
  styleUrls: ['./../eventmember.styles.css'],
})
export class EventHeaderComponent implements OnInit {
  eventHeader: EventHeaderData[] = [];
  eventData: EventHeaderData[] = [];
  courseData: EventHeaderData[] = [];
  eventSubscription?: Subscription;
  isEvent: boolean = false

  constructor(
    private eventHeaderService: EventHeaderService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.onInitData();
    this.initEvent();
    this.initCourse();
    
    
  }

  onInitData(): void {
    this.eventHeaderService.showAllEventHeaderMember().subscribe((result) => {
      this.eventHeader = result.data;
    });
  }

  initEvent(): void {
    this.eventHeaderService.showAllEvent().subscribe(result => {
      this.eventData = result.data;
      if(result.data.length > 0) {
        this.isEvent = true
      }
      console.log(this.isEvent);
    })
  }

  initCourse(): void {
    this.eventHeaderService.showAllCourse().subscribe(result => {
      this.courseData = result.data;
    })
  }

  clickToDetail(id: string): void {
    this.router.navigateByUrl(`/event-members/detail/${id}`);
  }
}

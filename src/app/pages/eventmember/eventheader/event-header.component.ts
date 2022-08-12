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
  isCourse: boolean = false;
  eventSubscription?: Subscription;
  isEvent: boolean = false;

  constructor(
    private eventHeaderService: EventHeaderService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.initEvent();
    this.initCourse();
  }

  initEvent(): void {
    this.eventHeaderService.showAllEvent().subscribe((result) => {
      this.eventData = result.data;
      if (result.data.length > 0) {
        this.isEvent = true;
      }
    });
  }

  initCourse(): void {
    this.eventHeaderService.showAllCourse().subscribe((result) => {
      console.log('ini data', result.data);
      this.courseData = result.data;
      if (result.data.length > 0) {
        this.isCourse = true;
      }
    });
  }

  clickToDetail(id: string): void {
    this.router.navigateByUrl(`/event-members/detail/${id}`);
  }
}

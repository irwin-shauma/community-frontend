import { Component, OnInit } from '@angular/core';
import { EventTypeFindAll } from 'src/app/dto/EventType/event-type-find-all';
import { EventTypeService } from 'src/app/service/event-type.service';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./../eventmember.styles.css'],
})
export class EventCreateComponent implements OnInit {
  constructor(private eventTypeService: EventTypeService) {}
  eventType: EventTypeFindAll = {} as EventTypeFindAll;
  ngOnInit(): void {
    this.eventType.data = [];
    this.initData();
  }

  initData(): void {
    this.eventTypeService.showAllEventType().subscribe((result) => {
      this.eventType = result;
    });
  }

  onInsertFile(): void{
    
  }


}

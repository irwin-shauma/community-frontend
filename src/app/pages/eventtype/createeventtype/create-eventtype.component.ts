import { Component, OnDestroy } from "@angular/core";
import { Router } from "@angular/router";
import { Subscription } from "rxjs";
import { EventTypeInsertReq } from "src/app/dto/EventType/event-type-insert-req";
import { EventTypeService } from "src/app/service/event-type.service";

@Component({
    selector: 'app-create-eventtype',
    templateUrl: './create-eventtype.component.html',
    styleUrls: ['./../eventtype.css']
})
export class CreateEventTypeComponent implements OnDestroy{
    eventTypeSubscription?: Subscription;
    insertEventTypeReq: EventTypeInsertReq = {} as EventTypeInsertReq;

    constructor(private eventTypeService: EventTypeService, private router: Router){}
    
    onsubmiteventtype(): void {
        this.eventTypeSubscription = this.eventTypeService
        .addEventType(this.insertEventTypeReq)
        .subscribe((result)=>{
            this.router.navigateByUrl('/event-types')
        });
    }

    ngOnDestroy(): void {
        this.eventTypeSubscription?.unsubscribe();
    }
}
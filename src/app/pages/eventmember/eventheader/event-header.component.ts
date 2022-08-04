import { Component } from "@angular/core";
import { EventHeaderData } from "src/app/dto/event-header/event-header-data";
import { EventHeaderService } from "src/app/service/event-header-service";

@Component({
    selector: 'app-eventheader',
    templateUrl: './event-header.component.html',
    styleUrls: ['./../eventmember.styles.css']
})
export class EventHeaderComponent{

    eventHeaderData : EventHeaderData = {} as EventHeaderData;

    data : number = 12;

    constructor(private eventHeaderService : EventHeaderService ){

    }


}
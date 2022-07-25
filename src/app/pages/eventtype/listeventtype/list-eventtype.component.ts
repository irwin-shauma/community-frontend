import { Component } from "@angular/core";
import { ConfirmationService } from "primeng/api";


@Component({
    selector: 'app-list-eventtype',
    templateUrl: './list-eventtype.component.html'
})
export class ListEventTypeComponent{
    constructor(private confirmationService: ConfirmationService){}

    listEventType = [
        {
            code: '1234',
            type: 'event',
            isActive: 'true',
        },
        {
            code: '1234',
            type: 'course',
            isActive: 'true',
        }
    ];

    confirm(){
        this.confirmationService.confirm({
            message: 'Are you sure that you want o perform this action?',
            accept: () => {},
        });
    }
}
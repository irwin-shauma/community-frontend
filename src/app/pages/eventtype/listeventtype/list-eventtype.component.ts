import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ConfirmationService } from "primeng/api";
import { Subscription } from "rxjs";
import { EventTypeData } from "src/app/dto/EventType/event-type-data";
import { EventTypeFindAll } from "src/app/dto/EventType/event-type-find-all";
import { EventTypeService } from "src/app/service/event-type.service";


@Component({
    selector: 'app-list-eventtype',
    templateUrl: './list-eventtype.component.html'
})
export class ListEventTypeComponent implements OnInit{

    idDeleted!: number;
    eventTypes : EventTypeFindAll = {} as EventTypeFindAll;
    eventTypeData!: EventTypeData[];
    deleteSubscription?: Subscription;

    constructor(
        private confirmationService: ConfirmationService,
        private eventTypeService: EventTypeService,
        private router: Router
        ){}

    ngOnInit(): void {
        this.eventTypes.data = [];
        this.initData();
        
    }

    initData(): void{
        this.eventTypeService.showAllEventType().subscribe((result) =>{
            this.eventTypes = result;
            this.eventTypeData = result.data!;
        });
    }

    ondelete(id: number): void{
        this.idDeleted = id;
    }

    delete(): void{
        this.deleteSubscription= this.eventTypeService
        .deleteEventType(this.idDeleted)
        .subscribe((result) =>{
            this.initData();
        });
    }

    confirm(id: number): void{
        this.idDeleted = id;
        this.confirmationService.confirm({
            message: 'Are you sure that you want o perform this action?',
            accept: () => {
                this.delete();
            },
        });
    }

    onUpdateById(id: number): void{
        this.router.navigateByUrl(`/event-types/${id}`);
    }
    
}
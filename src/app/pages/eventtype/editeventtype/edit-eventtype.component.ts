import { Component, OnDestroy, OnInit } from "@angular/core"
import { ActivatedRoute, Router } from "@angular/router";
import { Subscription } from "rxjs";
import { EventTypeUpdateReq } from "src/app/dto/EventType/event-type-update-req";
import { EventTypeService } from "src/app/service/event-type.service";

@Component({
    selector: 'app-eventtype-edit',
    templateUrl: './edit-eventtype.component.html',
    styleUrls: ['./../eventtype.css']
})
export class EditEventTypeComponent implements OnDestroy, OnInit{
    idParam!: number;
    eventTypeSubscription?: Subscription;
    data: EventTypeUpdateReq = {} as EventTypeUpdateReq;

    constructor(
        private eventTypeService: EventTypeService,
        private activateRoute: ActivatedRoute,
        private router: Router
    ){}

    ngOnInit(): void{
        this.activateRoute.params.subscribe((result) => {
            const resultTemp: any = result;
            this.idParam = resultTemp.id;

            this.eventTypeService.findById(this.idParam).subscribe((res) => {
                this.data.id = res.data?.id;
                this.data.type = res.data?.type;
                // this.data.type = res.data?.threadTypeCode;
                this.data.isActive = res.data?.isActive;
            });
        });
    }

    ngOnDestroy(): void {
        this.eventTypeSubscription?.unsubscribe();
    }

    onSubmit(): void {
        this.eventTypeService.editEventType(this.data).subscribe((result) => {
            this.router.navigateByUrl('/event-types')
        });
    }
}
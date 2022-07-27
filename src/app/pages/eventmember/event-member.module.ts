import { NgModule } from "@angular/core";
import { AvatarModule } from "primeng/avatar";
import { ButtonModule } from "primeng/button";
import { CardModule } from "primeng/card";
import { ImageModule } from "primeng/image";
import { InputTextModule } from "primeng/inputtext";
import { TabViewModule } from "primeng/tabview";
import { EventMemberrouting } from "./event-member.routing";
import { EventDetailCompoenent } from "./eventdetail/event-detail.component";
import { EventHeaderComponent } from "./eventheader/event-header.component";

@NgModule({
    imports: [
        CardModule,
        EventMemberrouting,
        TabViewModule,
        AvatarModule,
        InputTextModule,
        ButtonModule,
        ImageModule,

    ],
    declarations: [
        EventHeaderComponent,
        EventDetailCompoenent,

    ],
    exports: [EventHeaderComponent, EventDetailCompoenent]
})
export class EventMemberModule{}
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { ConfirmationService } from "primeng/api";
import { ButtonModule } from "primeng/button";
import { CheckboxModule } from "primeng/checkbox";
import { ConfirmDialogModule } from "primeng/confirmdialog";
import { DialogModule } from "primeng/dialog";
import { DropdownModule } from "primeng/dropdown";
import { FileUploadModule } from "primeng/fileupload";
import { InputNumberModule } from "primeng/inputnumber";
import { InputTextModule } from "primeng/inputtext";
import { InputTextarea } from "primeng/inputtextarea";
import { RadioButtonModule } from "primeng/radiobutton";
import { RatingModule } from "primeng/rating";
import { RippleModule } from "primeng/ripple";
import { TableModule } from "primeng/table";
import { ToastModule } from "primeng/toast";
import { ToolbarModule } from "primeng/toolbar";
import { CreateEventTypeComponent } from "./createeventtype/create-eventtype.component";
import { EditEventTypeComponent } from "./editeventtype/edit-eventtype.component";
import { EventTypeRouting } from "./eventtype.routing";
import { ListEventTypeComponent } from "./listeventtype/list-eventtype.component";

@NgModule({
    imports: [
        EventTypeRouting,
        ToolbarModule,
        ToastModule,
        FileUploadModule,
        TableModule,
        RatingModule,
        DialogModule,
        DropdownModule,
        RadioButtonModule,
        InputNumberModule,
        ButtonModule,
        RippleModule,
        ConfirmDialogModule,
        CheckboxModule,
        InputTextModule,
        FormsModule,
        CommonModule
    ],
    declarations: [
        ListEventTypeComponent,
        CreateEventTypeComponent,
        EditEventTypeComponent
    ],
    exports: [ListEventTypeComponent, CreateEventTypeComponent, EditEventTypeComponent],
    providers: [ConfirmationService]
})
export class EventTypeModule{}
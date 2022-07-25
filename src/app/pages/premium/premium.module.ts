import { NgModule } from "@angular/core";
import { PremiumRouting } from "./premium.routing";
import { TabViewModule } from 'primeng/tabview';
import { AvatarModule } from 'primeng/avatar';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { PremiumComponent } from "./premium.component";
import { DropdownModule } from "primeng/dropdown";
import {FileUploadModule} from 'primeng/fileupload';
import {HttpClientModule} from '@angular/common/http';
import {CardModule} from 'primeng/card';

@NgModule({
    imports : [
        PremiumRouting,
        TabViewModule,
        AvatarModule,
        InputTextModule,
        ButtonModule,
        DropdownModule,
        FileUploadModule,
        HttpClientModule,
        CardModule
        
    ],
    declarations : [PremiumComponent],
    exports: [PremiumComponent]
})
export class PremiumModule{}
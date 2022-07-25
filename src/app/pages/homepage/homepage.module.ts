import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './homepage.component';
import { HomepageRouting } from './homepage.routing';
import { CardModule } from 'primeng/card';


@NgModule({
  declarations: [
    HomePageComponent
  ],
  imports: [
    CommonModule,
    HomepageRouting,
    CardModule
  ]
})
export class HomepageModule { }

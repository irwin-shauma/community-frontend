import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { HomeRouting } from './home.routing';

@NgModule({
  imports: [HomeRouting, HttpClientModule],
  declarations: [HomeComponent],
  exports: [HomeComponent],
})
export class HomeModule {}

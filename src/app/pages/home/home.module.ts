import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { SharedPipeModule } from 'src/app/pipe/shared-pipe.module';
import { HomeComponent } from './home.component';
import { HomeRouting } from './home.routing';

@NgModule({
  imports: [HomeRouting, HttpClientModule, SharedPipeModule],
  declarations: [HomeComponent],
  exports: [HomeComponent],
})
export class HomeModule {}

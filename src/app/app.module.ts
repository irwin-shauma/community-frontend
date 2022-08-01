import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRouting } from './app.routing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { SharedModule } from './components/shared.module';
import { CustomInterceptor } from './interceptor/custom.interceptor';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { ToastrModule } from 'ngx-toastr';
import { StoreModule } from '@ngrx/store';
import { registerReducer } from './state/register/register.reducer';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRouting,
    FormsModule,
    CommonModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    ToastrModule,
    StoreModule.forRoot({ register: registerReducer }),
    BrowserAnimationsModule,
    SharedModule,
    ToastModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: CustomInterceptor, multi: true },
    MessageService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

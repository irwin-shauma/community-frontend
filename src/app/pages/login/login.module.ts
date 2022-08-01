import { NgModule } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { TimelineModule } from 'primeng/timeline';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoginRouting } from './login.routing';
import { LoginComponent } from './login.component';

@NgModule({
  imports: [
    LoginRouting,
    InputTextModule,
    PasswordModule,
    ButtonModule,
    RippleModule,
    TimelineModule,
    CommonModule,
    FormsModule,
  ],
  declarations: [LoginComponent],
  exports: [LoginComponent],
})
export class LoginModule {}

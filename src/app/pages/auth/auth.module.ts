import { NgModule } from '@angular/core';
import { AuthRouting } from './auth.routing';
import { LoginComponent } from './login/login.component';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { RegisterComponent } from './register/register.component';
import { TimelineModule } from 'primeng/timeline';
import { CommonModule } from '@angular/common';
import { DetailComponent } from './detail/detail.component';
import { VerificationComponent } from './verification/verification.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    AuthRouting,
    InputTextModule,
    PasswordModule,
    ButtonModule,
    RippleModule,
    TimelineModule,
    CommonModule,
    FormsModule,
  ],
  declarations: [
    LoginComponent,
    RegisterComponent,
    DetailComponent,
    VerificationComponent,
  ],
  exports: [
    LoginComponent,
    RegisterComponent,
    DetailComponent,
    VerificationComponent,
  ],
})
export class AuthModule {}

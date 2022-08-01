import { NgModule } from '@angular/core';
import { AuthRouting } from './auth.routing';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { TimelineModule } from 'primeng/timeline';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from './register.component';
import { DetailComponent } from './detail.component';
import { VerificationComponent } from './verification.component';
import { RegisterMainComponent } from './register-main.component';

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
    RegisterMainComponent,
    RegisterComponent,
    DetailComponent,
    VerificationComponent,
  ],
  exports: [
    RegisterMainComponent,
    RegisterComponent,
    DetailComponent,
    VerificationComponent,
  ],
})
export class AuthModule {}

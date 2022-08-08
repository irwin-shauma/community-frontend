import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Role } from 'src/app/constant/role-constant';
import { LoginReq } from 'src/app/dto/user/login-req';
import { LoginService } from 'src/app/service/login.service';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-login-auth',
  templateUrl: './login.component.html',
  styleUrls: ['./auth.style.css'],
})
export class LoginComponent implements OnInit, OnDestroy {
  loginSubsription?: Subscription;
  loginReq: LoginReq = {} as LoginReq;
  constructor(private loginService: LoginService, private router: Router, private spinner: NgxSpinnerService) { }

  ngOnInit(): void {

  }

  onlogin(): void {
    this.loginSubsription = this.loginService
      .login(this.loginReq)
      .subscribe((result) => {
        this.loginService.save(result);
        console.log(result.data?.roleCode);
        if (result.data?.roleCode == Role.SUPERADMIN) {
          this.spinner.show();

          setTimeout(() => {
            /** spinner ends after 5 seconds */
            this.spinner.hide();
            this.router.navigateByUrl('/home');
          }, 1000);
        } else {
          this.spinner.show();

          setTimeout(() => {
            /** spinner ends after 5 seconds */
            this.spinner.hide();
            this.router.navigateByUrl('/threads-main');
          }, 1000);
        }
      });
  }

  ngOnDestroy(): void {
    this.loginSubsription?.unsubscribe();
  }
}

import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Role } from 'src/app/constant/role-constant';
import { LoginReq } from 'src/app/dto/user/login-req';
import { LoginService } from 'src/app/service/login.service';
import { NgxSpinnerService } from "ngx-spinner";
// import { Title } from "@angular/platform-browser"

@Component({
  selector: 'app-login-auth',
  templateUrl: './login.component.html',
  styleUrls: ['./auth.style.css'],
})
export class LoginComponent implements OnInit, OnDestroy {
  loginSubsription?: Subscription;
  loginReq: LoginReq = {} as LoginReq;
  loading: boolean = false;
  constructor(private loginService: LoginService,
    private router: Router,
    private spinner: NgxSpinnerService,
    // private titleService : Title
    ) { 
      // this.titleService.setTitle("Login | Communify")
    }

  ngOnInit(): void {

  }

  onlogin(): void {
    this.loading = true;
    this.loginSubsription = this.loginService
      .login(this.loginReq)
      .subscribe((result) => {
        this.loginService.save(result);
        console.log(result.data?.roleCode);
        if (result.data?.roleCode == Role.SUPERADMIN) {
          this.router.navigateByUrl('/home');
          this.loading = false;
        } else {
          this.router.navigateByUrl('/threads-main');
          this.loading = false;
        }
      });
  }

  ngOnDestroy(): void {
    this.loginSubsription?.unsubscribe();
  }
}

import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Role } from 'src/app/constant/role-constant';
import { LoginReq } from 'src/app/dto/user/login-req';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-login-auth',
  templateUrl: './login.component.html',
  styleUrls: ['./../auth.style.css'],
})
export class LoginComponent implements OnDestroy {
  loginSubsription?: Subscription;
  loginReq: LoginReq = {} as LoginReq;
  constructor(private loginService: LoginService, private router: Router) {}

  onlogin(): void {
    this.loginSubsription = this.loginService
      .login(this.loginReq)
      .subscribe((result) => {
        this.loginService.save(result);
        console.log(result.data?.roleCode);
        if (result.data?.roleCode == Role.SUPERADMIN) {
          this.router.navigateByUrl('/home');
        } else {
          this.router.navigateByUrl('/homes');
        }
      });
  }

  ngOnDestroy(): void {
    this.loginSubsription?.unsubscribe();
  }
}

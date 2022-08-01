import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { MessageService } from 'primeng/api';
import { Observable, tap } from 'rxjs';
import { LoginService } from '../service/login.service';

@Injectable()
export class CustomInterceptor implements HttpInterceptor {
  constructor(
    private loginService: LoginService,
    private toastService: ToastrService,
    private messageService: MessageService,
    private router: Router
  ) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let reqClone = req;
    const isLoginReq = req.url.includes('login');
    if (!isLoginReq) {
      reqClone = req.clone({
        setHeaders: {
          Authorization: `Bearer ${this.loginService.getToken()}`,
        },
      });
    }
    return next.handle(reqClone).pipe(
      tap({
        next: (result) => {
          if (result instanceof HttpResponse) {
            if (result.body.message) {
              this.messageService.add({
                severity: 'success',
                summary: 'sukses',
                detail: result.body.message,
                life: 1000,
              });
              this.toastService.success(result.body.message);
            }
          }
        },
        error: (result) => {
          if (result instanceof HttpErrorResponse) {
            this.toastService.error(result.error.message);
            if (result.status == 401) {
              if (!isLoginReq) {
                this.router.navigateByUrl('/auth/login');
              }
              localStorage.clear();
            }
          }
        },
      })
    );
  }
}

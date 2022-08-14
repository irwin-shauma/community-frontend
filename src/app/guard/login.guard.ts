import { Injectable } from "@angular/core";
import { CanLoad, Route, Router, UrlSegment, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { LoginService } from "../service/login.service";

@Injectable({
    providedIn: 'root'
})
export class LoginGuard implements CanLoad{

    constructor(private loginService: LoginService, private router: Router){}

    canLoad(route: Route, segments: UrlSegment[]): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        if(this.loginService.getData()){
            this.router.navigateByUrl('/threads-main')
            return false
        } else{
            return true
        }
    }
}
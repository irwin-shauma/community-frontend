import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { UpdateRes } from "../dto/update-res";
import { LogoutReq } from "../dto/user/logout-req";

@Injectable({
    providedIn: 'root'
})
export class LogoutService {
    constructor(private http : HttpClient){}
    
    logout() : Observable<UpdateRes> {
        return this.http.patch<UpdateRes>('http://localhost:1234/users/logout', {});
      }
    
}
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { TotalCountRes } from "../dto/total-count-res";

@Injectable({
    providedIn: 'root'
})
export class TotalService{

    constructor(private http: HttpClient){}

    showAllTotal(): Observable<TotalCountRes>{
        return this.http.get<TotalCountRes>('http://localhost:1234/counts')
    }
}
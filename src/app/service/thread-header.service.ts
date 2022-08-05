import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ThreadHeaderFindAll } from "../dto/threadheader/thread-header-find-all";

@Injectable({
    providedIn: 'root',
})
export class ThreadHeaderService{
    constructor(private http: HttpClient){}

    showAllThreadHeader(): Observable<ThreadHeaderFindAll>{
        return this.http.get<ThreadHeaderFindAll>('http://localhost:1234/thread-headers');
    }

    showAllByUserLike(): Observable<ThreadHeaderFindAll>{
        return this.http.get<ThreadHeaderFindAll>('http://localhost:1234/thread-headers/likes');
    }
}
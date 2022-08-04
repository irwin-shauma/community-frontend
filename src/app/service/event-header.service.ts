import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { DeleteRes } from "../dto/delete-res";
import { EventHeaderFindAllRes } from "../dto/event-header/event-header-find-all-res";
import { EventHeaderFindById } from "../dto/event-header/event-header-find-by-id-res";
import { EventHeaderInsertReq } from "../dto/event-header/event-header-insert-req";
import { EventHeaderUpdateReq } from "../dto/event-header/event-header-update-req";
import { InsertRes } from "../dto/insert-res";
import { UpdateRes } from "../dto/update-res";

@Injectable({
    providedIn: 'root',
  })
export class EventHeaderService{
    constructor(private http: HttpClient){}

    showAllEventHeader(startPage : number, maxPage : number) : Observable<EventHeaderFindAllRes>{
        return this.http.get<EventHeaderFindAllRes>(`http://localhost:1234/event-headers?startPage=${startPage}&maxPage=${maxPage}`);
    }

    addEventHeader(data : EventHeaderInsertReq) : Observable<InsertRes>{
        return this.http.post<InsertRes>('http://localhost:1234/event-headers', data);
    }

    findById(id: number) : Observable<EventHeaderFindById>{
        return this.http.get<EventHeaderFindById>(`http://localhost:1234/event-headers/${id}`);
    }

    editEventHeader(data : EventHeaderUpdateReq) : Observable<UpdateRes>{
        return this.http.put<UpdateRes>('http://localhost:1234/event-types', data);
    }

    deleteEventHeader(id : number) : Observable<DeleteRes>{
        return this.http.delete<DeleteRes>(`http://localhost:1234/event-headers/${id}`);
    }
}
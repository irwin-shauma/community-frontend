import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { DeleteRes } from "../dto/delete-res";
import { EventTypeFindAll } from "../dto/EventType/event-type-find-all";
import { EventTypeFindById } from "../dto/EventType/event-type-find-by-id-res";
import { EventTypeInsertReq } from "../dto/EventType/event-type-insert-req";
import { EventTypeUpdateReq } from "../dto/EventType/event-type-update-req";
import { InsertRes } from "../dto/insert-res";
import { UpdateRes } from "../dto/update-res";

@Injectable({
    providedIn: 'root'
})
export class EventTypeService{
    constructor(private http: HttpClient){}

    showAllEventType(): Observable<EventTypeFindAll>{
        return this.http.get<EventTypeFindAll>('http://localhost:1234/event-types');
    }

    addEventType(data: EventTypeInsertReq): Observable<InsertRes>{
        return this.http.post<InsertRes>('http://localhost:1234/event-types', data);
    }

    findById(id: number): Observable<EventTypeFindById>{
        return this.http.get<EventTypeFindById>('http://localhost:1234/event-types/' + id);
    }

    editEventType(data: EventTypeUpdateReq): Observable<UpdateRes>{
        return this.http.put<UpdateRes>('http://localhost:1234/event-types', data);
    }

    deleteEventType(id: number): Observable<DeleteRes>{
        return this.http.delete<DeleteRes>('http://localhost:1234/event-types/' + id);
    }
}
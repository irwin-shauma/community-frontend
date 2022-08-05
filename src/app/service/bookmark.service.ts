import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { BookmarkInsertReq } from "../dto/bookmark/bookmark-insert-req";
import { DeleteRes } from "../dto/delete-res";
import { InsertRes } from "../dto/insert-res";

@Injectable({
    providedIn: "root"
})
export class BookmarkService {

    constructor(private http: HttpClient){}

    insert(data: BookmarkInsertReq): Observable<InsertRes>{
        return this.http.post<InsertRes>('http://localhost:1234/bookmarks', data);
    }

    delete(threadId: string): Observable<DeleteRes>{
        return this.http.delete<DeleteRes>('http://localhost:1234/bookmarks/unbookmark/'+threadId);
    }

}
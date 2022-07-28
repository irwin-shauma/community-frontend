import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { InsertRes } from '../dto/insert-res';
import { ThreadHeaderInsertReq } from '../dto/threadheader/thread-header-insert-req';

@Injectable({
  providedIn: 'root',
})
export class ThreadService {
  constructor(private http: HttpClient) {}

  addThread(data: ThreadHeaderInsertReq): Observable<InsertRes> {
    return this.http.post<InsertRes>(
      'http://localhost:1234/thread-headers',
      data
    );
  }
}

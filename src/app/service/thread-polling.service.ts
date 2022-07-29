import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { InsertRes } from '../dto/insert-res';
import { ThreadHeaderPollingInsertReq } from '../dto/threadheaderpolling/thread-header-polling-insert-req';

@Injectable({
  providedIn: 'root',
})
export class ThreadPollingService {
  constructor(private http: HttpClient) {}

  addThread(data: ThreadHeaderPollingInsertReq): Observable<InsertRes> {
    return this.http.post<InsertRes>(
      'http://localhost:1234/thread-header-pollings',
      data
    );
  }
}

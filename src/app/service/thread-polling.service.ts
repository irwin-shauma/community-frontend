import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { InsertRes } from '../dto/insert-res';
import { ThreadPollingAnswerInsertReq } from '../dto/thread-polling-answer/thread-polling-answer-insert-req';
import { ThreadHeaderPollingFindAll } from '../dto/threadheaderpolling/thread-header-polling-find-all-res';
import { ThreadHeaderPollingInsertReq } from '../dto/threadheaderpolling/thread-header-polling-insert-req';

@Injectable({
  providedIn: 'root',
})
export class ThreadPollingService {
  constructor(private http: HttpClient) {}

  addThreadPolling(data: ThreadHeaderPollingInsertReq): Observable<InsertRes> {
    return this.http.post<InsertRes>(
      'http://localhost:1234/thread-header-pollings',
      data
    );
  }

  showAllPolling(): Observable<ThreadHeaderPollingFindAll> {
    return this.http.get<ThreadHeaderPollingFindAll>(
      'http://localhost:1234/thread-header-pollings'
    );
  }

  addPollingAnswer(data: ThreadPollingAnswerInsertReq): Observable<InsertRes> {
    return this.http.post<InsertRes>(
      'http://localhost:1234/thread-polling-answers',
      data
    );
  }

  findByUserId(): Observable<ThreadHeaderPollingFindAll> {
    return this.http.get<ThreadHeaderPollingFindAll>(
      'http://localhost:1234/thread-header-pollings/users'
    );
  }
}

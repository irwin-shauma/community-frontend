import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { InsertRes } from '../dto/insert-res';
import { ThreadDetailFindAllRes } from '../dto/thread-detail/thread-detail-find-all-res';
import { ThreadDetailInsertReq } from '../dto/thread-detail/thread-detail-insert-req';

@Injectable({
  providedIn: 'root',
})
export class ThreadDetailService {
  constructor(private http: HttpClient) {}

  showAllThreadDetail(): Observable<ThreadDetailFindAllRes> {
    return this.http.get<ThreadDetailFindAllRes>(
      'http://localhost:1234/thread-details'
    );
  }

  insert(data: ThreadDetailInsertReq): Observable<InsertRes> {
    return this.http.post<InsertRes>('http://localhost:1234/thread-details', data);
  }


}

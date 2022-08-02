import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { InsertRes } from '../dto/insert-res';
import { ThreadHeaderData } from '../dto/threadheader/thread-header-data';
import { ThreadHeaderFindAll } from '../dto/threadheader/thread-header-find-all';
import { ThreadHeaderFindByIdRes } from '../dto/threadheader/thread-header-find-by-id-res';
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

  findById(id: string): Observable<ThreadHeaderFindByIdRes> {
    return this.http.get<ThreadHeaderFindByIdRes>(
      'http://localhost:1234/thread-headers/' + id
    );
  }

  showAllThread(): Observable<ThreadHeaderFindAll> {
    return this.http.get<ThreadHeaderFindAll>(
      'http://localhost:1234/thread-headers'
    );
  }
}

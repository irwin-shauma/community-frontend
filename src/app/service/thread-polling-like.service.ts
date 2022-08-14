import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DeleteRes } from '../dto/delete-res';
import { InsertRes } from '../dto/insert-res';
import { ThreadPollingLikeInsertReq } from '../dto/thread-polling-like/thread-polling-like-insert-req';
import { ThreadLikeFindAllRes } from '../dto/threadlike/thread-like-find-all-res';

@Injectable({
  providedIn: 'root',
})
export class ThreadPollingLikeService {
  constructor(private http: HttpClient) {}

  findAllByThread(id: string): Observable<ThreadLikeFindAllRes> {
    return this.http.get<ThreadLikeFindAllRes>(
      'http://localhost:1234/thread-polling-likes/threads/' + id
    );
  }

  insert(data: ThreadPollingLikeInsertReq): Observable<InsertRes> {
    return this.http.post<InsertRes>('http://localhost:1234/thread-polling-likes/', data);
  }

  delete(id: string): Observable<DeleteRes> {
    return this.http.delete<DeleteRes>('http://localhost:1234/thread-polling-likes/unlike/'+id);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DeleteRes } from '../dto/delete-res';
import { InsertRes } from '../dto/insert-res';
import { ThreadLikeInsertReq } from '../dto/thread-like/thread-like-insert-req';
import { ThreadLikeFindAllRes } from '../dto/threadlike/thread-like-find-all-res';

@Injectable({
  providedIn: 'root',
})
export class ThreadLikeService {
  constructor(private http: HttpClient) {}

  findAllByThread(id: string): Observable<ThreadLikeFindAllRes> {
    return this.http.get<ThreadLikeFindAllRes>(
      'http://localhost:1234/thread-likes/threads/' + id
    );
  }

  insert(data: ThreadLikeInsertReq): Observable<InsertRes> {
    return this.http.post<InsertRes>('http://localhost:1234/thread-likes/', data);
  }

  delete(id: string): Observable<DeleteRes> {
    return this.http.delete<DeleteRes>('http://localhost:1234/thread-likes/unlike/'+id);
  }
}

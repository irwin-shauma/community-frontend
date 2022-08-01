import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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
}

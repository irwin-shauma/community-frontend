import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ThreadHeaderFindAll } from "../dto/threadheader/thread-header-find-all";
import { ThreadHeaderFindByIdRes } from '../dto/threadheader/thread-header-find-by-id-res';
import { ThreadHeaderUpdateReq } from '../dto/threadheader/thread-header-update-req';
import { UpdateRes } from '../dto/update-res';

@Injectable({
  providedIn: 'root',
})
export class ThreadHeaderService {
  constructor(private http: HttpClient) {}

  showAllThreadHeader(): Observable<ThreadHeaderFindAll> {
    return this.http.get<ThreadHeaderFindAll>(
      'http://localhost:1234/thread-headers'
    );
  }

  showAllThreadHeaderDesc(): Observable<ThreadHeaderFindAll> {
    return this.http.get<ThreadHeaderFindAll>(
      'http://localhost:1234/thread-headers/desc'
    );
  }

  showAllByUserLike(): Observable<ThreadHeaderFindAll> {
    return this.http.get<ThreadHeaderFindAll>(
      'http://localhost:1234/thread-headers/likes'
    );
  }

  findById(id: string): Observable<ThreadHeaderFindByIdRes> {
    return this.http.get<ThreadHeaderFindByIdRes>(
      'http://localhost:1234/thread-headers/' + id
    );
  }

  findAllByUser(): Observable<ThreadHeaderFindAll> {
    return this.http.get<ThreadHeaderFindAll>(
      'http://localhost:1234/thread-headers/users'
    );
  }

  editThread(data: ThreadHeaderUpdateReq): Observable<UpdateRes> {
    return this.http.put<UpdateRes>(
      'http://localhost:1234/thread-headers',
      data
    );
  }

  findAllNonLogin(): Observable<ThreadHeaderFindAll> {
    return this.http.get<ThreadHeaderFindAll>(
      'http://localhost:1234/thread-headers/non-login'
    );
  }
}
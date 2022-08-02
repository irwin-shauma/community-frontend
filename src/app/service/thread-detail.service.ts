import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ThreadDetailFindAllRes } from '../dto/thread-detail/thread-detail-find-all-res';

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
}

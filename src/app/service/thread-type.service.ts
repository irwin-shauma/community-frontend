import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ThreadTypeFindAll } from '../dto/threadtype/thread-type-find-all';
import { ThreadTypeFindByIdRes } from '../dto/threadtype/thread-type-find-by-id-res';

@Injectable({
  providedIn: 'root',
})
export class ThreadTypeService {
  constructor(private http: HttpClient) {}
  showAllThreadType(): Observable<ThreadTypeFindAll> {
    return this.http.get<ThreadTypeFindAll>(
      'http://localhost:1234/thread-types'
    );
  }

  findByRegularType(): Observable<ThreadTypeFindByIdRes> {
    return this.http.get<ThreadTypeFindByIdRes>(
      'http://localhost:1234/thread-types/regular'
    );
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DeleteRes } from '../dto/delete-res';
import { InsertRes } from '../dto/insert-res';
import { ThreadTypeUpdateReq } from '../dto/thread-type/thread-type-update-req';
import { ThreadTypeFindAll } from '../dto/threadtype/thread-type-find-all';
import { ThreadTypeFindByIdRes } from '../dto/threadtype/thread-type-find-by-id-res';
import { ThreadTypeInsertReq } from '../dto/threadtype/thread-type-insert-req';
import { UpdateRes } from '../dto/update-res';

@Injectable({
  providedIn: 'root',
})
export class ThreadTypeService {
  constructor(private http: HttpClient) { }
  showAllThreadType(): Observable<ThreadTypeFindAll> {
    return this.http.get<ThreadTypeFindAll>(
      'http://localhost:1234/thread-types'
    );
  }

  getByid(id: string): Observable<ThreadTypeFindByIdRes> {
    return this.http.get<ThreadTypeFindByIdRes>('http://localhost:1234/thread-types/' + id);
  }

  insert(data: ThreadTypeInsertReq): Observable<InsertRes> {
    return this.http.post<InsertRes>('http://localhost:1234/thread-types', data);
  }

  findByRegularType(): Observable<ThreadTypeFindByIdRes> {
    return this.http.get<ThreadTypeFindByIdRes>(
      'http://localhost:1234/thread-types/regular'
    );
  }

  update(data: ThreadTypeUpdateReq): Observable<UpdateRes> {
    return this.http.put<UpdateRes>('http://localhost:1234/thread-types', data);
  }

  delete(id: string): Observable<DeleteRes> {
    return this.http.delete<DeleteRes>('http://localhost:1234/thread-types/' + id)
  }
}

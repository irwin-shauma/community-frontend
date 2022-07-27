import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { InsertRes } from '../dto/insert-res';
import { RoleFindAllRes } from '../dto/Role/role-find-all';
import { RoleInsertReq } from '../dto/Role/role-Iinsert-req';

@Injectable({
  providedIn: 'root',
})
export class RoleService {
  constructor(private http: HttpClient) {}

  showAllRole(): Observable<RoleFindAllRes> {
    return this.http.get<RoleFindAllRes>('http://localhost:1234/roles');
  }

  addRole(data: RoleInsertReq): Observable<InsertRes> {
    return this.http.post<InsertRes>('http://localhost:1234/roles', data);
  }
}

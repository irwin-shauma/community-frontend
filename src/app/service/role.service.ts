import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DeleteRes } from '../dto/delete-res';
import { InsertRes } from '../dto/insert-res';
import { RoleFindAllRes } from '../dto/Role/role-find-all';
import { RoleFindByIdRes } from '../dto/Role/role-find-by-Id-Res';
import { RoleInsertReq } from '../dto/Role/role-Iinsert-req';
import { RoleUpdateReq } from '../dto/Role/role-update-req';
import { UpdateRes } from '../dto/update-res';

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

  findById(id: string): Observable<RoleFindByIdRes> {
    return this.http.get<RoleFindByIdRes>('http://localhost:1234/roles/' + id);
  }

  editRole(data: RoleUpdateReq): Observable<UpdateRes> {
    return this.http.put<UpdateRes>('http://localhost:1234/roles', data);
  }

  deleteRole(id: string): Observable<DeleteRes> {
    return this.http.delete<DeleteRes>('http://localhost:1234/roles/' + id);
  }
}

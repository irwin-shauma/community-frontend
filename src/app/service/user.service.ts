import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { InsertRes } from '../dto/insert-res';
import { UpdateRes } from '../dto/update-res';
import { UpdatePhotoProfileReq } from '../dto/user/update-photo-profile-req';
import { UserChangePasswordReq } from '../dto/user/user-change-password-req';
import { UserFindAllRes } from '../dto/user/user-find-all-res';
import { UserFindByIdRes } from '../dto/user/user-find-by-id-res';
import { UserInsertReq } from '../dto/user/user-insert-req';
import { UserUpdateReq } from '../dto/user/user-update-req';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient, private loginService: LoginService) {}

  showAllUser(): Observable<UserFindAllRes>{
    return this.http.get<UserFindAllRes>('http://localhost:1234/users');
  }

  editUser(data: UserUpdateReq): Observable<UpdateRes> {
    return this.http.put<UpdateRes>('http://localhost:1234/users', data);
  }

  addUser(data: UserInsertReq): Observable<InsertRes> {
    return this.http.post<InsertRes>('http://localhost:1234/users', data);
  }

  findById(id: string): Observable<UserFindByIdRes> {
    return this.http.get<UserFindByIdRes>(`http://localhost:1234/users/${id}`);
  }

  updatePhotoProfile(data: UpdatePhotoProfileReq): Observable<UpdateRes> {
    return this.http.put<UpdateRes>(
      'http://localhost:1234/users/profile-pictures',
      data
    );
  }

  changePassword(data : UserChangePasswordReq) : Observable<UpdateRes> {
    return this.http.put<UpdateRes>('http://localhost:1234/users/change-password', data);
  }

 
}

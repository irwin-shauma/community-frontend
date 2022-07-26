import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginReq } from '../dto/user/login-req';
import { LoginRes } from '../dto/user/login-res';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}

  login(data: LoginReq): Observable<LoginRes> {
    return this.http.post<LoginRes>('http://localhost:1234/users', data);
  }

  save(data: LoginRes): void {
    localStorage.setItem('data', JSON.stringify(data));
  }

  getData(): LoginRes | null {
    const data = localStorage.getItem('data');
    if (data) {
      return JSON.parse(data);
    } else {
      return null;
    }
  }

  getToken(): string | null {
    const data = this.getData()?.data?.token;
    if (data) {
      return data;
    } else {
      return null;
    }
  }

  getRole(): string | null {
    const data = this.getData()?.data?.roleCode;
    if (data) {
      return data;
    } else {
      return null;
    }
  }
}

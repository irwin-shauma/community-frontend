import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BalanceFindById } from '../dto/balance/balance-find-by-id-res';

@Injectable({
  providedIn: 'root',
})
export class BalanceService {
  constructor(private http: HttpClient) {}

  findByUser(): Observable<BalanceFindById> {
    return this.http.get<BalanceFindById>(
      'http://localhost:1234/balances/users'
    );
  }
}

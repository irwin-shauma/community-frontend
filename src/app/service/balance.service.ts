import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BalanceFindById } from '../dto/balance/balance-find-by-id-res';
import { PremiumUpdateBalanceReq } from '../dto/balance/premium-update-balance-req';
import { UpdateCurrentBalanceReq } from '../dto/balance/update-current-balance-req';
import { UpdateRes } from '../dto/update-res';

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

  updatePremiumSystem(data: PremiumUpdateBalanceReq): Observable<UpdateRes> {
    return this.http.put<UpdateRes>(
      'http://localhost:1234/balances/premium-update-balance',
      data
    );
  }

  updateBalance(data: UpdateCurrentBalanceReq): Observable<UpdateRes> {
    return this.http.put<UpdateRes>(
      'http://localhost:1234/balances/update-balance',
      data
    );
  }
}

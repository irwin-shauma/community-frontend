import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { InsertRes } from '../dto/insert-res';
import { PremiumPaymentHistoryFindAll } from '../dto/premium-payment-history/premium-payment-history-find-all';
import { PremiumPaymentHistoryFindById } from '../dto/premium-payment-history/premium-payment-history-find-by-id-res';
import { PremiumPaymentHistoryInsertReq } from '../dto/premium-payment-history/premium-payment-history-insert-req';
import { PremiumPaymentHistoryUpdateReq } from '../dto/premium-payment-history/premium-payment-history-update-req';
import { UpdateRes } from '../dto/update-res';

@Injectable({
  providedIn: 'root',
})
export class PremiumPaymentHistoryService {
  constructor(private http: HttpClient) {}

  showAllPremiumPaymentHistory(
    startPage: number,
    maxPage: number
  ): Observable<PremiumPaymentHistoryFindAll> {
    return this.http.get<PremiumPaymentHistoryFindAll>(
      `http://localhost:1234/premium-payment-histories?startPage=${startPage}&maxPage=${maxPage}`
    );
  }

  showAllUnApprove(startPage: number, maxPage: number): Observable<PremiumPaymentHistoryFindAll> {
    return this.http.get<PremiumPaymentHistoryFindAll>(
      `http://localhost:1234/premium-payment-histories/unapprove?startPage=${startPage}&maxPage=${maxPage}`
    );
  }


  findByUser(): Observable<PremiumPaymentHistoryFindAll> {
    return this.http.get<PremiumPaymentHistoryFindAll>(
      'http://localhost:1234/premium-payment-histories/users/'
    );
  }

  getPremium(): Observable<PremiumPaymentHistoryFindById>{
    return this.http.get<PremiumPaymentHistoryFindById>('http://localhost:1234/premium-payment-histories/premium/')
  }

  getByUser(): Observable<PremiumPaymentHistoryFindAll> {
    return this.http.get<PremiumPaymentHistoryFindAll> ('http://localhost:1234/premium-payment-histories/users')
  }
  addPremiumPaymentHistory(
    data: PremiumPaymentHistoryInsertReq
  ): Observable<InsertRes> {
    return this.http.post<InsertRes>(
      'http://localhost:1234/premium-payment-histories',
      data
    );
  }

  approvePremium(data: PremiumPaymentHistoryUpdateReq): Observable<UpdateRes> {
    return this.http.put<UpdateRes> ('http://localhost:1234/premium-payment-histories', data)
  }
}

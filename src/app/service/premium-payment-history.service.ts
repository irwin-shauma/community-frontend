import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { InsertRes } from '../dto/insert-res';
import { PremiumPaymentHistoryFindAll } from '../dto/premium-payment-history/premium-payment-history-find-all';
import { PremiumPaymentHistoryInsertReq } from '../dto/premium-payment-history/premium-payment-history-insert-req';

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
      'http://localhost:1234/premium-payment-histories'
    );
  }

  findByUser(): Observable<PremiumPaymentHistoryFindAll> {
    return this.http.get<PremiumPaymentHistoryFindAll>(
      'http://localhost:1234/premium-payment-histories/users/'
    );
  }

  addPremiumPaymentHistory(
    data: PremiumPaymentHistoryInsertReq
  ): Observable<InsertRes> {
    return this.http.post<InsertRes>(
      'http://localhost:1234/premium-payment-histories',
      data
    );
  }
}

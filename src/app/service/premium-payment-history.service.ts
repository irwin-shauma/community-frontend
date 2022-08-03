import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PremiumPaymentHistoryFindAll } from '../dto/premium-payment-history/premium-payment-history-find-all';
import { PremiumPaymentHistoryFindById } from '../dto/premium-payment-history/premium-payment-history-find-by-id-res';

@Injectable({
  providedIn: 'root',
})
export class PremiumPaymentHistoryService {
  constructor(private http: HttpClient) {}

  showAllPremiumPaymentHistory(): Observable<PremiumPaymentHistoryFindAll> {
    return this.http.get<PremiumPaymentHistoryFindAll>(
      'http://localhost:1234/premium-payment-histories'
    );
  }

  findByUser(): Observable<PremiumPaymentHistoryFindById> {
    return this.http.get<PremiumPaymentHistoryFindById>(
      'http://localhost:1234/premium-payment-histories/users/'
    );
  }
}

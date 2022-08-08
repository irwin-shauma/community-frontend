
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { InsertRes } from '../dto/insert-res';
import { PaymentFindAllRes } from '../dto/payment/payment-find-all-res';
import { PaymentInsertReq } from '../dto/payment/payment-insert-req';

@Injectable({
  providedIn: 'root',
})
export class PaymentService {
  constructor(private http: HttpClient) {}

  addPayment(data: PaymentInsertReq): Observable<InsertRes> {
    return this.http.post<InsertRes>('http://localhost:1234/payments', data);
  }

  showAllPayment(): Observable<PaymentFindAllRes> {
    return this.http.get<PaymentFindAllRes>('http://localhost:1234/payments');
  }
}

import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { EventPaymentHistoryFindAllRes } from "../dto/event-payment-history/event-payment-history-find-all-res";
import { EventPaymentHistoryFindByIdRes } from "../dto/event-payment-history/event-payment-history-find-by-id-res";
import { EventPaymentHistoryInsertReq } from '../dto/event-payment-history/event-payment-insert-req';
import { EventPaymentHistoryUpdateReq } from "../dto/event-payment-history/event-payment-update-req";
import { InsertRes } from '../dto/insert-res';
import { UpdateRes } from "../dto/update-res";

@Injectable({
  providedIn: 'root',
})
export class EventPaymentHistoryService {
  constructor(private http: HttpClient) {}

  showAllEventPaymentHistory(): Observable<EventPaymentHistoryFindAllRes> {
    return this.http.get<EventPaymentHistoryFindAllRes>(
      'http://localhost:1234/event-payment-histories'
    );
  }

  showAllNotApprove(): Observable<EventPaymentHistoryFindAllRes> {
    return this.http.get<EventPaymentHistoryFindAllRes>(
      'http://localhost:1234/event-payment-histories/unapprove'
    );
  }

  findById(id: number): Observable<EventPaymentHistoryFindByIdRes> {
    return this.http.get<EventPaymentHistoryFindByIdRes>(
      'http://localhost:1234/event-payment-histories/' + id
    );
  }

  addPaymentEvent(data: EventPaymentHistoryInsertReq): Observable<InsertRes> {
    return this.http.post<InsertRes>(
      'http://localhost:1234/event-payment-histories',
      data
    );
  }

  approvePayment(data: EventPaymentHistoryUpdateReq): Observable<UpdateRes> {
    return this.http.put<UpdateRes>('http://localhost:1234/event-payment-histories', data)
  }
}
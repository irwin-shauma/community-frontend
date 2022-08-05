import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { PaymentFindAllRes } from "../dto/payment/payment-find-all-res";

@Injectable({
    providedIn: 'root'
})
export class PaymentService{
    constructor(private http: HttpClient){}

    showAllPayment(startPage: number, maxPage: number): Observable<PaymentFindAllRes>{
        return this.http.get<PaymentFindAllRes>('http://localhost:1234/payments')
    }

}
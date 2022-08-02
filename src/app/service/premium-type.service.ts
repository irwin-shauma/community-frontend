import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { DeleteRes } from "../dto/delete-res";
import { InsertRes } from "../dto/insert-res";
import { PremiumTypeFindAllRes } from "../dto/premium-type/premium-type-find-all-res";
import { PremiumTypeFindById } from "../dto/premium-type/premium-type-find-by-id-res";
import { PremiumTypeInsertReq } from "../dto/premium-type/premium-type-insert-req";
import { PremiumTypeUpdateReq } from "../dto/premium-type/premium-type-update-req";
import { UpdateRes } from "../dto/update-res";

@Injectable({
    providedIn: 'root'
})

export class PremiumTypeService{
    constructor(private http: HttpClient){}

    showAllPremiumType(): Observable<PremiumTypeFindAllRes> {
        return this.http.get<PremiumTypeFindAllRes>('http://localhost:1234/premium-types')
    }

    addPremiumType(data: PremiumTypeInsertReq){
        return this.http.post<InsertRes>('http://localhost:1234/premium-types', data);
    }

    findById(id: number): Observable<PremiumTypeFindById>{
        return this.http.get<PremiumTypeFindById>('http://localhost:1234/premium-types' + id);
    }

    editPremiumType(data: PremiumTypeUpdateReq): Observable<UpdateRes>{
        return this.http.put<UpdateRes>('http://localhost:1234/premium-types', data);
    }

    deletePremiumType(id: number): Observable<DeleteRes> {
        return this.http.delete<DeleteRes>('http://localhost/premium-types' +id);
    }
}
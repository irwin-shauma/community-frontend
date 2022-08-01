import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { InsertRes } from '../dto/insert-res';
import { VerificationFindByIdRes } from '../dto/verification/verification-find-by-id-res';
import { VerificationInsertData } from '../dto/verification/verification-insert-req';

@Injectable({
  providedIn: 'root',
})
export class VerificationService {
  constructor(private http: HttpClient) {}

  addVerification(data: VerificationInsertData): Observable<InsertRes> {
    return this.http.post<InsertRes>(
      'http://localhost:1234/verifications',
      data
    );
  }

  findById(id: string): Observable<VerificationFindByIdRes> {
    return this.http.get<VerificationFindByIdRes>(
      'http://localhost:1234/verifications/' + id
    );
  }
}

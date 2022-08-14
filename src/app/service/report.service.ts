import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MemberRevenueReportData } from '../dto/report/member-revenue-report-data';

@Injectable({
  providedIn: 'root',
})
export class ReportService {
  constructor(private http: HttpClient) {}

  getMemberRevenueReport(): Observable<MemberRevenueReportData> {
    return this.http.get<MemberRevenueReportData>(
      'http://localhost:1234/reports/member-revenue-report'
    );
  }
}

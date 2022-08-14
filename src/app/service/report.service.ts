import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { InsertRes } from '../dto/insert-res';
import { MemberRevenueReportData } from '../dto/report/member-revenue-report-data';
import { MemberRevenueReportReq } from '../dto/report/member-revenure-report-req';

@Injectable({
  providedIn: 'root',
})
export class ReportService {
  constructor(private http: HttpClient) {}

  getReport(id: string, startDate: string, endDate: string): void {
    window.open(
      `http://localhost:1234/reports/member-revenue-report?id=${id}&startDate=${startDate}&endDate=${endDate}`,
      '_blank'
    );
  }
}

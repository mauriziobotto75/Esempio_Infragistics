import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { KpiSummaryType } from '../models/kpi-summary/kpi-summary-type';
import { KpiSummary } from '../static-data/kpi-summary';

@Injectable({
  providedIn: 'root'
})
export class KpiSummaryService {
  public getKpiSummary(): Observable<KpiSummaryType[]> {
    return of(KpiSummary['KpiSummaryType']);
  }
}

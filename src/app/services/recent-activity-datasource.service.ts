import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { RecentActivityType } from '../models/recent-activity-datasource/recent-activity-type';
import { RecentActivityDatasource } from '../static-data/recent-activity-datasource';

@Injectable({
  providedIn: 'root'
})
export class RecentActivityDatasourceService {
  public getRecentActivity(): Observable<RecentActivityType[]> {
    return of(RecentActivityDatasource['RecentActivityType']);
  }
}

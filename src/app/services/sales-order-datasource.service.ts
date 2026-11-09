import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { SalesOrderType } from '../models/sales-order-datasource/sales-order-type';
import { SalesOrderDatasource } from '../static-data/sales-order-datasource';

@Injectable({
  providedIn: 'root'
})
export class SalesOrderDatasourceService {
  public getSalesOrder(): Observable<SalesOrderType[]> {
    return of(SalesOrderDatasource['SalesOrderType']);
  }
}

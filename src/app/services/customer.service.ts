import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CustomerType } from '../models/customer/customer-type';
import { Customer } from '../static-data/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  public getCustomer(): Observable<CustomerType[]> {
    return of(Customer['CustomerType']);
  }
}

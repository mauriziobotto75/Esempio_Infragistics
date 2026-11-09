import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { InventoryItemType } from '../models/inventory-item/inventory-item-type';
import { InventoryItem } from '../static-data/inventory-item';

@Injectable({
  providedIn: 'root'
})
export class InventoryItemService {
  public getInventoryItem(): Observable<InventoryItemType[]> {
    return of(InventoryItem['InventoryItemType']);
  }
}

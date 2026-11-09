import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { InventoryItemService } from './inventory-item.service';

describe('InventoryItemService', () => {
  let service: InventoryItemService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    });
    service = TestBed.inject(InventoryItemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

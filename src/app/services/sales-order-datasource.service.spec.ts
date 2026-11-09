import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { SalesOrderDatasourceService } from './sales-order-datasource.service';

describe('SalesOrderDatasourceService', () => {
  let service: SalesOrderDatasourceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    });
    service = TestBed.inject(SalesOrderDatasourceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

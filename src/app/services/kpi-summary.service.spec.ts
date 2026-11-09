import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { KpiSummaryService } from './kpi-summary.service';

describe('KpiSummaryService', () => {
  let service: KpiSummaryService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    });
    service = TestBed.inject(KpiSummaryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

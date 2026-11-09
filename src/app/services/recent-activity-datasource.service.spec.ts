import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { RecentActivityDatasourceService } from './recent-activity-datasource.service';

describe('RecentActivityDatasourceService', () => {
  let service: RecentActivityDatasourceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    });
    service = TestBed.inject(RecentActivityDatasourceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

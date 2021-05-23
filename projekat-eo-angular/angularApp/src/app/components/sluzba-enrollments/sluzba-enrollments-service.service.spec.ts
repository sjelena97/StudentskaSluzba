import { TestBed } from '@angular/core/testing';

import { SluzbaEnrollmentsServiceService } from './sluzba-enrollments-service.service';

describe('SluzbaEnrollmentsServiceService', () => {
  let service: SluzbaEnrollmentsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SluzbaEnrollmentsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

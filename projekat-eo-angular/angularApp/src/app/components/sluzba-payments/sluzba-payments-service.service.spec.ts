import { TestBed } from '@angular/core/testing';

import { SluzbaPaymentsServiceService } from './sluzba-payments-service.service';

describe('SluzbaPaymentsServiceService', () => {
  let service: SluzbaPaymentsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SluzbaPaymentsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

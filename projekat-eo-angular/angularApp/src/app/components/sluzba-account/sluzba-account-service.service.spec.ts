import { TestBed } from '@angular/core/testing';

import { SluzbaAccountServiceService } from './sluzba-account-service.service';

describe('SluzbaAccountServiceService', () => {
  let service: SluzbaAccountServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SluzbaAccountServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

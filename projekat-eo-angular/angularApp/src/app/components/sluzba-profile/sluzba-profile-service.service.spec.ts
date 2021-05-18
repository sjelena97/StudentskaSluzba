import { TestBed } from '@angular/core/testing';

import { SluzbaProfileServiceService } from './sluzba-profile-service.service';

describe('SluzbaProfileServiceService', () => {
  let service: SluzbaProfileServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SluzbaProfileServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

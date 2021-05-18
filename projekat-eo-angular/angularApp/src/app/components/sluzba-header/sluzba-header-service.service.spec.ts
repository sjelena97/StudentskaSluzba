import { TestBed } from '@angular/core/testing';

import { SluzbaHeaderServiceService } from './sluzba-header-service.service';

describe('SluzbaHeaderServiceService', () => {
  let service: SluzbaHeaderServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SluzbaHeaderServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

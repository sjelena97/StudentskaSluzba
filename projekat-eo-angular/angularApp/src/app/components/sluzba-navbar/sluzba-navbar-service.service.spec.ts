import { TestBed } from '@angular/core/testing';

import { SluzbaNavbarServiceService } from './sluzba-navbar-service.service';

describe('SluzbaNavbarServiceService', () => {
  let service: SluzbaNavbarServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SluzbaNavbarServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

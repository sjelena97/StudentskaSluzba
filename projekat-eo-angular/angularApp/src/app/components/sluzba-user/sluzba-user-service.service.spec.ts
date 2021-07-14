import { TestBed } from '@angular/core/testing';

import { SluzbaUserServiceService } from './sluzba-user-service.service';

describe('SluzbaUserServiceService', () => {
  let service: SluzbaUserServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SluzbaUserServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

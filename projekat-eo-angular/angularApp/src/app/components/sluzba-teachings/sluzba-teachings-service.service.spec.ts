import { TestBed } from '@angular/core/testing';

import { SluzbaTeachingsServiceService } from './sluzba-teachings-service.service';

describe('SluzbaTeachingsServiceService', () => {
  let service: SluzbaTeachingsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SluzbaTeachingsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

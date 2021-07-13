import { TestBed } from '@angular/core/testing';

import { SluzbaExamPeriodsServiceService } from './sluzba-exam-periods-service.service';

describe('SluzbaExamPeriodsServiceService', () => {
  let service: SluzbaExamPeriodsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SluzbaExamPeriodsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

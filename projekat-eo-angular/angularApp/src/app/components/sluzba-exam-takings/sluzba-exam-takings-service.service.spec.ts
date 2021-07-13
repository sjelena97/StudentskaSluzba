import { TestBed } from '@angular/core/testing';

import { SluzbaExamTakingsServiceService } from './sluzba-exam-takings-service.service';

describe('SluzbaExamTakingsServiceService', () => {
  let service: SluzbaExamTakingsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SluzbaExamTakingsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

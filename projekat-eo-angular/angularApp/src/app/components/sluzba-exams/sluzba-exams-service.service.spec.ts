import { TestBed } from '@angular/core/testing';

import { SluzbaExamsServiceService } from './sluzba-exams-service.service';

describe('SluzbaExamsServiceService', () => {
  let service: SluzbaExamsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SluzbaExamsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

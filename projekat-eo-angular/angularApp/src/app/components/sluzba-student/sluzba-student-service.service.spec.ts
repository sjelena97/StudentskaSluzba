import { TestBed } from '@angular/core/testing';

import { SluzbaStudentServiceService } from './sluzba-student-service.service';

describe('SluzbaStudentServiceService', () => {
  let service: SluzbaStudentServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SluzbaStudentServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

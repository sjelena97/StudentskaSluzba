import { TestBed } from '@angular/core/testing';

import { SluzbaStudentsServiceService } from './sluzba-students-service.service';

describe('SluzbaStudentsServiceService', () => {
  let service: SluzbaStudentsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SluzbaStudentsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

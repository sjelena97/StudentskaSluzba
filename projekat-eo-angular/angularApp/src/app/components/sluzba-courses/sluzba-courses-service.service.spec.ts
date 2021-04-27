import { TestBed } from '@angular/core/testing';

import { SluzbaCoursesServiceService } from './sluzba-courses-service.service';

describe('SluzbaCoursesServiceService', () => {
  let service: SluzbaCoursesServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SluzbaCoursesServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

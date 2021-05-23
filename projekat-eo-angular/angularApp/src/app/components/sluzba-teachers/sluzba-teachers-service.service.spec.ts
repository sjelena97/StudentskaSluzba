import { TestBed } from '@angular/core/testing';

import { SluzbaTeachersServiceService } from './sluzba-teachers-service.service';

describe('SluzbaTeachersServiceService', () => {
  let service: SluzbaTeachersServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SluzbaTeachersServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

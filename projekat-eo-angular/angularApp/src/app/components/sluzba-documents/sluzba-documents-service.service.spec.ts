import { TestBed } from '@angular/core/testing';

import { SluzbaDocumentsServiceService } from './sluzba-documents-service.service';

describe('SluzbaDocumentsServiceService', () => {
  let service: SluzbaDocumentsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SluzbaDocumentsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

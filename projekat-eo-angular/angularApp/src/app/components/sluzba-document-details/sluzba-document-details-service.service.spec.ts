import { TestBed } from '@angular/core/testing';

import { SluzbaDocumentDetailsServiceService } from './sluzba-document-details-service.service';

describe('SluzbaDocumentDetailsServiceService', () => {
  let service: SluzbaDocumentDetailsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SluzbaDocumentDetailsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

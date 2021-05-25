import { TestBed } from '@angular/core/testing';

import { SluzbaSidebarServiceService } from './sluzba-sidebar-service.service';

describe('SluzbaSidebarServiceService', () => {
  let service: SluzbaSidebarServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SluzbaSidebarServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed, inject } from '@angular/core/testing';

import { CanActivateAuthGuardService } from './can-activate-auth.guard.service';

describe('CanActivateAuth.GuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CanActivateAuthGuardService]
    });
  });

  it('should ...', inject([CanActivateAuthGuardService], (guard: CanActivateAuthGuardService) => {
    expect(guard).toBeTruthy();
  }));
});

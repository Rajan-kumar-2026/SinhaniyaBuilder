import { TestBed } from '@angular/core/testing';

import { BuilderProfileService } from './builder-profile.service';

describe('BuilderProfileService', () => {
  let service: BuilderProfileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BuilderProfileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

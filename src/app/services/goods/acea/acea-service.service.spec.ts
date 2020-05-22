import { TestBed } from '@angular/core/testing';

import { AceaServiceService } from './acea-service.service';

describe('AceaServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AceaServiceService = TestBed.get(AceaServiceService);
    expect(service).toBeTruthy();
  });
});

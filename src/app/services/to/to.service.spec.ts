import { TestBed } from '@angular/core/testing';

import { ToService } from './to.service';

describe('ToService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ToService = TestBed.get(ToService);
    expect(service).toBeTruthy();
  });
});

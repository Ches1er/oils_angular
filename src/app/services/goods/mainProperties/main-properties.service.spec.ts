import { TestBed } from '@angular/core/testing';

import { MainPropertiesService } from './main-properties.service';

describe('MainPropertiesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MainPropertiesService = TestBed.get(MainPropertiesService);
    expect(service).toBeTruthy();
  });
});

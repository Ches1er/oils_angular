import { TestBed } from '@angular/core/testing';

import { ProductsTypesService } from './products-types.service';

describe('ProductsTypesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProductsTypesService = TestBed.get(ProductsTypesService);
    expect(service).toBeTruthy();
  });
});

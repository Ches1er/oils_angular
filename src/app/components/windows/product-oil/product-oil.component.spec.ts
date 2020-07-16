import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductOilComponent } from './product-oil.component';

describe('ProductOilComponent', () => {
  let component: ProductOilComponent;
  let fixture: ComponentFixture<ProductOilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductOilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductOilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

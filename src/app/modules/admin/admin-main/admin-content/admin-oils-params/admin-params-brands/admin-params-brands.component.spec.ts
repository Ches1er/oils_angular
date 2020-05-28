import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminParamsBrandsComponent } from './admin-params-brands.component';

describe('AdminParamsBrandsComponent', () => {
  let component: AdminParamsBrandsComponent;
  let fixture: ComponentFixture<AdminParamsBrandsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminParamsBrandsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminParamsBrandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

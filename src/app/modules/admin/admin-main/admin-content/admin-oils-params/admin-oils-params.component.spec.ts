import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminOilsParamsComponent } from './admin-oils-params.component';

describe('AdminOilsParamsComponent', () => {
  let component: AdminOilsParamsComponent;
  let fixture: ComponentFixture<AdminOilsParamsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminOilsParamsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminOilsParamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

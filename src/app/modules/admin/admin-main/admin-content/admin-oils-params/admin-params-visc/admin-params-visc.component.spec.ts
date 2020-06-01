import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminParamsViscComponent } from './admin-params-visc.component';

describe('AdminParamsViscComponent', () => {
  let component: AdminParamsViscComponent;
  let fixture: ComponentFixture<AdminParamsViscComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminParamsViscComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminParamsViscComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

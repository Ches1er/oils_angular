import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminParamsApiComponent } from './admin-params-api.component';

describe('AdminParamsApiComponent', () => {
  let component: AdminParamsApiComponent;
  let fixture: ComponentFixture<AdminParamsApiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminParamsApiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminParamsApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

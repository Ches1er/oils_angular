import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminOilsApprovalsComponent } from './admin-oils-approvals.component';

describe('AdminOilsApprovalsComponent', () => {
  let component: AdminOilsApprovalsComponent;
  let fixture: ComponentFixture<AdminOilsApprovalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminOilsApprovalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminOilsApprovalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

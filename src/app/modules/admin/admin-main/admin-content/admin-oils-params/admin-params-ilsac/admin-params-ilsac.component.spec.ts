import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminParamsIlsacComponent } from './admin-params-ilsac.component';

describe('AdminParamsIlsacComponent', () => {
  let component: AdminParamsIlsacComponent;
  let fixture: ComponentFixture<AdminParamsIlsacComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminParamsIlsacComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminParamsIlsacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminParamsAceaComponent } from './admin-params-acea.component';

describe('AdminParamsAceaComponent', () => {
  let component: AdminParamsAceaComponent;
  let fixture: ComponentFixture<AdminParamsAceaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminParamsAceaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminParamsAceaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

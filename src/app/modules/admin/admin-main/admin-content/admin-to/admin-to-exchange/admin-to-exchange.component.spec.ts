import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminToExchangeComponent } from './admin-to-exchange.component';

describe('AdminToExchangeComponent', () => {
  let component: AdminToExchangeComponent;
  let fixture: ComponentFixture<AdminToExchangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminToExchangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminToExchangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

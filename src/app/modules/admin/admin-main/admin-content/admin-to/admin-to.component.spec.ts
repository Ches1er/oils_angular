import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminToComponent } from './admin-to.component';

describe('AdminToComponent', () => {
  let component: AdminToComponent;
  let fixture: ComponentFixture<AdminToComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminToComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminToComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

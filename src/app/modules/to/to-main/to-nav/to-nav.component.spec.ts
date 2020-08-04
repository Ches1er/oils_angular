import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToNavComponent } from './to-nav.component';

describe('ToNavComponent', () => {
  let component: ToNavComponent;
  let fixture: ComponentFixture<ToNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

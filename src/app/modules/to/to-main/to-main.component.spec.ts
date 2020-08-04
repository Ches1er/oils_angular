import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToMainComponent } from './to-main.component';

describe('ToMainComponent', () => {
  let component: ToMainComponent;
  let fixture: ComponentFixture<ToMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToContentComponent } from './to-content.component';

describe('ToContentComponent', () => {
  let component: ToContentComponent;
  let fixture: ComponentFixture<ToContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

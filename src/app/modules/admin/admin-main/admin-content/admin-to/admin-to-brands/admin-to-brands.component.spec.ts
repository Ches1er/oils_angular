import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminToBrandsComponent } from './admin-to-brands.component';

describe('AdminToBrandsComponent', () => {
  let component: AdminToBrandsComponent;
  let fixture: ComponentFixture<AdminToBrandsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminToBrandsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminToBrandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

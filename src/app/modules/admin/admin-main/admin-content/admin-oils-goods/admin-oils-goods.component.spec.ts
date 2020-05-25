import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminOilsGoodsComponent } from './admin-oils-goods.component';

describe('AdminOilsGoodsComponent', () => {
  let component: AdminOilsGoodsComponent;
  let fixture: ComponentFixture<AdminOilsGoodsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminOilsGoodsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminOilsGoodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

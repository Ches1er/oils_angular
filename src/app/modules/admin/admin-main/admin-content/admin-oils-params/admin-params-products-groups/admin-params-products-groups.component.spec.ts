import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminParamsProductsGroupsComponent } from './admin-params-products-groups.component';

describe('AdminParamsProductsGroupsComponent', () => {
  let component: AdminParamsProductsGroupsComponent;
  let fixture: ComponentFixture<AdminParamsProductsGroupsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminParamsProductsGroupsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminParamsProductsGroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminToModelsComponent } from './admin-to-models.component';

describe('AdminToModelsComponent', () => {
  let component: AdminToModelsComponent;
  let fixture: ComponentFixture<AdminToModelsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminToModelsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminToModelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

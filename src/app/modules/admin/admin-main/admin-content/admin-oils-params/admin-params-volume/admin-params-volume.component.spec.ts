import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminParamsVolumeComponent } from './admin-params-volume.component';

describe('AdminParamsVolumeComponent', () => {
  let component: AdminParamsVolumeComponent;
  let fixture: ComponentFixture<AdminParamsVolumeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminParamsVolumeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminParamsVolumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

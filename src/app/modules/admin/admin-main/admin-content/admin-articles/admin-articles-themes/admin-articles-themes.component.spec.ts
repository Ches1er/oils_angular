import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminArticlesThemesComponent } from './admin-articles-themes.component';

describe('AdminArticlesThemesComponent', () => {
  let component: AdminArticlesThemesComponent;
  let fixture: ComponentFixture<AdminArticlesThemesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminArticlesThemesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminArticlesThemesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

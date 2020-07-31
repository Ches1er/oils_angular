import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticlesMainComponent } from './articles-main.component';

describe('ArticlesMainComponent', () => {
  let component: ArticlesMainComponent;
  let fixture: ComponentFixture<ArticlesMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticlesMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticlesMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyOnePageComponent } from './survey-one-page.component';

describe('SurveyOnePageComponent', () => {
  let component: SurveyOnePageComponent;
  let fixture: ComponentFixture<SurveyOnePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SurveyOnePageComponent]
    });
    fixture = TestBed.createComponent(SurveyOnePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

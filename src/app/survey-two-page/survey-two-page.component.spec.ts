import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyTwoPageComponent } from './survey-two-page.component';

describe('SurveyTwoPageComponent', () => {
  let component: SurveyTwoPageComponent;
  let fixture: ComponentFixture<SurveyTwoPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SurveyTwoPageComponent]
    });
    fixture = TestBed.createComponent(SurveyTwoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

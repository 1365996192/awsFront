import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyThree2PageComponent } from './survey-three2-page.component';

describe('SurveyThree2PageComponent', () => {
  let component: SurveyThree2PageComponent;
  let fixture: ComponentFixture<SurveyThree2PageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SurveyThree2PageComponent]
    });
    fixture = TestBed.createComponent(SurveyThree2PageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

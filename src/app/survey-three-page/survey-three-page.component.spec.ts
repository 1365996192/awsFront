import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyThreePageComponent } from './survey-three-page.component';

describe('SurveyThreePageComponent', () => {
  let component: SurveyThreePageComponent;
  let fixture: ComponentFixture<SurveyThreePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SurveyThreePageComponent]
    });
    fixture = TestBed.createComponent(SurveyThreePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyEndComponent } from './survey-end.component';

describe('SurveyEndComponent', () => {
  let component: SurveyEndComponent;
  let fixture: ComponentFixture<SurveyEndComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SurveyEndComponent]
    });
    fixture = TestBed.createComponent(SurveyEndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitLoadingComponent } from './submit-loading.component';

describe('SubmitLoadingComponent', () => {
  let component: SubmitLoadingComponent;
  let fixture: ComponentFixture<SubmitLoadingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubmitLoadingComponent]
    });
    fixture = TestBed.createComponent(SubmitLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

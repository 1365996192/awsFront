import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppRegLoadingComponent } from './app-reg-loading.component';

describe('AppRegLoadingComponent', () => {
  let component: AppRegLoadingComponent;
  let fixture: ComponentFixture<AppRegLoadingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppRegLoadingComponent]
    });
    fixture = TestBed.createComponent(AppRegLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

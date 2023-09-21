import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardMeComponent } from './dashboard-me.component';

describe('DashboardMeComponent', () => {
  let component: DashboardMeComponent;
  let fixture: ComponentFixture<DashboardMeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardMeComponent]
    });
    fixture = TestBed.createComponent(DashboardMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

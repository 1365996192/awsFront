import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardCommunityComponent } from './dashboard-community.component';

describe('DashboardCommunityComponent', () => {
  let component: DashboardCommunityComponent;
  let fixture: ComponentFixture<DashboardCommunityComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardCommunityComponent]
    });
    fixture = TestBed.createComponent(DashboardCommunityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

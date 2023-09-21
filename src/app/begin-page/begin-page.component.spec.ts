import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeginPageComponent } from './begin-page.component';

describe('BeginPageComponent', () => {
  let component: BeginPageComponent;
  let fixture: ComponentFixture<BeginPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BeginPageComponent]
    });
    fixture = TestBed.createComponent(BeginPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

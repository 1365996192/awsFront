import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoterRegLoadingComponent } from './voter-reg-loading.component';

describe('VoterRegLoadingComponent', () => {
  let component: VoterRegLoadingComponent;
  let fixture: ComponentFixture<VoterRegLoadingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VoterRegLoadingComponent]
    });
    fixture = TestBed.createComponent(VoterRegLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

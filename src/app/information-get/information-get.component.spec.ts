import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationGetComponent } from './information-get.component';

describe('InformationGetComponent', () => {
  let component: InformationGetComponent;
  let fixture: ComponentFixture<InformationGetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InformationGetComponent]
    });
    fixture = TestBed.createComponent(InformationGetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreatheHoldTrainingAppComponent } from './breathe-hold-training-app.component';

describe('BreatheHoldTrainingAppComponent', () => {
  let component: BreatheHoldTrainingAppComponent;
  let fixture: ComponentFixture<BreatheHoldTrainingAppComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BreatheHoldTrainingAppComponent]
    });
    fixture = TestBed.createComponent(BreatheHoldTrainingAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

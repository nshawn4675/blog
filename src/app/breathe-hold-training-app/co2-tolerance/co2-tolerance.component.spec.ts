import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Co2ToleranceComponent } from './co2-tolerance.component';

describe('Co2ToleranceComponent', () => {
  let component: Co2ToleranceComponent;
  let fixture: ComponentFixture<Co2ToleranceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Co2ToleranceComponent]
    });
    fixture = TestBed.createComponent(Co2ToleranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

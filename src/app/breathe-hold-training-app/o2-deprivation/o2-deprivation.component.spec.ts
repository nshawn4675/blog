import { ComponentFixture, TestBed } from '@angular/core/testing';

import { O2DeprivationComponent } from './o2-deprivation.component';

describe('O2DeprivationComponent', () => {
  let component: O2DeprivationComponent;
  let fixture: ComponentFixture<O2DeprivationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [O2DeprivationComponent]
    });
    fixture = TestBed.createComponent(O2DeprivationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-breathe-hold-training-app',
  templateUrl: './breathe-hold-training-app.component.html',
  styleUrls: ['./breathe-hold-training-app.component.scss']
})
export class BreatheHoldTrainingAppComponent {
  constructor(private location: Location) { }

  back(): void {
    this.location.back();
  }
}

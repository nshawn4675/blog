import { Component } from '@angular/core';

import { Portfolio } from './portfolio';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent {
  portfolio: Portfolio[] = [
    {
      id: 1,
      name: "Breathe-hold training app",
      descr: "CO2 tolerance and O2 deprivation training.",
      path: "breathe-hold-training-app"
    },
  ];
}

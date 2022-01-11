import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-plans',
  templateUrl: './plans.component.html',
  styleUrls: ['./plans.component.css']
})
export class PlansComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  plans = [ {
    type: 'Basic',
    price: '500 / Year'
  },
  {
    type: 'Premium',
    price: '1500 / Year'
  },
  {
    type: 'Gold',
    price: '2500 / Year'
  }
]

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tax',
  templateUrl: './tax.component.html',
  styleUrls: ['./tax.component.css']
})
export class TaxComponent implements OnInit {

  constructor() { }

  price: Array<number>

  ngOnInit() {
    this.price = [
      34.78,
      50.12,
      96.64,
      89.23
    ]
  }

}

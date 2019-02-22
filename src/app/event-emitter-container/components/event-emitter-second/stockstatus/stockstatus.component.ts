import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-stockstatus',
  templateUrl: './stockstatus.component.html',
  styleUrls: ['./stockstatus.component.css']
})
export class StockstatusComponent implements OnChanges {
  
  @Input() stock: number;
  @Input() productId: number;
  @Output() stockValueChange = new EventEmitter();
  color = '';
  updatdstockvalue: number;

  stockValueChanged(){
    this.stockValueChange.emit({ id: this.productId, updatdstockvalue: this.updatdstockvalue});
    this.updatdstockvalue = null;
  }

  constructor() { }
  
  ngOnChanges() {
    if(this.stock > 10) {
      this.color = 'green';
    } else {
      this.color = 'red';
    }
  }
}

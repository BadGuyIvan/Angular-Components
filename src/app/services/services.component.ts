import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  data: any;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
      this.data = this.route.snapshot.data;
  }
}

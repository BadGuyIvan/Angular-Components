import { Component, OnInit } from '@angular/core';
import { faCoffee, faUser } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { ModalService } from '../modal/modal.service';
import { fadeInOut } from '../animations';
library.add(faCoffee, faUser);

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  animations: [fadeInOut]
})
export class AboutComponent implements OnInit {
  constructor(private modalService: ModalService) { }

  ngOnInit() {
  }

  closeModal() {
    this.modalService.close();
  }

}

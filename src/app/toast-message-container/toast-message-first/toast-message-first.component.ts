import { Component, OnInit } from '@angular/core';
import { ToastService } from './toast.service';
import { flip } from '../../animations';

@Component({
  selector: 'app-toast-message-first',
  templateUrl: './toast-message-first.component.html',
  styleUrls: ['./toast-message-first.component.css'],
  animations: [flip]
})
export class ToastMessageFirstComponent implements OnInit {

  messages: any;

  constructor(private toast: ToastService) { }

  ngOnInit() {
    this.messages = this.toast.getMessages();
    this.toast.remove()
  }

}

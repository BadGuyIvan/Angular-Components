import { Component, OnInit, Input } from '@angular/core';
import { ToastService } from '../toast-message-first/toast.service';
@Component({
  selector: 'app-toast-message-create',
  templateUrl: './toast-message-create.component.html',
  styleUrls: ['./toast-message-create.component.css']
})
export class ToastMessageCreateComponent implements OnInit {

  constructor(private toast: ToastService) { }

  private text: String

  create(){
    this.toast.sendMessage(this.text);
  }

  ngOnInit() {
  }

}

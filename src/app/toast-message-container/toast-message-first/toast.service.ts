import { Injectable } from '@angular/core';
import { Message } from './Message';
import { Observable, of, timer, interval } from 'rxjs';
import { take, map, filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  private message: Message[] = []

  constructor() { }

  sendMessage(content) {
    const message = new Message(content);
    this.message.push(message);
  }

  getMessages(): Observable<Message[]> {
    return of(this.message)
  }

  remove(){
    return timer(0, 4000).subscribe(
      () => this.message.splice(0,1)
    )
  }
}

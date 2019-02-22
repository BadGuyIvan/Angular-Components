import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Post } from '../ngrx/post/post.model';
import * as PostActions from '../ngrx/post/post.actions';

interface NgrxSeondExampleComponentState {
  post: Post;
}

@Component({
  selector: 'app-ngrx-seond-example',
  templateUrl: './ngrx-seond-example.component.html',
  styleUrls: ['./ngrx-seond-example.component.css']
})
export class NgrxSeondExampleComponent implements OnInit {

  post: Observable<Post>;

  text: string;

  constructor(private store: Store<NgrxSeondExampleComponentState>) {
    this.post = this.store.select('post');
  }

  editText() {
    this.store.dispatch(new PostActions.EditText(this.text));
  }

  resetPost() {
    this.store.dispatch(new PostActions.Reset());
  }

  upvote() {
    this.store.dispatch( new PostActions.Upvote());
  }

  downvote() {
    this.store.dispatch(new PostActions.Downvote());
  }

  ngOnInit() {
  }

}

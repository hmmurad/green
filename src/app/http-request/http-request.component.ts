import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Subscription } from 'rxjs';

import { PostService } from './../services/posts.service';
import { Post } from './../includes/post.model';

@Component({
  selector: 'app-http-request',
  templateUrl: './http-request.component.html',
  styleUrls: ['./http-request.component.css']
})
export class HttpRequestComponent implements OnInit, OnDestroy {

  loadedPosts: Post[] = [];
  isFetching = false;
  error = null;
  private errSub: Subscription;

  constructor( private http: HttpClient, private postService: PostService) { }

  ngOnInit() {
    this.errSub = this.postService.error.subscribe(
      err => {
        this.error = err;
      }
    );

    this.isFetching = true;
    this.postService.fetchPosts()
      .subscribe(
        posts => {
          this.isFetching = false;
          this.loadedPosts = posts
        }, err => {
          this.isFetching = false;
          this.error = err.error.error;
        });

  }

  onCreatePost(postData: Post) {
    this.postService.createAndStorePost(postData.title, postData.content);
    
  }



  onFetchPosts() {
    this.isFetching = true;
    this.postService.fetchPosts()
      .subscribe(
        posts => {
          this.isFetching = false;
          this.loadedPosts = posts
        }, err => {
          this.isFetching = false;
          this.error = err.error.error;
        })
  }

  onClearPosts() {
   this.postService.deletePosts().subscribe(() => {
     this.loadedPosts = [];
   })
  }

  onclearErrors() {
    this.isFetching = false;
    this.error = null;
  }

  ngOnDestroy() {
    this.errSub.unsubscribe();
  }

}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { Post } from '../includes/post.model';

@Injectable({
  providedIn: 'root'
})
export class PostService{

  error = new Subject<string>();

  constructor( private http: HttpClient) {

  }

  createAndStorePost(title: string, content: string) {
    const postData: Post = {title: title, content: content}
    this.http.post<{name: string}>('https://mymenu-197f7.firebaseio.com/posts.json', postData)
      .subscribe(
        data => {
          console.log(data)
        }, err => {
          this.error.next(err.message);
        }

      )
  }

  fetchPosts() {
    return this.http.get<{[key: string]: Post}>('https://mymenu-197f7.firebaseio.com/posts.json')
      .pipe(
        map( resData => {
          const postsArray: Post[] = [];
          for(const key in resData) {
            if(resData.hasOwnProperty(key)){
              postsArray.push({...resData[key], id: key})
            }
          }
          return postsArray;
        }),
        catchError(errResponse => {
          return throwError(errResponse);
        })
      )
  }


  deletePosts() {
    return this.http.delete('https://mymenu-197f7.firebaseio.com/posts.json');
  }

}

import {Injectable} from '@angular/core'
import {HttpClient, HttpParams} from '@angular/common/http'
import {Observable, throwError} from 'rxjs'
import {catchError} from 'rxjs/operators'
import {PostItem} from "../interfaces/post-item";


@Injectable({providedIn: 'root'})
export class PostsService {
  constructor(public http: HttpClient) {}

  addPost(post: PostItem): Observable<PostItem> {
    return this.http.post<PostItem>('https://jsonplaceholder.typicode.com/posts', post)
  }

  fetchPosts(): Observable<PostItem[]> {

    return this.http.get<PostItem[]>('https://jsonplaceholder.typicode.com/posts', {
      params: new HttpParams().set('_limit', '10')
    })
      .pipe(
        catchError(error => {
          console.log("Error", error.message)
          return throwError(error)
        })
      )
  }

  removePost(id: number): Observable<any> {
    return this.http.delete<void>(`https://jsonplaceholder.typicode.com/posts/${id}`)
  }

  // updatePost(id: number): Observable<PostItem> {
  //   return this.http.put<PostItem>(`https://jsonplaceholder.typicode.com/posts/${id}`, {
  //     completed: true
  //   })
  // }
}

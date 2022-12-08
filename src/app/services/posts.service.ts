import {Injectable} from '@angular/core'
import {HttpClient, HttpParams} from '@angular/common/http'
import {Observable, throwError} from 'rxjs'
import {catchError} from 'rxjs/operators'
import {PostItem} from "../interfaces/post-item";


@Injectable({providedIn: 'root'})
export class PostsService {
  url = 'https://jsonplaceholder.typicode.com/posts';
  constructor(public http: HttpClient) {}

  addPost(post: PostItem): Observable<PostItem> {
    return this.http.post<PostItem>(this.url, post)
  }

  fetchPosts(): Observable<PostItem[]> {

    return this.http.get<PostItem[]>(this.url, {
      params: new HttpParams().set('_limit', '10')
    })
      .pipe(
        catchError(error => {
          console.log("Error", error.message)
          return throwError(error)
        })
      )
  }

  fetchOnePosts(id: number): Observable<PostItem[]> {

    return this.http.get<PostItem[]>(this.url + `/${id}`)
      .pipe(
        catchError(error => {
          console.log("Error", error.message)
          return throwError(error)
        })
      )
  }

  removePost(id: number): Observable<void> {
    return this.http.delete<void>(this.url + `/${id}`)
  }

  updatePost(id: number, res: PostItem): Observable<PostItem> {
    return this.http.put<PostItem>(this.url + `/${id}`, {
      title: res.title,
      body: res.body
    })
  }
}

import {Component, OnInit} from '@angular/core';
import {PostsService} from "./services/posts.service";
import {PostItem} from "./interfaces/post-item";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  posts: PostItem[] = []
  loading = false
  postTitle = ''
  postBody = ''
  error = ''

  constructor(public postsService: PostsService) {}


  ngOnInit() {
    this.fetchPosts()
  }

  // -
  addPost() {
    if (!this.postTitle.trim() || !this.postBody.trim()) {
      return
    }

    this.postsService.addPost({
      title: this.postTitle,
      body: this.postBody
    }).subscribe(post => {
      this.posts.unshift(post)
      this.postTitle = ''
      this.postBody = ''
    })
  }

  // +
  fetchPosts() {
    this.loading = true
    this.postsService.fetchPosts()
      .subscribe(posts => {
        this.posts = posts
        this.loading = false
      }, error => {
        this.error = error.message;
      })
  }

  // +
  removePost(id: any) {
    this.postsService.removePost(id)
      .subscribe(() => {
        this.posts = this.posts.filter(p => p.id !== id)
      })
  }

  // -
  // updateTodo(id: any) {
  //   this.postsService.updatePosts(id).
  //   subscribe(post => {
  //     this.posts.find(p => {
  //       if (p.id === post.id) {
  //         p.completed = true
  //       }
  //     })
  //   })
  // }

}

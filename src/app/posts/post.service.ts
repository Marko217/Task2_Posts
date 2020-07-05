import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Post } from './posts.model';
import { Comment } from './comment.model';

@Injectable()
export class PostService {
  postChanged = new Subject<Post[]>();
  private posts: Post[] = [];
  constructor() {}

  getPosts() {
    const niz = this.posts;
    var pom;
    if(this.posts.length != 0){
      var datum = niz[0].datePost;
      for(let i = 1; i< niz.length; i++){
        if(datum > niz[i].datePost){
         
        }
        else{

        }
      }
    }

    return niz;
  } 

  addPosts(post: Post) {
    post.datePost = new Date();
    this.posts.push(post);
    this.postChanged.next(this.posts.slice());
    // this.getPosts();
  }

  updatePosts(newPost: Post, newComment: Comment) {
    this.posts.forEach(element => {
      if(element.textPost == newPost.textPost){
        element.commentPost.push(newComment);
      }
    });
    this.postChanged.next(this.posts.slice());

    this.getPosts()
  }
}

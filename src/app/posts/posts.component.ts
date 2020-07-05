import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PostService } from './post.service';
import { Subscription } from 'rxjs';
import { Post } from './posts.model';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: Post[];

  subscription: Subscription;

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.subscription = this.postService.postChanged
      .subscribe(
        (posts: Post[]) => {
          this.posts = posts;
        }
      );
    this.posts = this.postService.getPosts();
  }

  onSubmit(form: NgForm) {
    const value = form.value;
    const newPost = new Post(value.textPost, new Date(), []);
    this.postService.addPosts(newPost);
    this.postService.getPosts();
    form.reset();  
  }
}

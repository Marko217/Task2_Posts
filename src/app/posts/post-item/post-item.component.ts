import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../posts.model';
import { Comment } from '../comment.model';
import { PostService } from '../post.service';


@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.css']
})
export class PostItemComponent implements OnInit {
  @Input() post: Post;
  @Input() index: number;
  showComment: boolean = true;
  countComment: number;
  indexPost: number;

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.countComment = this.post.commentPost.length;
  }

  AllComment(){
    if(this.showComment == false){
      this.showComment = true;
    }
    else{
      this.showComment = false;
    }
  }
  updatePosts(newPost: Post, commentText: string){
    const newComment = new Comment(commentText, new Date());
    this.postService.updatePosts(newPost, newComment);
    this.AllComment();
    this.ngOnInit();
  }
}

import { Comment } from './comment.model';

export class Post{
    public textPost: string;
    public datePost: Date;
    public commentPost: Comment[];

    constructor(textPost: string, datePost: Date, commentPost: Comment[]){
        this.textPost = textPost;
        this.datePost = datePost;
        this.commentPost = commentPost;
    }
}
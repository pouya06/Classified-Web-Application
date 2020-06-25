import { Component, OnInit } from '@angular/core';

import { Post } from '../entity/Post';
import { PostService } from '../services/post.service'

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: Post[];

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.getAllPosts();
  }

  getAllPosts(): void {
    this.postService.getAllPosts()
      .subscribe(data => {
        this.posts = data
        console.log("inside posts", this.posts[0]);
      });
  }

}

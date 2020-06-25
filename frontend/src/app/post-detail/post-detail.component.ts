import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PostService } from '../services/post.service';

import { Post } from '../entity/Post';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {
  @Input() post: Post;

  constructor(
    private postservice: PostService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getPostById();
  }

  getPostById(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.postservice.getPostById(id)
      .subscribe(data => {
        this.post = data;
        console.log("inside detail", this.post);
      });
  }
}

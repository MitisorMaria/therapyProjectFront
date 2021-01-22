import { Component, OnInit } from '@angular/core';
import { ThreadService } from '../thread.service';
import { CommentService } from '../comment.service';


export interface BlogThread {
  title: String,
  dateTime: Date,
  text: String 
}

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})

export class BlogComponent implements OnInit {

  
  constructor(private threadService : ThreadService, private commentService: CommentService) { }

  blogThreads: any;

  ngOnInit(): void {
    this.threadService.getAllThreads().subscribe(
      val => {
        this.blogThreads = val;
      },
      response => {
        alert("Error!");
      },
      () => {
      }
 );
  }

  onClickPrevious(): void {

  }


  getBlogThreads() {
    return this.blogThreads;
  }

  onClickNext(): void {

  }

}

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
  blogThreadsShown: any;
  pageNo = 0;
  totalPages = 0;

  ngOnInit(): void {
    this.threadService.getAllThreads().subscribe(
      val => {
        this.blogThreads = val;
        this.blogThreadsShown = this.blogThreads.slice(this.pageNo, 4);
        this.totalPages = Math.floor(this.blogThreads.length/4) + 1;
      },
      response => {
        alert("Error!");
      },
      () => {
      }
 );
  }

  onClickPrevious(): void {
    if (this.pageNo >= 1) {
      this.pageNo--;
      this.blogThreadsShown = this.blogThreads.slice(this.pageNo * 4, this.pageNo * 4 + 4);
    }
  }


  getBlogThreads() {
    return this.blogThreads;
  }

  onClickNext(): void {
    if (this.pageNo * 4 + 4 <= this.blogThreads.length){
      this.pageNo++;
      this.blogThreadsShown = this.blogThreads.slice(this.pageNo * 4, this.pageNo * 4 + 4);
    }
    
  }

}

import { Component, OnInit } from '@angular/core';
import { BlogComponent, BlogThread } from '../blog/blog.component';
import { ActivatedRoute } from '@angular/router';
import { ThreadService } from '../thread.service';
import { CommentService } from '../comment.service';

@Component({
  selector: 'app-one-thread',
  templateUrl: './one-thread.component.html',
  styleUrls: ['./one-thread.component.css']
})
export class OneThreadComponent implements OnInit {
  constructor(private route: ActivatedRoute, private threadService : ThreadService, private commentService : CommentService) { }

  blogThread : any;
  allThreads: any;
  commentsForThread : any;
  public commentSuccessfullyAdded : any;

  getComments () {
    this.commentService.getAllComments(this.blogThread.id).subscribe(
      valComm => {
        this.commentsForThread = valComm;
      },
      response => {
        alert("Error from comments!");
      },
      () => {
      }
    ); 
  }

  ngOnInit(): void {
    // First get the thread title from the current route.
  const routeParams = this.route.snapshot.paramMap;
  const blogThreadTitleFromRoute = String(routeParams.get('title'));

  //Find all the threads and display the one selected
  let end = this.threadService.getAllThreads().subscribe(
    val => {
      this.allThreads = val;
      this.blogThread = this.allThreads.find((thread: { title: string; }) => thread.title === blogThreadTitleFromRoute);
      this.getComments();
    },
    response => {
      alert("Error from threads!");
    },
    () => {
    }
);

  }


  getPlaceholder() {
    if (localStorage.getItem("name") != null) {
      return localStorage.getItem("name");
    } else return "Your name...";
  }


  convertUTCDateToLocalDate(date : Date) {
    var newDate = new Date(date.getTime()+date.getTimezoneOffset()*60*1000);

    var offset = date.getTimezoneOffset() / 60;
    var hours = date.getHours();

    newDate.setHours(hours - offset);

    return newDate;   
}

  addButtonClicked(data : any){    
    let commentDate = this.convertUTCDateToLocalDate(new Date());
    let name;
    if ((data.name == null || !(data.name.length > 0)) && localStorage.getItem("name") !=null) {
      name = localStorage.getItem("name");
    } else if ((data.name == null || !(data.name.length > 0)) && localStorage.getItem("name") == null){
      name = "anonymous";
    } else if (data.name != null) {
      name = data.name;
    }

    let comment = {
      "dateTime" : commentDate,
      "name" : name,
      "text" : data.comment,
      "threadId" : this.blogThread.id
    };
    this.commentService.addAComment(comment).subscribe(
      valComm => {
        this.commentSuccessfullyAdded = true;
      },
      response => {
        this.commentSuccessfullyAdded = false;
      },
      () => {
      }
    );

    if(data.remember) {
      localStorage.setItem("name", data.name);
    }
  }


  closeAlert() {
    this.commentSuccessfullyAdded = undefined;
    this.getComments();
   }
}

import { Component, OnInit } from '@angular/core';
import { BlogComponent, BlogThread } from '../blog/blog.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-one-thread',
  templateUrl: './one-thread.component.html',
  styleUrls: ['./one-thread.component.css']
})
export class OneThreadComponent implements OnInit {
  constructor(private route: ActivatedRoute, private blogComponent : BlogComponent) { }

  private blogThread : any;

  ngOnInit(): void {
    // First get the thread title from the current route.
  const routeParams = this.route.snapshot.paramMap;
  const blogThreadTitleFromRoute = String(routeParams.get('title'));

  // Find the thread that corresponds with the title provided in route.
  this.blogThread = this.blogComponent.getBlogThreads().find((thread: { title: string; }) => thread.title === blogThreadTitleFromRoute);
  }

}

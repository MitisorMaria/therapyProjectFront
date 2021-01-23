import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http : HttpClient) { }

  getAllComments(threadId : number) {
    let apiurl = 'http://localhost:8080/comment/?threadId=' + threadId;
    return this.http.get(apiurl);
  }

  addAComment(comment : any) {
    let apiurl = 'http://localhost:8080/comment/';
    return this.http.post(apiurl, comment);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ThreadService {

  constructor(private http : HttpClient) { }

  getAllThreads() {
    let apiurl = 'http://localhost:8080/thread'
    return this.http.get(apiurl);
  }
}

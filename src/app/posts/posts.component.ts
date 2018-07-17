import { Component, OnInit } from '@angular/core';
import { Http } from '../../../node_modules/@angular/http';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts = [];

  constructor(http: Http) {
    http.get('http://jsonplaceholder.typicode.com/posts').subscribe(response => {
      this.posts = response.json();
    });
  }

  ngOnInit() {
  }

}

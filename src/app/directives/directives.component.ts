import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {
  courses = ['course 1', 'course 2'];

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {
  courses = [
    { id: 1, name: 'course 1 ' },
    { id: 2, name: 'course 2 ' },
    { id: 3, name: 'course 3 ' }
  ];

  viewMode = 'map';

  onAdd() {
    this.courses.push({ id: 4, name: 'course 4' });
  }

  onRemove(course) {
    const index = this.courses.indexOf(course);
    this.courses.splice(index, 1);
  }

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {
  courses = [
    { id: 1, name: 'couse 1 ' },
    { id: 2, name: 'couse 2 ' },
    { id: 3, name: 'couse 3 ' }
  ];

  viewMode = 'map';

  constructor() { }

  ngOnInit() {
  }

}

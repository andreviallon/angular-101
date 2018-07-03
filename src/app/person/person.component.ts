import { Component, OnInit } from '@angular/core';
import { PersonService } from '../person.service';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  // template: `
  //   {{name}}
  // `,
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  // name = "Andre";
  // middleName = "Dal";
  // lastName = "Viallon";

  persons;
  gf;

  constructor(service: PersonService) {
    this.persons = service.getPersons().personOne;
    this.gf = service.getPersons().personTwo;
  }

  ngOnInit() {
  }

}

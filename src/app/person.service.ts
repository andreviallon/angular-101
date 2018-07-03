import { Injectable } from '@angular/core';

@Injectable()
export class PersonService {

  getPersons() {
    const Persons = {
      personOne: ['Andre', 'Viallon'],
      personTwo: ['Sabrina', 'Gaitan']
    };

    console.log(Persons);

    return Persons;
  }

}

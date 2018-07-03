import { Injectable } from '@angular/core';

@Injectable()
export class CarsService {

  // getCars() {
  //   const Cars = {
  //     carOne: ['Ford', 'Mustang'],
  //     carTwo: ['Audi', 'R8']
  //   };
  // }

  getCars() {
    return ['Ford Mustang', 'Audi R8'];
  }

}

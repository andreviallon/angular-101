import { Injectable } from '@angular/core';

@Injectable()
export class FilmService {

  getFilms() {
    return ['Pulp Fiction', 'Back To The Future'];
  }

}

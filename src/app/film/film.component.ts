import { Component, OnInit } from '@angular/core';
import { FilmService } from '../film.service';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css']
})
export class FilmComponent implements OnInit {
  films;

  constructor(service: FilmService) {
    this.films = service.getFilms();
  }

  ngOnInit() {
  }

}

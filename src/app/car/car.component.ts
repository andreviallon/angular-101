import { Component, OnInit } from '@angular/core';
import { CarsService } from '../cars.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  cars;

  constructor(service: CarsService) {
    this.cars = service.getCars();
  }
  ngOnInit() {
  }

}

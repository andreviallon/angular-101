import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // 2 ways of doing 1 way property binding
  title = 'Angular app';
  title2 = 'I\'m an app';
}

import { Component, OnInit } from '@angular/core';
import { AuthorsService } from '../authors.service';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {
  authors;
  // Class binding
  isActive = true;

  onSave($event) {
    // stops event bubbling (onDivClick will not be called anymore)
    $event.stopPropagation();
    console.log('Button was clicked', $event);
  }

  onDivClick() {
    console.log('div was clicked');
  }

  onKeyUp() {
    console.log('ENTER was pressed');
  }

  constructor(service: AuthorsService) {
    this.authors = service.getAuthors();
  }

  ngOnInit() {
  }

}

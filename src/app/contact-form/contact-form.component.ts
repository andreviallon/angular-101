import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
  submit(f) {
    console.log(f);
    console.log(f.value.contact.firstName);
    console.log(f.value.comment);
  }
  constructor() { }

  ngOnInit() {
  }

}

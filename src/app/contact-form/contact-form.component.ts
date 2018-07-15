import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
  contactMethods = [
    { id: 1, name: 'Email' },
    { id: 2, name: 'Phone' }
  ];

  submit(f) {
    console.log(f);
    console.log(f.value.contact.firstName);
    console.log(f.value.comment);
  }
  constructor() { }

  ngOnInit() {
  }

}

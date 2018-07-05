import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit {
  @Input() tweet: string;
  @Input() likesCount: number;
  @Input() isActive: boolean;

  onDivClick() {
    console.log('div was clicked');
  }

  onClick($event) {
    this.likesCount += (this.isActive) ? -1 : 1;
    this.isActive = !this.isActive;
    $event.stopPropagation();
  }

  constructor() { }

  ngOnInit() {
  }

}

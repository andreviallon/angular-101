import { Component, OnInit } from '@angular/core';
import { GithubFollowersService } from '../github-followers.service';
import { ActivatedRoute } from '../../../node_modules/@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/combineLatest';


@Component({
  // tslint:disable-next-line:component-selector
  selector: 'github-followers',
  templateUrl: './github-followers.component.html',
  styleUrls: ['./github-followers.component.css']
})
export class GithubFollowersComponent implements OnInit {
  followers: any[];

  constructor(
    private route: ActivatedRoute,
    private service: GithubFollowersService) { }

  ngOnInit() {
    Observable.combineLatest([
      this.route.paramMap,
      this.route.queryParamMap
    ]).subscribe(combined => {
      const id = combined[0].get('id');
      const page = combined[1].get('page');

      this.service.getAll()
        .subscribe(followers => this.followers = followers);
    });
  }
}

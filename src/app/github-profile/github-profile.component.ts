import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-github-profile',
  templateUrl: './github-profile.component.html',
  styleUrls: ['./github-profile.component.css']
})
export class GithubProfileComponent implements OnInit {

  constructor(private router: ActivatedRoute, private route: Router) { }

  ngOnInit() {
    this.router.paramMap
      .subscribe(params => {
        const id = + params.get('id');
        console.log(id);
      });
  }

  onSubmit() {
    this.route.navigate(['/followers'], {
      queryParams: { page: 1, order: 'newest' }
    });
  }

}

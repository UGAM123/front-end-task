import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  id: any;
  userData: any;
  postsData: any;


  constructor(private service: DataService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.service.getUserDetails(this.id).subscribe(res => {
      this.userData = res;
    })
    this.service.getPostsUsingUserId(this.id).subscribe(res => {
      this.postsData = res;
    })
  }
}

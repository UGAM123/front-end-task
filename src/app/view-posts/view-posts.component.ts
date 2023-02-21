import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-view-posts',
  templateUrl: './view-posts.component.html',
  styleUrls: ['./view-posts.component.css']
})
export class ViewPostsComponent implements OnInit {
  data:any;

  constructor(private service:DataService) { }

  ngOnInit(): void {
    this.service.getPosts().subscribe(res =>{
      this.data =res;
    })

  }

}

import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ShortDetailsComponent } from '../short-details/short-details.component';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  @Input() data:any;
  userSelected:any
  constructor(public dialog: MatDialog) { }

  openDialog(userId:any) {
    this.dialog.open(ShortDetailsComponent,{
      data : { id : userId},
    })
  }

  ngOnInit(): void {
  }

}

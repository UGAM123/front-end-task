import { Component, OnInit,Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-short-details',
  templateUrl: './short-details.component.html',
  styleUrls: ['./short-details.component.css']
})
export class ShortDetailsComponent implements OnInit {
  userData: any;

  constructor(
    private service:DataService,
    @Inject(MAT_DIALOG_DATA) public data:any
  ) { }

  ngOnInit(): void {
    this.service.getUserDetails(this.data.id).subscribe(res => {
      this.userData = res;
    })
  }

}

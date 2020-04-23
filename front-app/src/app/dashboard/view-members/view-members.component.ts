import { Component, OnInit } from '@angular/core';
import { DashboardDataService } from '../services/dashboard-data.service';

@Component({
  selector: 'app-view-members',
  templateUrl: './view-members.component.html',
  styleUrls: ['./view-members.component.scss']
})
export class ViewMembersComponent implements OnInit {

  members: any;

  constructor(private ds: DashboardDataService) {
    this.ds.getAllMembers().subscribe((data: any) => {
        this.members = data['data'];
    }, err => {
      console.log(err);
    });
  }

  ngOnInit() {

  }

  // getMembers() {
  //   return this.ds.getMembers();
  // }

  // getAllMembers() {
  //   return this.ds.getAllMembers();
  // }

}

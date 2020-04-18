import { Component, OnInit } from '@angular/core';
import { DashboardDataService } from '../services/dashboard-data.service';

@Component({
  selector: 'app-view-members',
  templateUrl: './view-members.component.html',
  styleUrls: ['./view-members.component.scss']
})
export class ViewMembersComponent implements OnInit {

  constructor(private ds: DashboardDataService) { }

  ngOnInit() {
  }

  getMembers() {
    return this.ds.getMembers();
  }

  // getAllMembers() {
  //   return this.ds.getAllMembers();
  // }

}

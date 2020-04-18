import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-view-members',
  templateUrl: './view-members.component.html',
  styleUrls: ['./view-members.component.scss']
})
export class ViewMembersComponent implements OnInit {

  constructor(private ds: DataService) { }

  ngOnInit() {
  }

  getMembers() {
    return this.ds.getMembers();
  }

}

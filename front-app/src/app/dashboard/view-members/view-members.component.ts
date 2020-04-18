import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services/services.service';

@Component({
  selector: 'app-view-members',
  templateUrl: './view-members.component.html',
  styleUrls: ['./view-members.component.scss']
})
export class ViewMembersComponent implements OnInit {

  constructor(private ds: ServicesService) { }

  ngOnInit() {
  }

  getMembers() {
    return this.ds.getMembers();
  }

}

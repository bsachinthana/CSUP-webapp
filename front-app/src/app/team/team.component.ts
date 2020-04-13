import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {

  baseUrl = '../../assets/team2019/';

  selectedBoard;

  constructor(private ds: DataService) {
    this.selectedBoard = this.ds.getBoard('2020');
  }

  ngOnInit() {

  }

  getBoard(year: string) {
    return this.ds.getBoard(year);
  }

  getAllYears() {
    return this.ds.getAllYears();
  }

  getFirstTwoYears(){
    return this.ds.getFirstTwoYears();
  }

  setBoardYear(year: string) {
    this.selectedBoard  = this.getBoard(year);
  }

}

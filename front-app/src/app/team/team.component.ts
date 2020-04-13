import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {

  baseUrl = '../../assets/team2019/';

  yearForm: FormGroup;
  selectedBoard;
  allYears: string[];
  latestBoard;

  constructor(private fb: FormBuilder, private ds: DataService) {
    this.yearForm = this.fb.group({
      'selectedYear': ['2020'],
    });
    this.selectedBoard = this.ds.getBoard('2020');

    this.yearForm.get('selectedYear').valueChanges.subscribe(value => {
      switch (value) {
        case '2020' : this.selectedBoard =  this.getBoard('2020'); break;
        case '2019' : this.selectedBoard =  this.getBoard('2019'); break;
        case '2018' : this.selectedBoard =  this.getBoard('2018'); break;
        case '2017' : this.selectedBoard =  this.getBoard('2017'); break;
        case 'all' : this.allYears =  this.ds.getAllYears();
      }
    });

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

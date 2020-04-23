import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder, FormArray, AbstractControl, FormControl } from '@angular/forms';
import { DashboardDataService } from '../services/dashboard-data.service';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-add-team',
  templateUrl: './add-team.component.html',
  styleUrls: ['./add-team.component.scss']
})
export class AddTeamComponent implements OnInit {

  memberForm: FormGroup;
  teamDetails: FormGroup;
  positionList: FormArray;

  constructor(private fb: FormBuilder, private ds: DashboardDataService) {
    this.memberForm = this.newMember();
    this.teamDetails = this.fb.group({
      members: this.fb.array([this.newMember()]),
      year: ['', Validators.required],
    });
   }

  ngOnInit() {
  }

  addTeam() {
    this.ds.addTeam(this.teamDetails.value).subscribe(team => {
      console.log(team);
    }, err => {
      console.log(err);
    });
  }

  newMember(): FormGroup {
    const g: FormGroup = this.fb.group({
      member: ['', Validators.required],
      position: ['', Validators.required],
    });
    g.get('member').valueChanges.pipe(debounceTime(500),distinctUntilChanged(), switchMap(query =>  this.ds.search(query)))
    .subscribe( (result: any) => {
      console.log(result);
    });
    return g;
  }

  get teamArr() {
    return this.teamDetails.get('members') as FormArray;
  }
  add() {
   this.teamArr.push(this.memberForm as AbstractControl);
   this.memberForm = this.newMember();
  }

  remove() {
    this.positionList.removeAt(this.positionList.length - 1);
  }

}

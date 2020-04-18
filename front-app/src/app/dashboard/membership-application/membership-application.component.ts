import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { DashboardDataService } from '../services/dashboard-data.service';

@Component({
  selector: 'app-membership-application',
  templateUrl: './membership-application.component.html',
  styleUrls: ['./membership-application.component.scss']
})
export class MembershipApplicationComponent implements OnInit {
  loginGroup: FormGroup;
  submitted = false;

  constructor(private ds: DashboardDataService, private fb: FormBuilder) {
    this.loginGroup = this.fb.group({
      name: ['', Validators.required],
      faculty: ['', Validators.required],
      regNo: ['', Validators.required],
      email: ['', Validators.required],
      // password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  ngOnInit() {
  }

  getFaculties() {
    return this.ds.getFaculties();
  }

  submit() {
    // this.submitted = true;
    // if (this.loginGroup.invalid) {
    //   return;
    // }
    this.ds.addMember(this.loginGroup.value).subscribe(member => {
      console.log(member);
    }, err => {
      console.log(err);
    });
  }

  // get f() {
  //   return this.loginGroup.controls;
  // }

}

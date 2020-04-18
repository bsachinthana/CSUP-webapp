import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-membership-application',
  templateUrl: './membership-application.component.html',
  styleUrls: ['./membership-application.component.scss']
})
export class MembershipApplicationComponent implements OnInit {
  loginGroup: FormGroup;

  constructor(private ds: DataService, private fb: FormBuilder) {
    this.loginGroup = this.fb.group({
      name: ['', Validators.required],
      facultty: ['', Validators.required],
      regNo: ['', Validators.required],
      email: ['', Validators.compose([
        Validators.required,
        Validators.pattern('[^ @]*@[^ @]*')
      ])],
      password: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  getFaculties() {
    return this.ds.getFaculties();
  }

  submit() {
    this.ds.addMember(this.loginGroup.value).subscribe(member => {
      console.log(member);
    }, err => {
      console.log(err);
    });
  }
}

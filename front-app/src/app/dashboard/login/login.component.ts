import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services/services.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginGroup: FormGroup;

  constructor(private ds: ServicesService, private fb: FormBuilder) {
    this.loginGroup = this.fb.group({
      name: ['', Validators.required],
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
    alert('done');
  }
}

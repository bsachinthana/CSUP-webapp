import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services/services.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private ds: ServicesService) {
  }

  ngOnInit() {
  }

  getFaculties() {
    return this.ds.getFaculties();
  }
}

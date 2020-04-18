import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { ViewMembersComponent } from './view-members/view-members.component';
import { HttpClientModule } from '@angular/common/http';
import { MembershipApplicationComponent } from './membership-application/membership-application.component';
import { DashboardDataService } from './services/dashboard-data.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


@NgModule({
  declarations: [DashboardComponent, SignInComponent, ViewMembersComponent, MembershipApplicationComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    DashboardRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [
    DashboardDataService,
  ],
})
export class DashboardModule { }

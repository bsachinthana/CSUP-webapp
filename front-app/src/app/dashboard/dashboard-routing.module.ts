import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { ViewMembersComponent } from './view-members/view-members.component';
import { MembershipApplicationComponent } from './membership-application/membership-application.component';

const routes: Routes = [
  { path: '',
    component: DashboardComponent,
    children: [
      { path: 'member-application', component: MembershipApplicationComponent },
      { path: 'view-members', component: ViewMembersComponent }
    ]
  },
  { path: 'sign-in', component: SignInComponent },
  { path: 'member-application', component: MembershipApplicationComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
